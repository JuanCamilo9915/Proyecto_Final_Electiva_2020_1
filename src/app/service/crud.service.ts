import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(public fireservices: AngularFirestore) {}

  create_Newasociado(Record) {
    return this.fireservices.collection('registroA').add(Record);
  }

  get_Allasociados() {
    return this.fireservices.collection('registroA').snapshotChanges();
  }

  update_asociados(recordid, record) {
    this.fireservices.doc('registroA/' + recordid).update(record);
  }

  delete_asociado(record_id)
  {
    this.fireservices.doc('registroA/' + record_id).delete();
  }
}
