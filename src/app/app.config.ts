import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { withInterceptors } from '@angular/common/http';
import { delay } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
        //Esta parte no es una buena práctica
        //Se simula un retraso de respuesta de 5 segundos, en web es 
        //Crear un dashboard, en ese dashboard se debe hacen accesos directos de esta api, con la diferencia que se debe agregar paginacion
        //Cada implementacion (de cada api del dashboard) debe ser un commit, en total deben ser minimo 5.
        withInterceptors([
        (req, next) => {
          if (req.url.includes('digi-api.com')) {
            return next(req).pipe(delay(5000));
          }
          return next(req);
        }
      ])

    ),
  ]
};
