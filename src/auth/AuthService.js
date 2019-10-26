import config from '../config';
export default class AuthService {
  constructor(domain) {
    this.domain = domain || config.url;
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    // this.getProfile = this.getProfile.bind(this);
  }

  async login(email, password) {
    try{
      const res = await this.fetch(`${this.domain}/user/login`, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        })
      });
      console.log('myres', res);
      if(res.token) this.setToken(res.token);
      return res;
    } catch(e) {
      console.log(e);
    }
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken() // GEtting token from localstorage
    return !!token; // && !this.isTokenExpired(token) // handwaiving here
  }

  // isTokenExpired(token) {
  //   try {
  //     const decoded = decode(token);
  //     if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
  //       return true;
  //     }
  //     else
  //       return false;
  //   }
  //   catch (err) {
  //     return false;
  //   }
  // }

  setToken(token) {
    localStorage.setItem('id_token', token)
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
  }

  // getProfile() {
  //   // Using jwt-decode npm package to decode the token
  //   return decode(this.getToken());
  // }


  async fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    if (this.loggedIn()) {
      headers['Authorization'] = this.getToken()
    }
    try{
      let res = await fetch(url, {
        headers,
        ...options
      });
      console.log('resfrom server',res.status);
      return res.json();
    } catch(e) {
      console.log(e);
    }
    // return fetch(url, {
    //   headers,
    //   ...options
    // })
    //   .then(this._checkStatus)
    //   .then(response => response.json())
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response;
      throw error;
    }
  }
}