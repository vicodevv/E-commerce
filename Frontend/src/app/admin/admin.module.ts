import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './admin.component';
import { BooksComponent } from './components/books/books.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../auth/auth.service';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CookieService } from 'ngx-cookie-service';
import { AdminInterceptor } from '../auth/admin.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AdminComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    HomeComponent,
    BooksComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    AdminRoutingModule,
    GaugeModule.forRoot(),
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpService,
    MdbModalService,
    CookieService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminInterceptor,
      multi: true
  },
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }

