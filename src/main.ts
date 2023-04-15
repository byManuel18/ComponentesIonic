import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

// bootstrapApplication(AppComponent, {
//   providers: [
//     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
//     importProvidersFrom(IonicModule.forRoot({})),
//     provideRouter(routes),
//     AppModule
//   ],
// });
platformBrowserDynamic().bootstrapModule(AppModule).catch(console.log);
