import { Injectable } from '@angular/core';

import { 
  Firestore, 
  query, 
  collection, 
  CollectionReference, 
  DocumentData, 
  getDocs, 
  getDoc,
  doc,
  collectionData,
  docData

} from '@angular/fire/firestore';


import { from, map, tap, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirestoreSharedService {
  constructor(private fs: Firestore) {}

  public getAllDocuments(collectionName: string):Observable<DocumentData>{
    const q = collection(this.fs, collectionName)
    return collectionData(q,{idField:'id'})
  }

  public getDocumentById<T>(collectionName: string, documentId: string) {
    const docRef = doc(this.fs, collectionName, documentId);
    return docData(docRef);
}

}
