"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiConection = (function () {
    function ApiConection() {
    }
    /*Servicio de purbeas locales*/
    ApiConection.ServiceUrl = 'http://localhost:33333/api/';
    //public static ServiceUrlTemporal = 'http://localhost:54462/api/';
    /*Coneccion en servidor de purebas sistemas (SandBoxSAGA)*/
    //public static ServiceUrl = 'http://192.168.8.146:33333/api/';
    /*Coneccion en servidor de purebas Usarios (DataBaseSAGA)*/
    //public static ServiceUrl = 'http://192.168.8.146:33333/api/';
    /*Coneccion de Pre - Produccion (?)*/
    //public static ServiceUrl = 'http://192.168.8.246:611/api/';
    // Agregar lsa conecciones necesarias en las cuales se hara referencia.
    /*Catalogos*/
    ApiConection.GetDocumentosDamsa = 'Catalogos/getDocDamsa';
    ApiConection.GetPrestacionesLey = 'Catalogos/getPrestacionesLey';
    ApiConection.getTiposUsuarios = 'Catalogos/getTipos';
    ApiConection.getDepartamentos = 'Catalogos/getDepa';
    ApiConection.GetPrioridades = 'Catalogos/getPrioridades';
    ApiConection.GetEstatusRequi = 'Catalogos/getEstatus?tipoMov=';
    ApiConection.GetGrupos = 'Catalogos/getGrupos';
    ApiConection.GetRoles = 'Catalogos/getRoles';
    /*Reclutamiento*/
    ApiConection.Damfo290GetById = 'Damfo290/getById?id=';
    ApiConection.GetViewDamfos = "Damfo290/getViewDamfos";
    /* Ventas */
    ApiConection.AddressCliente = "Requisiciones/getAddress?Id=";
    ApiConection.CreateRequi = "Requisiciones/createRequi";
    ApiConection.GetRequisicionById = "Requisiciones/getById?Id=";
    ApiConection.GetRequisicionByFolio = "Requisiciones/getByFolio?folio=";
    ApiConection.GetRequisicionesAll = "Requisiciones/getRequisiciones";
    ApiConection.UpdateRequisicion = "Requisiciones/updateRequisiciones";
    /* Candidatos */
    ApiConection.filtropaises = 'Candidatos/get';
    ApiConection.filtroestados = 'Candidatos/getestados';
    ApiConection.filtromunicipios = 'Candidatos/getmunicipios';
    ApiConection.filtrocolonias = 'Candidatos/getcolonias';
    ApiConection.Candidatos = 'Candidatos/getcandidatos';
    ApiConection.Candidatodetail = 'Candidatos/getcandidatoid';
    ApiConection.Postulaciones = 'Candidatos/getpostulaciones';
    ApiConection.Areasexp = 'Candidatos/getareasexp';
    ApiConection.Perfiles = 'Candidatos/getperfiles';
    ApiConection.Generos = 'Candidatos/getgeneros';
    ApiConection.Discapacidad = 'Candidatos/getdescapacidad';
    ApiConection.TpLicencia = 'Candidatos/gettplicencia';
    ApiConection.NivelEstudio = 'Candidatos/getnivelestudio';
    ApiConection.Idiomas = 'Candidatos/getidiomas';
    ApiConection.Vacantes = 'Candidatos/getvacantes';
    ApiConection.Apartar = 'Candidatos/postapartado';
    ApiConection.GetEstatus = 'Candidatos/getestatuscandidato';
    ApiConection.Liberar = 'Candidatos/postliberado';
    /*Vacantes*/
    ApiConection.getRequis = '/dvacante/get';
    ApiConection.setDetalle = '/dvacante/setDetalle';
    ApiConection.setResumen = '/dvacante/setResumen';
    ApiConection.getGeneral = '/dvacante/getGenerales';
    ApiConection.getContrato = '/dvacante/getContrato';
    ApiConection.getPuestoReclutar = '/dvacante/getPuestoReclutar';
    ApiConection.getHorario = '/dvacante/getHorario';
    ApiConection.getsueldo = '/dvacante/getsueldo';
    ApiConection.getOtros = '/dvacante/getOtros';
    ApiConection.getActividad = '/dvacante/getActividad';
    ApiConection.getBeneficio = '/dvacante/getBeneficio';
    ApiConection.getDireccion = '/dvacante/getDireccion';
    ApiConection.getTelefono = '/dvacante/getTelefono';
    ApiConection.getContacto = '/dvacante/getContacto';
    ApiConection.getPsicometria = '/dvacante/getPsicometria';
    ApiConection.getDocumento = '/dvacante/getDocumento';
    ApiConection.getProceso = '/dvacante/getProceso';
    ApiConection.getCopetencia = '/dvacante/getCopetencia';
    ApiConection.getUbicacion = '/dvacante/getUbicacion';
    ApiConection.updatePublicar = '/dvacante/updatePublicar';
    ApiConection.getCampos = '/dvacante/getCampos';
    ApiConection.getClasificaciones = '/dvacante/getClasificaciones';
    /*Admin*/
    ApiConection.getDtosPersonal = '/admin/get';
    ApiConection.getUsuariosByDepa = '/admin/getUsuarioByDepa';
    ApiConection.addRol = '/admin/agregarRol';
    ApiConection.addGrupo = '/admin/addGrupo';
    ApiConection.addUser = '/admin/addUsuario';
    ApiConection.udActivoUser = '/admin/udActivo';
    ApiConection.addUserGroup = '/admin/addUserGroup';
    ApiConection.addPrivilegio = '/admin/agregarPrivilegio';
    ApiConection.getGruposRoles = '/admin/getGruposRoles';
    return ApiConection;
}());
exports.ApiConection = ApiConection;
//# sourceMappingURL=api-conection.service.js.map