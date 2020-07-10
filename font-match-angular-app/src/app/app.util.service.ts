import { Injectable } from '@angular/core';
import * as tinyColor from 'tinycolor2'

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

  genMonoColor(hexColor:string){
    return tinyColor(hexColor).monochromatic().map(t => t.toHexString());
  }

}
