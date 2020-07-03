import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState, initialState} from "../../+store/fontmatch.reducer";
import {updateText} from "../../+store/fontmatch.actions";

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss']
})
export class TextDisplayComponent implements OnInit {

  $displayText:Observable<string>;
  $fontSize:Observable<number>;

  constructor(private  store:Store<AppState>) {
    this.$displayText = this.store.select(state => state.fontMatch.displayText);
    this.$fontSize = this.store.select(state => state.fontMatch.fontSize);

  }

  ngOnInit(): void {

  }

  updateText(e){
    if(e.target.value){
      this.store.dispatch(updateText({inputText:e.target.value}))
    }else{
      this.store.dispatch(updateText({inputText:initialState.displayText}))
    }
    // this.store.dispatch(updateText({inputText:e.target.value}))
  }

}
