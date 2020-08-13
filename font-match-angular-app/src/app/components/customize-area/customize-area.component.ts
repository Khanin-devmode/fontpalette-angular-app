import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState, initialState} from "../../+store/fontmatch.reducer";
import {Observable} from "rxjs";
import {
  selectBgColor, selectFontFamily,
  selectFontColor, updateArrayPalette,
  updateFontSize, updateFontStyle,
} from "../../+store/fontmatch.actions";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-customize-area',
  templateUrl: './customize-area.component.html',
  styleUrls: ['./customize-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CustomizeAreaComponent implements OnInit {

  $fontSize: Observable<number>;
  $selectedFont:Observable<string>;
  $fontColorIndex:Observable<number>;
  $bgColorIndex:Observable<number>;
  $arrayPalette:Observable<string[]>;
  $googleFontList:Observable<{}[]>;
  $fontStyleName:Observable<string>;

  fontSizeList = [8,12,14,20,24,32,40,64,96,120];

  constructor(
    private store:Store<AppState>,
    private appService:AppService
  ) {

    this.$fontSize = this.store.select(state=>state.fontMatch.fontSize);
    this.$selectedFont = this.store.select(state=>state.fontMatch.selectedFontFamily);
    this.$arrayPalette = this.store.select(state=>state.fontMatch.arrayPalette)
    this.$fontColorIndex = this.store.select(state => state.fontMatch.fontColorIndex);
    this.$bgColorIndex = this.store.select(state => state.fontMatch.bgColorIndex);
    this.$googleFontList = this.store.select(state => state.fontMatch.googleFontList);
    this.$fontStyleName = this.store.select(state => state.fontMatch.fontStyleName)

  }

  ngOnInit(): void {

  }

  updateFontSize(fontSize:number){
    this.store.dispatch(updateFontSize({inputFontSize:fontSize}));
  }

  updatePalette(e,i:number){
    this.store.dispatch(updateArrayPalette({color:e,index:i}));
  }

  selectFontColor(index:number){
    this.store.dispatch(selectFontColor({colorIndex:index}));
  }

  selectBgColor(index:number){
    this.store.dispatch(selectBgColor({colorIndex:index}));
  }

  selectFontFamily(fontFamily){
    this.appService.selectFontFamily(fontFamily);
    // this.store.dispatch(selectFontFamily({fontFamily:fontFamily}))
  }

  changeFontStyle(fontStyleName){

    console.log(fontStyleName);

    if(fontStyleName == 'bold'){
      this.store.dispatch(updateFontStyle({fontStyleName:fontStyleName,fontStyle:'normal',fontWeight:'bold'}))
    }else if(fontStyleName == 'italic'){
      this.store.dispatch(updateFontStyle({fontStyleName:fontStyleName,fontStyle:'italic',fontWeight:'normal'}))
    }else if(fontStyleName == 'bold italic'){
      this.store.dispatch(updateFontStyle({fontStyleName:fontStyleName,fontStyle:'italic',fontWeight:'bold'}))
    }else{//default as regular
      this.store.dispatch(updateFontStyle({fontStyleName:fontStyleName,fontStyle:'normal',fontWeight:'normal'}))
    }

  }

}
