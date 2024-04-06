import { Component, OnInit } from '@angular/core';
import { FirestoreSharedService } from './shared/services/firestore-shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'incluTec';

  data:any = []

  constructor(private fsSvc: FirestoreSharedService){}
  ngOnInit(): void {
    this.fsSvc.getDocumentById('notas','KArirA2eTrBAtZbOZd9J').subscribe(data =>{
      this.data = data
      console.log(data);
      
    }
    )
  }


}
