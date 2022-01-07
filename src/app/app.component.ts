import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'clock-in-app';

  NavButtonPressed(name:string)
  {
    if(name == "home"){
      //redirect back to home page
      
    }
    if(name == "find"){
      //redirect to the find employees page 
      this.title = "find"
    }

    if(name == "create"){
      //redirect to the create new employees page 
      this.title = "create"

    }

    if(name == "admin"){
      //redirects to the login page 

    }


  }
}


