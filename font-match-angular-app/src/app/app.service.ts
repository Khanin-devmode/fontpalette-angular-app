import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./+store/fontmatch.reducer";
import {fetchGoogleFontSuccess} from "./+store/fontmatch.actions";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private store:Store<AppState>) {

    console.log('This is a log from service');

  }

  fetchGoogleFonts(){

    const self = this;
      //fetch end point
    // https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC-lyWoKHEk_O1POin-c-MwpU468Vcyw-4
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC-lyWoKHEk_O1POin-c-MwpU468Vcyw-4')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        console.log(data);

        self.store.dispatch(fetchGoogleFontSuccess({fontList:data.items}))

      });

  }




}
