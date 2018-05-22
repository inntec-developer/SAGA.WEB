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
var catalogo_configuracion_service_1 = require("../../../../service/DisenioVacante/catalogo-configuracion.service");
var configuracion_service_1 = require("../../../../service/DisenioVacante/configuracion.service");
var _1 = require("@angular/router/");
var http_1 = require("@angular/http");
var angular2_toaster_1 = require("angular2-toaster");
var DisenadorVacanteComponent = (function () {
    function DisenadorVacanteComponent(service, http, route, router, Config, toasterService) {
        this.service = service;
        this.http = http;
        this.route = route;
        this.router = router;
        this.Config = Config;
        this.ListaCampo = [];
        //let ListaCampo : any[];
        this.ListaCon = [];
        this.variable = false;
        this.step = 0;
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            positionClass: 'toast-bottom-right',
            showCloseButton: true
        });
        this.toasterService = toasterService;
    }
    DisenadorVacanteComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.route.params.subscribe(params => {
        //     this.Requi = params['Requi'];
        // });
        this.route.queryParams
            .filter(function (params) { return params.Requi; })
            .subscribe(function (params) {
            _this.Requi = params.Requi;
            console.log(_this.Requi); // popular
        });
        //  this.Requi = this.route.queryParams._value.Requi;
        this.service.getGeneral(this.Requi)
            .subscribe(function (data) {
            _this.General = data;
        });
        this.service.getContrato(this.Requi)
            .subscribe(function (data) {
            _this.Contrato = data;
        });
        this.service.getPuestoReclutar(this.Requi)
            .subscribe(function (data) {
            _this.PuestoReclutar = data;
        });
        this.service.getHorario(this.Requi)
            .subscribe(function (data) {
            _this.Horario = data;
        });
        this.service.getsueldo(this.Requi)
            .subscribe(function (data) {
            _this.sueldo = data;
        });
        this.service.getOtros(this.Requi)
            .subscribe(function (data) {
            _this.Otros = data;
        });
        this.service.getActividad(this.Requi)
            .subscribe(function (data) {
            _this.Actividad = data;
        });
        this.service.getBeneficio(this.Requi)
            .subscribe(function (data) {
            _this.Beneficio = data;
        });
        this.service.getDireccion(this.Requi)
            .subscribe(function (data) {
            _this.Direccion = data;
        });
        this.service.getTelefono(this.Requi)
            .subscribe(function (data) {
            _this.Telefono = data;
        });
        this.service.getContacto(this.Requi)
            .subscribe(function (data) {
            _this.Contacto = data;
        });
        this.service.getPsicometria(this.Requi)
            .subscribe(function (data) {
            _this.Psicometria = data;
        });
        this.service.getDocumento(this.Requi)
            .subscribe(function (data) {
            _this.Documento = data;
        });
        this.service.getProceso(this.Requi)
            .subscribe(function (data) {
            _this.Proceso = data;
        });
        this.service.getCopetencia(this.Requi)
            .subscribe(function (data) {
            _this.Copetencia = data;
        });
        this.service.getUbicacion(this.Requi)
            .subscribe(function (data) {
            _this.Ubicacion = data;
        });
        this.service.getCampos()
            .subscribe(function (data) {
            //  let ListaCampo : any[];
            _this.ListaCampo = [];
            _this.ListaCampo = data;
            //  this.Publicar()
        });
    };
    DisenadorVacanteComponent.prototype.Publicar = function () {
        var _this = this;
        for (var _i = 0, _a = this.ListaCampo; _i < _a.length; _i++) {
            var item = _a[_i];
            var d = document.getElementById('Detalle_' + item.id);
            var r = document.getElementById('Resumen_' + item.id);
            var det = d['checked'];
            var res = r['checked'];
            var config = {
                detalle: det,
                resumen: res,
                idCampo: item.id,
                nombre: item.nombre,
                id: this.Requi
            };
            this.ListaCon.push(config);
        }
        console.log(this.ListaCon);
        this.Config.UpdatePublicar(this.ListaCon)
            .subscribe(function (data) {
            console.log(data);
            _this.popGenerico(data.mensaje, data.bandera, 'Publicacion');
        });
        this.ListaCon = [];
    };
    DisenadorVacanteComponent.prototype.Descripcion = function () {
        this.toasterService.pop('warning', 'Trabajando', 'Se cambio la forma de como guardar la configuracion');
    };
    DisenadorVacanteComponent.prototype.SetDetalle = function (id, titulo) {
        var _this = this;
        // let e2 = document.getElementById('Detalle_' + id);
        // let algo = (<HTMLInputElement>e2).checked;
        var e = document.getElementById('Detalle_' + id);
        var bol = e['checked'];
        this.Config.SetDetalle(this.Requi, id, bol)
            .subscribe(function (data) {
            console.log(data.Mensaje);
            _this.pop(data.mensaje, data.bandera, bol, titulo, 'Detalle');
        });
    };
    DisenadorVacanteComponent.prototype.SetResumen = function (id, titulo) {
        var _this = this;
        var e = document.getElementById('Resumen_' + id);
        this.bol = e['checked'];
        this.Config.SetResumen(this.Requi, id, this.bol)
            .subscribe(function (data) {
            _this.Mensaje = data;
            _this.pop(data.mensaje, data.bandera, _this.bol, titulo, 'Resumen');
        });
    };
    DisenadorVacanteComponent.prototype.popGenerico = function (mensaje, bandera, titulo) {
        var type = 'success';
        if (bandera == false) {
            console.log(mensaje);
            type = 'error';
            mensaje = 'Ocurrio algo inesperado intentelo mas tarde';
        }
        this.toasterService.pop(type, titulo, mensaje);
    };
    DisenadorVacanteComponent.prototype.pop = function (mensaje, bandera, tipo, titulo, area) {
        var type = 'success';
        mensaje = 'Se mostrara en  ' + area;
        if (tipo == false) {
            type = 'info';
            mensaje = 'No se mostrara en ' + area;
        }
        if (bandera == false) {
            type = 'error';
            mensaje = 'Ocurrio algo inesperado intentelo mas tarde';
        }
        this.toasterService.pop(type, titulo, mensaje);
    };
    DisenadorVacanteComponent.prototype.LlamarVacante = function () {
        this.router.navigate(['/reclutamiento/vacantes']);
    };
    DisenadorVacanteComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    DisenadorVacanteComponent.prototype.nextStep = function () {
        this.step++;
    };
    DisenadorVacanteComponent.prototype.prevStep = function () {
        this.step--;
    };
    DisenadorVacanteComponent = __decorate([
        core_1.Component({
            selector: 'app-disenador-vacante',
            templateUrl: './disenador-vacante.component.html',
            styleUrls: ['./disenador-vacante.component.scss'],
            providers: [catalogo_configuracion_service_1.CatalogoConfiguracionService, configuracion_service_1.ConfiguracionService],
        }),
        __metadata("design:paramtypes", [catalogo_configuracion_service_1.CatalogoConfiguracionService,
            http_1.Http,
            _1.ActivatedRoute,
            _1.Router,
            configuracion_service_1.ConfiguracionService,
            angular2_toaster_1.ToasterService])
    ], DisenadorVacanteComponent);
    return DisenadorVacanteComponent;
}());
exports.DisenadorVacanteComponent = DisenadorVacanteComponent;
//# sourceMappingURL=disenador-vacante.component.js.map