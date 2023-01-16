import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {A11yModule} from '@angular/cdk/a11y';

import {ClipboardModule} from '@angular/cdk/clipboard';

import {DragDropModule} from '@angular/cdk/drag-drop';

import {PortalModule} from '@angular/cdk/portal';

import {ScrollingModule} from '@angular/cdk/scrolling';

import {CdkStepperModule} from '@angular/cdk/stepper';

import {CdkTableModule} from '@angular/cdk/table';

import {CdkTreeModule} from '@angular/cdk/tree';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatBadgeModule} from '@angular/material/badge';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import {MatButtonModule} from '@angular/material/button';

import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatCardModule} from '@angular/material/card';

import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatChipsModule} from '@angular/material/chips';

import {MatStepperModule} from '@angular/material/stepper';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatDialogModule} from '@angular/material/dialog';

import {MatDividerModule} from '@angular/material/divider';

import {MatExpansionModule} from '@angular/material/expansion';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatIconModule} from '@angular/material/icon';

import {MatInputModule} from '@angular/material/input';

import {MatListModule} from '@angular/material/list';

import {MatMenuModule} from '@angular/material/menu';

import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

import {MatPaginatorModule} from '@angular/material/paginator';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatRadioModule} from '@angular/material/radio';

import {MatSelectModule} from '@angular/material/select';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatSliderModule} from '@angular/material/slider';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatSortModule} from '@angular/material/sort';

import {MatTableModule} from '@angular/material/table';

import {MatTabsModule} from '@angular/material/tabs';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatTooltipModule} from '@angular/material/tooltip';

import {MatTreeModule} from '@angular/material/tree';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SupplierComponent } from './Supplier/supplier/supplier.component';
import { AddSupplierComponent } from './Supplier/add-supplier/add-supplier.component';

import { EditSupplierComponent } from './Supplier/edit-supplier/edit-supplier.component';
import { ReceivePaymentComponent } from './Supplier/receive-payment/receive-payment.component';

import { AddProductComponent } from './Product/add-product/add-product.component';

import { ProductComponent } from './Product/product/product.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { MakePaymentComponent } from './Admin/make-payment/make-payment.component';
import { ReportQualityComponent } from './Admin/report-quality/report-quality.component';
import { SignInComponent } from './Login/sign-in/sign-in.component';
import { SignUpComponent } from './Login/sign-up/sign-up.component';
import { OrderDetailsComponent } from './Order/order-details/order-details.component';
import { ReturnStockComponent } from './Admin/return-stock/return-stock.component';

import { SupplierLoginComponent } from './Login/supplier-login/supplier-login.component';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment.prod';
import { TrackOrderComponent } from './Supplier/track-order/track-order.component';
import { DeliveredComponent } from './Supplier/delivered/delivered.component';
import { PendingComponent } from './Supplier/pending/pending.component';
import { CancelledComponent } from './Supplier/cancelled/cancelled.component';
import { ReturnedComponent } from './Supplier/returned/returned.component';
import { MainComponent } from './Login/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    SupplierComponent,
    AddSupplierComponent,

    EditSupplierComponent,
    ReceivePaymentComponent,

    ProductComponent,
    AdminDashboardComponent,
    AdminComponent,
    MakePaymentComponent,
    ReportQualityComponent,
    SignInComponent,
    SignUpComponent,
    OrderDetailsComponent,
    TrackOrderComponent,
    DeliveredComponent,
    PendingComponent,
    CancelledComponent,
    ReturnedComponent,
    ReturnStockComponent,
    SupplierLoginComponent,
    MainComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    A11yModule,

    ClipboardModule,

    CdkStepperModule,

    CdkTableModule,

    CdkTreeModule,

    DragDropModule,

    MatAutocompleteModule,

    MatBadgeModule,

    MatBottomSheetModule,

    MatButtonModule,

    MatButtonToggleModule,

    MatCardModule,

    MatCheckboxModule,

    MatChipsModule,

    MatStepperModule,

    MatDatepickerModule,

    MatDialogModule,

    MatDividerModule,

    MatExpansionModule,

    MatGridListModule,

    MatIconModule,

    MatInputModule,

    MatListModule,

    MatMenuModule,

    MatNativeDateModule,

    MatPaginatorModule,

    MatProgressBarModule,

    MatProgressSpinnerModule,

    MatRadioModule,

    MatRippleModule,

    MatSelectModule,

    MatSidenavModule,

    MatSliderModule,

    MatSlideToggleModule,

    MatSnackBarModule,

    MatSortModule,

    MatTableModule,

    MatTabsModule,

    MatToolbarModule,

    MatTooltipModule,

    MatTreeModule,

    PortalModule,

    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }