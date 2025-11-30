import { Component } from '@angular/core';
import { Teacher } from './teacher.types';

@Component({
  selector: 'app-teacher',
  standalone: true,
  templateUrl: './teacher.html',
  styleUrls: ['./teacher.css'],
})
export class TeacherComponent {
  teachers: Teacher[] = [
    {
      name: 'John Doe',
      title: 'Senior Developer & Mentor',
      description:
        'Expert in JavaScript, TypeScript, Angular and modern web frameworks with more than 10 years of experience teaching and mentoring developers.',
      imageUrl: 'assets/teacher1.jpg',
      imageAlt: 'John Doe',
    },
    {
      name: 'Sarah Johnson',
      title: 'Frontend Engineer',
      description:
        'Specialist in UI/UX, HTML, CSS, Angular and responsive design. Passionate about creating clean, accessible and scalable interfaces.',
      imageUrl: 'assets/teacher2.jpg',
      imageAlt: 'Sarah Johnson',
    },
    {
      name: 'Michael Smith',
      title: 'Full-Stack Developer',
      description:
        'Full-stack instructor experienced in Node.js, databases, APIs and cloud deployment. Focused on helping students become job-ready developers.',
      imageUrl: 'assets/teacher3.jpg',
      imageAlt: 'Michael Smith',
    },
  ];
}
