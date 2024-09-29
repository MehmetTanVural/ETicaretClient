import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinner, NgxSpinnerModule, NgxSpinnerService, provideSpinnerConfig } from 'ngx-spinner';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimations(), provideAnimationsAsync(),provideHttpClient(),provideToastr(),{provide: "baseUrl", useValue: " https://localhost:7243/api", multi:true}]
};
