import { Component, OnInit } from '@angular/core';
import { CatalogoConfiguracionService } from '../../../../service/DisenioVacante/catalogo-configuracion.service';
import { ConfiguracionService } from '../../../../service/DisenioVacante/configuracion.service';
import { ActivatedRoute,Router} from '@angular/router/';
import {Http} from '@angular/http';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {ToasterService,ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-disenador-vacante',
  templateUrl: './disenador-vacante.component.html',
  styleUrls: ['./disenador-vacante.component.scss'],
  providers:[CatalogoConfiguracionService,ConfiguracionService],
})

export class DisenadorVacanteComponent implements OnInit {
public General : any[];
public Contrato : any[];
public PuestoReclutar : any[];
public Horario : any[];
public sueldo : any[];
public Otros : any[];
public Actividad : any[];
public Beneficio : any[];
public Direccion : any[];
public Telefono : any[];
public Contacto : any[];
public Psicometria : any[];
public Documento : any[];
public Proceso : any[];
public Copetencia : any[];
public Ubicacion : any[];
public ListaCampo :Array<any> = [];
//let ListaCampo : any[];
public ListaCon : Array<any> = [];

public Requi : string;
public Mensaje :string;
public variable:boolean = false;
private toasterService: ToasterService;
public bol:boolean;
step = 0;
toaster: any;
toasterConfig: any;
toasterconfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-bottom-right',
    showCloseButton: true
});

  constructor(
          private service: CatalogoConfiguracionService
          ,private http: Http
          ,private route: ActivatedRoute
          ,private router: Router
          ,private Config: ConfiguracionService
          ,toasterService: ToasterService
        ) {
            this.toasterService = toasterService;
        }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //     this.Requi = params['Requi'];
    // });
    this.route.queryParams
      .filter(params => params.Requi)
      .subscribe(params => {
        this.Requi = params.Requi;
        console.log(this.Requi); // popular
      });
  //  this.Requi = this.route.queryParams._value.Requi;

    this.service.getGeneral(this.Requi)
    .subscribe( data => {
      this.General = data;
    });

    this.service.getContrato(this.Requi)
    .subscribe( data => {
      this.Contrato = data;
    });

    this.service.getPuestoReclutar(this.Requi)
    .subscribe( data => {
      this.PuestoReclutar = data;
    });

    this.service.getHorario(this.Requi)
    .subscribe( data => {
      this.Horario = data;
    });

    this.service.getsueldo(this.Requi)
    .subscribe( data => {
      this.sueldo = data;
    });

    this.service.getOtros(this.Requi)
    .subscribe( data => {
      this.Otros = data;
    });

    this.service.getActividad(this.Requi)
    .subscribe( data => {
      this.Actividad = data;
    });

    this.service.getBeneficio(this.Requi)
    .subscribe( data => {
      this.Beneficio = data;
    });

    this.service.getDireccion(this.Requi)
    .subscribe( data => {
      this.Direccion = data;
    });

    this.service.getTelefono(this.Requi)
    .subscribe( data => {
      this.Telefono = data;
    });

    this.service.getContacto(this.Requi)
    .subscribe( data => {
      this.Contacto = data;
    });

    this.service.getPsicometria(this.Requi)
    .subscribe( data => {
      this.Psicometria = data;
    });

    this.service.getDocumento(this.Requi)
    .subscribe( data => {
      this.Documento = data;
    });

    this.service.getProceso(this.Requi)
    .subscribe( data => {
      this.Proceso = data;
    });

    this.service.getCopetencia(this.Requi)
    .subscribe( data => {
      this.Copetencia = data;
    });

    this.service.getUbicacion(this.Requi)
    .subscribe( data => {
      this.Ubicacion = data;
    });

    this.service.getCampos()
    .subscribe( data => {
    //  let ListaCampo : any[];
      this.ListaCampo = [];
      this.ListaCampo = data;
    //  this.Publicar()
    });

  }

  Publicar(){

    for (let item of this.ListaCampo) {
      let d = document.getElementById('Detalle_' + item.id);
      let r = document.getElementById('Resumen_' + item.id);
      let det = d['checked'];
      let res = r['checked'];
      let config = {
                      detalle:det,
                      resumen:res,
                      idCampo:item.id,
                      nombre:item.nombre,
                      id:this.Requi
                   }
      this.ListaCon.push(config);
   }
   console.log(this.ListaCon)
   this.Config.UpdatePublicar(this.ListaCon)
   .subscribe( data => {
    console.log(data)
    this.popGenerico(data.mensaje,data.bandera,'Publicacion');
   });
   this.ListaCon = [];
  }

  Descripcion(){
    this.toasterService.pop('warning', 'Trabajando', 'Se cambio la forma de como guardar la configuracion');
  }

  SetDetalle(id,titulo){
    // let e2 = document.getElementById('Detalle_' + id);
    // let algo = (<HTMLInputElement>e2).checked;
    let e = document.getElementById('Detalle_' + id);
    let bol = e['checked'];
    this.Config.SetDetalle(this.Requi,id,bol)
    .subscribe( data => {
      console.log(data.Mensaje)
      this.pop(data.mensaje,data.bandera,bol,titulo,'Detalle');
    });
  }


  SetResumen(id,titulo){
    let e = document.getElementById('Resumen_' + id);
    this.bol = e['checked'];
    this.Config.SetResumen(this.Requi,id,this.bol)
    .subscribe( data => {
      this.Mensaje = data;
      this.pop(data.mensaje,data.bandera,this.bol,titulo,'Resumen');
    });
  }

  popGenerico(mensaje:string,bandera:boolean,titulo:string) {
    var type = 'success';
    if (bandera == false) {
          console.log(mensaje);
          type = 'error';
          mensaje = 'Ocurrio algo inesperado intentelo mas tarde';

      }
      this.toasterService.pop(type, titulo, mensaje);
  }

  pop(mensaje:string,bandera:boolean,tipo:boolean,titulo:string,area:string) {
    var type = 'success';
    mensaje = 'Se mostrara en  ' + area;
    if (tipo == false) {
      type = 'info';
      mensaje='No se mostrara en ' + area;
    }
    if (bandera == false) {
          type = 'error';
          mensaje = 'Ocurrio algo inesperado intentelo mas tarde';
      }
      this.toasterService.pop(type, titulo, mensaje);
  }

  LlamarVacante(){
    this.router.navigate(['/reclutamiento/vacantes']);
  }

  setStep(index: number) {
   this.step = index;
 }

 nextStep() {
   this.step++;
 }

 prevStep() {
   this.step--;
 }
}
