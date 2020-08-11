import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../+store/fontmatch.reducer";
import {selectFontFamily} from "../../+store/fontmatch.actions";

@Component({
  selector: 'font-card',
  templateUrl: './font-card.component.html',
  styleUrls: ['./font-card.component.scss']
})
export class FontCardComponent implements OnInit {

  @Input() fontFamily:string;
  @Input() displayText:string;
  @Input() fontSize:number;
  @Input() index:number;
  @Input() fontColor:string;
  @Input() selectedBgColor:string;
  @Input() selectedFont:string;

  constructor(public appService:AppService,
              private store:Store<AppState>
  ) { }

  ngOnInit(): void {

    this.appService.loadGoogleFont(this.fontFamily);

  }

  selectFont(font){
      console.log(font);
      this.store.dispatch(selectFontFamily({fontFamily:font}));
  }

}
