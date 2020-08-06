import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../+store/fontmatch.reducer";
import {Observable} from "rxjs";
import {
  selectBgColor,
  selectFontColor, updateArrayPalette,
  updateFontSize,
} from "../../+store/fontmatch.actions";

@Component({
  selector: 'app-customize-area',
  templateUrl: './customize-area.component.html',
  styleUrls: ['./customize-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CustomizeAreaComponent implements OnInit {

  $fontSize: Observable<number>;
  $selectedFont:Observable<string>;
  $fontColorIndex:Observable<number>;
  $bgColorIndex:Observable<number>
  $arrayPalette:Observable<string[]>

  fontSizeListMenu = [8,12,14,20,24,32,40,64,96,120,184,280];

  constructor(
    private store:Store<AppState>,
  ) {

    this.$fontSize = this.store.select(state=>state.fontMatch.fontSize);
    this.$selectedFont = this.store.select(state=>state.fontMatch.selectedFontFamily);
    this.$arrayPalette = this.store.select(state=>state.fontMatch.arrayPalette)
    this.$fontColorIndex = this.store.select(state => state.fontMatch.fontColorIndex);
    this.$bgColorIndex = this.store.select(state => state.fontMatch.bgColorIndex);

  }

  ngOnInit(): void {

  }

  updateFontSize(fontSize:number){
    this.store.dispatch(updateFontSize({inputFontSize:fontSize}));
  }

  updatePalette(e,i:number){
    this.store.dispatch(updateArrayPalette({color:e,index:i}));
  }

  selectFontColor(index:number){
    this.store.dispatch(selectFontColor({colorIndex:index}));
  }

  selectBgColor(index:number){
    this.store.dispatch(selectBgColor({colorIndex:index}));
  }

}
