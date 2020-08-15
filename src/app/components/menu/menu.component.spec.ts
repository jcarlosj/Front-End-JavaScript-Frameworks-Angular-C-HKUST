import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Angular Material Components */
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/** Components */
import { MenuComponent } from './menu.component';

/** Dependencies */
import { FlexLayoutModule } from '@angular/flex-layout';

/** Services */
import { DishService } from '../../services/dish.service';

/** ReactiveX Libraries */
import { Observable, of } from 'rxjs';

/** Models */
import { Dish } from '../../shared/Dish';

/** Base URL - BackEnd Server (It is a recommended practice) */
import { BASE_URL } from '../../shared/baseurl';

/** Static Data */
import { DISHES } from '../../shared/dishes';

/** Define a collection or suite of tests */
describe('MenuComponent', () => {
  let component: MenuComponent;                   // Assign the component to a variable
  let fixture: ComponentFixture<MenuComponent>;   // Accessory to debug and test a component by adding features to facilitate the testing of it

  const dishServiceStub = {                       // Simulate Service to obtain static data for testing
      getDishes: function(): Observable< Dish[] > {
          return of( DISHES );
      }
  };

  beforeEach( async( () => {                      // Runs before every test of a collection asynchronously
    TestBed .configureTestingModule({             // Inject the dependencies used by the Component using configureTestingModule.
        imports: [                                // Acts exactly like the NgModule configuration
            BrowserAnimationsModule,
            FlexLayoutModule,
            MatGridListModule,
            MatProgressSpinnerModule,
            RouterTestingModule .withRoutes([     // Sets up the router to be used for testing.
                { path: 'menu', component: MenuComponent }
            ])
        ],
        declarations: [ MenuComponent ],
        providers: [
            {
                provide: DishService,
                useValue: dishServiceStub
            },
            {
                provide: 'BaseURL',
                useValue: BASE_URL
            },
        ]
    })
    .compileComponents();
  }));

  beforeEach( () => {                                       // Runs before every test of a collection
      fixture = TestBed .createComponent( MenuComponent );  // Create a fixture instance of the component using TestBed
      component = fixture .componentInstance;               // Get the component itself from the fixture using componentInstance
      fixture .detectChanges();
  });

  /** Definitions of each of the tests of a collection */
  it( 'should create', () => {
      expect( component ) .toBeTruthy();                    // Check that the component is created correctly
  });

  it( 'dishes items should be 4', () => {
      expect( component .dishes .length ) .toBe( 4 );                   // Check that the number of records is 4
      expect( component .dishes[ 1 ] .name ) .toBe( 'Zucchipakoda' );   // Check that the name of the second record is "Zucchipakoda"
      expect( component .dishes[ 3 ] .featured ) .toBeFalsy();          // Check that the value of the third record in the property is false
  });

});
