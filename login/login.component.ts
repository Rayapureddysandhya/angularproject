import { Component, OnInit } from '@angular/core';
import {course} from '../course.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private ser:course){

  }
submit(form)
{
  let data=form.value;
  this.ser.loginPost(data).subscribe(
    response=>{
      console.log(response);

    })
}

  ngOnInit() {
  }

}
//   constructor() { }

//   ngOnInit() {
//   }

// }
