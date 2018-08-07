import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm = this.fb.group({
    id:['', [Validators.required, Validators.maxLength(6)]],
    name:['', [Validators.required, Validators.maxLength(20)]],
    cost:['', Validators.required],
    isOnline:['', Validators.required],
    category:['', Validators.required],
    availability: ['',Validators.required]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.productForm.value);
}

getAvailability() {

}
}
