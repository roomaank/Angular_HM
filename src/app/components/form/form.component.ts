import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FORMS_CONSTANTS } from '../form.constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  forms = FORMS_CONSTANTS;
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.myForm = this.fb.group({
      name: [''],
      age: [''],
      email: [''],
      phone: ['']
    })
  }

  saveFormData() {

  }

}
