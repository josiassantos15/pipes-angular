import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { LowercaseComponent } from './components/lowercase/lowercase.component';
import { UppercaseComponent } from './components/uppercase/uppercase.component';
import { TitlecaseComponent } from './components/titlecase/titlecase.component';
import { JsonComponent } from './components/json/json.component';
import { SliceComponent } from './components/slice/slice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LowercaseComponent,
    UppercaseComponent,
    TitlecaseComponent,
    SliceComponent,
    JsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
