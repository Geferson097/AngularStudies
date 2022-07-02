import { Component, EventEmitter, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransferService} from '../services/transfer.service';
import {Transfer} from '../models/transfer.model';
import {Router} from '@angular/router';



@Component({
    selector: 'app-new-transfer',
    templateUrl: 'new.transfer.component.html',
    styleUrls: ['./new.transfer.component.scss']
})
export class NewTransferComponent{

  @Output() onTransfer = new EventEmitter<any>();

  value: number;
  destiny: number;

  constructor(private service: TransferService, private router: Router) {
  }

  // tslint:disable-next-line:typedef
  newTransfer(){
    console.log('Solicitada Nova Transferencia');
    const valueEmited: Transfer = {value: this.value, destiny: this.destiny};
    this.service.transfer(valueEmited).subscribe(
      (result) => {
        console.log(result);
        this.clearField();
        this.router.navigateByUrl('extract');
    },
      (error) => console.error(error)
    );
  }

  clearField(){
    this.value = null;
    this.destiny = null;
  }

}
