import { Component, OnInit,Input } from '@angular/core';
import {  Product } from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit {
  @Input() oProduct : Product ={
    id :"",
    name:"",
    price:0,
    image : ""
  };
  constructor() { }

  ngOnInit(): void {
  }

 

}
