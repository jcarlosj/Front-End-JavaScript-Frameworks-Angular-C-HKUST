import { trigger, state, style, animate, transition } from '@angular/animations';    // Supports Animation

/** Define Functions by Animation */
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
    );
}

/** Adding Animation Support for Route Changes */
export function flyInOut() {
    return trigger(
        'flyInOut',             // Trigger name
        [   /** Define States */
            state(
                '*',            // State name
                style({         // Applied Style
                    opacity: 1,
                    transform: 'translateX( 0 )'
                })
            ),
            /** Define Transitions */
            transition(
                ':enter',       // Type of transition :enter (Equals void => *)
                [   // Applied Style
                    style({
                        opacity: 0,
                        transform: 'translateX( -100% )'
                    }),
                    animate( '500ms ease-in' )
                ]
            ),
            transition(
                ':leave',       // Type of transition :leave (Equals * => void)
                [   // Applied Style
                    style({
                        opacity: 0,
                        transform: 'translateX( 100% )'
                    }),
                    animate( '500ms ease-out' )
                ]
            )
        ]
    );
}

export function expand() {
    return trigger(
        'expand',               // Trigger name
        [   /** Define States */
            state(
                '*',            // State name
                style({         // Applied Style
                    opacity: 1,
                    transform: 'translateX( 0 )'
                })
            ),
            /** Define Transitions */
            transition(
                ':enter',       // Type of transition :enter (Equals void => *)
                [   // Applied Style
                    style({
                        opacity: 0,
                        transform: 'translateY( -50% )'
                    }),
                    animate(
                        '200ms ease-in',
                        style({         // Applied Style
                            opacity: 1,
                            transform: 'translateX( 0 )'
                        })
                    )
                ]
            )
        ]
    );
}
