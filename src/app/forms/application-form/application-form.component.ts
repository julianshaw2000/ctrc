import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';

interface ApplicationForm {
  name: string;
  dateOfApplication: Date;
  positionApplied: string;
  hoursPerWeek: string;
  workType: string;
  workShift: string;
  previousSurname: string;
  dateOfBirth: Date;
  currentAddress: string;
  moveInDate: Date;
  email: string;
  previousAddresses: { address: string, from: Date, until: Date }[];
  phoneNumber: string;
  ownTransport: boolean;
  licenseIssued: Date;
  currentDrivingLicense: boolean;
  endorsements: boolean;
  education: string;
  employmentHistory: { employer: string, address: string, from: Date, until: Date, position: string, reasonForLeaving: string, salary: string }[];
  nextOfKin: NextOfKin;
  identityDetails: IdentityDetails;
  permissionToWork: boolean;
  workPermitRequired: boolean;
  specialArrangements: string;
  criminalRecord: string;
}

interface NextOfKin {
  name: string;
  relationship: string;
  phoneNumber: string;
  address: string;
}

interface IdentityDetails {
  nationalInsuranceNumber: string;
  passportNumber: string;
}

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule
  ]




})

export class ApplicationFormComponent implements OnInit {
  applicationForm: FormGroup = new FormGroup({});

  workTypes = ['Full time', 'Part time', 'Bank'];
  workShifts = ['Days', 'Night', 'Mornings', 'Afternoons', 'Evenings', 'Weekends'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.applicationForm = this.fb.group({
      name: ['', Validators.required],
      dateOfApplication: ['', Validators.required],
      positionApplied: ['', Validators.required],
      hoursPerWeek: ['', Validators.required],
      workType: ['', Validators.required],
      workShift: ['', Validators.required],
      previousSurname: [''],
      dateOfBirth: ['', Validators.required],
      currentAddress: ['', Validators.required],
      moveInDate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      previousAddresses: this.fb.array([]),
      phoneNumber: ['', Validators.required],
      ownTransport: [false, Validators.required],
      licenseIssued: ['', Validators.required],
      currentDrivingLicense: [false, Validators.required],
      endorsements: [false, Validators.required],
      education: ['', Validators.required],
      employmentHistory: this.fb.array([]),
      nextOfKin: this.fb.group({
        name: ['', Validators.required],
        relationship: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        address: ['', Validators.required],
      }),
      identityDetails: this.fb.group({
        nationalInsuranceNumber: ['', Validators.required],
        passportNumber: ['', Validators.required],
      }),
      permissionToWork: [false, Validators.required],
      workPermitRequired: [false, Validators.required],
      specialArrangements: [''],
      criminalRecord: ['', Validators.required],
    });
  }

  get previousAddresses() {
    return this.applicationForm.get('previousAddresses') as FormArray;
  }

  get employmentHistory() {
    return this.applicationForm.get('employmentHistory') as FormArray;
  }

  addPreviousAddress() {
    this.previousAddresses.push(this.fb.group({
      address: ['', Validators.required],
      from: ['', Validators.required],
      until: ['', Validators.required],
    }));
  }

  addEmploymentHistory() {
    this.employmentHistory.push(this.fb.group({
      employer: ['', Validators.required],
      address: ['', Validators.required],
      from: ['', Validators.required],
      until: ['', Validators.required],
      position: ['', Validators.required],
      reasonForLeaving: ['', Validators.required],
      salary: ['', Validators.required],
    }));
  }

  onSubmit() {
    if (this.applicationForm.valid) {
      const applicationData: ApplicationForm = this.applicationForm.value;
      console.log('Application Data:', applicationData);
    }
  }
}
