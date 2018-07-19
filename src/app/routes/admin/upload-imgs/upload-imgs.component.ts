import { saveAs } from 'file-saver';
import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload-imgs',
  templateUrl: './upload-imgs.component.html',
  styleUrls: ['./upload-imgs.component.scss'],
  providers: [ AdminServiceService ]
})


export class UploadImgsComponent implements OnInit {

  @ViewChild('fileInput') public fileInput: ElementRef;
  @Output('onItemChanged') public onItemChanged = new EventEmitter();
  @Input() public name: string = null; // Url api process upload
  @Input() public accept: Array<string> = [];
  @Input() public maxFileSize: number = 10 * 1024 * 1024; // 10MB
  @Input() public maxFile: number = 0; // Default 0 is unlimited
  @Input() public multiple: boolean = false; // Default false is single file, true is multiple file
  @Input() public errorMessageLimit: string = 'Fichier maximal';
  @Input() public errorMessageMaxSize: string = 'La imagen no debe pasar de 10 megas';
  @Input() public errorMessageWrongType: string = 'El archivo no es una imagen';

  @Output() image: any = new Image();
  
  selectedFile: File;
  bandera = true;

  constructor(private service: AdminServiceService, private http: Http) { }

  ngOnInit()
  {
  }


  fileChangeListener($event) 
  {

    //para visualizar la foto
    let file: File = $event.target.files[0];

    let myReader: FileReader = new FileReader();
    let that = this;
    myReader.onloadend = function(loadEvent: any) {
        that.image.src = loadEvent.target.result;
    };
    myReader.readAsDataURL(file);
   
    debugger;
     this.selectedFile = $event.target.files[0]; 
     this.name =  this.name + '.' + this.selectedFile.type.split('/')[1];

    
    // let endPoint = 'assets/img/user/'
    //  let headers = new Headers();
    // headers.set('Content-Type', 'application/octet-stream');
    // headers.set('Upload-Content-Type', img.type)

    // this.service.makeRequest(endPoint, 'POST', img, this.name, headers).subscribe(
    //   response  => {
    //     console.log(response)
    //   }
    // );

  }

  UploadImg()
  {
    this.onItemChanged.emit(this.setImage());
    this.service.UploadImg(this.selectedFile, this.name)
    //   .subscribe( data => {
    //     console.log(data)
    // });
  }

  removeItem()
  {
    this.fileInput.nativeElement.value = '';
    this.selectedFile = null;
    this.bandera = false;
  }


    /**
   * set image
   * @returns {string}
   */
  public setImage() : string
  {
    return this.name;
  }
 

  /**
   * Check file is image
   *
   * @param {*} fileType
   * @returns {boolean}
   */
  public isImage(fileType: any): boolean {
    return /^image\/(.*)$/.test(fileType);
  }
 
  
}
