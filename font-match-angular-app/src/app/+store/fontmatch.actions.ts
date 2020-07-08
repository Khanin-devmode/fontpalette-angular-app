import {createAction, props} from '@ngrx/store';

export const updateText = createAction('UPDATE_TEXT',props<{inputText:string}>());
export const updateFontSize = createAction('UPDATE_FONT_SIZE',props<{inputFontSize:number}>())
export const updateFontColor = createAction('UPDATE_FONT_COLOR',props<{fontColor:string}>())
export const updatePreviewBg = createAction('UPDATE_PREVIEW_BG',props<{bgColor:string}>())
export const fetchGoogleFontStart = createAction('FETCH_GOOGLE_FONTS_START')
export const fetchGoogleFontSuccess = createAction('FETCH_GOOGLE_FONTS_SUCCESS',props<{fontList:{}[]}>())
export const fetchGoogleFontError = createAction('FETCH_GOOGLE_FONTS_ERROR')
