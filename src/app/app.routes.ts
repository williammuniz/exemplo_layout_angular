import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { MyProfileComponent } from './pages/users/my-profile/my-profile.component';
import { MyConquestsComponent } from './pages/users/my-conquests/my-conquests.component';
import { MyDisciplinesComponent } from './pages/users/my-disciplines/my-disciplines.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { StudentsComponent } from './pages/students/students.component';
import { SupportComponent } from './pages/support/support.component';
import { TeachersComponent } from './pages/teachers/teachers.component';

export const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent,
        pathMatch: 'prefix',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'myProfile'
            },
            {
                path: 'myProfile',
                component: MyProfileComponent,
            },
            {
                path: 'myConquests',
                component: MyConquestsComponent,
            },
            {
                path: 'myDisciplines',
                component: MyDisciplinesComponent,
            }
        ],

    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
     {
        path: 'courses',
        component: CoursesComponent,
    },
    {
        path: 'students',
        component: StudentsComponent,
    },
    {
        path: 'support',
        component: SupportComponent,
    },
    {
        path: 'teachers',
        component: TeachersComponent,
    },

];
