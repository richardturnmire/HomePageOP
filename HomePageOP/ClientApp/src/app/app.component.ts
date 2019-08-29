import { Component, OnInit } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'homepage';
  config: any;
  fullpage_api: any;


  constructor() {
    this.config = {

      // fullpage options
      licenseKey: '04E01E1D-505646C8-8404202B-23328F3F',
      anchors: ['home', 'skills', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      scrollHorizontally: true,
      navigation: true,

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  };

  ngOnInit() { };

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
