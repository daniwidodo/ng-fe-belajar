import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const auth = getAuth();
    const email = 'fe1@test.com';
    const password = '123456';
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(userCredential)
        updateProfile(user, {displayName: 'xxx'})
        console.log(userCredential)

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

      
  }

  SignUp(email: string, password: string) {
    const auth = getAuth()
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result: any) => {
        console.log(result)
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        // this.SendVerificationMail();
        // this.SetUserData(result.user);
      })
      .catch((error: any) => {
        window.alert(error.message);
      });
  }
}
