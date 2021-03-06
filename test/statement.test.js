import {statement} from '../src/statement.js';
import {assert} from 'chai';

describe('test', () => {

  it('statement', () => {
    const result = statement(invoices[0], plays);
    assert.equal('청구 내역(고객명: BigCo\n' +
      'Hamlet: $650.00 (55석)\n' +
      'As You Like it: $580.00 (35석)\n' +
      'Othello: $500.00 (40석)\n' +
      '총액: $1,730.00\n' +
      '적립 포인트: 47점', result);
  });


})

const plays = {
  hamlet: {
    name: 'Hamlet',
    type: 'tragedy'
  },
  'as-like': {
    name: 'As You Like it',
    type: 'comedy'
  },
  othello: {
    name: 'Othello',
    type: 'tragedy'
  }
}

const invoices = [
  {
    customer: 'BigCo',
    performances: [
      {
        playID: 'hamlet',
        audience: 55
      },
      {
        playID: 'as-like',
        audience: 35
      },
      {
        playID: 'othello',
        audience: 40
      }
    ]
  }
]

