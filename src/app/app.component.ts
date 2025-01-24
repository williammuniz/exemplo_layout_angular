import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

import { BreakpointObserver } from '@angular/cdk/layout';
import { filter, fromEvent, map, subscribeOn } from 'rxjs';
import { MatListModule } from '@angular/material/list';
import { menuItems } from './shared/models/menu';
import { MenuItem } from './shared/models/menuItem';
import { ToolbarMenuComponent } from "./shared/components/toolbar-menu/toolbar-menu.component";


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
    RouterModule,
    MatTooltipModule, ToolbarMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ProjectSchool';
  isSmallScren = false;
  popText = false;
  applyShadow = false;

  items_menu: MenuItem[] = menuItems;


  menuName = '';

  private breakpointObserver = inject(BreakpointObserver);
  private route = inject(Router);
  private activateRoute = inject(ActivatedRoute);


  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
      .pipe(map(() => content.scrollTop))
      .subscribe((value: number) => this.determineHeader(value))

    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      this.menuName = this.activateRoute.firstChild?.snapshot.routeConfig?.path ?? '';
    })
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
