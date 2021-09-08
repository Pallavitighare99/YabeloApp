import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemParentComponent } from './item-parent/item-parent.component';
import { ItemChildComponent } from './item-child/item-child.component';
import { FormsModule } from '@angular/forms';
import { SearchProductPipe } from './search-product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemParentComponent,
    ItemChildComponent,
    SearchProductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
