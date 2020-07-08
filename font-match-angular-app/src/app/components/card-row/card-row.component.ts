import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.scss']
})
export class CardRowComponent implements OnInit {

  @Input() fontGroup:{}[];
  @Input() displayText:string;
  @Input() fontSize:number;
  @Input() fontColor:string;
  @Input() selectedBgColor:string;

  constructor() { }

  ngOnInit(): void {
  }

}
