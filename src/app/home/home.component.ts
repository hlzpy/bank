import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  isCollapsed = false;

  navList = [
    {
      title: "客户信息管理",
      icon: "dashboard",
      routerLink: null,
      children: [
        {
          title: "客户信息列表",
          routerLink: "/customer-info",
        },
      ],
    },
    {
      title: "贷款管理",
      icon: "form",
      routerLink: null,
      children: [
        {
          title: "贷款列表",
          routerLink: "/loan/list",
        },
      ],
    },
    {
      title: "理财资讯",
      icon: "cloud",
      routerLink: "news",
    },
  ];
}