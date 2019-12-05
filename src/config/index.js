let url = 'https://qfg5xea7df.execute-api.ap-south-1.amazonaws.com/dev';
let services = [
  {
    testID: '2889951',
    testName: 'SeroMark-1 test',
    testAmount: 4000,
    description: 'Basic Seromark 1 test',
    points: [
      'SeroMark-1 test only'
    ]
  },
  {
    testID: '2889955',
    testName: 'SeroMark-1 BUNDLED test',
    testAmount: 4000,
    description: 'Bundle Test',
    points: [
      'SeroMark-1 test',
      'Total PSA (tPSA)',
      'Free PSA (fPSA)',
      'Initial discounted offer'
    ]
  },
  {
    testID: '2889952',
    testName: 'Total PSA (tPSA)',
    testAmount: 750,
    description: 'tPSA test',
    points: [
      'Total PSA (tPSA) only'
    ]
  },
  {
    testID: '2889953',
    testName: 'Free PSA (fPSA)',
    testAmount: 850,
    description: 'fPSA test',
    points: [
      'Free PSA (fPSA) only'
    ]
  }
]

export default { url, services };