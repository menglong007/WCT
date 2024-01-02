import {Component} from "@angular/core";


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-check',
  templateUrl: 'check.component.html'
})
export class CheckComponent {
  selected : any;


}
