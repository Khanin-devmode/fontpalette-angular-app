import {Component, HostListener, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  scrollPositionY: number;
  showButton = false;

  constructor(private appService: AppService,
              private viewPortScroller: ViewportScroller) { }

  ngOnInit(): void {

    this.appService.fetchGoogleFonts();

    window.onscroll = () => {
      this.scrollPositionY = this.viewPortScroller.getScrollPosition()[1];
      this.showButton = this.scrollPositionY > 240;
    };


  }

  scrollToTop(): void{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }



}
