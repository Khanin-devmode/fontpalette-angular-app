import {Component, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState, initialState} from "../../+store/fontmatch.reducer";
import {updateText} from "../../+store/fontmatch.actions";

@Component({
  selector: 'app-text-preview',
  templateUrl: './text-preview.component.html',
  styleUrls: ['./text-preview.component.scss'],
})

export class TextPreviewComponent{

  $previewText:Observable<string>;
  $fontFamily:Observable<string>;
  $fontSize:Observable<number>;
  $activeArrayPalette:Observable<string[]>;
  $fontColorIndex:Observable<number>;
  $bgColorIndex:Observable<number>;
  $fontColor:Observable<string>

  $activeObjPalette:Observable<{}>
  $fontColorMap:Observable<string>
  $bgColorMap:Observable<string>

  constructor(private  store:Store<AppState>) {
    this.$previewText = this.store.select(state => state.fontMatch.previewText);
    this.$fontFamily = this.store.select(state => state.fontMatch.selectedFontFamily)
    this.$fontSize = this.store.select(state => state.fontMatch.fontSize);
    this.$activeArrayPalette = this.store.select(state=>state.fontMatch.arrayPalette);
    this.$fontColorIndex = this.store.select(state=>state.fontMatch.fontColorIndex);
    this.$bgColorIndex = this.store.select(state => state.fontMatch.bgColorIndex);
    this.$fontColor = this.store.select(state => state.fontMatch.color1);
    this.$activeObjPalette = this.store.select(state=>state.fontMatch.objPalette);
    this.$fontColorMap = this.store.select(state => state.fontMatch.fontColorMap);
    this.$bgColorMap = this.store.select(state => state.fontMatch.bgColorMap);
  }

  updateText(e){
    console.log(e.target.value);
    if(e.target.value){
      this.store.dispatch(updateText({inputText:e.target.value}))
    }else{
      this.store.dispatch(updateText({inputText:initialState.previewText}))
    }
  }

}
