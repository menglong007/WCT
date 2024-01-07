import {Component, EventEmitter, Inject, Input, Output} from "@angular/core";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CheckComponent} from "../check/check.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html'
})
export class DialogComponent {

  @Input() selected: any;
  @Output() selectedChange = new EventEmitter<boolean>();
  icons = ['crop_square', 'camera', 'battery_full', 'memory', 'smartphone'];
  Space: any = {};

  form: FormGroup = new FormGroup({
    memory: new FormControl<string | number | null>({
      value: null, disabled: false
    }, [Validators.required]),
    color: new FormControl<string | null>({
      value: null, disabled: false
    }, [Validators.required]),

  })

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected)
  }

  showArrows = true;
  showIndicators = true;

  constructor(config: NgbCarouselConfig,
              private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private data: any | null,
              private afr: AngularFirestore,
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  openDialog(item: any | null = null) {
    const dialogRef = this.dialog.open(CheckComponent, {
      height: '700px',
      width: '1000px',
      data : item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.loadData();
    if (this.data != null) {
      this.form.patchValue({
        memory: this.data.memory,
        color: this.data.color,
      });
    }
  }

  private loadData() {
    this.afr.collection('product').doc(this.data).ref.get()
      .then((doc) => {
      if (doc.exists) {
        const spaceData = doc.data();
        console.log(spaceData);
        this.Space = spaceData  ;
      } else {
        console.log("There is no document!");
      }
    }).catch((error) => {
      console.log("There was an error getting your document:", error);
    });
  }
  onAddToCart(set: string){
    const id = this.afr.createId();
    const dataId = { id: id, value: set }; // Assuming 'value' is the property you want to store
    console.log(id);
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
    return this.afr.doc(`cart/${id}`).set(dataId);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.data != null) {
      this._onInsert();
    }
  }

  private _onInsert() {
    const body = this.form.getRawValue();
    this.addDataToFirestore(body);
    this.openDialog();
  }

  private addDataToFirestore(data: any) {
    const id = this.afr.createId();
    const dataId = { id: id, value: data };
    console.log(id);
     this.afr.doc(`check/${id}`).set(dataId)
      .then(() => {
        console.log('Data added to Firestore with ID:', id);
      })
      .catch(error => {
        console.error('Error adding data to Firestore:', error);
      });
  }



}
