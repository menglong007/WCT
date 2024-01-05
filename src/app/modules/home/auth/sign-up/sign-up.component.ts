import {Component, EventEmitter, Inject, OnInit, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html'
})

export class SignUpComponent implements OnInit{
  hide = true;
  Chide = true;
  @Output() signUpClicked: EventEmitter<void> = new EventEmitter<void>();
  form : FormGroup = new FormGroup({
    name: new FormControl<string | null>({
      value: null , disabled: false
    },[Validators.required]),
    number: new FormControl<number | null>({
      value: null , disabled: false
    },[Validators.required]),
    mail: new FormControl<string | null>({
      value: null , disabled: false
    },[Validators.required]),
    password: new FormControl<string | null>({
      value: null , disabled: false
    },[Validators.required]),
    cfpassword: new FormControl<string | null>({
      value: null , disabled: false
    },[Validators.required]),
  })

  constructor(@Inject(MAT_DIALOG_DATA) private data : any | null,
              private afr: AngularFirestore) {
  }


  onClick() {
    this.signUpClicked.emit();
  }

  ngOnInit(){
    if (this.data != null){
      this.form.patchValue({
        name : this.data.name,
        mail: this.data.mail,
        password: this.data.password,
        number: this.data.number,
        cfpassword: this.data.cfpassword,
      });
    }
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.data == null) {
      this._onInsert();
    }
  }
  private _onInsert() {
    const formData = this.form.getRawValue();
    // Assuming 'cart' is your Firestore collection
    this.afr.collection('sign-up').add(formData)
      .then((docRef) => {
        console.log('Document added with ID:', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document:', error);
      });
  }


}
