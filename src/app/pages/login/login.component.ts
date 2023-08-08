import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/environment/models/account/account.service';
import { tosterFunction } from 'src/app/util/utilities';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: any;
  constructor(private _accountServive:AccountService) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  async login() {
    const postLogin = await this.postLogin({
      email:this.loginForm.value.username,
      password:this.loginForm.value.password
    })

    if(postLogin.id){
      setTimeout(() => {
        this._accountServive.set(true);
        this.redirect('dashboard');
      }, 3000);
    }else{
      this._accountServive.set(false);
      tosterFunction('error','Oops..!! Wrong Details');
    }
  }

  postLogin(object:any):Promise<any>{
    return new Promise((resolve,reject)=>{
      this._accountServive.login(object).subscribe(res=>{
        if(res!=null){
          tosterFunction('success','Login sucessfull');
          resolve(res);
        }else reject({
          error:"Something Went Wrong"
        })
      })
    })
  }

  redirect(val:string){
    window.location.href = val;
  }
}
