import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipe',
  templateUrl: './demopipe.component.html',
  styleUrls: ['./demopipe.component.css']
})
export class DemopipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // json object
  title="Hello"
  today=Date();
  user={
    id:100,
    name:'James Bond',
    DOB:'10-07-1957',
    salary:25000
  }
}
