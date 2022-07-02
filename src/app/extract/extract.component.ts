import { Transfer } from './../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class extractComponent implements OnInit {

  transfers: any= [];

  constructor(private service: TransferService){ }

  ngOnInit(): void {
    this.service.allTransfers().subscribe((transfer: Transfer[]) => {
      console.table(transfer);
      this.transfers = transfer;
    });

  }
}
