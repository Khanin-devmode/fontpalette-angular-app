import {createReducer, on} from '@ngrx/store';
import {fetchGoogleFontSuccess, updateFontSize, updateText} from './fontmatch.actions';

export interface FontMatch {
  displayText:string
  fontSize:number
  googleFontList: {}[]
}

export interface AppState {
  readonly fontMatch:FontMatch
}

export const initialState:FontMatch = {
  displayText:'Find your fonts in colours',
  fontSize:40,
  googleFontList:[]
};

const _fontMatchReducer = createReducer(initialState,
  on(updateText, (state,{inputText}) => ({...state, displayText: inputText})),
  on(updateFontSize, (state,{inputFontSize}) => ({...state, fontSize: inputFontSize})),
  on(fetchGoogleFontSuccess, (state,{fontList}) => ({...state, googleFontList: fontList})),
);

export function fontMatchReducer(state, action) {
  return _fontMatchReducer(state, action);
}
