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
  public static damfo290 = 'DAMFO290/get';
  public static requisiciones = "Requisiciones/getDamfos"
  public static filtropaises = 'Candidatos/get';
  public static filtroestados = 'Candidatos/getestados';
  public static filtromunicipios = 'Candidatos/getmunicipios';
  public static filtrocolonias = 'Candidatos/getcolonias';
  public static Candidatos = 'Candidatos/getcandidatos';
  public static getRequis = '/dvacante/get';
  public static getDisenioRequis = '/dvacante/disenio';
  public static Candidatodetail = 'Candidatos/getcandidatoid';
  public static Postulaciones = 'Candidatos/getpostulaciones';
  public static Areasexp = 'Candidatos/getareasexp';
  public static Perfiles = 'Candidatos/getperfiles';
  public static Generos = 'Candidatos/getgeneros';
  public static Discapacidad = 'Candidatos/getdescapacidad';
  public static TpLicencia = 'Candidatos/gettplicencia';
  public static NivelEstudio = 'Candidatos/getnivelestudio';
  public static Idiomas = 'Candidatos/getidiomas';
}
