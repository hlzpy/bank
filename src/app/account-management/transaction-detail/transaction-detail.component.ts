import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as _ from 'lodash';
import dayjs from 'dayjs';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent {
  sortDirections= (a: any, b: any) => new Date(a.tradingDate).getTime() - new Date(b.tradingDate).getTime();
  searchParams = {
    searchText: null,
    dateRange: null,
    type: null,
  };
  listOfData = [
    {
      id: 1,
      tradingDate: '2024/02/03 19:10:28',
      tradingType: '网上支付-支付宝—支付宝（中国）网络技术有限公司',
      depositAmount: null,
      takeOutAmount: 1344.59,
      balance: 2879.66,
      counterPartyName: '支付宝（中国）网络技术有限公司',
      counterPartyAccount: '215500690',
      notes: '',
    },
    {
      id: 2,
      tradingDate: '2024/02/05 20:37:50',
      tradingType: '网上支付-财付通—微信转账',
      depositAmount: null,
      takeOutAmount: 500.0,
      balance: 2379.66,
      counterPartyName: '微信转账',
      counterPartyAccount: '1000050001',
      notes: '',
    },
    {
      id: 3,
      tradingDate: '2024/02/06 20:37:52',
      tradingType: '退货79066012*0601—微信转账',
      depositAmount: 500.0,
      takeOutAmount: null,
      balance: 2879.66,
      counterPartyName: '微信转账',
      counterPartyAccount: '1000050001',
      notes: '',
    },
    {
      id: 4,
      tradingDate: '2024/02/08 16:29:09',
      tradingType: '互联汇入23020800711255—湖南金财聚惠信息科技服务有限公司',
      depositAmount: 10000.0,
      takeOutAmount: null,
      balance: 12879.66,
      counterPartyName: '湖南金财聚惠信息科技服务有限公司',
      counterPartyAccount: '731908463310588',
      notes: '网上代发代扣',
    },
    {
      id: 5,
      tradingDate: '2024/02/08 16:40:15',
      tradingType: '网上支付-财付通—微信转账',
      depositAmount: null,
      takeOutAmount: 5000.0,
      balance: 7879.66,
      counterPartyName: '微信转账',
      counterPartyAccount: '1000050001',
      notes: '',
    },
    {
      id: 6,
      tradingDate: '2023/02/08 17:49:12',
      tradingType: '其他代发工资—上技术有限公司',
      depositAmount: null,
      takeOutAmount: null,
      balance: 27890.41,
      counterPartyName: '上技术有限公司',
      counterPartyAccount: '97520078801480000045',
      notes: '96300005!^上技术有限公司!^',
    },
    {
      id: 7,
      tradingDate: '2023/02/08  18:02:56',
      tradingType: '互联汇出23020800510405—刘亦菲',
      depositAmount: null,
      takeOutAmount: 4000.0,
      balance: 23890.41,
      counterPartyName: '刘亦菲',
      counterPartyAccount: '62220310010',
      notes: '',
    },
    {
      id: 10,
      tradingDate: '2023/02/11 07:21:27',
      tradingType: '网上支付-财付通—扫二维码付款',
      depositAmount: '',
      takeOutAmount: 12.0,
      balance: 23854.51,
      counterPartyName: '扫二维码付款',
      counterPartyAccount: '1000107101',
      notes: '',
    },
    {
      id: 11,
      tradingDate: '2023/02/14 11:20:32',
      tradingType: '网上支付-财付通—微信红包',
      depositAmount: '',
      takeOutAmount: 520.0,
      balance: 23334.51,
      counterPartyName: '微信红包',
      counterPartyAccount: '1000039801',
      notes: '',
    },
    {
      id: 1,
      tradingDate: '2023/02/03 19:10:28',
      tradingType: '网上支付-支付宝—支付宝（中国）网络技术有限公司',
      depositAmount: null,
      takeOutAmount: 1344.59,
      balance: 2879.66,
      counterPartyName: '支付宝（中国）网络技术有限公司',
      counterPartyAccount: '215500690',
      notes: '',
    },
    {
      id: 2,
      tradingDate: '2023/02/05 20:37:50',
      tradingType: '网上支付-财付通—微信转账',
      depositAmount: null,
      takeOutAmount: 500.0,
      balance: 2379.66,
      counterPartyName: '微信转账',
      counterPartyAccount: '1000050001',
      notes: '',
    },
    {
      id: 3,
      tradingDate: '2023/02/06 20:37:52',
      tradingType: '退货79066012*0601—微信转账',
      depositAmount: 500.0,
      takeOutAmount: null,
      balance: 2879.66,
      counterPartyName: '微信转账',
      counterPartyAccount: '1000050001',
      notes: '',
    },
    {
      id: 4,
      tradingDate: '2023/02/08 16:29:09',
      tradingType: '互联汇入23020800711255—湖南金财聚惠信息科技服务有限公司',
      depositAmount: 10000.0,
      takeOutAmount: null,
      balance: 12879.66,
      counterPartyName: '湖南金财聚惠信息科技服务有限公司',
      counterPartyAccount: '731908463310588',
      notes: '网上代发代扣',
    },
    {
      id: 5,
      tradingDate: '2023/02/08 16:40:15',
      tradingType: '网上支付-财付通—微信转账',
      depositAmount: null,
      takeOutAmount: 5000.0,
      balance: 7879.66,
      counterPartyName: '微信转账',
      counterPartyAccount: '1000050001',
      notes: '',
    },
    {
      id: 6,
      tradingDate: '2023/02/08 17:49:12',
      tradingType: '其他代发工资—上技术有限公司',
      depositAmount: null,
      takeOutAmount: null,
      balance: 27890.41,
      counterPartyName: '上技术有限公司',
      counterPartyAccount: '97520078801480000045',
      notes: '96300005!^上技术有限公司!^',
    },
    {
      id: 7,
      tradingDate: '2023/02/08  18:02:56',
      tradingType: '互联汇出23020800510405—刘亦菲',
      depositAmount: null,
      takeOutAmount: 4000.0,
      balance: 23890.41,
      counterPartyName: '刘亦菲',
      counterPartyAccount: '62220310010',
      notes: '',
    },
    {
      id: 10,
      tradingDate: '2023/02/11 07:21:27',
      tradingType: '网上支付-财付通—扫二维码付款',
      depositAmount: '',
      takeOutAmount: 12.0,
      balance: 23854.51,
      counterPartyName: '扫二维码付款',
      counterPartyAccount: '1000107101',
      notes: '',
    },
    {
      id: 11,
      tradingDate: '2023/02/14 11:20:32',
      tradingType: '网上支付-财付通—微信红包',
      depositAmount: '',
      takeOutAmount: 520.0,
      balance: 23334.51,
      counterPartyName: '微信红包',
      counterPartyAccount: '1000039801',
      notes: '',
    },
  ];

  cacheData: any[] = [];

  constructor(private modalSvc: NzModalService, private msgSvc: NzMessageService) {}
  ngOnInit(): void {
    this.cacheData = _.cloneDeep(this.listOfData);
  }

  search() {
    const { searchText, dateRange, type } = this.searchParams;
    if (searchText || dateRange || type) {
      this.listOfData = this.cacheData.filter((item: any) => {
        const isSearchText = searchText
          ? Object.values(item).some(v => typeof v === 'string' && v.includes(searchText))
          : true;
        let isNotDate = false;
        let isType = true;
        if (dateRange && dateRange.length > 0) {
          var startDate = Date.parse(dateRange[0]);
          var endDate = Date.parse(dateRange[1]);
          var targetDate = Date.parse(item.tradingDate);
          isNotDate = !(targetDate >= startDate && targetDate <= endDate);
        }
        if (type) {
          if (['支付宝', '微信'].includes(type)) {
            isType = item.counterPartyName.includes(type);
          } else {
            isType = !item.counterPartyName.includes('支付宝') && !item.counterPartyName.includes('微信');
          }
        }
        return isSearchText && !isNotDate && isType;
      });
      return;
    }
    this.listOfData = _.cloneDeep(this.cacheData);
  }
}
