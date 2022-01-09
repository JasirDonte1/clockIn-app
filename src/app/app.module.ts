import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ConsoleComponent } from './console/console.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FindEmployeeComponent } from './find-employee/find-employee.component';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { HttpClientModule } from '@angular/common/http';

const appRoute: Routes = [
  {path: '', component: ConsoleComponent},
  {path: 'register', component: RegisterEmployeeComponent },
  {path: 'search', component: FindEmployeeComponent},
  {path: 'login', component: AdminLoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    ConsoleComponent,
    RegisterEmployeeComponent,
    FindEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    MatCheckboxModule,
    MatTableModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
