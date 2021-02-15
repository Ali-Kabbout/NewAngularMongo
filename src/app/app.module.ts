import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { MenuSidebarComponent } from './pages/main/menu-sidebar/menu-sidebar.component';
import { BlankComponent } from './views/blank/blank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './views/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { MessagesDropdownMenuComponent } from './pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppButtonComponent } from './components/app-button/app-button.component';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { UserDropdownMenuComponent } from './pages/main/header/user-dropdown-menu/user-dropdown-menu.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { ShowEmpComponent } from './views/employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './views/employee/add-edit-emp/add-edit-emp.component';
import { DxDateBoxModule } from 'devextreme-angular';

import{SharedService} from './utils/services/shared.service';
 import { FormsModule } from '@angular/forms';
 import { DxButtonModule } from 'devextreme-angular';
 import { DxDataGridModule,
  DxBulletModule,
  DxTemplateModule } from 'devextreme-angular';

  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SalesComponent } from './views/sales/sales.component';
import { ShowSalesComponent } from './views/sales/show-sales/show-sales.component';
import { AddEditSalesComponent } from './views/sales/add-edit-sales/add-edit-sales.component';
 
registerLocaleData(localeEn, 'en-EN');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    BlankComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    AppButtonComponent,
    UserDropdownMenuComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    SalesComponent,
    ShowSalesComponent,
    AddEditSalesComponent 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DxButtonModule,
    BrowserAnimationsModule,
     DxDataGridModule,
     DxDateBoxModule,
    DxTemplateModule,
    DxBulletModule
,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
