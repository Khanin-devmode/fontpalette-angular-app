import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-font-display',
  templateUrl: './font-display.component.html',
  styleUrls: ['./font-display.component.scss']
})
export class FontDisplayComponent implements OnInit {

  @Input()
  fontFamily:string;
  displayText:string;
  fontSize:number;

  constructor() { }

  ngOnInit(): void {

  }

}
