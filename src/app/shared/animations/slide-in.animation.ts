import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export function slideIn(): AnimationTriggerMetadata {
  return trigger('slideIn', [
    transition(':enter', [
      style({
        transform: 'translateY(-7%)',
        opacity: 0,
      }),
      animate(
        '0.5s ease-in-out',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        }),
      ),
    ]),
  ]);
}
