import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

import { SkillsComponentsModule } from './skills/components/components.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    SkillsComponentsModule,
    FontAwesomeModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent
  ]
})
export class ComponentsModule { }
