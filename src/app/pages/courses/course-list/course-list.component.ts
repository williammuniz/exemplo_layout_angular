import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Category, Course } from '../../../shared/models/course';
import { CoursesService } from '../../../services/courses.service';


@Component({
  selector: 'app-course-list',
  imports: [MatCardModule, MatButtonModule, FlexLayoutModule, MatIconModule,
    MatDividerModule, MatSelectModule, MatFormFieldModule, FormsModule, ReactiveFormsModule,
    MatInputModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit {

  categoryValue = Object.values(Category);

  private courseService = inject(CoursesService);
  private fb = inject(FormBuilder);
  courseList: Course[] = [];


  form!: FormGroup;

  private validation(): void {
    this.form = this.fb.group({
      category: [''],
      search: [''],
    })
  }

  ngOnInit(): void {
    this.getCourses();
    this.validation();
  }

  getCourses(): void {
    this.courseService.get().subscribe((response: Course[]) => {
      this.courseList = response;
      console.log(this.courseList);
    })
  }

  doSearch(): void {

  }

}
