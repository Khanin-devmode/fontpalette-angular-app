import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import { MainComponent } from './pages/main/main.component';
import { TextDisplayComponent } from './components/text-display/text-display.component';
import { CustomizeAreaComponent } from './components/customize-area/customize-area.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import { SelectionAreaComponent } from './components/selection-area/selection-area.component';
import {FormsModule} from "@angular/forms";
import { StoreModule } from '@ngrx/store';
import {fontMatchReducer} from "./+store/fontmatch.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { FontDisplayComponent } from './components/font-display/font-display.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TextDisplayComponent,
    CustomizeAreaComponent,
    SelectionAreaComponent,
    FontDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    StoreModule.forRoot({fontMatch:fontMatchReducer},{}),
    StoreDevtoolsModule.instrument({
      name:'Font match store',
      maxAge: 10
    }),
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
