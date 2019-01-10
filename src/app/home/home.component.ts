import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const shadow = document.querySelector('div');
    const img = document.querySelector('img');
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 1) {
        shadow.style.height = '3.3vw';
        shadow.style.width = '4.25vw';
        shadow.style.marginLeft = '-2.125vw';
        shadow.style.background = 'transparent';
        shadow.style.boxShadow = 'none';
        img.style.width = '4.25vw';
        img.style.background = 'transparent';
        img.style.marginLeft = '-2.125vw';
      } else {
        shadow.style.height = '8.67vw';
        shadow.style.width = '11.04vw';
        shadow.style.marginLeft = '-5.52vw';
        shadow.style.background = 'white';
        shadow.style.boxShadow = '2px 2px 10px black, -2px 0px 10px black';
        img.style.width = '11vw';
        img.style.background = 'white';
        img.style.marginLeft = '-5.5vw';
      }
    });
  }

}
