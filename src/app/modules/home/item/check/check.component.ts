import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs";


export interface DialogRes{
  colors : string,
  memory : string
}


@Component({
  selector: 'app-check',
  templateUrl: 'check.component.html'
})
export class CheckComponent implements OnInit{

  form: FormGroup = new FormGroup({
    mail: new FormControl<string|number | null>({
      value: null, disabled: false
    }, [Validators.required]),
    fullName: new FormControl<string | null>({
      value: null, disabled: false
    }, [Validators.required]),
    province: new FormControl<string | null>({
      value: null, disabled: false
    }, [Validators.required]),
    address: new FormControl<string | null>({
      value: null, disabled: false
    }, [Validators.required]),
    status: new FormControl<boolean>({
      value: false, disabled: false
    }, [Validators.required]),
  });

  Images : any = [];

  constructor(@Inject(MAT_DIALOG_DATA) private data: any | null,
              private afr : AngularFirestore) {
  }

  ngOnInit() {
    // this.loadData();
    if (this.data != null) {
      this.form.patchValue({
        mail: this.data.mail,
        fullName: this.data.fullName,
        province: this.data.province,
        address: this.data.address,
        status: this.data.status
      });
    }
  }

  // private loadData() {
  //   this.afr.collection<any>('check').valueChanges().subscribe({
  //     next: (res) => {
  //       res.forEach((re) => {
  //         const value = re.value; // Assuming 'value' is a field in the 'check' documents
  //         this.afr.doc(`product/${re.value}`).collection('check', ref =>
  //           ref.where('id', '==', value)).valueChanges().subscribe({
  //           next: (p: any[]) => {
  //             p.forEach(item => {
  //               this.Images.push({ image: item.image, model: item.model });
  //               console.log(value)
  //             });
  //           }
  //         });
  //       });
  //     }
  //   });
  // }



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
      this.afr.collection('check').add(formData)
        .then((docRef) => {
          console.log('Document added with ID:', docRef.id);
        })
        .catch((error) => {
          console.error('Error adding document:', error);
        });
    }



}
