import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const img = document.querySelector('img');
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 1) {
        img.style.width = '4.25vw';
        img.style.background = 'transparent';
        img.style.marginLeft = '-2.125vw';
      } else {
        img.style.width = '11vw';
        img.style.background = 'white';
        img.style.marginLeft = '-5.5vw';
      }
    });
  }

}
