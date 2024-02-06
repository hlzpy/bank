import { v4 as uuid } from 'uuid';

export const allLoanProducts = [
  { id: uuid(), name: '助学贷款', rate: 0.03, minAmount: 5000, maxAmount: 50000, minPeriod: 6, maxPeriod: 60  },
  { id: uuid(), name: '购房贷款', rate: 0.05, minAmount: 5000, maxAmount: 500000, minPeriod: 6, maxPeriod: 360  },
  { id: uuid(), name: '公积金贷款', rate: 0.03, minAmount: 5000, maxAmount: 50000, minPeriod: 6, maxPeriod: 360  },
  { id: uuid(), name: '装修贷款', rate: 0.03, minAmount: 5000, maxAmount: 200000, minPeriod: 6, maxPeriod: 60  },
  { id: uuid(), name: '购车贷款', rate: 0.03, minAmount: 5000, maxAmount: 10000, minPeriod: 6, maxPeriod: 36  },
]
