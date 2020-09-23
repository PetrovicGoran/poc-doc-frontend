import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-borrow-list',
  templateUrl: './borrow-list.component.html',
  styleUrls: ['./borrow-list.component.css']
})
export class BorrowListComponent implements OnInit {

  itemsList: Array<Item>; //this is for storing list of items from API,
  //be sure to change in html name of list

  testData: Array<Item> = [ //this is just place holder
    {
      _id:'1',name:'Invalidski vozicek',
      quantity : 1,
      location:'Majstorva cesta 45, Maribor',
      condition:'novo',
      borrow_date:new Date(2019, 0O5, 0O5, 17, 23, 42, 11),
      return_date:null,
      deadline_date:new Date(2020, 0O5, 0O5, 17, 23, 42, 11)
    },
    {
      _id:'2',name:'Stol za tus',
      quantity : 1,
      location:'Sodna ulica 51, Maribor',
      condition:'uporabljeno',
      borrow_date:new Date(2019, 0O4, 0O5, 17, 23, 42, 11),
      return_date:null,
      deadline_date:new Date(2020, 0O5, 0O5, 17, 23, 42, 11)
    },

    {
      _id:'3',name:'Ojacevalnik zvoka',
      quantity : 2,
      location:'Sodna ulica 51, Maribor',
      condition:'uporabljeno',
      borrow_date:new Date(2018, 0O5, 0O5, 17, 23, 42, 11),
      return_date:null,
      deadline_date:new Date(2020, 0O5, 0O5, 17, 23, 42, 11)
    },
  ];

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

   ngOnInit(): void {


  }

}
