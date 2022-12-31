import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mi-vista',
  templateUrl: './mi-vista.component.html',
  styleUrls: ['./mi-vista.component.css']
})
export class MiVistaComponent implements OnInit{

  constructor (
    private activatedRoute: ActivatedRoute,
    private router: Router  
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(console.log);
    this.activatedRoute.queryParams.subscribe(console.log);
  }

}
