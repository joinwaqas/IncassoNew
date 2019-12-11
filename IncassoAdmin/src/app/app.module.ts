
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
    HttpClientModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
