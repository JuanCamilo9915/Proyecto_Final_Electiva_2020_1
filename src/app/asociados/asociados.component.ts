import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-asociados',
  templateUrl: './asociados.component.html',
  styleUrls: ['./asociados.component.scss'],
})
export class AsociadosComponent implements OnInit {
  asociado: any;
  sector: string;
  subsector: string;
  nombree: string;
  nombrec: string;
  numeroc: number;
  correo: string;
  tipoa: string;
  objetivo: string;
  unidade: string;

  constructor(public crudservice:CrudService) {}

    ngOnInit()
  {
 this.crudservice.get_Allasociados().subscribe((data) => {
   this.asociado = data.map((e) => {
     return {
          id: e.payload.doc.id,
          isedit:false,
          sector1: e.payload.doc.data()['sector1'],
          subsector1: e.payload.doc.data()['subsector1'],
          nombree1: e.payload.doc.data()['nombree1'],
          nombrec1: e.payload.doc.data()['nombrec1'],
          numeroc1: e.payload.doc.data()['numeroc1'],
          correo1: e.payload.doc.data()['correo1'],
          tipoa1: e.payload.doc.data()['tipoa1'],
          objetivo1: e.payload.doc.data()['objetivo1'],
          unidade1: e.payload.doc.data()['unidade1'],
     };
   });
   console.log(this.asociado);
 });
  }

  CreateRecord()
  {
    let Record ={};
    Record['sector1'] = this.sector;
    Record['subsector1'] = this.subsector;
    Record['nombree1'] = this.nombree;
    Record['nombrec1'] = this.nombrec;
    Record['numeroc1'] = this.numeroc;
    Record['correo1'] = this.correo;
    Record['tipoa1'] = this.tipoa;
    Record['objetivo1'] = this.objetivo;
    Record['unidade1'] = this.unidade;

    this.crudservice.create_Newasociado(Record).then(res => {
      this.sector = "";
      this.subsector = "";
      this.nombree = "";
      this.nombrec = "";
      this.numeroc = undefined;
      this.correo = "";
      this.tipoa = "";
      this.objetivo = "";
      this.unidade = "";
    }).catch(error =>{
      console.log(error);
    })
    alert('Se agrego correctamente');
  }

  EditRecord(Record)
  {
    Record.isedit = true;
    Record.editsector = Record.sector1;
    Record.editsubsector = Record.subsector1;
    Record.editnombree = Record.nombree1;
    Record.editnombrec = Record.nombrec1;
    Record.editnumeroc = Record.numeroc1;
    Record.editcorreo = Record.correo1;
    Record.edittipoa = Record.tipoa1;
    Record.editobjetivo = Record.objetivo1;
    Record.editunidade = Record.unidade1;
  }

  UpdateRecord(recorddata)
  {

    let record = {};
     record['sector1'] = recorddata.editsector;
     record['subsector1'] = recorddata.editsubsector;
     record['nombree1'] = recorddata.editnombree;
     record['nombrec1'] = recorddata.editnombrec;
     record['numeroc1'] = recorddata.editnumeroc;
     record['correo1'] = recorddata.editcorreo;
     record['tipoa1'] = recorddata.edittipoa;
     record['objetivo1'] = recorddata.editobjetivo;
     record['unidade1'] = recorddata.editunidade;
     this.crudservice.update_asociados(recorddata.id, record);
     recorddata.isedit = false;
  }

  DeleteAsociado(record_id)
  {
    this.crudservice.delete_asociado(record_id);
  }


}
