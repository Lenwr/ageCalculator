import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{
  years : number = 0 ;
  month : number = 0 ;
  day : number = 0 ;

  myForm: FormGroup;
  isTrue: boolean = false ;


  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      day: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      month: ['', [Validators.min(1), Validators.max(12)]],
      year: ['', [Validators.min(1900), Validators.max(2022)]]
    });
  }
ngOnInit() {
}

calculate(){
  if (this.myForm.valid){
    const birthYear = this.myForm.get('year')?.value;
  const birthMonth = this.myForm.get('month')?.value;
  const birthDay = this.myForm.get('day')?.value;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  let ageYears = currentYear - birthYear;
  let ageMonths = currentMonth - birthMonth;
  let ageDays = currentDay - birthDay;

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(currentYear, currentMonth - 1, 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  this.years = ageYears;
  this.month = ageMonths;
  this.day = ageDays;
}

}


}

