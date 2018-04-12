import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  listName: any;
  listDes: any;
  allItemList:any=[];
  id:any;

  constructor(private router: Router,private todo_service: TodoService) { }

  ngOnInit() {
    this.todo_service.getItems()
    .subscribe(response => {
      if (response.success == true) {
        this.allItemList = response.data;
        for(let i=0;i<this.allItemList.length;i++)
        {
          this.id = this.allItemList[i]._id;
        }
      } else {
      }
    },
    (err) => {
    });
  }

  insertList(){
    const params = {
      name: this.listName,
      description: this.listDes
    }
    this.todo_service.addItems(params)
    .subscribe(response => {
      if (response.success == true) {
        this.ngOnInit();
      } else {
      }
    },
    (err) => {
    });
  }

  onDeleteClick(params){
    this.todo_service.deleteItem(params)
    .subscribe(response => {
      if (response.success == true) {
        this.ngOnInit();
      } else {
        this.ngOnInit();
      }
    },
    (err) => {
    });

  }

}
