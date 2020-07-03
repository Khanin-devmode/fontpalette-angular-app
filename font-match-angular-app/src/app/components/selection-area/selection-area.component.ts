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

  $googleFontList: Observable<{}[]>

  constructor(private store:Store<AppState>) {

    this.$googleFontList = this.store.select(state => state.fontMatch.googleFontList)

  }

  ngOnInit(): void {


  }

}
