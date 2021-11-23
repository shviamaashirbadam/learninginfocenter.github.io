import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit , AfterViewInit{

  @ViewChild("sidenav") sideNav :MatSidenavContainer;
  @ViewChild('side') side :MatSidenav;
  constructor() { }

  ngOnInit(): void {
  console.log(this.sideNav)
  console.log(this.side);
  }
  ngAfterViewInit(){
    console.log(this.sideNav)
  console.log(this.side);
  }

  events: string[] = [];
  opened: boolean;

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

 
}
