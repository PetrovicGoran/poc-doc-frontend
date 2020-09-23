import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-borrow-new',
  templateUrl: './borrow-new.component.html',
  styleUrls: ['./borrow-new.component.css']
})
export class BorrowNewComponent implements OnInit {

  item:Item={_id:'',name:'', quantity : 0, location:'', condition:'',
   borrow_date:null, return_date:null, deadline_date:null};
   loaderVisible:boolean = false;
   checkVisible:boolean = false;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  //CALL FOR SERVICE HERE
  executeTransaction() {
    this.loaderVisible = true;
    setTimeout(() => {
     this.loaderVisible = false;


     this.checkVisible = true; // this should be in successful callback


     }, 5000);

  }

  ngOnInit(): void {
  }

}
