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
var http_1 = require("@angular/common/http");
var DtPersonasComponent = (function () {
    function DtPersonasComponent(http) {
        this.http = http;
        this.ng2TableData = [
            { nombre: 'Melina',
                apellidop: 'Morales',
                apellidom: 'Cordova',
                correo: 'correo@damsa.com.mx',
                puesto: 'Desarrollador',
                nemp: '12345',
                fechaI: '15/03/2018',
                prod: '35',
                oficina: 'Hidalgo',
                img: 'assets/img/sky-bg.jpg',
                foto: 'assets/img/user/01.jpg' },
            { nombre: 'Melina',
                apellidop: 'Morales',
                apellidom: 'Cordova',
                correo: 'correo@damsa.com.mx',
                puesto: 'Desarrollador',
                nemp: '12345',
                fechaI: '15/03/2018',
                prod: '35',
                oficina: 'Hidalgo',
                img: 'assets/img/sky-bg.jpg',
                foto: 'assets/img/user/01.jpg' },
            { nombre: 'Melina',
                apellidop: 'Morales',
                apellidom: 'Cordova',
                correo: 'correo@damsa.com.mx',
                puesto: 'Desarrollador',
                nemp: '12345',
                fechaI: '15/03/2018',
                prod: '35',
                oficina: 'Hidalgo',
                img: 'assets/img/sky-bg.jpg',
                foto: 'assets/img/sky-bg.jpg' }
        ];
        // ng2Table
        this.rows = [];
        this.columns = [
            { title: 'Foto', name: 'img', sort: '', img: { img: "<img src=\"img\" />", placeholder: "<img src=\"img\" />" } },
            { title: 'Nombre', name: 'nombre', filtering: { filterString: '', placeholder: 'Filtrar por Nombre' } },
            {
                title: 'Puesto',
                name: 'puesto',
                sort: false,
                filtering: { filterString: '', placeholder: 'Filtrar por puesto' }
            },
            { title: 'Oficina', className: ['office-header', 'text-success'], name: 'oficina', sort: 'asc' },
            { title: 'DAL.', name: 'nemp', sort: '', filtering: { filterString: '', placeholder: 'Filtar por DAL.' } },
            { title: 'Fecha de Inicio', className: 'text-warning', name: 'fechaI' },
        ];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered', 'mb0', 'd-table-fixed'] // mb0=remove margin -/- .d-table-fixed=fix column width
        };
        // ng2Table
        this.length = this.ng2TableData.length;
    }
    DtPersonasComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
    };
    DtPersonasComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.ng2TableData; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    DtPersonasComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    DtPersonasComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    DtPersonasComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.ng2TableData, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    DtPersonasComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    DtPersonasComponent = __decorate([
        core_1.Component({
            selector: 'app-dt-personas',
            templateUrl: './dt-personas.component.html',
            styleUrls: ['./dt-personas.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DtPersonasComponent);
    return DtPersonasComponent;
}());
exports.DtPersonasComponent = DtPersonasComponent;
//# sourceMappingURL=dt-personas.component.js.map