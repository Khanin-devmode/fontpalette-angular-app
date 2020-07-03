import {createAction, props} from '@ngrx/store';

export const updateText = createAction('UPDATE_TEXT',props<{inputText:string}>());
export const updateFontSize = createAction('UPDATE_FONT_SIZE',props<{inputFontSize:number}>())
