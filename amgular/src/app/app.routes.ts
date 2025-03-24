// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Uncomment these once you create the components
// import { ProductsComponent } from './products/products.component';
// import { UploadFileComponent } from './upload-file/upload-file.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  // Uncomment these once you create the components
  // { path: 'products', component: ProductsComponent },
  // { path: 'upload-file', component: UploadFileComponent }
];