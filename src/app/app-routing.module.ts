import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './Supplier/supplier/supplier.component';
import { AddSupplierComponent } from './Supplier/add-supplier/add-supplier.component';

import { ReceivePaymentComponent } from './Supplier/receive-payment/receive-payment.component';

import { ProductComponent } from './Product/product/product.component';
import { AddProductComponent } from './Product/add-product/add-product.component';

import { OrderDetailsComponent } from './Order/order-details/order-details.component';

import { SignInComponent } from './Login/sign-in/sign-in.component';
import { SignUpComponent } from './Login/sign-up/sign-up.component';

import { AdminComponent } from './Admin/admin/admin.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';

import { MakePaymentComponent } from './Admin/make-payment/make-payment.component';
import { ReportQualityComponent } from './Admin/report-quality/report-quality.component';
import { SupplierLoginComponent } from './Login/supplier-login/supplier-login.component';
import { TrackOrderComponent } from './Supplier/track-order/track-order.component';
import { CancelledComponent } from './Supplier/cancelled/cancelled.component';
import { DeliveredComponent } from './Supplier/delivered/delivered.component';
import { PendingComponent } from './Supplier/pending/pending.component';
import { ReturnedComponent } from './Supplier/returned/returned.component';
import { AuthGuardGuard } from './Services/auth-guard.guard';
import { MainComponent } from './Login/main/main.component';


const routes: Routes = [
  {path:"signIn",component:SignInComponent},
  {path: '', pathMatch:'full', component:MainComponent},
  {path:"signUp",component:SignUpComponent},
  {path:"orderList",canActivate:[AuthGuardGuard],component:AdminComponent},
  {path:"adminDashboard",canActivate:[AuthGuardGuard],component:AdminDashboardComponent},
  {path:"makePayment",canActivate:[AuthGuardGuard],component:MakePaymentComponent},
  {path:"reportQuality",canActivate:[AuthGuardGuard],component:ReportQualityComponent},
  
  {path:"supplier",canActivate:[AuthGuardGuard],component:SupplierComponent},
  {path:"addSupplier",canActivate:[AuthGuardGuard],component:AddSupplierComponent},
  {path:"receivePayment",canActivate:[AuthGuardGuard],component:ReceivePaymentComponent},
  {path:"trackOrder",canActivate:[AuthGuardGuard],component:TrackOrderComponent},
  {path:"deliveredOrder",canActivate:[AuthGuardGuard],component:DeliveredComponent},
  {path:"pendingOrder",canActivate:[AuthGuardGuard],component:PendingComponent},
  {path:"returnedOrder",canActivate:[AuthGuardGuard],component:ReturnedComponent},
  {path:"cancelledOrder",canActivate:[AuthGuardGuard],component:CancelledComponent},


  {path:"product",canActivate:[AuthGuardGuard],component:ProductComponent},
  {path:"addProduct",canActivate:[AuthGuardGuard],component:AddProductComponent},
  {path:"orderDetails",canActivate:[AuthGuardGuard],component:OrderDetailsComponent},
  {path:"mainPage",component:MainComponent},
  {path:"supplierLogin",component:SupplierLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
