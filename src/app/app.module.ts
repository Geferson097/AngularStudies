import {registerLocaleData} from '@angular/common';
import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ExtractComponent} from './extract/extract.component';
import {NewTransferComponent} from './new.transfer/new.transfer.component';
import localePT from '@angular/common/locales/pt';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {InitialComponent} from './initial/initial.component';
import {RemoveComponent} from './remove/remove.component';


registerLocaleData(localePT, 'pt');

@NgModule({
  declarations: [
    InitialComponent,
    AppComponent,
    NewTransferComponent,
    ExtractComponent,
    RemoveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL',}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
