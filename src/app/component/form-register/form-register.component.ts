import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit{
  @Input('disabled')
isDisabled: boolean



  user: User = {
    name: '',
    last_name: '',
    email: '',
    password: '',
    photo: ''
  };




  confirmPassword: string = '';
  public myForm: FormGroup
  constructor(private formBuilder: FormBuilder, private userService: UserService, private toast: ToastrService){
    this.buildForm();
  } 
  private buildForm(){
    const minPassLength = 8;
    this.myForm = this.formBuilder.group({
      nombre: [, Validators.required],
      apellido: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      url: [, Validators.required],
      password: [, [Validators.required, Validators.minLength(minPassLength)]],
      password2: [, [Validators.required, this.checkPassword]],

    })
  }
  private checkPassword(control: AbstractControl){
    let resultado = {matchPassword: true};

    

    if (control.parent?.value.password == control.value)
    resultado = null;

  return resultado;
  }
  private checkPasswordMatch() {
    const password = this.myForm.get('password').value;
    const password2 = this.myForm.get('password2').value;

    return password === password2;
  }

  public register() {
    this.user = this.myForm.value;
    console.log('Contraseña del usuario:', this.user.password);
    console.log('Contraseña de confirmación:', this.confirmPassword);
    this.user = this.myForm.value;
    console.log(this.user);
  
    // Verifica si las contraseñas coinciden
    if (!this.checkPasswordMatch()) {
      console.log('Las contraseñas no coinciden');
      return;
    }


    
  this.user.name = this.myForm.get('nombre').value;
  this.user.last_name = this.myForm.get('apellido').value;
  this.user.email = this.myForm.get('email').value;
  this.user.password = this.myForm.get('password').value;
  this.user.photo = this.myForm.get('url').value;
  

    this.userService.register(this.user).subscribe(
      (response) => {

        console.log('Registro exitoso:', response);
        this.toast.success("Registro existoso")
      },
      (error) => {

        console.error('Error en el registro:', error);
        this.toast.error("Error en el registro")
      }
    );
  }


  ngOnInit(): void {
    
  }

}
