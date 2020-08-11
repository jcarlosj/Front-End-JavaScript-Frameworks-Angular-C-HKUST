import { trigger, state, style, animate, transition } from '@angular/animations';    // Supports Animation

/** Define Function by Animation */
export function visibility() {
    return trigger(
      'visibility',           // Trigger name
      [   /** Define States */
          state(
              'shown',        // State name
              style({         // Applied Style
                  transform: 'scale( 1.0 )',
                  opacity: 1
              })
          ),
          state(
              'hidden',       // State name
              style({         // Applied Style
                  transform: 'scale( 0.5 )',
                  opacity: 0
              })
          ),
          /** Define Transitions */
          transition(
              '* => *',       // Type of transition (any state to any state)
              animate( '0.5s ease-in-out' )
          )
      ]
    )
}
