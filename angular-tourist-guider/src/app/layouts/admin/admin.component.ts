import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  mode = new FormControl('side');
  constructor() {}

  ngOnInit(): void {}
}
