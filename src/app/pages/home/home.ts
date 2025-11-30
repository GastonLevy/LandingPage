import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { TeacherComponent } from './teacher/teacher';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, TeacherComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
