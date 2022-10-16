import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { My_service } from '../service/infoservice';

@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.css']
})
export class AgileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  title="Gadgeon";
  btnclick(){
    // alert("hello from"+this.title);
    const service=new My_service();
    service.onclickb("Gadgeon!!!")
  }

}
