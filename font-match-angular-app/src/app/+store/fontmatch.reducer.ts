import {createReducer, on} from '@ngrx/store';
import {
  updateFontGroup,
  selectBgColor,
  selectFontFamily,
  selectFontColor,
  updateArrayPalette,
  updateCompColor,
  updateFontSize,
  updateMonoBgColors,
  updateSplitCompColors,
  updateTetradColors,
  updateText,
  updateTriadColors, fetchGoogleFontSuccess, reset, updateFontStyle, updateFontAlign
} from './fontmatch.actions';

export interface FontMatch {
  previewText:string
  fontSize:number
  selectedFontFamily:string
  googleFontList:{}[]
  groupedFontList: {}[]
  monoBgColor:string[]
  splitCompColors:string[]
  triadColors:string[]
  tetradColors:string[]
  compColor:string
  arrayPalette:string[],
  fontColorIndex: number,
  bgColorIndex: number,
  fontStyleName: 'regular'|'bold'|'italic'|'bold italic';
  fontStyle:'normal'|'italic',
  fontWeight:'normal'|'bold',
  fontAlign:'start'|'center'|'end'
  
}

export interface AppState {
  readonly fontMatch:FontMatch
}

export const initialState:FontMatch = {
  previewText:'Find your fonts in colors',
  fontSize:40,
  selectedFontFamily:'Roboto',
  googleFontList:[],
  groupedFontList:[],
  monoBgColor:[],
  splitCompColors:[],
  triadColors:[],
  tetradColors:[],
  compColor:'',
  arrayPalette:['#5288F0','#99D0B9','#CAE2A2','#C15771','#FC8C8C'],
  fontColorIndex:0,
  bgColorIndex:1,
  fontStyleName:'regular',
  fontStyle:'normal',
  fontWeight:'normal',
  fontAlign:'start'

};

const _fontMatchReducer = createReducer(initialState,
  on(updateText, (state,{inputText}) => ({...state, previewText: inputText})),
  on(selectFontFamily, (state, {fontFamily}) => ({...state, selectedFontFamily: fontFamily})),
  on(updateFontSize, (state,{inputFontSize}) => ({...state, fontSize: inputFontSize})),
  on(updateFontGroup, (state, {groupedFontList}) => ({...state, groupedFontList: groupedFontList})),
  on(fetchGoogleFontSuccess, (state, {googleFonts}) => ({...state, googleFontList: googleFonts})),
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
  })),
  // on(reset, (state) => (Object.assign(initialState))),
  on(reset, (state) => ({
    ...state,
    previewText:'Find your fonts in colors',
    fontSize:40,
    selectedFontFamily:'Roboto',
    arrayPalette:['#5288F0','#99D0B9','#CAE2A2','#C15771','#FC8C8C'],
    fontColorIndex:0,
    bgColorIndex:1,
    fontStyleName:'regular',
    fontStyle:'normal',
    fontWeight:'normal'
  })),
  on(updateFontStyle, (state,{fontStyleName,fontStyle,fontWeight}) => ({
    ...state,
    fontStyleName:fontStyleName,
    fontStyle:fontStyle,
    fontWeight:fontWeight 
  })),
  on(updateFontAlign, (state,{fontAlign}) =>({...state , fontAlign:fontAlign}))

);

export function fontMatchReducer(state, action) {
  return _fontMatchReducer(state, action);
}
