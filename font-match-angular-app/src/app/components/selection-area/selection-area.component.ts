import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../+store/fontmatch.reducer";
import {Observable} from "rxjs";
import {AppUtilService} from "../../app.util.service";

@Component({
  selector: 'app-selection-area',
  templateUrl: './selection-area.component.html',
  styleUrls: ['./selection-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SelectionAreaComponent implements OnInit {

  $googleFontList: Observable<{}[]>;
  $displayText: Observable<string>;
  $fontSize:Observable<number>;
  $fontColor:Observable<string>;
  $selectedBgColor:Observable<string>

  constructor(private store:Store<AppState>,
              public util:AppUtilService

  ) {

    this.$googleFontList = this.store.select(state => state.fontMatch.googleFontList);
    this.$displayText = this.store.select(state => state.fontMatch.displayText);
    this.$fontSize = this.store.select(state => state.fontMatch.fontSize);
    this.$fontColor = this.store.select(state=>state.fontMatch.selectedFontColor);
    this.$selectedBgColor = this.store.select(state=>state.fontMatch.selectedBgColor);

  }

  ngOnInit(): void {


  }

}
