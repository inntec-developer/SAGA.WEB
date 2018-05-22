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
var DtRequisicionComponent = (function () {
    function DtRequisicionComponent(service, dialog, _Router, _Route, spinner, toasterService) {
        this.service = service;
        this.dialog = dialog;
        this._Router = _Router;
        this._Route = _Route;
        this.spinner = spinner;
        this.toasterService = toasterService;
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
        //Termino de Paginador
        //Display para mostrar los objetos en el Grid
        this.displayedColumns = [
            'folio',
            'cliente',
            'rfc',
            'vBtra',
            'empresa',
            'reclutamiento',
            'sueldoMinimo',
            'sueldoMaximo',
            'fch_Creacion',
            'fch_Cumplimiento',
            'estatus',
            'prioridad',
            'accion'
        ];
    }
    DtRequisicionComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** spinner starts on init */
        this.spinner.show();
        this.service.getRequisiciones().subscribe(function (data) {
            _this.dataSource = new material_1.MatTableDataSource(data);
            _this.requisicion = data;
            _this.arrayRequisicion = data;
            _this.pageCount = Math.round(_this.requisicion.length / _this.rows);
            _this.TotalRecords = _this.requisicion.length;
            _this.paginador();
            _this.spinner.hide();
            console.log(_this.requisicion);
        });
    };
    DtRequisicionComponent.prototype.showRequi = function (id, folio) {
        this._Router.navigate(['/ventas/visualizarRequisicion/', id, folio], { skipLocationChange: true });
    };
    DtRequisicionComponent.prototype.editRequi = function (id, folio) {
        this._Router.navigate(['/ventas/edicionRequisicion/', id, folio], { skipLocationChange: true });
    };
    DtRequisicionComponent.prototype.paginate = function (event) {
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
    DtRequisicionComponent.prototype.paginador = function () {
        if (this.page < this.pageCount) {
            this.requisicion = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                this.requisicion[i] = this.arrayRequisicion[this.first + i];
            }
        }
        else {
            var length_1 = this.arrayRequisicion.length - this.first;
            this.requisicion = new Array(length_1);
            for (var i = 0; i < length_1; i++) {
                this.requisicion[i] = this.arrayRequisicion[this.first + i];
            }
        }
        this.dataSource = new material_1.MatTableDataSource(this.requisicion);
    };
    // Filtro dentro del Grid
    DtRequisicionComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DtRequisicionComponent = __decorate([
        core_1.Component({
            selector: 'app-dt-requisicion',
            templateUrl: './dt-requisicion.component.html',
            styleUrls: ['./dt-requisicion.component.scss'],
            providers: [index_1.RequisicionesService]
        }),
        __metadata("design:paramtypes", [index_1.RequisicionesService,
            material_1.MatDialog,
            router_1.Router,
            router_1.ActivatedRoute,
            ngx_spinner_1.NgxSpinnerService,
            angular2_toaster_1.ToasterService])
    ], DtRequisicionComponent);
    return DtRequisicionComponent;
}());
exports.DtRequisicionComponent = DtRequisicionComponent;
//# sourceMappingURL=dt-requisicion.component.js.map