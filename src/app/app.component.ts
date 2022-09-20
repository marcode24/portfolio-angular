import { Component } from '@angular/core';

import { DelayService } from '@services/delay.service';
import { SettingService } from '@services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  loading = true;

  constructor(
    private delayService: DelayService,
    private settingService: SettingService,
    ){
    this.delayService.load().then(() => this.loading = false);
    const theme = localStorage.getItem('theme');
    if(!theme) {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.settingService.setTheme((isDarkMode) ? 'dark' : 'light');
    } else {
      this.settingService.setTheme(theme as 'dark'|'light');
    }
  }
}
