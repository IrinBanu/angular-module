import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceOrdersComponent } from './place-orders/place-orders.component';
import { ReturnOrdersComponent } from './return-orders/return-orders.component';
import { ExchangeComponent } from './exchange/exchange.component';

const routes: Routes = [
  {path:'', component:PlaceOrdersComponent},
  {path:'return', component:ReturnOrdersComponent},
  {path:'exchange', component:ExchangeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
