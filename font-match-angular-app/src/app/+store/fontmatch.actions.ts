import {createAction, props} from '@ngrx/store';

export const updateText = createAction('UPDATE_TEXT',props<{inputText:string}>());
export const selectFont = createAction('SELECT_FONT',props<{fontFamily:string}>());
export const updateFontSize = createAction('UPDATE_FONT_SIZE',props<{inputFontSize:number}>())
export const updateMonoBgColors = createAction('UPDATE_MONO_BG_COLOR',props<{monoColors:string[]}>())
export const updateSplitCompColors = createAction('UPDATE_SPLIT_COMP_COLORS',props<{splitCompColors:string[]}>())
export const updateTriadColors = createAction('UPDATE_TRIAD_COLORS',props<{triadColors:string[]}>())
export const updateTetradColors = createAction('UPDATE_TETRAD_COLORS',props<{tetradColors:string[]}>())
export const updateCompColor = createAction('UPDATE_COMP_COLOR',props<{compColor:string}>())
export const fetchGoogleFontStart = createAction('FETCH_GOOGLE_FONTS_START')
export const fetchGoogleFontSuccess = createAction('FETCH_GOOGLE_FONTS_SUCCESS',props<{fontList:{}[]}>())
export const fetchGoogleFontError = createAction('FETCH_GOOGLE_FONTS_ERROR')
export const selectFontColor = createAction('SELECT_FONT_COLOR',props<{colorIndex:number}>())
export const selectBgColor = createAction('SELEECT_BG_COLOR',props<{colorIndex:number}>())
export const updateArrayPalette = createAction('UPDATE_ARRAY_PALETTE',props<{color:string,index:number}>())
