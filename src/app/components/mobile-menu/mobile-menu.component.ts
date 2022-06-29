import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  @HostBinding('class.active') @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  close(){
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }
}
