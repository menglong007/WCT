import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html'
})

export class SignUpComponent{
  hide = true;
  Chide = true;
  @Output() signUpClicked: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.signUpClicked.emit();
  }


}
