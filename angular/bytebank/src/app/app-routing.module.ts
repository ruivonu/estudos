import { NovaTransfernciaComponent } from './nova-tranferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full' },
  {path: 'extrato', component: ExtratoComponent },
  {path: 'nova-transferencia', component: NovaTransfernciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
