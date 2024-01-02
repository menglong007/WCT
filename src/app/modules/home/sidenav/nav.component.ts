import {Component} from "@angular/core";
import {FormBuilder} from "@angular/forms";

@Component({
  selector : 'app-nav',
  templateUrl : './nav.component.html'
})

export class NavComponent {

  constructor(private _formBuilder: FormBuilder) {}
  toppings = this._formBuilder.group({
    checkbox : false
  });

    protected readonly onclose = onclose;
  protected readonly event = event;



}
