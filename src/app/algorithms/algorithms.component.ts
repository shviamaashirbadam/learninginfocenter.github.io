import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  fileContent: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  // public onChange(fileList: FileList): void {
  //   let file = fileList[0];
  //   let fileReader: FileReader = new FileReader();    
    
  //    fileReader = fileReader.result;
    
  //   fileReader.readAsText(file);
  // }

}
