import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {
  @Output() menuToggled: EventEmitter<any> = new EventEmitter();
  @Input() showMenuToggle: boolean;

  constructor() {}

  ngOnInit(): void {}

  public menuClicked() {
    this.menuToggled.emit();
  }
}
