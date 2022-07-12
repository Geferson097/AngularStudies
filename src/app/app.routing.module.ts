import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExtractComponent} from './extract/extract.component';
import {NewTransferComponent} from './new.transfer/new.transfer.component';
import {RemoveComponent} from './remove/remove.component';
import {InitialComponent} from './initial/initial.component';

export const routes: Routes = [
  {path: '', redirectTo: 'initial', pathMatch: 'full'},
  {path: 'initial', component: InitialComponent},
  {path: 'extract', component: ExtractComponent},
  {path: 'new-transfer', component: NewTransferComponent},
  {path: 'remove', component: RemoveComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
