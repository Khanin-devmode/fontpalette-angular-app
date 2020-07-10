import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bg-card',
  templateUrl: './bg-card.component.html',
  styleUrls: ['./bg-card.component.scss']
})
export class BgCardComponent implements OnInit {

  @Input() bgColor:string;
  @Input() previewText:string;
  @Input() selectedFont:string;
  @Input() selectedFontColor:string;
  @Input() fontSize:number;

  constructor() { }

  ngOnInit(): void {
  }

}
