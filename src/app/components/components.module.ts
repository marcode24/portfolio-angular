import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

import { SkillsComponentsModule } from './skills/components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    SkillsComponentsModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    SkillsComponent
  ]
})
export class ComponentsModule { }
