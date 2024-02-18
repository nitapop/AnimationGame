import {
  animate,
  animation,
  group,
  keyframes,
  query,
  sequence,
  stagger,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';


export const fadeAnimation = animation([
  style({ opacity: '{{ from }}' }),
  animate('{{ time }}', style({ opacity: '{{ to }}' }))
]);
export const scaleImages = trigger('scaleImages', [
  state('0-false', style({ transform: 'scale(1)' })),
  state('0-true', style({ transform: 'scale(1.2)' })),
  state('1-false', style({ transform: 'scale(1)' })),
  state('1-true', style({ transform: 'scale(1.2)' })),
  state('2-false', style({ transform: 'scale(1)' })),
  state('2-true', style({ transform: 'scale(1.2)' })),
  state('3-false', style({ transform: 'scale(1)' })),
  state('3-true', style({ transform: 'scale(1.2)' })),
  transition('0-false <=> 0-true', [animate('1000ms')]),
  transition('1-false <=> 1-true', [animate('1000ms')]),
  transition('2-false <=> 2-true', [animate('1000ms')]),
  transition('3-false <=> 3-true', [animate('1000ms')])
]);
export const counterAnimation = [
  trigger('counterState', [
    state('3', style({ 'color': 'red' })),
    state('2', style({ 'color': 'yellow' })),
    state('1', style({ 'color': 'blue' })),
    transition('* => void', animate(200, style({ 'opacity': 0 })))
  ]),
  trigger('successTextState', [
    state('display',
      style({
        'color': 'green',
        'opacity': 0,
        'transform': 'scale(1.3)'
      })
    ),
    transition('void => display', [
      style({ 'color': 'green' }),
      animate('2000ms linear')
    ])
  ])];
export const pauseAnimation = [
  trigger('pauseScreen', [
    state('active', style({ 'opacity': 0.2 })),
    state('none', style({ 'opacity': 1 })),
    transition('* => active', animate('100ms'))
  ])];
export const buttonAnimation = [
  trigger('animateText', [
    state(
      'ready',
      style({
        color: 'white'
      })
    ),
    state(
      'active',
      style({
        color: 'white'
      })
    ),
    transition('ready => active', animate('1000ms ease-in', keyframes([
      style({ 'transform': 'scale(1.1)', 'color': 'red' }),
      style({ 'transform': 'scale(1.3)', 'color': 'yellow' }),
      style({ 'transform': 'scale(1.1)', 'color': 'blue' })
    ])))
  ])
];
export const questionsAnimation = [
  trigger('correctAnswer', [
    state('true', style({ color:'green', fontWeight:'700' })),
    transition('* => true', [
      animate('100ms'),
      query('mat-icon', [animate('100ms', style({transform: 'scale(1.2)'}))]
      )
    ])
  ]),
  trigger('questions', [
    state(
      'displayed',
      style({
        'opacity': 1,
        'transform': 'translateX(0)'
      })
    ), state(
      'none',
      style({
        'opacity': 0
      })
    ),
    transition('* => displayed', group([
      animate(300, keyframes([
        style({ 'transform': 'translateX(-100px)', 'opacity': 0, 'offset': 0 }),
        style({ 'transform': 'translateX(-50px)', 'opacity': 0.5, 'offset': 0.3 }),
        style({ 'transform': 'translateX(-20px)', 'opacity': 1, 'offset': 0.8 }),
        style({ 'transform': 'translateX(0px)', 'opacity': 1, 'offset': 1 })
      ])),
      animate(800, style({ 'color': 'red' }))
    ]))
  ])
];
export const homeButtonAnimation = [trigger('homeButton', [
  transition('* => hover', [
    query('.home-button', [
      sequence([
        animate('1s ease-in-out', style({ color: 'white', transform: 'scale(1.1)' })),
        animate('0.5s ease-in-out', style({ opacity: 0.5, transform: 'scale(0.9)' }))
      ])
    ])
  ])
])
];
export const endGameAnimation = [trigger('endGame', [
  transition('* => end', [
    query('.question, .clock, .footer', [useAnimation(fadeAnimation, {
        params: {
          from: 1,
          to: 0,
          time: '2s'
        }
      })]
    )
  ])
])];
export const instructionsAnimation = [trigger('instructionsList', [
  state('*', style({color: 'green'})),
  transition('void => *', [
    query(':enter',
      stagger(350, sequence([
        animate('1.5s', keyframes([
          style({ transform: 'translateX(0px)', color: 'red', 'offset': 0 }),
          style({ transform: 'translateX(50px)', color: 'red', 'offset': 0.2 }),
          style({ transform: 'translateX(100px)', color: 'yellow', 'offset': 0.4 }),
          style({ transform: 'translateX(50px)', color: 'yellow', 'offset': 0.6 }),
          style({ transform: 'translateX(20px)', color: 'blue', 'offset': 0.8 }),
          style({ transform: 'translateX(0px)', color: 'blue', 'offset': 1 })
        ]))
      ]))
    )
  ])
])];

export const featuresAnimation = [trigger('featuresList', [
  transition('void => *', [
    query(':enter',
      stagger(250, sequence([
        animate('1.5s', keyframes([
          style({ transform: 'translateX(-100px)', opacity: 0, 'offset': 0 }),
          style({ transform: 'translateX(-50px)', opacity: 0.2, 'offset': 0.2 }),
          style({ transform: 'translateX(-30px)', opacity: 0.4, 'offset': 0.4 }),
          style({ transform: 'translateX(-10px)', opacity: 0.6, 'offset': 0.6 }),
          style({ transform: 'translateX(-5px)', opacity: 0.8, 'offset': 0.8 }),
          style({ transform: 'translateX(0px)', opacity: 1, 'offset': 1 })
        ]))
      ]))
    )
  ])
])];