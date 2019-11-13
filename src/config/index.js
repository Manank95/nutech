let url = 'http://localhost:5000';
let services = [
  {
    testID: '2727684',
    testName: 'SeroMark-1 test',
    testAmount: 4000,
    description: 'Basic Seromark 1 test',
    points: [
      'SeroMark-1 test only'
    ]
  },
  {
    testID: '2727685',
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
    testID: '2727687',
    testName: 'Total PSA (tPSA)',
    testAmount: 750,
    description: 'tPSA test',
    points: [
      'Total PSA (tPSA) only'
    ]
  },
  {
    testID: '2727688',
    testName: 'Free PSA (fPSA)',
    testAmount: 850,
    description: 'fPSA test',
    points: [
      'Free PSA (fPSA) only'
    ]
  }
]

export default { url, services };