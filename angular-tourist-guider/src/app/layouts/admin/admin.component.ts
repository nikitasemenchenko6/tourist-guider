import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public routes: Array<{ name: string; value: string }> = [
    { name: 'map items', value: '/admin' },
    { name: 'add items', value: '/admin/add-items' },
  ];
  public sidebarMode = new FormControl('side');
  public isMobile = false;

  private screenHeight: any;
  private screenWidth: any;

  @ViewChild('sidenav') sidenav: MatSidenav;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    if (this.screenWidth < 900) {
      if (this.sidenav) {
        this.sidenav.close(); // we close sidenav
        // console.log( this.sidenav.close())
      }
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.getScreenSize();
    if (this.screenWidth < 800) {
      // if device have small screen, side bar will initialize as over
      this.sidebarMode = new FormControl('over');
      this.isMobile = true;
      if (this.sidenav) {
        this.sidenav.close();
      }
    }
  }
}
