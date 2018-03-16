export class ApiConection {
  /*Servicio de purbeas locales*/
  public static ServiceUrl = 'http://localhost:33333/api/';
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
}
