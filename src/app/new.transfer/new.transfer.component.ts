import { Component, EventEmitter, Output } from '@angular/core';



@Component({
    selector: 'app-new-transfer',
    templateUrl:'new.transfer.component.html',
    styleUrls: ['./new.transfer.component.scss']
})
export class NewTransferComponent{

  @Output() onTransfer = new EventEmitter<any>();

  value: number;
  destiny: number;

  newTransfer(){
    console.log('Solicitada Nova Transferencia');
    const valueEmited = {value: this.value, destiny: this.destiny};
    this.onTransfer.emit(valueEmited);
    this.clearField();
  }

  clearField(){
    this.value = null;
    this.destiny = null;
  }

}
