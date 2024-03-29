import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState, initialState} from '../../+store/fontmatch.reducer';
import {Observable} from 'rxjs';
import {
  selectBgColor, selectFontFamily,
  selectFontColor, updateArrayPalette,
  updateFontSize, updateFontStyle, updateFontAlign,
} from '../../+store/fontmatch.actions';
import {AppService} from '../../app.service';
import {AppUtilService} from "../../app.util.service";

@Component({
  selector: 'app-customize-area',
  templateUrl: './customize-area.component.html',
  styleUrls: ['./customize-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CustomizeAreaComponent implements OnInit,OnDestroy {

  $fontSize: Observable<number>;
  $selectedFont: Observable<string>;
  $fontColorIndex: Observable<number>;
  $bgColorIndex: Observable<number>;
  $arrayPalette: Observable<string[]>;
  $googleFontList: Observable<{}[]>;
  $fontStyleName: Observable<string>;
  $fontAlign: Observable<string>;
  readableColorSub: any;
  readableColorArray : string[] = [];

  fontSizeList = [8, 12, 14, 20, 24, 32, 40, 64, 96, 120];

  constructor(
    private store: Store<AppState>,
    private appService: AppService,
    public util:AppUtilService
  ) {

    this.$fontSize = this.store.select(state => state.fontMatch.fontSize);
    this.$selectedFont = this.store.select(state => state.fontMatch.selectedFontFamily);
    this.$arrayPalette = this.store.select(state => state.fontMatch.arrayPalette);
    this.$fontColorIndex = this.store.select(state => state.fontMatch.fontColorIndex);
    this.$bgColorIndex = this.store.select(state => state.fontMatch.bgColorIndex);
    this.$googleFontList = this.store.select(state => state.fontMatch.googleFontList);
    this.$fontStyleName = this.store.select(state => state.fontMatch.fontStyleName);
    this.$fontAlign = this.store.select(state => state.fontMatch.fontAlign);

    this.readableColorSub = this.$arrayPalette.subscribe(palette =>{
      this.readableColorArray = palette.map(color => this.util.getReadableColor(color));
    });


  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.readableColorSub.unsubscribe();
  }

  updateFontSize(fontSize: number){
    this.store.dispatch(updateFontSize({inputFontSize: fontSize}));
  }

  updatePalette(e, i: number){
    this.store.dispatch(updateArrayPalette({color: e, index: i}));
  }

  selectFontColor(index: number){
    this.store.dispatch(selectFontColor({colorIndex: index}));
  }

  selectBgColor(index: number){
    this.store.dispatch(selectBgColor({colorIndex: index}));
  }

  selectFontFamily(fontFamily){
    this.appService.selectFontFamily(fontFamily);
    // this.store.dispatch(selectFontFamily({fontFamily:fontFamily}))
  }

  changeFontStyle(fontStyleName){

    console.log(fontStyleName);

    if (fontStyleName == 'bold'){
      this.store.dispatch(updateFontStyle({fontStyleName, fontStyle: 'normal', fontWeight: 'bold'}));
    }else if (fontStyleName == 'italic'){
      this.store.dispatch(updateFontStyle({fontStyleName, fontStyle: 'italic', fontWeight: 'normal'}));
    }else if (fontStyleName == 'bold italic'){
      this.store.dispatch(updateFontStyle({fontStyleName, fontStyle: 'italic', fontWeight: 'bold'}));
    }else{// default as regular
      this.store.dispatch(updateFontStyle({fontStyleName, fontStyle: 'normal', fontWeight: 'normal'}));
    }

  }

  changeFontAlign(alignPosition: string){
    this.store.dispatch(updateFontAlign({fontAlign: alignPosition}));
  }

}
