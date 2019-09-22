import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatchShipperComponent } from './match-shipper/match-shipper.component';
import { MatchShipperModule } from './match-shipper/match-shipper.module';
import { ToastModule } from 'primeng/toast';
const routes: Routes = [
  { path: 'match-shipper', component: MatchShipperComponent }
];
@NgModule({
  imports: [
    CommonModule,
    MatchShipperModule,
    ToastModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MatchShipperComponent]
})
export class CustomProfileModule { }
