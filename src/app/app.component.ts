import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgeCalculator';
  formData: FormGroup;
  truee: boolean = true


  constructor(private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

}
