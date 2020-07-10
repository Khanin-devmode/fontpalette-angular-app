import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState, initialState} from "../../+store/fontmatch.reducer";
import {Observable} from "rxjs";
import {updateFontColor, updateFontSize, updateMonoBgColor, updatePreviewBg} from "../../+store/fontmatch.actions";
import {AppUtilService} from "../../app.util.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customize-area',
  templateUrl: './customize-area.component.html',
  styleUrls: ['./customize-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CustomizeAreaComponent implements OnInit {

  $fontSize: Observable<number>;
  $selectedFont:Observable<string>;

  fontSizeListMenu = [8,12,14,20,24,32,40,64,96,120,184,280];

  public arrayColors: any = {
    bgColor: initialState.selectedBgColor,
    fontColor: initialState.selectedFontColor,
    color3: '',
    color4: '',
  };

  constructor(
    private store:Store<AppState>,
    private util:AppUtilService,
    private  route:Router
  ) {
    this.$fontSize = this.store.select(state=>state.fontMatch.fontSize);
    this.$selectedFont = this.store.select(state=>state.fontMatch.selectedFontFamily);
  }

  ngOnInit(): void {
  }

  updateFontSize(fontSize:number){
    this.store.dispatch(updateFontSize({inputFontSize:fontSize}));
  }

  updateBgColor(){

    const bgColor = this.arrayColors.bgColor

    this.store.dispatch(updatePreviewBg({bgColor:bgColor}));
    this.store.dispatch(updateMonoBgColor({monoColors:this.util.genMonoColor(bgColor)}))

  }

  updateFontColor(){
    this.store.dispatch(updateFontColor({fontColor:this.arrayColors.fontColor}));
  }

  navChildOutlet(e:number){

    //To support multiple tab in future
    if(e == 0){
      this.route.navigate(['/font-select']);
    }else if (e ==1){
      this.route.navigate(['/bg-select']);
    }else{
      //default if fail
      this.route.navigate(['/font-select']);
    }

  }

}
