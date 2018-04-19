export class ApiConection {
  /*Servicio de purbeas locales*/
  public static ServiceUrl = 'http://localhost:33333/api/';
   public static ServiceUrlTemporal = 'http://localhost:54462/api/';
  /*Coneccion en servidor de purebas sistemas (SandBoxSAGA)*/
  //public static ServiceUrl = 'http://192.168.8.146:33333/api/';
  /*Coneccion en servidor de purebas Usarios (DataBaseSAGA)*/
  //public static ServiceUrl = 'http://192.168.8.146:33333/api/';
  /*Coneccion de Produccion (?)*/
  //public static ServiceUrl = 'http://192.168.8.146:33333/api/';

  // Agregar lsa conecciones necesarias en las cuales se hara referencia.

  /*Catalogos*/
  public static GetDocumentosDamsa = 'Catalogos/getDocDamsa';
  public static GetPrestacionesLey = 'Catalogos/getPrestacionesLey';

  /*Reclutamiento*/
  public static Damfo290GetById = 'Damfo290/getById?id=';
  public static GetViewDamfos = "Damfo290/getViewDamfos";

  /* Ventas */
  public static AddressCliente = "Requisiciones/getAddress?Id=";
  public static CreateRequi = "Requisiciones/createRequi";
  public static GetRequisicionById = "Requisiciones/getById?Id=";
  public static GetRequisicionesAll = "Requisiciones/getRequisiciones"

  /* Candidatos */
  public static filtropaises = 'Candidatos/get';
  public static filtroestados = 'Candidatos/getestados';
  public static filtromunicipios = 'Candidatos/getmunicipios';
  public static filtrocolonias = 'Candidatos/getcolonias';
  public static Candidatos = 'Candidatos/getcandidatos';
  public static Candidatodetail = 'Candidatos/getcandidatoid';
  public static Postulaciones = 'Candidatos/getpostulaciones';
  public static Areasexp = 'Candidatos/getareasexp';
  public static Perfiles = 'Candidatos/getperfiles';
  public static Generos = 'Candidatos/getgeneros';
  public static Discapacidad = 'Candidatos/getdescapacidad';
  public static TpLicencia = 'Candidatos/gettplicencia';
  public static NivelEstudio = 'Candidatos/getnivelestudio';
  public static Idiomas = 'Candidatos/getidiomas';
  public static Vacantes = 'Candidatos/getvacantes';
  public static Apartar = 'Candidatos/postapartado';
  public static GetEstatus = 'Candidatos/getestatuscandidato';
  public static Liberar = 'Candidatos/postliberado';

  /*Vacantes*/
  public static getRequis = '/dvacante/get';
  public static setDetalle = '/dvacante/setDetalle';
  public static setResumen = '/dvacante/setResumen';
  public static getGeneral = '/dvacante/getGenerales';
  public static getContrato = '/dvacante/getContrato';
  public static getPuestoReclutar = '/dvacante/getPuestoReclutar';
  public static getHorario = '/dvacante/getHorario';
  public static getsueldo = '/dvacante/getsueldo';
  public static getOtros = '/dvacante/getOtros';
  public static getActividad = '/dvacante/getActividad';
  public static getBeneficio = '/dvacante/getBeneficio';
  public static getDireccion = '/dvacante/getDireccion';
  public static getTelefono = '/dvacante/getTelefono';

}
