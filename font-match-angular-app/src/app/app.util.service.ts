import { Injectable } from '@angular/core';
import * as WebFont from 'webfontloader'

@Injectable({
  providedIn: 'root'
})
export class AppUtilService {

  constructor() { }

  groupArray(objectArray:{}[],groupOf:number){

    let chunks = [];
    let i = 0;

    while( i < objectArray.length){
      chunks.push(objectArray.slice(i, i += groupOf))
    }

    return chunks;

  }

  loadGoogleFont(googleFont){
    return WebFont.load({
      google: {
        families: [googleFont]
      }
    });
  }

}
