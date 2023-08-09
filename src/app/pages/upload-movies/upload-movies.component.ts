import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-movies',
  templateUrl: './upload-movies.component.html',
  styleUrls: ['./upload-movies.component.scss']
})
export class UploadMoviesComponent {

  isLogin: boolean = true;
  uploadForm: any;
  indeterminate: boolean = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled: boolean = false;
  checked: boolean = false;
  showImage:boolean=false;
  imageUrl: string = '';

  constructor() {
    this.setForm();
  }

  ngOnInit() {

  }

  setForm() {
    this.uploadForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      yearOfRelease: new FormControl('', Validators.required),
      availablityStarts: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      isFeatured: new FormControl('', Validators.required),
      contentPath: new FormControl('', Validators.required),
      moviePoster: new FormControl('', Validators.required)
    })
  }

  logout() {

  }

  upload() {

  }

  onFileSelected(event:any):void{
    const selectedFile: File = event.target.files[0];
    console.log(event.target.files)
    if (selectedFile) {
      this.showImage=true;
      this.imageUrl = URL.createObjectURL(selectedFile);
      this.uploadForm.patchValue({
        contentPath:URL.createObjectURL(selectedFile),
        moviePoster:this.convertToBase64(selectedFile)
      })
    }
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
