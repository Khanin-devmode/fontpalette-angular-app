import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./+store/fontmatch.reducer";
import {fetchGoogleFontSuccess} from "./+store/fontmatch.actions";
import * as WebFont from 'webfontloader';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private store: Store<AppState>) {

  }

  fetchGoogleFonts() {

    const self = this;

    //fetch end point
    // https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC-lyWoKHEk_O1POin-c-MwpU468Vcyw-4
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC-lyWoKHEk_O1POin-c-MwpU468Vcyw-4&sort=popularity')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        console.log(data);
        self.store.dispatch(fetchGoogleFontSuccess({fontList: data.items}))

        self.loadWebFonts();

      });

  }

  loadWebFonts(){
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Droid Serif','Open Sans', 'Noto Sans JP']
      }
    });
  }


}
