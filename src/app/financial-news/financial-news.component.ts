import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financial-news',
  templateUrl: './financial-news.component.html',
  styleUrls: ['./financial-news.component.scss'],
})
export class FinancialNewsComponent implements OnInit {
  productList = [
    {
      name: '龙鑫固收类最低持有120天（代销建信理财）',
      amount: 1,
      minDays: 120,
      issueTime: '2024/1/30',
      yieldDes: '成立以来年化收益率',
      yield: '2.97%',
    },
    {
      name: '私行精选福星封闭式2024-012（代销建信理财)',
      amount: '30万',
      minDays: 120,
      issueTime: '2024/1/30',
      yieldDes: '业绩比较基准',
      yield: '3.05%-3.70%',
    },
    {
      name: '私行精选福星封闭式2024-012（代销建信理财)',
      amount: '30万',
      minDays: 600,
      issueTime: '2024/2/30',
      yieldDes: '业绩比较基准',
      yield: '2.80%-3.00%',
    },
    {
      name: '私行精选福星封闭式2024-012（代销建信理财)',
      amount: '30万',
      minDays: 600,
      issueTime: '2024/2/30',
      yieldDes: '业绩比较基准',
      yield: '2.80%-3.00%',
    },
  ];

  // 理财攻略
  financialStrategy = ['./../../assets/one.jpg', './../../assets/two.jpg'];
  // 新产品发布公共
  olderProducts = [
    {
      title: '建信理财睿鑫固收类封闭式产品2024年第32期风险揭示书和说明书',
      createTime: '2024-01-30',
    },
    {
      title: '建信理财睿鑫固收类封闭式产品2024年第76期风险揭示书和说明书',
      createTime: '2024-01-30',
    },
    {
      title: '建信理财睿鑫固收类封闭式产品2024年第20期风险揭示书和说明书',
      createTime: '2024-01-30',
    },
    {
      title: '建信理财睿鑫固收类封闭式产品2024年第66期风险揭示书和说明书',
      createTime: '2024-01-30',
    },
    {
      title: '兴银理财稳添利日盈增利31号日开固收类理财产品风险揭示书和产品说明书',
      createTime: '2024-01-30',
    },
  ];
  newProducts = [
    {
      title: '关于部分理财产品管理人变更的公告',
      createTime: '2021-07-26',
    },
    {
      title: '关于部分理财产品管理人变更的公告',
      createTime: '2020-11-17',
    },
    {
      title: '关于调整建信理财部分理财产品销售费率等产品要素的公告',
      createTime: '2020-06-19',
    },
    {
      title: '关于根据监管政策变化部分理财产品管理人变更的公告',
      createTime: '2019-11-14',
    },
    {
      title: '建信理财“安鑫”（最低持有720天）按日开放固定收益类净值型人民币理财产品净值公告JXQYAX720D2018201',
      createTime: '2024-01-30',
    },
  ];

  constructor(private router: Router) {}
  ngOnInit(): void {}

  go() {
    this.router.navigate(['/news/detail']);
  }
}
