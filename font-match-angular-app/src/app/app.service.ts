import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './+store/fontmatch.reducer';
import {fetchGoogleFontSuccess, selectFontFamily, updateFontGroup} from './+store/fontmatch.actions';
import * as WebFont from 'webfontloader';
import {AppUtilService} from './app.util.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {GoogleFontObj} from "./+store/fontmatch.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  loadedGoogleFont: string[] = [];
  $groupedFontList: Observable<{}[]>;
  googleFontList: GoogleFontObj[] = [];

  viewportSize: 'xs'|'sm'|'md'|'lg'|'xl' = 'md';

  constructor(private store: Store<AppState>,
              private util: AppUtilService,
              private breakpointObserver: BreakpointObserver
  ) {

    this.$groupedFontList = this.store.select(state => state.fontMatch.groupedFontList);

    breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
      if (result.matches){
        this.viewportSize = 'xs';
        this.store.dispatch(updateFontGroup({groupedFontList: this.util.groupArray(this.googleFontList, this.getCardCol(this.viewportSize))}));
      }
    });
    breakpointObserver.observe([Breakpoints.Small]).subscribe(result => {
      if (result.matches){
        this.viewportSize = 'sm';
        this.store.dispatch(updateFontGroup({groupedFontList: this.util.groupArray(this.googleFontList, this.getCardCol(this.viewportSize))}));
      }
    });
    breakpointObserver.observe([Breakpoints.Medium]).subscribe(result => {
      if (result.matches){
        this.viewportSize = 'md';
        this.store.dispatch(updateFontGroup({groupedFontList: this.util.groupArray(this.googleFontList, this.getCardCol(this.viewportSize))}));
      }
    });
    breakpointObserver.observe([Breakpoints.Large]).subscribe(result => {
      if (result.matches){
        this.viewportSize = 'lg';
        this.store.dispatch(updateFontGroup({groupedFontList: this.util.groupArray(this.googleFontList, this.getCardCol(this.viewportSize))}));
      }
    });
    breakpointObserver.observe([Breakpoints.XLarge]).subscribe(result => {
      if (result.matches){
        this.viewportSize = 'xl';
        this.store.dispatch(updateFontGroup({groupedFontList: this.util.groupArray(this.googleFontList, this.getCardCol(this.viewportSize))}));
      }
    });

  }

  getCardCol(view){
    return view == 'xs' ? 1 : view == 'sm' ? 2 : view == 'md' ? 3 : view == 'lg' ? 4 : view == 'xl' ? 4 : 3;
  }

  fetchGoogleFonts() {

    const self = this;

    // fetch end point
    // https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC-lyWoKHEk_O1POin-c-MwpU468Vcyw-4
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC-lyWoKHEk_O1POin-c-MwpU468Vcyw-4&sort=popularity')
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        self.googleFontList = data.items;
        self.store.dispatch(fetchGoogleFontSuccess({googleFonts: self.googleFontList}));
        self.store.dispatch(updateFontGroup({groupedFontList: self.util.groupArray(self.googleFontList, self.getCardCol(self.viewportSize))}));

      });

  }

  loadGoogleFont(googleFont: string){

    // NOTE: CHECK WHETHER FONT IS ALREADY LOADED.
    if (this.loadedGoogleFont.includes(googleFont)){

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

  selectFontFamily(fontFamily: string) {

    this.loadGoogleFont(fontFamily);
    this.store.dispatch(selectFontFamily({fontFamily}));

  }

  searchFont(name:string,category:string): void{

    if(category){

      let catFiltered = this.googleFontList.filter(fontObj => fontObj.category === category);
      this.filterName(catFiltered, name);

    }else{

      this.filterName(this.googleFontList,name);

    }

  }

  filterName(catFiltered:GoogleFontObj[],name):void{
    if(name.length > 1){
      let nameFiltered = catFiltered.filter(fontObj => fontObj.family.toLocaleLowerCase().includes(name.toLowerCase()));
      this.store.dispatch(updateFontGroup({groupedFontList: this.util.groupArray(nameFiltered, this.getCardCol(this.viewportSize))}));

    }else{
      this.store.dispatch(updateFontGroup({groupedFontList: this.util.groupArray(catFiltered, this.getCardCol(this.viewportSize))}));
    }
  }



}
