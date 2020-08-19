import {Injectable} from '@angular/core';
import * as tinyColor from 'tinycolor2'

@Injectable({
  providedIn: 'root'
})
export class AppUtilService {

  constructor() {
  }

  groupArray(objectArray: {}[], groupOf: number) {

    let chunks = [];
    let i = 0;

    while (i < objectArray.length) {
      chunks.push(objectArray.slice(i, i += groupOf))
    }

    return chunks;

  }

  genMonoColor(hexColor: string) {
    return tinyColor(hexColor).monochromatic(90).map(t => t.toHexString());
  }

  getSplitColor(hexColor: string) {
    return tinyColor(hexColor).splitcomplement().map(t => t.toHexString());
  }

  getTriadColor(hexColor: string) {
    return tinyColor(hexColor).triad().map(t => t.toHexString());
  }

  getTetradColor(hexColor: string) {
    return tinyColor(hexColor).tetrad().map(t => t.toHexString());
  }

  getComplementColor(hexColor: string) {
    return tinyColor(hexColor).complement().toHexString();
  }

  getPaletteCombination(palette:string[]){

    let paletteCombination= []

    palette.forEach(fontColor => {
      palette.forEach(bgColor =>{
        if(fontColor !== bgColor){
          paletteCombination.push([fontColor,bgColor])
        }
      })
    })

    return paletteCombination;
  }



}
