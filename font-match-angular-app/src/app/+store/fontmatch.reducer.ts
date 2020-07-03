import {createReducer, on} from '@ngrx/store';
import {updateFontSize, updateText} from './fontmatch.actions';

export interface FontMatch {
  displayText:string
  fontSize:number
}

export interface AppState {
  readonly fontMatch:FontMatch
}

export const initialState:FontMatch = {
  displayText:'Match your fonts in colours',
  fontSize:40
};

const _fontMatchReducer = createReducer(initialState,
  on(updateText, (state,{inputText}) => ({...state, displayText: inputText})),
  on(updateFontSize, (state,{inputFontSize}) => ({...state, fontSize: inputFontSize})),
);

export function fontMatchReducer(state, action) {
  return _fontMatchReducer(state, action);
}
