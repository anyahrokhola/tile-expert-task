import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [SearchInputComponent, SearchComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [SearchInputComponent, SearchComponent],
})
export class SearchModule {}
