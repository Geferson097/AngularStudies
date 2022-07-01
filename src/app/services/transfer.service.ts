import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from '../models/transfer.model';


@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transferList: any[];
  private url = 'http://localhost:3000/transfers';

constructor(private httpClient: HttpClient ) {
  this.transferList= [];
 }

 get transfers(){
  return this.transferList;
 }

 allTransfers(): Observable <Transfer[]>{
  return this.httpClient.get<Transfer[]>(this.url);
 }

 transfer(transfer: any){
  this.improveData(transfer);
  this.transferList.push(transfer);
  }

  private improveData(transfer: any){

    transfer.date = new Date();
  }

}
