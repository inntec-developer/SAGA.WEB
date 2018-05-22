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
var router_1 = require("@angular/router");
var ngx_spinner_1 = require("ngx-spinner");
var material_1 = require("@angular/material");
//Services
var index_1 = require("../../../../../service/index");
//Components
var dialogdamfo_component_1 = require("../dialogdamfo/dialogdamfo.component");
var ViewdamfoComponent = (function () {
    function ViewdamfoComponent(serviceRequisiciones, dialog, _Router, _Route, spinner) {
        this.serviceRequisiciones = serviceRequisiciones;
        this.dialog = dialog;
        this._Router = _Router;
        this._Route = _Route;
        this.spinner = spinner;
        this.step = 0;
    }
    ViewdamfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this._Route.params.subscribe(function (params) {
            if (params['IdDamfo'] != null) {
                _this.damfoId = params['IdDamfo'];
                _this.serviceRequisiciones.getDamfoById(_this.damfoId)
                    .subscribe(function (data) {
                    _this.damfo290 = data;
                    _this.spinner.hide();
                });
            }
            else {
                _this.spinner.hide();
                console.log('Error al ccargar información');
            }
        });
    };
    ViewdamfoComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(dialogdamfo_component_1.DialogdamfoComponent, {
            width: '50%',
            height: 'auto',
            data: this.damfo290
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ViewdamfoComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ViewdamfoComponent.prototype.nextStep = function () {
        this.step++;
    };
    ViewdamfoComponent.prototype.prevStep = function () {
        this.step--;
    };
    ViewdamfoComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>DAM-FO-290</title>\n          <style>\n            /* Structure */\n            .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n                position: relative;\n                min-height: 1px;\n                padding-left: 15px;\n                padding-right: 15px;\n            }\n            .dt-container {\n              display: flex;\n              flex-direction: column;\n              min-width: 100%;\n            }\n\n            .dt-header {\n              min-height: 64px;\n              padding: 8px 24px 0;\n            }\n\n            .mat-form-field {\n              font-size: 12px;\n              width: 100%;\n            }\n\n            .mat-table {\n              font-size: 12px;\n              overflow: auto;\n              max-height:100%;\n              display: block;\n            }\n            .mat-header-cell {\n                font-weight: bold;\n                color: whitesmoke;\n            }\n\n            .mat-cell{\n              font-size: 10px;\n            }\n\n            .mat-header-row {\n                min-height: auto;\n                background-color: dodgerblue;\n                border-collapse: separate;\n                table-layout: auto;\n                display: flex;\n                border-bottom-width: 1px;\n                border-bottom-style: solid;\n                -webkit-box-align: center;\n                padding: 0px 7px;\n                box-sizing: border-box;\n                border-bottom-color: rgba(0,0,0,.12);\n            }\n\n            .mat-cell, .mat-header-cell {\n                flex: 1;\n                overflow: hidden;\n                word-wrap: break-word;\n                font-weight: bold;\n            }\n\n            .mat-header-cell{\n\n              font-weight: bold;\n              color: whitesmoke;\n            }\n\n            .mat-header-row, .mat-row {\n              border-collapse: separate;\n              table-layout: auto;\n              display: flex;\n              border-bottom-width: 1px;\n              border-bottom-style: solid;\n              align-items: center;\n              padding: 0px 7px;\n              box-sizing: border-box;\n            }\n\n            .mat-row {\n                min-height: 25px;\n            }\n\n            .mat-cell-right{\n              text-align: right;\n              margin-right: 35px;\n            }\n\n            .mat-cell-center{\n              text-align: center;\n            }\n\n            .example-headers-align .mat-expansion-panel-header-title,\n            .example-headers-align .mat-expansion-panel-header-description {\n              flex-basis: 0;\n            }\n\n            .example-headers-align .mat-expansion-panel-header-description {\n              justify-content: space-between;\n              align-items: center;\n            }\n\n            small{\n              font-size: 11px;\n            }\n\n            .mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {\n                background: inherit;\n            }\n            .mat-expansion-panel-header {\n                display: flex;\n                flex-direction: row;\n                align-items: center;\n                padding: 0 24px;\n                font-size: 15px;\n                font-weight: 400;\n            }\n\n            .mat-expansion-panel {\n                background: #fff;\n                color: rgba(0,0,0,.87);\n            }\n\n            .relative2 {\n\n              position: relative;\n              top: -20px;\n              left: 20px;\n              background-color: white;\n              width: 500px;\n            }\n            .relative3 {\n\n              position: relative;\n              top: -20px;\n              left: 20px;\n              background-color: white;\n              width: 500px;\n            }\n\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    ViewdamfoComponent = __decorate([
        core_1.Component({
            selector: 'app-viewdamfo',
            templateUrl: './viewdamfo.component.html',
            styleUrls: ['./viewdamfo.component.scss'],
            providers: [index_1.RequisicionesService]
        }),
        __metadata("design:paramtypes", [index_1.RequisicionesService,
            material_1.MatDialog,
            router_1.Router,
            router_1.ActivatedRoute,
            ngx_spinner_1.NgxSpinnerService])
    ], ViewdamfoComponent);
    return ViewdamfoComponent;
}());
exports.ViewdamfoComponent = ViewdamfoComponent;
//# sourceMappingURL=viewdamfo.component.js.map