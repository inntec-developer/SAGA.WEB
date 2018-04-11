import { Component, OnInit } from '@angular/core';
import { CatalogoConfiguracionService } from '../../../../service/DisenioVacante/catalogo-configuracion.service';
import { ConfiguracionService } from '../../../../service/DisenioVacante/configuracion.service';
import { ActivatedRoute,Router} from '@angular/router/';
import {Http} from '@angular/http';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {ToasterService,ToasterConfig} from 'angular2-toaster';
import { MatIconModule} from '@angular/material';
//import {MatIconModule} from '@angular/material/icon';


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
public Requi : any[];
public Mensaje :any[];
public variable:boolean = false;
private toasterService: ToasterService;
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
    this.Requi = this.route.queryParams._value.Requi
    console.log(this.Requi);
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
  }

  SetDetalle(id,titulo){
    var bol = document.getElementById('Detalle_' + id).checked
    this.Config.SetDetalle(this.Requi,id,bol)
    .subscribe( data => {
      this.Mensaje = data;
      this.pop(this.Mensaje.mensaje,this.Mensaje.bandera,bol,titulo,'Detalle');
      console.log(this.Mensaje)
    });
  }



  SetResumen(id,titulo){
    var bol = document.getElementById('Resumen_' + id).checked
    this.Config.SetResumen(this.Requi,id,bol)
    .subscribe( data => {
      this.Mensaje = data;
      this.pop(this.Mensaje.mensaje,this.Mensaje.bandera,bol,titulo,'Resumen');
    });
  }

  pop(mensaje,bandera,tipo,titulo,area) {
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
