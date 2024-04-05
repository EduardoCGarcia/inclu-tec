import { Injectable } from '@angular/core';

import { 
  Firestore, 
  query, 
  collection, 
  CollectionReference, 
  DocumentData, 
  getDocs, 
  getDoc,
  doc

} from '@angular/fire/firestore';


import { from, map, tap, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirestoreSharedService {
  constructor(private fs: Firestore) {}

  public getAllDocuments<T>(collectionName: string): Observable<T[]> {
    const q = query(collection(this.fs, collectionName))
    return from(getDocs(q)).pipe(
      map((querySnapShot) => {
        return querySnapShot.docs.map((doc) => {
          const id = doc.id
          const data = doc.data() as T
          return { id, ...data }
        })
      })
    )
  }

  public getDocumentById<T>(collectionName:string, documentId:string): Observable<T | undefined> {
    return from(getDoc(doc(collection(this.fs,collectionName),documentId))).pipe(
      map((docSnapShot) => {
        if (docSnapShot.exists()) {
          return docSnapShot.data() as T
        }
        return undefined
      })
    )
  }

}
