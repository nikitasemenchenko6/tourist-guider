import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { MapItemsComponent } from 'src/app/layouts/admin/pages/map-items/map-items.component';
import { AddItemsComponent } from 'src/app/layouts/admin/pages/add-items/add-items.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: MapItemsComponent },
      { path: 'add-items', component: AddItemsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
