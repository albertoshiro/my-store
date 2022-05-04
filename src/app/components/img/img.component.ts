import { Component, OnInit , Input,Output,EventEmitter, OnChanges ,AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit , OnChanges, AfterViewInit, OnDestroy {
  @Input() img: string ='';
  @Output() loaded = new EventEmitter<string>();
  imgDefault  = "./assets/default.png"
  imgWeb = "https://picsum.photos/200"
  
  
  constructor() { 
    //before render 
    console.log("Constructor",'imgValue =>', this.img);
  }
  ngOnDestroy(): void {
    console.log("OnDestroy")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngOnChanges() {
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    //before render 
    console.log('ngOnInit', ' imgValue =>', this.img)
  }

  imgError(){
    this.img = "";
  }
  imgLoaded(){
    console.log("Evento hijo");
    this.loaded.emit(this.img);
  }
  




}
