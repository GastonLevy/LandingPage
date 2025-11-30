import { Component } from '@angular/core';
import { HeroConfig } from './hero.types';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class HeroComponent {
  hero: HeroConfig = {
    title: 'Learn Modern Web Development',
    text: 'Become job-ready with our hands-on CodeFactory courses.',
    buttonText: 'Get Started',
    buttonLink: '#price-offers',
    imageUrl: 'assets/hero.png',
    imageAlt: 'Course hero image',
  };
}
