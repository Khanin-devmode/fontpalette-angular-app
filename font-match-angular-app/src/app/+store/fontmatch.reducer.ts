import {createReducer, on} from '@ngrx/store';
import {
  fetchGoogleFontSuccess, selectFont, updateCompColor,
  updateFontColor,
  updateFontSize, updateMonoBgColors,
  updatePreviewBg, updateSplitCompColors, updateTetradColors,
  updateText, updateTriadColors
} from './fontmatch.actions';

export interface FontMatch {
  previewText:string
  fontSize:number
  selectedFontFamily:string
  selectedBgColor:string
  selectedFontColor:string
  googleFontList: {}[]
  monoBgColor:string[]
  splitCompColors:string[]
  triadColors:string[]
  tetradColors:string[]
  compColor:string
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
  monoBgColor:[],
  splitCompColors:[],
  triadColors:[],
  tetradColors:[],
  compColor:''

};

const _fontMatchReducer = createReducer(initialState,
  on(updateText, (state,{inputText}) => ({...state, previewText: inputText})),
  on(selectFont, (state,{fontFamily}) => ({...state, selectedFontFamily: fontFamily})),
  on(updateFontSize, (state,{inputFontSize}) => ({...state, fontSize: inputFontSize})),
  on(fetchGoogleFontSuccess, (state,{fontList}) => ({...state, googleFontList: fontList})),
  on(updatePreviewBg, (state,{bgColor}) => ({...state, selectedBgColor: bgColor})),
  on(updateMonoBgColors, (state, {monoColors}) => ({...state, monoBgColor: monoColors})),
  on(updateSplitCompColors, (state, {splitCompColors}) => ({...state, splitCompColors: splitCompColors})),
  on(updateTriadColors, (state, {triadColors}) => ({...state, triadColors: triadColors})),
  on(updateTetradColors, (state, {tetradColors}) => ({...state, tetradColors: tetradColors})),
  on(updateCompColor, (state, {compColor}) => ({...state, compColor: compColor})),
  on(updateFontColor, (state,{fontColor}) => ({...state, selectedFontColor: fontColor})),
);

export function fontMatchReducer(state, action) {
  return _fontMatchReducer(state, action);
}
