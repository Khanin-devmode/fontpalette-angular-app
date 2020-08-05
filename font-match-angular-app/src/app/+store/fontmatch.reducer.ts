import {createReducer, on} from '@ngrx/store';
import {
  fetchGoogleFontSuccess, selectBgColor, selectFont, selectFontColor, updateActivePalette, updateCompColor,
  updateFontColor,
  updateFontSize, updateMonoBgColors, updateObjPalette,
  updatePreviewBg, updateSplitCompColors, updateTetradColors,
  updateText, updateTriadColors
} from './fontmatch.actions';

export interface FontMatch {
  previewText:string
  fontSize:number
  selectedFontFamily:string
  selectedBgColor:string
  color1:string
  googleFontList: {}[]
  monoBgColor:string[]
  splitCompColors:string[]
  triadColors:string[]
  tetradColors:string[]
  compColor:string
  objPalette:ColorPalette
  fontColorMap:'color1'|'color2'|'color3'|'color4'|'color5',
  bgColorMap:'color1'|'color2'|'color3'|'color4'|'color5',
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
  selectedBgColor:'#33658A',
  color1:'#ffffff',
  googleFontList:[],
  monoBgColor:[],
  splitCompColors:[],
  triadColors:[],
  tetradColors:[],
  compColor:'',
  objPalette:{
    color1:'#5288F0',
    color2:'#99D0B9',
    color3:'#CAE2A2',
    color4:'#C15771',
    color5:'#FC8C8C'
  },
  fontColorMap:'color1',
  bgColorMap:'color2',
  arrayPalette:['#5288F0','#99D0B9','#CAE2A2','#C15771','#FC8C8C'],
  fontColorIndex:0,
  bgColorIndex:1

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
  on(updateFontColor, (state,{fontColor}) => ({...state, color1: fontColor})),
  on(updateObjPalette, (state,{newPalette}) => ({...state, objPalette: newPalette})),
  on(selectFontColor, (state,{colorIndex}) => ({...state, fontColorIndex: colorIndex})),
  on(selectBgColor, (state,{colorIndex}) => ({...state, bgColorIndex: colorIndex}))
  // on(updateActivePalette, (state,{colorPalette}) => ({...state, arrayPalette: colorPalette})),
);

export function fontMatchReducer(state, action) {
  return _fontMatchReducer(state, action);
}

export interface ColorPalette {
  color1:string;
  color2:string;
  color3:string;
  color4:string;
  color5:string;
}
