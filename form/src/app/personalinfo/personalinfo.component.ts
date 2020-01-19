import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent implements OnInit {
  model: any = {}
  country: any = ['America', 'India', 'England']
  ngOnInit() {
  }
  mySub(frm: NgForm) {
    if(frm.valid) {
      console.log("Form Submitted!");
    }
  }

}
