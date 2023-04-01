import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MaterialExampleModule } from '../material.module';
import { TabGroupBasicExample } from './tab-group-basic-example';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SellingitemsComponent } from './sellingitems/sellingitems.component';
import { CartComponent } from './cart/cart.component';

const appRoute: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'sellingitems', component: SellingitemsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  declarations: [
    TabGroupBasicExample,
    NavbarComponent,
    CardComponent,
    TableComponent,
    FormComponent,
    ScheduleComponent,
    SellingitemsComponent,
    CartComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatAutocompleteModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    RouterModule.forRoot(appRoute),
    MatSelectModule,
  ],
  bootstrap: [TabGroupBasicExample],
})
export class AppModule {}
