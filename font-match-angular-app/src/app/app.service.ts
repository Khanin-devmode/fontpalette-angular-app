import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./+store/fontmatch.reducer";
import {fetchGoogleFontSuccess} from "./+store/fontmatch.actions";
import * as WebFont from 'webfontloader';
import {AppUtilService} from "./app.util.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  loadedGoogleFont:string[] =[];

  constructor(private store: Store<AppState>,
              private util:AppUtilService
  ) {

  }

  fetchGoogleFonts() {

    const self = this;

    let googleFontFamilyList:string[];

    //fetch end point
    // https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC-lyWoKHEk_O1POin-c-MwpU468Vcyw-4
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC-lyWoKHEk_O1POin-c-MwpU468Vcyw-4&sort=popularity')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {

        console.log(data.items);

        googleFontFamilyList = data.items.map(item => item.family);
        // self.loadWebFonts(googleFontFamilyList);

        console.log(self.util.groupArray(data.items,3));
        self.store.dispatch(fetchGoogleFontSuccess({fontList: self.util.groupArray(data.items,3)}))

      });

  }

  loadGoogleFont(googleFont:string){

    if(this.loadedGoogleFont.includes(googleFont)){

      // console.log(`already has font: ${googleFont}`)

    }else{

      // console.log(`loading font: ${googleFont}`)
      this.loadedGoogleFont.push(googleFont);
      return WebFont.load({
        google: {
          families: [googleFont]
        }
      });

    }
  }

}
