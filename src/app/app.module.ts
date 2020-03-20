import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CameraComponent } from './components/camera/camera.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonNavComponent } from './components/button-nav/button-nav.component';
import { PictureComponent } from './components/picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    HeaderComponent,
    ButtonNavComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
