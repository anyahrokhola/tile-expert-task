import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {
  public isOpen = false;
  constructor() {}

  ngOnChanges() {}

  open(){
    this.isOpen = !this.isOpen;
  }
}
