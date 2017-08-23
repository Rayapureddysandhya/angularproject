import { Component, OnInit } from '@angular/core';
import {course} from '../course.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ser:course){

  }
submit(form)
{
  let data=form.value;
  this.ser.RegisterPost(data).subscribe(
    response=>{
      console.log(response);

    })
}

  ngOnInit() {
  }

}
