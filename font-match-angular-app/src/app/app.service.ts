import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./+store/fontmatch.reducer";
import {fetchGoogleFontSuccess} from "./+store/fontmatch.actions";
import * as WebFont from 'webfontloader';
import {AppUtilService} from "./app.util.service";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  loadedGoogleFont:string[] =[];
  $googleFontList: Observable<{}[]>
  googleFontList: {}[] = [];

  viewportSize : 'xs'|'sm'|'md'|'lg'|'xl' = 'md';

  constructor(private store: Store<AppState>,
              private util:AppUtilService,
              private breakpointObserver:BreakpointObserver
  ) {

    this.$googleFontList = this.store.select(state => state.fontMatch.googleFontList);

    breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
      if(result.matches){
        this.viewportSize = 'xs';
        this.store.dispatch(fetchGoogleFontSuccess({fontList: this.util.groupArray(this.googleFontList,this.getCardCol(this.viewportSize))}))
      }
    });
    breakpointObserver.observe([Breakpoints.Small]).subscribe(result => {
      if(result.matches){
        this.viewportSize = 'sm';
        this.store.dispatch(fetchGoogleFontSuccess({fontList: this.util.groupArray(this.googleFontList,this.getCardCol(this.viewportSize))}))
      }
    });
    breakpointObserver.observe([Breakpoints.Medium]).subscribe(result => {
      if(result.matches){
        this.viewportSize = 'md';
        this.store.dispatch(fetchGoogleFontSuccess({fontList: this.util.groupArray(this.googleFontList,this.getCardCol(this.viewportSize))}))
      }
    });
    breakpointObserver.observe([Breakpoints.Large]).subscribe(result => {
      if(result.matches){
        this.viewportSize = 'lg';
        this.store.dispatch(fetchGoogleFontSuccess({fontList: this.util.groupArray(this.googleFontList,this.getCardCol(this.viewportSize))}))
      }
    });
    breakpointObserver.observe([Breakpoints.XLarge]).subscribe(result => {
      if(result.matches){
        this.viewportSize = 'xl';
        this.store.dispatch(fetchGoogleFontSuccess({fontList: this.util.groupArray(this.googleFontList,this.getCardCol(this.viewportSize))}))
      }
    });

  }

  fetchGoogleFonts() {

    const self = this;

    //fetch end point
    // https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC-lyWoKHEk_O1POin-c-MwpU468Vcyw-4
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC-lyWoKHEk_O1POin-c-MwpU468Vcyw-4&sort=popularity')
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {

        self.googleFontList = data.items;
        self.store.dispatch(fetchGoogleFontSuccess({fontList: self.util.groupArray(self.googleFontList,self.getCardCol(self.viewportSize))}))

      });

  }

  loadGoogleFont(googleFont:string){

    //NOTE: CHECK WHETHER FONT IS ALREADY LOADED.
    if(this.loadedGoogleFont.includes(googleFont)){

      // console.log(`already has font: ${googleFont}`)

    }else{

      // console.log(`loading font: ${googleFont}`)
      this.loadedGoogleFont.push(googleFont);
      return WebFont.load({
        google: {
          families: [googleFont]
        }
      });

    }
  }

  getCardCol(view){
    return view == 'xs'? 1 : view == 'sm'? 2 : view == 'md'? 3 : view == 'lg'? 4 : view == 'xl'? 4: 3;
  }

}
