import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToutouComponent } from './list-manager/toutou/toutou.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { ButtonComponent } from './common/button/button.component';
import { FormComponent } from './list-manager/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToutouComponent,
    ListManagerComponent,
    ButtonComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
