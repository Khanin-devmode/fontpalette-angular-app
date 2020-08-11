import {createReducer, on} from '@ngrx/store';
import {
  fetchGoogleFontSuccess,
  selectBgColor,
  selectFont,
  selectFontColor,
  updateArrayPalette,
  updateCompColor,
  updateFontSize,
  updateMonoBgColors,
  updateSplitCompColors,
  updateTetradColors,
  updateText,
  updateTriadColors
} from './fontmatch.actions';

export interface FontMatch {
  previewText:string
  fontSize:number
  selectedFontFamily:string
  groupedFontList: {}[]
  monoBgColor:string[]
  splitCompColors:string[]
  triadColors:string[]
  tetradColors:string[]
  compColor:string
  arrayPalette:string[],
  fontColorIndex: number,
  bgColorIndex: number
}

export interface AppState {
  readonly fontMatch:FontMatch
}

export const initialState:FontMatch = {
  previewText:'Find your fonts in colors',
  fontSize:40,
  selectedFontFamily:'Roboto',
  groupedFontList:[],
  monoBgColor:[],
  splitCompColors:[],
  triadColors:[],
  tetradColors:[],
  compColor:'',
  arrayPalette:['#5288F0','#99D0B9','#CAE2A2','#C15771','#FC8C8C'],
  fontColorIndex:0,
  bgColorIndex:1

};

const _fontMatchReducer = createReducer(initialState,
  on(updateText, (state,{inputText}) => ({...state, previewText: inputText})),
  on(selectFont, (state,{fontFamily}) => ({...state, selectedFontFamily: fontFamily})),
  on(updateFontSize, (state,{inputFontSize}) => ({...state, fontSize: inputFontSize})),
  on(fetchGoogleFontSuccess, (state,{groupedFontList}) => ({...state, groupedFontList: groupedFontList})),
  on(updateMonoBgColors, (state, {monoColors}) => ({...state, monoBgColor: monoColors})),
  on(updateSplitCompColors, (state, {splitCompColors}) => ({...state, splitCompColors: splitCompColors})),
  on(updateTriadColors, (state, {triadColors}) => ({...state, triadColors: triadColors})),
  on(updateTetradColors, (state, {tetradColors}) => ({...state, tetradColors: tetradColors})),
  on(updateCompColor, (state, {compColor}) => ({...state, compColor: compColor})),
  on(selectFontColor, (state,{colorIndex}) => ({...state, fontColorIndex: colorIndex})),
  on(selectBgColor, (state,{colorIndex}) => ({...state, bgColorIndex: colorIndex})),
  on(updateArrayPalette, (state,{color,index}) => ({
    ...state,
    arrayPalette: [
      ...state.arrayPalette.slice(0,index),
      color,
      ...state.arrayPalette.slice(index+1)
    ]
  }))
);

export function fontMatchReducer(state, action) {
  return _fontMatchReducer(state, action);
}
