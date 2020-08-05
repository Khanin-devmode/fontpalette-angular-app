import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../+store/fontmatch.reducer";
import {Observable} from "rxjs";
import {AppUtilService} from "../../app.util.service";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-font-selection-area',
  templateUrl: './font-selection-area.component.html',
  styleUrls: ['./font-selection-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FontSelectionAreaComponent implements OnInit {

  $googleFontList: Observable<{}[]>;
  $displayText: Observable<string>;
  $fontSize:Observable<number>;
  $fontColor:Observable<string>;
  $selectedBgColor:Observable<string>;
  $selectedFont:Observable<string>;
  $arrayPalette:Observable<string[]>
  $fontColorIndex:Observable<number>
  $bgColorIndex:Observable<number>

  constructor(private store:Store<AppState>,
              public util:AppUtilService,
              public breakpointObserver:BreakpointObserver

  ) {

    this.$googleFontList = this.store.select(state => state.fontMatch.googleFontList);
    this.$displayText = this.store.select(state => state.fontMatch.previewText);
    this.$fontSize = this.store.select(state => state.fontMatch.fontSize);
    this.$fontColor = this.store.select(state=>state.fontMatch.color1);
    this.$selectedBgColor = this.store.select(state=>state.fontMatch.selectedBgColor);
    this.$selectedFont = this.store.select(state => state.fontMatch.selectedFontFamily);
    this.$arrayPalette = this.store.select(state=>state.fontMatch.arrayPalette);
    this.$fontColorIndex = this.store.select(state=>state.fontMatch.fontColorIndex);
    this.$bgColorIndex = this.store.select(state=>state.fontMatch.bgColorIndex);


  }

  ngOnInit(): void {


  }

}
