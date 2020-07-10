import {createReducer, on} from '@ngrx/store';
import {
  fetchGoogleFontSuccess, selectFont,
  updateFontColor,
  updateFontSize, updateMonoBgColor,
  updatePreviewBg,
  updateText
} from './fontmatch.actions';

export interface FontMatch {
  previewText:string
  fontSize:number
  selectedFontFamily:string
  selectedBgColor:string
  selectedFontColor:string
  googleFontList: {}[]
  monoBgColor:string[]
}

export interface AppState {
  readonly fontMatch:FontMatch
}

export const initialState:FontMatch = {
  previewText:'Find your fonts in colors',
  fontSize:40,
  selectedFontFamily:'Roboto',
  selectedBgColor:'#33658A',
  selectedFontColor:'#ffffff',
  googleFontList:[],
  monoBgColor:[]
};

const _fontMatchReducer = createReducer(initialState,
  on(updateText, (state,{inputText}) => ({...state, previewText: inputText})),
  on(selectFont, (state,{fontFamily}) => ({...state, selectedFontFamily: fontFamily})),
  on(updateFontSize, (state,{inputFontSize}) => ({...state, fontSize: inputFontSize})),
  on(fetchGoogleFontSuccess, (state,{fontList}) => ({...state, googleFontList: fontList})),
  on(updatePreviewBg, (state,{bgColor}) => ({...state, selectedBgColor: bgColor})),
  on(updateMonoBgColor, (state,{monoColors}) => ({...state, monoBgColor: monoColors})),
  on(updateFontColor, (state,{fontColor}) => ({...state, selectedFontColor: fontColor})),
);

export function fontMatchReducer(state, action) {
  return _fontMatchReducer(state, action);
}
