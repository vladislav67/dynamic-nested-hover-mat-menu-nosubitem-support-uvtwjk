import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatNativeDateModule,
  MatToolbarModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AppRoutingModule } from './app-routing.module';

/**
 * NgModule that includes all Material modules that are required.
 */
@NgModule({
  exports: [
    // Material
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatNativeDateModule,
  ],
})
export class MaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, MenuItemComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
