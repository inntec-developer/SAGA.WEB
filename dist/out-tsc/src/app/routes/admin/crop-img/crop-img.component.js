"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_img_cropper_1 = require("ng2-img-cropper");
var CropImgComponent = (function () {
    function CropImgComponent() {
        this.name = 'Angular2';
        this.cropperSettings = new ng2_img_cropper_1.CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 200;
        this.cropperSettings.height = 200;
        this.cropperSettings.croppedWidth = 200;
        this.cropperSettings.croppedHeight = 200;
        this.cropperSettings.canvasWidth = 442;
        this.cropperSettings.canvasHeight = 390;
        this.cropperSettings.minWidth = 100;
        this.cropperSettings.minHeight = 100;
        this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
        this.cropperSettings.rounded = false;
        this.data1 = {};
    }
    CropImgComponent.prototype.cropped = function (bounds) {
        console.log(bounds);
    };
    CropImgComponent.prototype.fileChangeListener = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    CropImgComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild('cropper', undefined),
        __metadata("design:type", ng2_img_cropper_1.ImageCropperComponent)
    ], CropImgComponent.prototype, "cropper", void 0);
    CropImgComponent = __decorate([
        core_1.Component({
            selector: 'app-crop-img',
            templateUrl: './crop-img.component.html',
            styleUrls: ['./crop-img.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], CropImgComponent);
    return CropImgComponent;
}());
exports.CropImgComponent = CropImgComponent;
//# sourceMappingURL=crop-img.component.js.map