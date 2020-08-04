import {createAction, props} from '@ngrx/store';

export const updateText = createAction('UPDATE_TEXT',props<{inputText:string}>());
export const selectFont = createAction('SELECT_FONT',props<{fontFamily:string}>());
export const updateFontSize = createAction('UPDATE_FONT_SIZE',props<{inputFontSize:number}>())
export const updateFontColor = createAction('UPDATE_FONT_COLOR',props<{fontColor:string}>())
export const updatePreviewBg = createAction('UPDATE_PREVIEW_BG',props<{bgColor:string}>())
export const updateMonoBgColors = createAction('UPDATE_MONO_BG_COLOR',props<{monoColors:string[]}>())
export const updateSplitCompColors = createAction('UPDATE_SPLIT_COMP_COLORS',props<{splitCompColors:string[]}>())
export const updateTriadColors = createAction('UPDATE_TRIAD_COLORS',props<{triadColors:string[]}>())
export const updateTetradColors = createAction('UPDATE_TETRAD_COLORS',props<{tetradColors:string[]}>())
export const updateCompColor = createAction('UPDATE_COMP_COLOR',props<{compColor:string}>())
export const fetchGoogleFontStart = createAction('FETCH_GOOGLE_FONTS_START')
export const fetchGoogleFontSuccess = createAction('FETCH_GOOGLE_FONTS_SUCCESS',props<{fontList:{}[]}>())
export const fetchGoogleFontError = createAction('FETCH_GOOGLE_FONTS_ERROR')
export const updateActivePalette = createAction('UPDATE_ACTIVE_PALETTE',props<{colorPalette:string[]}>())
