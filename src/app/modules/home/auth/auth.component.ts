import {Component} from "@angular/core";

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html'
})

export class AuthComponent{
    isSignIn: boolean = false

    onTap(){
      this.isSignIn = !this.isSignIn
    }
}
