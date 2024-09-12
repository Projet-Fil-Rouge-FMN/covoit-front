import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  @Input() defaultUser?: User;
  @Output() onSubmit = new EventEmitter<User>();

  userForm = this.formBuilder.group({
    userName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    driverLicence: [false, Validators.required],
    authorities: ['ROLE_USER', Validators.required],
  });

  constructor(private formBuilder: NonNullableFormBuilder) {}

  ngOnInit() {
    if (this.defaultUser) {
      const { id, ...user} = this.defaultUser;
      this.userForm.setValue({
        userName: user.userName,
        lastName: user.lastName,
        email: user.email,
        password: '', // Usually not pre-filled for security
        driverLicence: !!user.driverLicence, // Convert to boolean
        authorities: user.authorities[0] || 'ROLE_USER',
      });
    }
  }

  submit() {
    const user: User = {
      id: this.defaultUser?.id || 0,
      userName: this.userForm.value.userName || '',
      lastName: this.userForm.value.lastName || '',
      email: this.userForm.value.email || '',
      password: this.userForm.value.password || '',
      driverLicence: !!this.userForm.value.driverLicence, // Convert to boolean
      authorities: [this.userForm.value.authorities || 'ROLE_USER'],
    };
    this.onSubmit.emit(user);
  }
}
