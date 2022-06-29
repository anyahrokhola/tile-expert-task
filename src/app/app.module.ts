import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchModule } from './modules/search/search.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MobileMenuComponent, MenuComponent],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    SearchModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
