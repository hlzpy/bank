import { Component, inject } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-buy-yield-modal',
  templateUrl: './buy-yield-modal.component.html',
  styleUrls: ['./buy-yield-modal.component.scss'],
})
export class BuyYieldModalComponent {
  readonly nzModalData: { params: any } = inject(NZ_MODAL_DATA);
  value: number;
}
