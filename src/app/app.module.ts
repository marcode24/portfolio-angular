import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { CoreComponentsModule } from './core/components/components.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  faGithub,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faBriefcase,
  faEnvelope,
  faExternalLink,
  faHome,
  faMoon,
  faSun,
  faUpRightFromSquare,
  faUser,
  faWrench
} from '@fortawesome/free-solid-svg-icons';

import { DelayService } from '@services/delay.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreComponentsModule,
    ComponentsModule
  ],
  providers: [
    DelayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGithub,
      faLinkedinIn,
      faLinkedin,
      faHome,
      faUser,
      faBriefcase,
      faWrench,
      faEnvelope,
      faSun,
      faMoon,
      faUpRightFromSquare,
      faExternalLink,
      faInstagram,
      faTwitter
    );
  }
}
