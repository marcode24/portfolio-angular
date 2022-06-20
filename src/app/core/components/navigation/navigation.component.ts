import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private darkThemeName: string = 'dark-theme';
  public isDarkTheme: boolean;
  public activeSection: string;

  constructor() {
    this.isDarkTheme = document.body.classList.contains(this.darkThemeName);
  }

  ngOnInit(): void {
  }

  setTheme() {
    document.body.classList.toggle(this.darkThemeName);
    this.isDarkTheme = document.body.classList.contains(this.darkThemeName);
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event: Event) {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("li");
    let current: any = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  }

}
