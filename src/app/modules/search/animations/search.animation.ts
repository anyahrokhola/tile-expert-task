import { animate, style, transition, trigger } from '@angular/animations';

const animationTime = '400ms';

export const searchOpenAnimation = trigger('searchOpen', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate(`${animationTime} ease-in`, style({ transform: 'translateX(0%)' })),
  ]),
  transition(':leave', [
    animate(
      `${animationTime} ease-in`,
      style({ transform: 'translateX(100%)' })
    ),
  ]),
]);

export const searchBtnAnimation = trigger('searchBtn', [
  transition(':enter', [style({ display: 'block' })]),
  transition(':leave', [
    animate(`${animationTime} ease-in`, style({ display: 'none' })),
  ]),
]);
