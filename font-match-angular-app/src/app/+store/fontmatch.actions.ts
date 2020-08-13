import {createAction, props} from '@ngrx/store';

export const updateText = createAction('UPDATE_TEXT',props<{inputText:string}>());
export const selectFontFamily = createAction('SELECT_FONT',props<{fontFamily:string}>());
export const updateFontSize = createAction('UPDATE_FONT_SIZE',props<{inputFontSize:number}>())
export const updateMonoBgColors = createAction('UPDATE_MONO_BG_COLOR',props<{monoColors:string[]}>());
export const updateSplitCompColors = createAction('UPDATE_SPLIT_COMP_COLORS',props<{splitCompColors:string[]}>());
export const updateTriadColors = createAction('UPDATE_TRIAD_COLORS',props<{triadColors:string[]}>());
export const updateTetradColors = createAction('UPDATE_TETRAD_COLORS',props<{tetradColors:string[]}>());
export const updateCompColor = createAction('UPDATE_COMP_COLOR',props<{compColor:string}>());
export const fetchGoogleFontStart = createAction('FETCH_GOOGLE_FONT_START');
export const fetchGoogleFontSuccess = createAction('FETCH_GOOGLE_FONT_SUCCESS',props<{googleFonts:{}[]}>());
export const updateFontGroup = createAction('UPDATE_FONT_GROUP',props<{groupedFontList:{}[]}>());
export const fetchGoogleFontError = createAction('FETCH_GOOGLE_FONTS_ERROR');
export const selectFontColor = createAction('SELECT_FONT_COLOR',props<{colorIndex:number}>());
export const selectBgColor = createAction('SELEECT_BG_COLOR',props<{colorIndex:number}>());
export const updateArrayPalette = createAction('UPDATE_ARRAY_PALETTE',props<{color:string,index:number}>());
export const reset = createAction('RESET');
export const updateFontStyle = createAction('UPDATE_FONT_STYLE', props<{fontStyleName:string,fontStyle:string,fontWeight:string}>());
