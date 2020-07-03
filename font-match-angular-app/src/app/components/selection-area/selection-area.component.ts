import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../+store/fontmatch.reducer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-selection-area',
  templateUrl: './selection-area.component.html',
  styleUrls: ['./selection-area.component.scss']
})
export class SelectionAreaComponent implements OnInit {

  $googleFontList: Observable<{}[]>;
  $displayText: Observable<string>;
  $fontSize:Observable<number>

  constructor(private store:Store<AppState>) {

    this.$googleFontList = this.store.select(state => state.fontMatch.googleFontList);
    this.$displayText = this.store.select(state => state.fontMatch.displayText);
    this.$fontSize = this.store.select(state => state.fontMatch.fontSize);

  }

  ngOnInit(): void {


  }

}
