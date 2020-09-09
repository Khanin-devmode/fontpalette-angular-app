import {Injectable} from '@angular/core';
import * as tinyColor from 'tinycolor2';
import {PaletteCombination} from './+store/fontmatch.model';
@Injectable({
  providedIn: 'root'
})
export class AppUtilService {

  constructor() {
  }

  groupArray(objectArray: {}[], groupOf: number): any[] {

    const chunks = [];
    let i = 0;

    while (i < objectArray.length) {
      chunks.push(objectArray.slice(i, i += groupOf));
    }

    return chunks;

  }

  genMonoColor(hexColor: string): string[] {
    return tinyColor(hexColor).monochromatic(90).map(t => t.toHexString());
  }

  getSplitColor(hexColor: string): string[] {
    return tinyColor(hexColor).splitcomplement().map(t => t.toHexString());
  }

  getTriadColor(hexColor: string): string[] {
    return tinyColor(hexColor).triad().map(t => t.toHexString());
  }

  getTetradColor(hexColor: string): string[] {
    return tinyColor(hexColor).tetrad().map(t => t.toHexString());
  }

  getComplementColor(hexColor: string): string {
    return tinyColor(hexColor).complement().toHexString();
  }

  getPaletteCombination(palette: string[]): PaletteCombination[]{
    const combinationArray: PaletteCombination[] = [];
    palette.forEach((bgColor, bgIndex) => {
      palette.forEach((fontColor, fontIndex) => {
        if (fontColor !== bgColor){

          const combination: PaletteCombination = {
            selectedFontIndex: fontIndex,
            selectedBgIndex: bgIndex,
            fontColor,
            bgColor
          };

          combinationArray.push(combination);
        }
      });
    });

    return combinationArray;
  }

  getReadableColor(bgColor:string):string{
    return tinyColor.mostReadable(bgColor,['#f4f4f4','#141414']).toHexString();
  }


}
