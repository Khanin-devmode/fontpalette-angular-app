import {Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState, initialState} from '../../+store/fontmatch.reducer';
import {reset, updateText} from '../../+store/fontmatch.actions';

@Component({
  selector: 'app-text-preview',
  templateUrl: './text-preview.component.html',
  styleUrls: ['./text-preview.component.scss'],
})

export class TextPreviewComponent{

  $previewText: Observable<string>;
  $fontFamily: Observable<string>;
  $fontSize: Observable<number>;
  $activeArrayPalette: Observable<string[]>;
  $fontColorIndex: Observable<number>;
  $bgColorIndex: Observable<number>;
  $fontStyle: Observable<string>;
  $fontWeight: Observable<string>;
  $fontAlign: Observable<string>;

  constructor(private  store: Store<AppState>) {
    this.$previewText = this.store.select(state => state.fontMatch.previewText);
    this.$fontFamily = this.store.select(state => state.fontMatch.selectedFontFamily);
    this.$fontSize = this.store.select(state => state.fontMatch.fontSize);
    this.$activeArrayPalette = this.store.select(state => state.fontMatch.arrayPalette);
    this.$fontColorIndex = this.store.select(state => state.fontMatch.fontColorIndex);
    this.$bgColorIndex = this.store.select(state => state.fontMatch.bgColorIndex);
    this.$fontStyle = this.store.select(state => state.fontMatch.fontStyle);
    this.$fontWeight = this.store.select(state => state.fontMatch.fontWeight);
    this.$fontAlign = this.store.select(state => state.fontMatch.fontAlign);
  }

  updateText(e){
    if (e.target.value){
      this.store.dispatch(updateText({inputText: e.target.value}));
    }else{
      this.store.dispatch(updateText({inputText: initialState.previewText}));
    }
  }

  reset(){
    this.store.dispatch(reset());
  }

}
