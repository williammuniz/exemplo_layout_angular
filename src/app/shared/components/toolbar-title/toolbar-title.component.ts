import { CommonModule } from '@angular/common';
import { Component, effect, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar-title',
  imports: [MatToolbarModule, MatIconModule, CommonModule],
  templateUrl: './toolbar-title.component.html',
  styleUrl: './toolbar-title.component.scss'
})
export class ToolbarTitleComponent {
  iconFa = '';
  iconMat = '';

  title = input<string>('');
  icon = input<string>('');

  constructor() {
    effect(() => {
      this.icon().includes('fa-') ? this.iconFa = `icon-space-mat ${this.icon()}` : this.iconMat = this.icon();
    });
  }

}
