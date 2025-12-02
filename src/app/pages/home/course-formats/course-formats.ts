import { Component } from '@angular/core';
import { CourseFormatsConfig } from './course-formats.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-formats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-formats.html',
  styleUrl: './course-formats.css',
})
export class CourseFormats {
  config: CourseFormatsConfig = {
    heading: 'Course Types',
    subheading: 'Choose type of course which fits you the best!',

    formats: [
      {
        title: 'Online',
        features: ['Online access to all courses', 'Online classes', 'Online teacher support'],
        buttonText: 'More information',
        buttonClass: 'w-100 btn btn-lg btn-outline-dark',
      },
      {
        title: 'Present',
        features: [
          'Online access to all courses',
          'Present classes at school',
          'Support from teachers at school',
        ],
        buttonText: 'More information',
        buttonClass: 'w-100 btn btn-lg btn-primary',
      },
      {
        title: 'Combined',
        features: [
          'Online access to all courses',
          'Switching between Online and Present classes',
          'Support from teachers online or at school',
        ],
        buttonText: 'More information',
        buttonClass: 'w-100 btn btn-lg btn-primary',
        cardClass: 'border-primary',
        headerClass: 'text-bg-primary border-primary',
      },
    ],
  };
}
