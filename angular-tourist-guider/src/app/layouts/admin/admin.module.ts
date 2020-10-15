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
import { MapItemsComponent } from 'src/app/layouts/admin/pages/map-items/map-items.component';
import { AddItemsComponent } from 'src/app/layouts/admin/pages/add-items/add-items.component';
// components
import { ComponentsModule } from 'src/app/components/components.module';
// Other feature Modules
import { MapMarkerModule } from 'src/app/markers/map-marker.module';

@NgModule({
  declarations: [
    AdminComponent,
    // pages
    MapItemsComponent,
    AddItemsComponent,
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
    MapMarkerModule,
    // components
    ComponentsModule
  ],
})
export class AdminModule { }
