import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState, initialState} from "../../+store/fontmatch.reducer";
import {Observable} from "rxjs";
import {updateFontColor, updateFontSize, updatePreviewBg} from "../../+store/fontmatch.actions";

@Component({
  selector: 'app-customize-area',
  templateUrl: './customize-area.component.html',
  styleUrls: ['./customize-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CustomizeAreaComponent implements OnInit {

  $fontSize: Observable<number>;
  $

  fontSizeListMenu = [8,12,14,20,24,32,40,64,96,120,184,280];

  public arrayColors: any = {
    bgColor: initialState.selectedBgColor,
    fontColor: initialState.selectedFontColor,
    color3: '',
    color4: '',
  };

  constructor(private store:Store<AppState>) {
    this.$fontSize = this.store.select(state=>state.fontMatch.fontSize);
  }

  ngOnInit(): void {
  }

  updateFontSize(fontSize:number){
    this.store.dispatch(updateFontSize({inputFontSize:fontSize}));
  }

  updateBgColor(){
    this.store.dispatch(updatePreviewBg({bgColor:this.arrayColors.bgColor}));
  }

  updateFontColor(){
    this.store.dispatch(updateFontColor({fontColor:this.arrayColors.fontColor}));

  }

}
