import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {RequestService} from "../services/request.service";

@Component({
  selector: 'ty-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) {
	  //this.login();
  }

  ngOnInit() {
  }

  login() {
      let dialogRef = this.dialog.open(LoginDialog, {
		height: '290px',
		maxHeight: '65vh'
	  });

      dialogRef.afterClosed().subscribe(result => {
      	console.log(result);
	  })
  }
}

export interface IEndPoint {
  //key=>url
  [key: string]: string;
}

export class User {
  public login: FormGroup;

  private endpoints = <IEndPoint>{'login': 'login'};

  constructor(private requestService: RequestService) {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  private collect()  {
    let data = {};
    for(let key in this.login.controls) {
      data[key] = this.login.controls[key].value;
    }
    return data;
  }

  public email(){return this.login.get('email');}
  public fullname(){return this.login.get('name');}
  public phone(){return this.login.get('phone');}
  public password(){return this.login.get('password');}

  public tryLogin(): string {
    this.login.disable();
    let result = this.requestService.post(this.endpoints['login'], this.collect());
    this.login.enable();

    return result;
  }
}


@Component({
    selector: 'ty-login-dialog',
    templateUrl: 'login.dialog.html',
	styleUrls: ['login.dialog.scss']
})
export class LoginDialog {
  public login = new User(this.requestService);

	constructor(public dialogRef: MatDialogRef<LoginDialog>,
			  @Inject(MAT_DIALOG_DATA) public data: any, private requestService: RequestService) { }

	error(control: FormControl) {
    for(let error of Object.keys(control.errors)) {
      switch(error) {
        case 'required':
          return 'You must enter a value';
        case 'email':
          return 'Not a valid email';
        case 'minlength':
          return 'Value is too short';
      }
    }
	}

	submit() {
    let result = this.login.tryLogin();
    console.log(result);
  }


	onNoClick() {
	  this.dialogRef.close();
    }
}
