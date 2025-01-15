import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarTitleComponent } from '../../shared/components/toolbar-title/toolbar-title.component';

@Component({
  selector: 'app-users',
  imports: [RouterModule, MatTabsModule, MatIconModule, MatButtonModule,ToolbarTitleComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
