import { Component } from '@angular/core';
import {  Product} from "./models/product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent : string = '';
  
  products : Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://picsum.photos/500'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://picsum.photos/200'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://picsum.photos/400'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: 'https://picsum.photos/550'
    }
  ];

  onLoaded(img :string){
    console.log('Log Padre',img);
  }
}
