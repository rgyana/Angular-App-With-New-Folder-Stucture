import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './layout/template/template.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then((module) => module.ProductModule)
  },

  {
    path: 'service',
    loadChildren: () => import('./service/service.module').then((module) => module.ServiceModule)
  },

  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then((module) => module.SettingsModule)
  },

  { path: '', redirectTo: '', pathMatch: 'full' },

  {
    path: '', component: TemplateComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
