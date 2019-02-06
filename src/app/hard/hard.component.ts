import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent implements OnInit {

  images = [
    '../../assets/Hardscapes/pic1.png',
    '../../assets/Hardscapes/pic2.png',
    '../../assets/Hardscapes/pic3.png',
    '../../assets/Hardscapes/pic4.png',
    '../../assets/Hardscapes/pic5.png'
  ];
  options = {
    loop: true,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    animateIn: 'fadeIn slow',
    animateOut: 'fadeOut slow'
  };

  navbar = () => {
    if (window.innerWidth > 1024) {
      return true;
    } else {
      return false;
    }
  }

  carousel = () => {
    if (window.innerWidth <= 1024) {
      return true;
    } else {
      return false;
    }
  }

  constructor() { }

  ngOnInit() {
    if (window.innerWidth > 1024) {
      const shadow = document.querySelector('div');
      const img = document.querySelector('img');
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 1) {
          shadow.style.height = '3.3vw';
          shadow.style.width = '4vw';
          shadow.style.marginLeft = '-2vw';
          shadow.style.background = 'transparent';
          shadow.style.boxShadow = 'none';
          img.style.width = '4vw';
          img.style.background = 'transparent';
          img.style.marginLeft = '-2vw';
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

}
