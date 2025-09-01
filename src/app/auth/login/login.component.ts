import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  myForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  onSubmit() {
    console.log(this.myForm);
    const enteredEmail = this.myForm.value.email;
    const enteredPassword = this.myForm.value.password;
    console.log(enteredEmail, enteredPassword);
  }
}
