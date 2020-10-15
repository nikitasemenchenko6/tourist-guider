import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { TopnavComponent } from 'src/app/components/topnav/topnav.component';
import { SearchBarComponent } from 'src/app/components/utility/search-bar/search-bar.component';

@NgModule({
  declarations: [
    TopnavComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopnavComponent,
    SearchBarComponent
  ]
})
export class ComponentsModule { }
