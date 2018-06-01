import { Component, OnInit, OnDestroy, Input, Inject, EventEmitter, Output, ElementRef, Renderer, ViewChild, OnChanges } from '@angular/core';
import { FileUploader, FileItem, FileLikeObject } from 'ng2-file-upload';
import { HttpClient, HttpEvent,HttpParams,HttpRequest } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';


@Component({
  selector: 'app-upload-imgs',
  templateUrl: './upload-imgs.component.html',
  styleUrls: ['./upload-imgs.component.scss']
})


export class UploadImgsComponent implements OnInit {

  @ViewChild('fileInput') public fileInput: ElementRef;

  @Input() public url: string = null; // Url api process upload
  @Input() public accept: Array<string> = [];
  @Input() public maxFileSize: number = 10 * 1024 * 1024; // 10MB
  @Input() public maxFile: number = 0; // Default 0 is unlimited
  @Input() public multiple: boolean = false; // Default false is single file, true is multiple file
  @Input() public errorMessageLimit: string = 'Fichier maximal';
  @Input() public errorMessageMaxSize: string = 'La imagen no debe pasar de 10 megas';
  @Input() public errorMessageWrongType: string = 'El archivo no es una imagen';

  selectedFile : File = null;
  bandera = false;
  // public uploader: FileUploader = new FileUploader({ url: URL });

  constructor(private http: HttpClient, private el: ElementRef, private renderer: Renderer) { }

  ngOnInit()
  {
  }

  fileChangeListener($event) 
  {
    let image: any = new Image();
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();
    let that = this;
    myReader.onloadend = function(loadEvent: any) {
        image.src = loadEvent.target.result;
    };

    myReader.readAsDataURL(file);
    
   this.selectedFile = image;
  }

  UploadImg()
  {
    this.bandera = false;
    
    console.log(this.url)
    let fd = new FormData();
    fd.append('image', this.selectedFile );
    return this.http.post( this.url, fd )
    .subscribe(res => {console.log(res);});
  }

  removeItem()
  {
    this.fileInput.nativeElement.value = '';
    this.selectedFile = null;
    this.bandera = false;
  }


    /**
   * hide - show inputFile
   * @returns {boolean}
   */
  public isUpload() : boolean
  {
    return this.bandera;
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
