import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState, initialState} from "../../+store/fontmatch.reducer";
import {Observable} from "rxjs";
import {
  updateActivePalette,
  updateCompColor,
  updateFontColor,
  updateFontSize,
  updateMonoBgColors,
  updatePreviewBg,
  updateSplitCompColors, updateTetradColors, updateTriadColors
} from "../../+store/fontmatch.actions";
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

  tempPalette= ['#5288F0','#99D0B9','#CAE2A2','#C15771','#FC8C8C'];

  arrayColors: any = {
    bgColor: initialState.selectedBgColor,
    fontColor: initialState.selectedFontColor,
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

    const bgColor = this.arrayColors.bgColor
    this.store.dispatch(updateMonoBgColors({monoColors:this.util.genMonoColor(bgColor)}))
    this.store.dispatch(updateSplitCompColors({splitCompColors:this.util.getSplitColor(bgColor)}))
    this.store.dispatch(updateTriadColors({triadColors:this.util.getTriadColor(bgColor)}))
    this.store.dispatch(updateTetradColors({tetradColors:this.util.getTetradColor(bgColor)}))
    this.store.dispatch(updateCompColor({compColor:this.util.getComplementColor(bgColor)}))

  }

  updateFontSize(fontSize:number){
    this.store.dispatch(updateFontSize({inputFontSize:fontSize}));
  }

  updatePalette(){
    console.log('changing color');
    console.log(this.tempPalette);
    this.store.dispatch(updateActivePalette({colorPalette:this.tempPalette}))
  }

  updateBgColor(){

    const bgColor = this.arrayColors.bgColor

    this.store.dispatch(updatePreviewBg({bgColor:bgColor}));

    this.store.dispatch(updateMonoBgColors({monoColors:this.util.genMonoColor(bgColor)}))
    this.store.dispatch(updateSplitCompColors({splitCompColors:this.util.getSplitColor(bgColor)}))
    this.store.dispatch(updateTriadColors({triadColors:this.util.getTriadColor(bgColor)}))
    this.store.dispatch(updateTetradColors({tetradColors:this.util.getTetradColor(bgColor)}))
    this.store.dispatch(updateCompColor({compColor:this.util.getComplementColor(bgColor)}))

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
