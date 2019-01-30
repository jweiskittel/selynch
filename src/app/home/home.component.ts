import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  landimages = [
    '../../assets/Landscapes/pic1.png',
    '../../assets/Landscapes/pic2.png',
    '../../assets/Landscapes/pic3.png',
    '../../assets/Landscapes/pic4.png',
    '../../assets/Landscapes/pic5.png'
  ];
  hardimages = [
    '../../assets/Hardscapes/pic1.png',
    '../../assets/Hardscapes/pic2.png',
    '../../assets/Hardscapes/pic3.png',
    '../../assets/Hardscapes/pic4.png',
    '../../assets/Hardscapes/pic5.png'
  ];
  maintenanceimages = [
    '../../assets/Maintenance/pic1.png',
    '../../assets/Maintenance/pic2.png',
    '../../assets/Maintenance/pic3.png',
    '../../assets/Maintenance/pic4.png'
  ];
  designimages = [
    '../../assets/Design/pic1.png',
    '../../assets/Design/pic2.png',
    '../../assets/Design/pic3.png',
    '../../assets/Design/pic4.png'
  ];
  waterimages = [
    '../../assets/Water/pic1.png',
    '../../assets/Water/pic2.png',
    '../../assets/Water/pic3.png',
    '../../assets/Water/pic4.png',
  ];
  woodimages = [
    '../../assets/Wood/pic1.png',
    '../../assets/Wood/pic2.png',
    '../../assets/Wood/pic3.png',
    '../../assets/Wood/pic4.png',
    '../../assets/Wood/pic5.png'
  ];
  options = {
    loop: true,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    animateIn: 'fadeIn slow',
    animateOut: 'fadeOut slow'
  };

  constructor() { }

  display = () => {
    if (window.innerWidth > 1024) {
      return true;
    } else {
      return false;
    }
  }

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
