import React, { Component } from 'react';

export default class Datepicker extends Component {
    componentDidMount() {
        const picker = window.jQuery(`[data-toggle="datepicker${this.props.id}"]`);
        picker.datepicker({ format: 'dd/MM/yyyy' });
        picker.on('pick.datepicker', this.props.dateChange);
    }
    render() {
        return (
           <>
                <input type="text" pattern="\d{1,2}/\d{1,2}/\d{4}" className="form-control docs-date" placeholder={this.props.placeholder} name={this.props.name} data-toggle={'datepicker'+this.props.id} required />
                <div data-toggle={'datepicker'+this.props.id}></div>
           </>
        )
    }
}
