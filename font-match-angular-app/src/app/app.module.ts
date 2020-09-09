import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MainComponent } from './pages/main/main.component';
import { TextPreviewComponent } from './components/text-preview/text-preview.component';
import { CustomizeAreaComponent } from './components/customize-area/customize-area.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { FontSelectionAreaComponent } from './components/font-selection-area/font-selection-area.component';
import {FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {fontMatchReducer} from './+store/fontmatch.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { FontCardComponent } from './components/font-card/font-card.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CardRowComponent } from './components/card-row/card-row.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {ColorPickerModule} from 'ngx-color-picker';
import { BgSelectionAreaComponent } from './components/bg-selection-area/bg-selection-area.component';
import { BgCardComponent } from './components/bg-card/bg-card.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TextPreviewComponent,
    CustomizeAreaComponent,
    FontSelectionAreaComponent,
    FontCardComponent,
    CardRowComponent,
    BgSelectionAreaComponent,
    BgCardComponent,
    AboutComponent
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
    StoreModule.forRoot({fontMatch: fontMatchReducer}, {}),
    StoreDevtoolsModule.instrument({
      name: 'Font match store',
      maxAge: 10
    }),
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    ScrollingModule,
    MatGridListModule,
    ColorPickerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
