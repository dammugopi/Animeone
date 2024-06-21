import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ActionComponent } from './components/action/action.component';
import { RomanceComponent } from './components/romance/romance.component';
import { FantacyComponent } from './components/fantacy/fantacy.component';
import { SciFiComponent } from './components/sci-fi/sci-fi.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FeedbackComponent } from './components/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActionComponent,
    RomanceComponent,
    FantacyComponent,
    SciFiComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
