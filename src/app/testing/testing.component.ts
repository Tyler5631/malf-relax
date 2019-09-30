import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  testNumber = 5;

  constructor() { }

  ngOnInit() {
    this.testNumber = 10;
  }

}
