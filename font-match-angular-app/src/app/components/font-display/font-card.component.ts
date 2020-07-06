import {Component, Input, OnInit} from '@angular/core';
import {AppService} from "../../app.service";

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

  constructor(public appService:AppService) { }

  ngOnInit(): void {

    this.appService.loadGoogleFont(this.fontFamily);

  }


}
