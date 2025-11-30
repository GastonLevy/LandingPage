import { Component } from '@angular/core';
import { PriceOffersConfig } from './price-offers.types';

@Component({
  selector: 'app-price-offers',
  standalone: true,
  templateUrl: './price-offers.html',
  styleUrl: './price-offers.css',
})
export class PriceOffers {
  config: PriceOffersConfig = {
    heading: 'Offers',
    subheading:
      'Quickly build your knowledge with our three types of courses—beginner, intermediate, and advanced. Learn at your own pace and grow your skills with simple, practical lessons designed for every level.',
    offers: [
      {
        title: 'Beginner',
        price: 25,
        currency: '€',
        period: '/mo',
        features: ['10 courses included', '2 GB of storage', 'Email support', 'Help center access'],
        buttonText: 'Sign up',
        buttonClass: 'w-100 btn btn-lg btn-outline-dark',
      },
      {
        title: 'Intermediate',
        price: 45,
        currency: '€',
        period: '/mo',
        features: [
          '20 courses included',
          '10 GB of storage',
          'Priority email support',
          'Help center access',
        ],
        buttonText: 'Get started',
        buttonClass: 'w-100 btn btn-lg btn-primary',
      },
      {
        title: 'Expert',
        price: 85,
        currency: '€',
        period: '/mo',
        features: [
          '30 courses included',
          '15 GB of storage',
          'Phone and email support',
          'Help center access',
        ],
        buttonText: 'Contact us',
        buttonClass: 'w-100 btn btn-lg btn-primary',
        cardClass: 'border-primary',
        headerClass: 'text-bg-primary border-primary',
      },
    ],
  };
}
