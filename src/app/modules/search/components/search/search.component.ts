import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { searchBtnAnimation, searchOpenAnimation } from '../../animations/search.animation';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [searchOpenAnimation, searchBtnAnimation]
})
export class SearchComponent implements OnInit {
  public isActive: boolean = false;
  public searchControl = new FormControl();

  constructor() {}

  ngOnInit(): void {}

  addActive() {
    this.isActive = true;
  }

  hide() {
    if (!this.searchControl.value) {
      this.isActive = false;
    }
  }

}
