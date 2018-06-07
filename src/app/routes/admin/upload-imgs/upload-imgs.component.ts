import { Component, OnInit, OnDestroy, Input, Inject, EventEmitter, Output, ElementRef, Renderer, ViewChild, OnChanges } from '@angular/core';
import { FileUploader, FileItem, FileLikeObject } from 'ng2-file-upload';
import { HttpClient,HttpHeaders, HttpEvent,HttpParams,HttpRequest } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AdminServiceService } from '../../../service/AdminServicios/admin-service.service';

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

  image: any = new Image();
  selectedFile: File;
  bandera = true;
  // public uploader: FileUploader = new FileUploader({ url: URL });

  constructor(private service: AdminServiceService, private http: HttpClient, private el: ElementRef, private renderer: Renderer) { }

  ngOnInit()
  {
  }

  fileChangeListener($event) 
  {
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();
    let that = this;
    myReader.onloadend = function(loadEvent: any) {
        that.image.src = loadEvent.target.result;
    };

    myReader.readAsDataURL(file);
   
     this.name =  this.name + '.' + file.type.split('/')[1];
     this.selectedFile = $event.target.files[0];   
  }

  UploadImg()
  {

    this.onItemChanged.emit(this.setImage());
    this.service.UploadImg(this.selectedFile, this.name)
    
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
    console.log('sss' + this.name)
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
