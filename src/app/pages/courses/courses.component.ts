import { Component } from '@angular/core';
import { ToolbarTitleComponent } from '../../shared/components/toolbar-title/toolbar-title.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-courses',
  imports: [RouterModule, ToolbarTitleComponent, MatIconModule, MatButtonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

}
