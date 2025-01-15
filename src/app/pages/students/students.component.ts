import { Component } from '@angular/core';
import { ToolbarTitleComponent } from '../../shared/components/toolbar-title/toolbar-title.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabNavPanel } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-students',
  imports: [RouterModule, ToolbarTitleComponent, MatIconModule, MatButtonModule, MatTabNavPanel],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

}
