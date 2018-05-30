import { Component, OnInit, OnDestroy, Input, Inject, EventEmitter, Output, ElementRef, Renderer, ViewChild, OnChanges } from '@angular/core';
import { FileUploader, FileItem, FileLikeObject } from 'ng2-file-upload';
import { HttpClient, HttpEvent,HttpParams,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const URL = 'https://localhost:4200/admin/admin';

@Component({
  selector: 'app-upload-imgs',
  templateUrl: './upload-imgs.component.html',
  styleUrls: ['./upload-imgs.component.scss']
})


export class UploadImgsComponent implements OnInit {

  @ViewChild('fileInput') public fileInput: ElementRef;
  @Output('onItemChanged') public onItemChanged = new EventEmitter();
  @Input() public url: string = null; // Url api process upload
  @Input() public accept: Array<string> = [];
  @Input() public maxFileSize: number = 10 * 1024 * 1024; // 10MB
  @Input() public maxFile: number = 0; // Default 0 is unlimited
  @Input() public multiple: boolean = false; // Default false is single file, true is multiple file
  @Input() public errorMessageMaxSize: string = 'Le fichier ne doit pas dépasser 10Mo';
  @Input() public errorMessageWrongType: string = 'Ce type de fichier n\'est pas autorisé';
  @Input() public errorMessageLimit: string = 'Fichier maximal';
  @Input() public image: any;

  data1: any;
 

  public uploader: FileUploader = new FileUploader({ url: URL });

  constructor(private http: HttpClient, private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.uploader.setOptions(
      {
        url: this.url,
        headers: [{name: 'Accept', value: 'application/json'}],
        autoUpload: false,
        allowedMimeType: this.accept,
        maxFileSize: this.maxFileSize
      }
    );
    this.uploader.onWhenAddingFileFailed = (item, filter, options) => this.onWhenAddingFileFailed(item, filter, options);
    this.uploader.onAfterAddingAll  = (items) => this.onAfterAddingAll(items);
    this.uploader.onAfterAddingFile = (item) => this.onAfterAddingFile(item);
  }

  fileChangeListener($event) {
    let image: any = new Image();
    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();
    let that = this;
    myReader.onloadend = function(loadEvent: any) {
        image.src = loadEvent.target.result;
    };

    myReader.readAsDataURL(file);
    
   this.data1 = image;

}
  /**
   * Add file
   */
  public addFile(): void {
    // Trigger upload file input click event
    let event;
    if (document.createEvent) {
      // Only for IE and Firefox
      event = document.createEvent('MouseEvent');
      event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    } else {
      // For Chrome
      event = new MouseEvent('click', {bubbles: true});
    }
    this.fileInput.nativeElement.dispatchEvent(event);
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
  /**
   * Check max file
   *
   * @returns {boolean}
   */
  public isMaxFile(): boolean {
    if (this.maxFile === 0) {
      return false;
    }
    return this.uploader.queue.length >= this.maxFile;
  }

  /**
   * Remove file item
   *
   * @param {FileItem} item
   */
  public removeItem(item: FileItem): void {
    item.remove();
    this.fileInput.nativeElement.value = '';
    this.onItemChanged.emit(this.getQueueFiles());
  }

  /**
   * Get queue files
   *
   * @returns {*}
   */
  public getQueueFiles(): Array<any> {
    return this.uploader.queue;
  }

  /**
   * Set queue files
   *
   * @returns {*}
   */
  public setQueueFiles(queue: Array<any>): void {
    this.uploader.queue = queue;
  }

  /**
   * Get all files in queue
   *
   * @returns {*}
   */
  public getFiles(): Array<any> {
    return this.uploader.queue.map(item => item.file);
  }

  /**
   * Add file failed hanlde
   *
   * @private
   * @param {FileLikeObject} item
   * @param {*} filter
   * @param {*} options
   */
  private onWhenAddingFileFailed(item: FileLikeObject, filter: any, options: any) {
    switch (filter.name) {
      case 'fileSize': {
        alert(this.errorMessageMaxSize);
        break;
      }
      case 'mimeType': {
        alert(this.errorMessageWrongType);
        break;
      }
      default:
    }
  }

  /**
   * Handle choice files
   *
   * @private
   * @param {*} items
   */
  private onAfterAddingAll(items: any) {
    if (items.length > this.maxFile) {
      this.uploader.clearQueue();      
      this.fileInput.nativeElement.value = '';
      alert(this.errorMessageLimit);
      this.onItemChanged.emit(this.getQueueFiles());
      return;
    }    
  }

  /**
   * Handle add file
   *
   * @private
   * @param {*} item
   */
  private onAfterAddingFile(item: any) {
    if (this.checkDuplicateFiles(item)) {
      item.remove();
      this.onItemChanged.emit(this.getQueueFiles());
    }
  }

  /**
   * Check duplicate file
   *
   * @private
   * @param {*} item
   * @returns {boolean}
   */
  private checkDuplicateFiles(item: any): boolean {
    let checkItem: number = 0;
    this.uploader.queue.map( itemQueue => {
      checkItem += (itemQueue.file.name === item.file.name && itemQueue.file.size === item.file.size) ? 1 : 0;
    });

    return checkItem > 1;
}

}
