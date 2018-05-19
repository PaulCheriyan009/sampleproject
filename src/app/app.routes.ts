import { ComponentConfigurationComponent } from './component-configuration/component-configuration.component';
import { RuleSetupComponent } from './rule-setup/rule-setup.component';
import { MarkEnrtyComponent } from './mark-enrty/mark-enrty.component';
import { HomeComponent } from './home/home.component';
// ====== ./app/app.routes.ts ======


import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      // tslint:disable-next-line:quotemark
      breadcrumb: "Sign In"
    // tslint:disable-next-line:no-trailing-whitespace
    }
  },
  {
    path: 'markenrty',
    component: MarkEnrtyComponent,
    data: {
      // tslint:disable-next-line:quotemark
      breadcrumb: "Sign In"
    }
 },
  {
    path: 'rulesetup',
    component: RuleSetupComponent,
    data: {
      // tslint:disable-next-line:quotemark
      breadcrumb: "Sign In"
    }
   },
  {
    path: 'componentConfiguration',
    component: ComponentConfigurationComponent,
    data: {
      // tslint:disable-next-line:quotemark
      breadcrumb: "Sign In"
    }
   }
];
// tslint:disable-next-line:eofline
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
