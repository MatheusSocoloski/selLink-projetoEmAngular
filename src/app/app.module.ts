import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PageTesteComponent } from './pages/page-teste/page-teste.component';
import { PageTesteFilhoComponent } from './pages/page-teste-filho/page-teste-filho.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SidebarComponent,
    FooterComponent,
    VendasComponent,
    PageTesteComponent,
    PageTesteFilhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
