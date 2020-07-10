import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../+store/fontmatch.reducer";

@Component({
  selector: 'app-bg-selection-area',
  templateUrl: './bg-selection-area.component.html',
  styleUrls: ['./bg-selection-area.component.scss']
})
export class BgSelectionAreaComponent implements OnInit {

  $previewText: Observable<string>;
  $selectedFontFamily : Observable<string>;
  $selectedFontColor : Observable<string>;
  $monoColor: Observable<string[]>;

  constructor(private store:Store<AppState>) {

    this.$previewText = this.store.select(state => state.fontMatch.previewText);
    this.$selectedFontFamily = this.store.select(state => state.fontMatch.selectedFontFamily);
    this.$selectedFontColor = this.store.select(state => state.fontMatch.selectedFontColor);
    this.$monoColor = this.store.select(state => state.fontMatch.monoBgColor);

  }

  ngOnInit(): void {


  }

}
