import Mock from 'mockjs';
import { v4 as uuid } from 'uuid';

export const defaultCustomerUser = Mock.mock({
  'list|100': [{
    id: uuid(),
    userName: '@string("lower", 6, 12)',
    password: 'admin',
    confirmPassword: 'admin',
    name: '@cname',
    idNumber: /^3[3456789]\d{18}$/,
    phoneNumber: /^1[3456789]\d{9}$/,
    emailAddress: '@email',
    registrationDate: '@date',
    accountType: '储蓄账户',
    'bankName|1': ['中国银行', '建设银行', '中国人民银行'],
    'status': '归档',
  }]
});

