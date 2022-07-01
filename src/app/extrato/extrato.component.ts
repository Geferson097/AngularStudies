import { Transfer } from './../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transfers: any= [];

  constructor(private service: TransferService){ }

  ngOnInit(): void {
    this.service.allTransfers().subscribe((transfer: Transfer[]) => {
      console.table(transfer);
      this.transfers = transfer;
    });

  }
}
