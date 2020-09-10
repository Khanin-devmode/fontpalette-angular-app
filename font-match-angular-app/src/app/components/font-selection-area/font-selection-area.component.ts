import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../+store/fontmatch.reducer';
import {Observable} from 'rxjs';
import {AppUtilService} from '../../app.util.service';
import {PaletteCombination} from '../../+store/fontmatch.model';
import {selectBgColor, selectFontColor} from '../../+store/fontmatch.actions';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-font-selection-area',
  templateUrl: './font-selection-area.component.html',
  styleUrls: ['./font-selection-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FontSelectionAreaComponent implements OnInit {

  $groupedFontList: Observable<{}[]>;
  $displayText: Observable<string>;
  $fontSize: Observable<number>;
  $selectedFont: Observable<string>;
  $arrayPalette: Observable<string[]>;
  $fontColorIndex: Observable<number>;
  $bgColorIndex: Observable<number>;
  $fontStyle: Observable<string>;
  $fontWeight: Observable<string>;
  $fontAlign: Observable<string>;

  paletteCombination: PaletteCombination[] = [];

  searchInput = '';
  categoryInput = '';

  constructor(private store: Store<AppState>,
              public util: AppUtilService,
              private appService: AppService

  ) {

    this.$groupedFontList = this.store.select(state => state.fontMatch.groupedFontList);
    this.$displayText = this.store.select(state => state.fontMatch.previewText);
    this.$fontSize = this.store.select(state => state.fontMatch.fontSize);
    this.$selectedFont = this.store.select(state => state.fontMatch.selectedFontFamily);
    this.$arrayPalette = this.store.select(state => state.fontMatch.arrayPalette);
    this.$fontColorIndex = this.store.select(state => state.fontMatch.fontColorIndex);
    this.$bgColorIndex = this.store.select(state => state.fontMatch.bgColorIndex);
    this.$fontStyle = this.store.select(state => state.fontMatch.fontStyle);
    this.$fontWeight = this.store.select(state => state.fontMatch.fontWeight);
    this.$fontAlign = this.store.select(state => state.fontMatch.fontAlign);

    this.$arrayPalette.subscribe(palette => {
      this.paletteCombination = this.util.getPaletteCombination(palette);
    });

  }

  ngOnInit(): void {}

  selectCombination(combination: PaletteCombination): void{
    this.store.dispatch(selectFontColor({colorIndex: combination.selectedFontIndex}));
    this.store.dispatch(selectBgColor({colorIndex: combination.selectedBgIndex}));
    window.scrollTo({top: 0, behavior: 'smooth'});

  }

  filterName(e):void{
    this.searchInput = e.target.value;
    this.appService.searchFont(this.searchInput,this.categoryInput);
  }

  filterCategory(category):void{
    this.categoryInput = category;
    this.appService.searchFont(this.searchInput,this.categoryInput);
  }

}
