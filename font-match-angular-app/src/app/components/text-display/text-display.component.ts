import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../+store/fontmatch.reducer";

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

}
