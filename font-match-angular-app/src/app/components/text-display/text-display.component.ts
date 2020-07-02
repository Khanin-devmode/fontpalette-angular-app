import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../+store/fontmatch.reducer";
import {updateText} from "../../+store/fontmatch.actions";

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss']
})
export class TextDisplayComponent implements OnInit {

  $displayText:Observable<string>;

  constructor(private  store:Store<AppState>) {
    this.$displayText = this.store.select(state => state.fontMatch.displayText);
  }

  ngOnInit(): void {

  }

  updateText(e){
    console.log(e.target.value);
    this.store.dispatch(updateText({inputText:e.target.value}))
  }

}
