import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-alogrithm',
  templateUrl: './graph-alogrithm.component.html',
  styleUrls: ['./graph-alogrithm.component.css']
})
export class GraphAlogrithmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

class Graph {
  isDirected:boolean;
  vertices:Array<any>
  adjList:any;
  constructor(isDirected = false) {
    this.isDirected = isDirected; // {1}
    this.vertices = []; // {2}
    //this.adjList = new Dictionary(); // {3}
  }
} 