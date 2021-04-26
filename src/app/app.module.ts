import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CoursesModule} from './courses/courses.module';
import {PagesModule} from './pages/pages.module';
import {AuthModule} from './auth/auth.module';
import {AdminModule} from './admin/admin.module'; 
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { CreateInternComponent } from './create-intern/create-intern.component';
import { UpdateInternComponent } from './update-intern/update-intern.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    CreateInternComponent,
    UpdateInternComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    PagesModule,
    AuthModule,
    AdminModule ,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
