import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ActivatedRoute, CanDeactivate, Router, } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
//Services
import { RequisicionesService } from '../../../../../service/index';
>>>>>>> 2d4d2e780e0829ec1693f28b8cb06f194cf09067

@Component({
  selector: 'app-viewdamfo',
  templateUrl: './viewdamfo.component.html',
<<<<<<< HEAD
  styleUrls: ['./viewdamfo.component.scss']
})
export class ViewdamfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
=======
  styleUrls: ['./viewdamfo.component.scss'],
  providers: [RequisicionesService]
})
export class ViewdamfoComponent implements OnInit {
  private damfoId: string;
  private damfo290: any[];

  constructor(
    private serviceRequisiciones: RequisicionesService,
    private _Router: Router,
    private _Route: ActivatedRoute,
    private spinner:  NgxSpinnerService
  ) { }

  ngOnInit() {
    // this.spinner.show();
    // setTimeout(() => {
      this._Route.params.subscribe(params => {
        if(params['IdDamfo'] != null){
          this.damfoId = params['IdDamfo'];
          this.serviceRequisiciones.getDamfoById(this.damfoId)
              .subscribe(data => {
                this.damfo290 = data;
                console.log(this.damfo290);
              })
        }else{

        }
      });
    //   this.spinner.hide();
    // },1500);

>>>>>>> 2d4d2e780e0829ec1693f28b8cb06f194cf09067
  }

}
