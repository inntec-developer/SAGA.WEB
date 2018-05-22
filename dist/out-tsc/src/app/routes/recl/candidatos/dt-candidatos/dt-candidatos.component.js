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
var material_1 = require("@angular/material");
var angular2_toaster_1 = require("angular2-toaster");
var router_1 = require("@angular/router");
// Modelos
var candidatos_1 = require("../../../../models/recl/candidatos");
// Componentes
var dialogcandidatos_component_1 = require("./dialogcandidatos/dialogcandidatos.component");
// Servicios
var index_1 = require("../../../../service/index");
var DtCandidatosComponent = (function () {
    function DtCandidatosComponent(service, dialog, _Router, _Route, toasterService) {
        this.service = service;
        this.dialog = dialog;
        this._Router = _Router;
        this._Route = _Route;
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            positionClass: 'toast-bottom-right',
            showCloseButton: true
        });
        // Estructura de las tablas a mostrar. ***
        // Columnas de tabla de Vacantes. ***
        this.displayedColumnsVacantes = ['Vacante', 'FechaCreacion', 'Cliente', 'Reclutamiento', 'Area', 'Accion'];
        this.dataSourcev = new material_1.MatTableDataSource([]);
        // Columnas de tabla de Postulaciones. ***
        this.displayedColumnsp = ['Vacante', 'Estatus'];
        this.dataSourcep = new material_1.MatTableDataSource([]);
        // Columnas de tabla de candidatos. ***
        this.displayedColumns = ['Candidato', 'Experiencias', 'AreaInteres', 'Curp', 'Rfc', 'accion'];
        this.dataSource = new material_1.MatTableDataSource([]);
        // Variable para el consecutivo del detalle del candidato. ***
        this.step = 0;
        // Parametros para paginador candidatos. ***
        this.length = 0;
        this.pageSize = 10;
        this.pageSizeOptions = [10, 20, 30, 50];
        this.rows = 10;
        this.first = 0;
        this.page = 1;
        this.pageCount = 0;
        this.TotalRecords = 0;
        // Termina paginador
        // Parametros para paginador vacantes. ***
        this.lengthv = 0;
        this.pageSizev = 5;
        this.pageSizeOptionsv = [5, 10, 15, 20];
        this.rowsv = 5;
        this.firstv = 0;
        this.pagev = 1;
        this.pageCountv = 0;
        this.TotalRecordsv = 0;
        this.toasterService = toasterService;
    }
    DtCandidatosComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    DtCandidatosComponent.prototype.SiguienteStep = function () {
        this.step++;
    };
    DtCandidatosComponent.prototype.prevStep = function () {
        this.step--;
    };
    DtCandidatosComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    // Filtro de tabla de candidatos. ***
    DtCandidatosComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    // Filtro de tabla de vacantes. ***
    DtCandidatosComponent.prototype.applyFilterv = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSourcev.filter = filterValue;
    };
    // Captamos la variable de la busqueda de candidatos para ver si tiene cambios. ***
    DtCandidatosComponent.prototype.ngOnChanges = function (changes) {
        if (changes.FCandidatos && !changes.FCandidatos.isFirstChange()) {
            this.ngOnInit();
        }
    };
    // Agregamos la carga para la tabla de candidatos. ***
    DtCandidatosComponent.prototype.ngOnInit = function () {
        this.dataSource = new material_1.MatTableDataSource(this.FCandidatos);
        this.candidatos = this.FCandidatos;
        this.arraycandidatos = this.candidatos;
        this.pageCount = Math.round(this.candidatos.length / this.rows);
        this.TotalRecords = this.candidatos.length;
        this.paginador();
    };
    // Boton de ver de la tabla de candidatos. ***
    DtCandidatosComponent.prototype.openDialog = function (id) {
        var _this = this;
        // Buscamos el detalle del candidato seleccionado. ***
        this.service.getcandidatodtl(id)
            .subscribe(function (data) {
            _this.candidatodtl = data;
            // Buscamos el estatus del candidato del apartado o liberado. ***
            _this.service.getEstatusCandidato(_this.candidatodtl[0].candidatoId)
                .subscribe(function (estatus) {
                if (estatus.length == 0) {
                    _this.Status = estatus.length;
                    _this.Reclutador = 'Candidato disponible';
                }
                else {
                    _this.Status = estatus[0].estatus;
                    _this.Reclutador = estatus[0].reclutador;
                    _this.requisicionId = estatus[0].requisicionId;
                    _this.StatusId = estatus[0].id;
                    _this.tpcontrato = estatus[0].tpContrato;
                }
            });
            // Buscamos las postulaciones del candidato. ***
            _this.service.getpostulaciones(_this.candidatodtl[0].candidatoId)
                .subscribe(function (postulaciones) {
                _this.dataSourcep = new material_1.MatTableDataSource(postulaciones);
                _this.NumPostulaciones = postulaciones.length;
            });
            // Buscamos las vacantes de la celula o los asignados al reclutador. ***
            _this.service.getvacantes()
                .subscribe(function (vacantes) {
                _this.vacantes = vacantes;
                _this.arrayvacantes = _this.vacantes;
                _this.pageCountv = Math.round(_this.vacantes.length / _this.rowsv);
                _this.TotalRecordsv = _this.vacantes.length;
                _this.dataSourcev = new material_1.MatTableDataSource(vacantes);
                _this.NumVacantes = _this.vacantes.length;
                _this.paginadorv();
            });
        });
        this.expandir = true; // Expandemos los detalles del candidato seleccionado. ***
        // let dialogRef = this.dialog.open(DialogcandidatosComponent, {
        //   width: '1200px',
        //   height: '700px',
        //   data: this.candidatodtl
        // });
        // dialogRef.afterClosed().subscribe(result => {
        // });
    };
    // Abrimos el modal en donde mandamos el id de la requisicion para mostar los datos. ***
    DtCandidatosComponent.prototype.OpenDtl = function (Id) {
        var dialogRef = this.dialog.open(dialogcandidatos_component_1.DialogcandidatosComponent, {
            width: '1200px',
            height: '700px',
            data: this.vacantes
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    // Proceso de apartado del candidato. ***
    DtCandidatosComponent.prototype.Apartar = function (idvct) {
        var _this = this;
        var Apartar = new candidatos_1.Apartado();
        Apartar.CandidatoId = this.candidatodtl[0].candidatoId;
        Apartar.RequisicionId = idvct;
        Apartar.Reclutador = 'Inntec';
        Apartar.Estatus = 1;
        Apartar.TpContrato = 2;
        // Se manda el objeto con los datos necesarios para su inserción al servicio. ***
        this.service.postApartar(Apartar)
            .subscribe(function (data) {
            _this.pop(data.mensaje, true, data.estatus, 'Apartado', data.reclutador);
        });
        // Recargamos de nuevo la vacante con el apartado. ***
        this.openDialog(this.candidatodtl[0].candidatoId);
    };
    // Proceso de liberación del candidato. ***
    DtCandidatosComponent.prototype.Liberar = function (idvct) {
        var _this = this;
        this.service.Liberar(this.StatusId)
            .subscribe(function (data) {
            _this.pop('Hola', false, 0, 'Liberado', data);
        });
        // Recargamos de nuevo la vacante con el borrado. ***
        this.openDialog(this.candidatodtl[0].candidatoId);
    };
    // Mensajes de confirmación o error. ***
    DtCandidatosComponent.prototype.pop = function (mensaje, bandera, estatus, titulo, candidato) {
        if (bandera == true) {
            if (estatus > 0) {
                var type = 'success';
                mensaje = 'Candidato apartado por: ' + candidato;
            }
            else {
                var type = 'error';
                mensaje = 'El candidato no se pudo apartar correctamente.';
            }
        }
        else {
            if (estatus == 0) {
                var type = 'error';
                mensaje = 'Candidato liberado';
            }
            else {
                var type = 'warning';
                mensaje = 'El candidato no se pudo liberar correctamente.';
            }
        }
        this.toasterService.pop(type, titulo, mensaje);
    };
    // Función de paginador para afectación de los numeros de registros y página.
    DtCandidatosComponent.prototype.paginate = function (event) {
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
    // Comienza el paginador. ***
    DtCandidatosComponent.prototype.paginador = function () {
        if (this.page < this.pageCount) {
            this.candidatos = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                this.candidatos[i] = this.arraycandidatos[this.first + i];
            }
        }
        else {
            var lenght = this.arraycandidatos.length - this.first;
            this.candidatos = new Array(lenght);
            for (var i = 0; i < lenght; i++) {
                this.candidatos[i] = this.arraycandidatos[this.first + i];
            }
        }
        this.dataSource = new material_1.MatTableDataSource(this.candidatos);
    };
    // Función de paginador para afectación de los numeros de registros y página.
    DtCandidatosComponent.prototype.paginatev = function (eventv) {
        debugger;
        if (eventv.length > eventv.pageSize) {
            this.firstv = eventv.pageIndex;
            this.rowsv = eventv.pageSize;
            this.pagev = eventv.pageIndex;
            this.pageCountv = eventv.length;
        }
        else {
            this.rowsv = eventv.length;
        }
        this.paginadorv();
    };
    // Comienza el paginador. ***
    DtCandidatosComponent.prototype.paginadorv = function () {
        if (this.pagev < this.pageCountv) {
            this.vacantes = new Array(this.rowsv);
            for (var i = 0; i < this.rowsv; i++) {
                this.vacantes[i] = this.arrayvacantes[this.firstv + i];
            }
        }
        else {
            var lenghtv = this.arrayvacantes.length - this.firstv;
            this.vacantes = new Array(lenghtv);
            for (var i = 0; i < lenghtv; i++) {
                this.vacantes[i] = this.arrayvacantes[this.firstv + i];
            }
        }
        this.dataSourcev = new material_1.MatTableDataSource(this.vacantes);
    };
    __decorate([
        core_1.Input('Filtrado'),
        __metadata("design:type", Object)
    ], DtCandidatosComponent.prototype, "FCandidatos", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], DtCandidatosComponent.prototype, "sort", void 0);
    DtCandidatosComponent = __decorate([
        core_1.Component({
            selector: 'app-dt-candidatos',
            templateUrl: './dt-candidatos.component.html',
            styleUrls: ['./dt-candidatos.component.scss'],
            providers: [index_1.CandidatosService]
        }),
        __metadata("design:paramtypes", [index_1.CandidatosService, material_1.MatDialog, router_1.Router,
            router_1.ActivatedRoute, angular2_toaster_1.ToasterService])
    ], DtCandidatosComponent);
    return DtCandidatosComponent;
}());
exports.DtCandidatosComponent = DtCandidatosComponent;
//# sourceMappingURL=dt-candidatos.component.js.map