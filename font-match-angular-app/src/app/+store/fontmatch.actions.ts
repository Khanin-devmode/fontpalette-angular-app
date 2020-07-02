import {createAction, props} from '@ngrx/store';

export const updateText = createAction('UPDATE_TEXT',props<{inputText:string}>());
