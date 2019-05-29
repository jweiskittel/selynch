import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncomingHttpHeaders } from 'http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'selynch';

  constructor(private route: Router) {}

  ngOnInit() {
    console.log(this.route.url);
  }
}
