import {createReducer, on} from '@ngrx/store';
import {updateText} from './fontmatch.actions';

export interface FontMatch {
  displayText:string
}

export interface AppState {
  readonly fontMatch:FontMatch
}

export const fontMatchInitialState:FontMatch = {
  displayText:'Match your fonts in colours',
};


const _fontMatchReducer = createReducer(fontMatchInitialState,
  on(updateText, (state,{inputText}) => ({displayText: inputText})),
);

export function fontMatchReducer(state, action) {
  return _fontMatchReducer(state, action);
}
