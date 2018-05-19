import { routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
   MatListModule, MatMenuModule, MatDividerModule, MatCardModule, MatSelectModule
   , MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { MarkEnrtyComponent } from './mark-enrty/mark-enrty.component';
import { RuleSetupComponent } from './rule-setup/rule-setup.component';
import { ComponentConfigurationComponent } from './component-configuration/component-configuration.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddComponentComponent } from './component-configuration/add-component/add-component.component';
import { VerificationComponent } from './component-configuration/verification/verification.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    HomeComponent,
    MarkEnrtyComponent,
    RuleSetupComponent,
    ComponentConfigurationComponent,
    AddComponentComponent,
    VerificationComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    routing,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  entryComponents: [
    AddComponentComponent,
    VerificationComponent
    ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
