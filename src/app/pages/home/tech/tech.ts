import { Component } from '@angular/core';
import { TechItem } from './tech.types';

@Component({
  selector: 'app-tech',
  standalone: true,
  templateUrl: './tech.html',
  styleUrl: './tech.css',
})
export class Tech {
  technologies: TechItem[] = [
    {
      name: 'JavaScript',
      iconUrl: 'assets/js.png',
      iconAlt: 'JavaScript',
    },
    {
      name: 'TypeScript',
      iconUrl: 'assets/ts.png',
      iconAlt: 'TypeScript',
    },
    {
      name: 'HTML',
      iconUrl: 'assets/html.png',
      iconAlt: 'HTML',
    },
    {
      name: 'CSS',
      iconUrl: 'assets/css.png',
      iconAlt: 'CSS',
    },
    {
      name: 'Angular',
      iconUrl: 'assets/angular.png',
      iconAlt: 'Angular',
    },
  ];
}
