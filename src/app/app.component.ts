import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent, map } from 'rxjs';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { menuItems } from './shared/models/menu';
import { MenuItem } from './shared/models/menuItem';


export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ProjectSchool';
  isSmallScren = false;
  popText = false;
  applyShadow = false;
  
  items_menu: MenuItem[] = menuItems;


  constructor(private breakpointObserver: BreakpointObserver,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {

  }


  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      const content = this.document.getElementsByClassName(SCROLL_CONTAINER)[0];
      fromEvent(content, 'scroll')
        .pipe(map(() => content.scrollTop))
        .subscribe({
          next: (value: number) => this.determineHeader(value)
        })
    }
  }


  determineHeader(scrollTop: number) {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
  }

  ngAfterContentInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((res) => this.isSmallScren = res.matches);
  }

  get sidenavMode() {
    return this.isSmallScren ? 'over' : 'side';
  }

}
