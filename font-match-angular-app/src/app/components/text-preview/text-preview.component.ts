import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState, initialState} from "../../+store/fontmatch.reducer";
import {updateText} from "../../+store/fontmatch.actions";

@Component({
  selector: 'app-text-preview',
  templateUrl: './text-preview.component.html',
  styleUrls: ['./text-preview.component.scss']
})

export class TextPreviewComponent{

  $displayText:Observable<string>;
  $fontSize:Observable<number>;
  $fontColor:Observable<string>;
  $bgColor:Observable<string>;

  constructor(private  store:Store<AppState>) {
    this.$displayText = this.store.select(state => state.fontMatch.displayText);
    this.$fontSize = this.store.select(state => state.fontMatch.fontSize);
    this.$fontColor = this.store.select(state => state.fontMatch.selectedFontColor);
    this.$bgColor = this.store.select(state => state.fontMatch.selectedBgColor);
  }

  updateText(e){
    if(e.target.value){
      this.store.dispatch(updateText({inputText:e.target.value}))
    }else{
      this.store.dispatch(updateText({inputText:initialState.displayText}))
    }
  }

}
