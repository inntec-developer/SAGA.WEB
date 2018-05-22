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
var material_1 = require("@angular/material");
var ngx_spinner_1 = require("ngx-spinner");
var angular2_toaster_1 = require("angular2-toaster/angular2-toaster");
//Servicios
var index_1 = require("../../../../../service/index");
//Components
var dialogdamfo_component_1 = require("../dialogdamfo/dialogdamfo.component");
var DtDamfoComponent = (function () {
    function DtDamfoComponent(service, dialog, _Router, _Route, spinner, toasterService) {
        this.service = service;
        this.dialog = dialog;
        this._Router = _Router;
        this._Route = _Route;
        this.spinner = spinner;
        this.toasterService = toasterService;
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            positionClass: 'toast-bottom-right',
            limit: 7, tapToDismiss: false,
            showCloseButton: true,
            mouseoverTimerStop: true,
        });
        //*******************************-- GRID-- *********************************************//
        // Paginador.
        this.length = 0;
        this.pageSize = 10;
        this.pageSizeOptions = [10, 30, 50];
        this.rows = 10;
        this.first = 0;
        this.page = 1;
        this.pageCount = 0;
        this.TotalRecords = 0;
        //termina paginador
        // Display para mostrar los objetos en el Grid
        this.displayedColumns = [
            'cliente',
            'nombrePerfil',
            'empresa',
            'reclutamiento',
            'sueldoMinimo',
            'sueldoMaximo',
            'fch_Creacion',
            'accion'
        ];
    }
    //Crear el mensaje
    DtDamfoComponent.prototype.popToast = function (type, title, body) {
        var toast = {
            type: type,
            title: title,
            timeout: 5000,
            body: body
        };
        this.toasterService.pop(toast);
    };
    DtDamfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** spinner starts on init */
        this.spinner.show();
        this.service.getDamgo290().subscribe(function (data) {
            _this.dataSource = new material_1.MatTableDataSource(data);
            _this.damfo = data;
            _this.arrayDamfo = data;
            _this.pageCount = Math.round(_this.damfo.length / _this.rows);
            _this.TotalRecords = _this.damfo.length;
            _this.paginador();
            _this.spinner.hide();
        });
    };
    DtDamfoComponent.prototype.showDamfo = function (id) {
        //mandamos la información por medio de la URL sin que esta se muestre en la liga.
        this._Router.navigate(['/ventas/visualizarDamfo290', id], { skipLocationChange: true });
    };
    DtDamfoComponent.prototype.openDialog = function (element) {
        var dialogRef = this.dialog.open(dialogdamfo_component_1.DialogdamfoComponent, {
            width: '50%',
            height: 'auto',
            data: element
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    DtDamfoComponent.prototype.paginate = function (event) {
        if (event.length > event.pageSize) {
            this.first = event.pageIndex;
            this.rows = event.pageSize;
            this.page = event.pageIndex;
            this.pageCount = event.length;
        }
        else {
            this.rows = event.length;
        }
        this.paginador();
    };
    DtDamfoComponent.prototype.paginador = function () {
        if (this.page < this.pageCount) {
            this.damfo = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                this.damfo[i] = this.arrayDamfo[this.first + i];
            }
        }
        else {
            var length_1 = this.arrayDamfo.length - this.first;
            this.damfo = new Array(length_1);
            for (var i = 0; i < length_1; i++) {
                this.damfo[i] = this.arrayDamfo[this.first + i];
            }
        }
        this.dataSource = new material_1.MatTableDataSource(this.damfo);
    };
    // Filtro dentro del Grid
    DtDamfoComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DtDamfoComponent = __decorate([
        core_1.Component({
            selector: 'app-dt-damfo',
            templateUrl: './dt-damfo.component.html',
            styleUrls: ['./dt-damfo.component.scss'],
            providers: [index_1.RequisicionesService]
        }),
        __metadata("design:paramtypes", [index_1.RequisicionesService,
            material_1.MatDialog,
            router_1.Router,
            router_1.ActivatedRoute,
            ngx_spinner_1.NgxSpinnerService,
            angular2_toaster_1.ToasterService])
    ], DtDamfoComponent);
    return DtDamfoComponent;
}());
exports.DtDamfoComponent = DtDamfoComponent;
//# sourceMappingURL=dt-damfo.component.js.map