import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { TopnavComponent } from '../../components/topnav/topnav.component';

@NgModule({
  declarations: [AdminComponent, TopnavComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatRadioModule,
  ],
})
export class AdminModule {}
