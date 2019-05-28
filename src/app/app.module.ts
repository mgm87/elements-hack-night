import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatTooltipModule } from '@angular/material';

import { SuperTooltipComponent } from './super-tooltip.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SuperTooltipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  entryComponents: [
    SuperTooltipComponent
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(SuperTooltipComponent, { injector });
    customElements.define('super-tooltip', customElement);
  }

  ngDoBootstrap() { }
}
