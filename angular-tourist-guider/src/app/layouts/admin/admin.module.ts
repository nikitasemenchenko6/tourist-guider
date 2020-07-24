import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';

// import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
// pages
import { MapItemsComponent } from '../../pages/map-items/map-items.component';
import { AddItemsComponent } from '../../pages/add-items/add-items.component';
// components
import { TopnavComponent } from '../../components/topnav/topnav.component';
import { SearchBarComponent } from '../../components/utility/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AdminComponent,
    // pages
    MapItemsComponent,
    AddItemsComponent,
    // components
    TopnavComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatRadioModule,
    // BrowserModule,
    NgxPaginationModule,
  ],
})
export class AdminModule {}
