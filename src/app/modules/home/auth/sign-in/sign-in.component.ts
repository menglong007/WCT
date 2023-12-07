import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html'
})

export class SignInComponent {
  hide = true;
  @Output() signInClicked: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    console.log("lkjkh")
    this.signInClicked.emit();
  }

}
