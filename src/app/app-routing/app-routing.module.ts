import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/** Routes */
import { appRoutes } from './routes';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule .forRoot( appRoutes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
