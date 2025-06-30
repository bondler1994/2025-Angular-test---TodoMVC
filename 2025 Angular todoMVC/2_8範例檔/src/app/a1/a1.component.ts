import { ExampleService } from './../@services/example.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.scss'],
  providers: [ExampleService], // 提供 ExampleService
})
export class A1Component implements OnInit {
  get num() {
    return this.exampleService.num;
  }
  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {}
  addnum(): void {
    this.exampleService.add();
  }
}
