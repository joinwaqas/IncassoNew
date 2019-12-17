
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { UserDataService } from './Services/user-data.service';
import { HttpClientModule }  from '@angular/common/http';
import { AuthGuard} from '../app/auth-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AdministrationsComponent } from './administrations/administrations.component';
import { DebtorsComponent } from './debtors/debtors.component';
import { ActionsComponent } from './actions/actions.component';
import { UploadDataComponent } from './upload-data/upload-data.component';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    AdministrationsComponent,
    DebtorsComponent,
    ActionsComponent,
    UploadDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule

  ],
  providers: [UserDataService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
