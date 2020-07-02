import {createReducer, on} from '@ngrx/store';
import {updateText} from './fontmatch.actions';

export interface FontMatch {
  displayText:string
}

export interface AppState {
  readonly fontMatch:FontMatch
}

export const initialState:FontMatch = {
  displayText:'Match your fonts in colours',
};


const _fontMatchReducer = createReducer(initialState,
  on(updateText, (state,{inputText}) => ({...state, displayText: inputText})),
);

export function fontMatchReducer(state, action) {
  return _fontMatchReducer(state, action);
}
