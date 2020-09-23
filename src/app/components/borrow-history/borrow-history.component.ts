import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-borrow-history',
  templateUrl: './borrow-history.component.html',
  styleUrls: ['./borrow-history.component.css']
})
export class BorrowHistoryComponent implements OnInit {

  itemsList: Array<Item>; //this is for storing list of items from API,
  //be sure to change in html name of list

  testData: Array<Item> = [ //this is just place holder
    {
      _id:'1',name:'Invalidski vozicek',
      quantity : 1,
      location:'Majstorva cesta 45, Maribor',
      condition:'novo',
      borrow_date:new Date(2008, 0O5, 0O5, 17, 23, 42, 11),
      deadline_date:null,
      return_date:new Date(2009, 0O5, 0O5, 17, 23, 42, 11)
    },
    {
      _id:'2',name:'Invalidski vozicek',
      quantity : 1,
      location:'Sodna ulica 51, Maribor',
      condition:'uporabljeno',
      borrow_date:new Date(2009, 0O4, 0O5, 17, 23, 42, 11),
      deadline_date:null,
      return_date:new Date(2010, 0O5, 0O5, 17, 23, 42, 11)
    },

    {
      _id:'3',name:'Ojacevalnik zvoka',
      quantity : 2,
      location:'Sodna ulica 51, Maribor',
      condition:'uporabljeno',
      borrow_date:new Date(2011, 0O5, 0O5, 17, 23, 42, 11),
      deadline_date:null,
      return_date:new Date(2013, 0O5, 0O5, 17, 23, 42, 11)
    },
    {
      _id:'4',name:'Ojacevalnik zvoka',
      quantity : 1,
      location:'Sodna ulica 51, Maribor',
      condition:'uporabljeno',
      borrow_date:new Date(2011, 0O5, 0O5, 17, 23, 42, 11),
      deadline_date:null,
      return_date:new Date(2013, 0O5, 0O5, 17, 23, 42, 11)
    }
  ];

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

   ngOnInit(): void {


  }

}
