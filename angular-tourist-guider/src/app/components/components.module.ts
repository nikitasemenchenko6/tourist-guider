import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { TopnavComponent } from 'src/app/components/topnav/topnav.component';
import { SearchBarComponent } from 'src/app/components/utility/search-bar/search-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [TopnavComponent, SearchBarComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, FormsModule],
  exports: [TopnavComponent, SearchBarComponent],
})
export class ComponentsModule { }
