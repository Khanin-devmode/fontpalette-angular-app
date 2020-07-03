import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../+store/fontmatch.reducer";
import {Observable} from "rxjs";
import {updateFontSize} from "../../+store/fontmatch.actions";

@Component({
  selector: 'app-customize-area',
  templateUrl: './customize-area.component.html',
  styleUrls: ['./customize-area.component.scss']
})
export class CustomizeAreaComponent implements OnInit {

  $fontSize: Observable<number>;
  fontSizeListMenu = [8,12,14,20,24,32,40,64,96,120,184,280]

  constructor(private store:Store<AppState>) {
    this.$fontSize = this.store.select(state=>state.fontMatch.fontSize);
  }

  ngOnInit(): void {
  }

  updateFontSize(fontSize:number){
    this.store.dispatch(updateFontSize({inputFontSize:fontSize}));
  }

}
