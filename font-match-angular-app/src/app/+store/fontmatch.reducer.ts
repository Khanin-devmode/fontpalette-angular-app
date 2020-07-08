import {createReducer, on} from '@ngrx/store';
import {
  fetchGoogleFontSuccess,
  updateFontColor,
  updateFontSize,
  updatePreviewBg,
  updateText
} from './fontmatch.actions';

export interface FontMatch {
  displayText:string
  fontSize:number
  selectedBgColor:string
  selectedFontColor:string
  googleFontList: {}[]
}

export interface AppState {
  readonly fontMatch:FontMatch
}

export const initialState:FontMatch = {
  displayText:'Find your fonts in colors',
  fontSize:40,
  selectedBgColor:'#33658A',
  selectedFontColor:'#ffffff',
  googleFontList:[]
};

const _fontMatchReducer = createReducer(initialState,
  on(updateText, (state,{inputText}) => ({...state, displayText: inputText})),
  on(updateFontSize, (state,{inputFontSize}) => ({...state, fontSize: inputFontSize})),
  on(fetchGoogleFontSuccess, (state,{fontList}) => ({...state, googleFontList: fontList})),
  on(updatePreviewBg, (state,{bgColor}) => ({...state, selectedBgColor: bgColor})),
  on(updateFontColor, (state,{fontColor}) => ({...state, selectedFontColor: fontColor})),
);

export function fontMatchReducer(state, action) {
  return _fontMatchReducer(state, action);
}
