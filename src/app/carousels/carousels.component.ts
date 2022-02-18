import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.css']
})
export class CarouselsComponent implements OnInit {
@Input() carousel:any[]=[];



  constructor() { }

  ngOnInit(): void {
  }

}
