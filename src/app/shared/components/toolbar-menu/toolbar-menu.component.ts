import { Component, input } from '@angular/core';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MenuItem } from '../../models/menuItem';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-toolbar-menu',
  imports: [MatToolbarModule,
    MatToolbarRow,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    RouterModule],
  templateUrl: './toolbar-menu.component.html',
  styleUrl: './toolbar-menu.component.scss'
})
export class ToolbarMenuComponent {

  menuTitle = input<string>('');
  popText = input<boolean>(false);
  shadow = input<boolean>(false);
  items_menu = input<MenuItem[]>([]);
}
