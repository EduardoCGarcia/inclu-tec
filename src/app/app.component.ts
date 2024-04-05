import { Component, OnInit } from '@angular/core';
import { FirestoreSharedService } from './shared/services/firestore-shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'incluTec';

  constructor(private fsSvc: FirestoreSharedService){}
  ngOnInit(): void {
    this.fsSvc.getAllDocuments('notes').subscribe(data =>{
      console.log(data)
    }
    )
  }


}
