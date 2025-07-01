import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../@services/example.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.scss'],
  providers: [ExampleService], // 提供 ExampleService
})
export class A2Component implements OnInit {
  get num() {
    return this.exampleService.num;
  }
  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {}
  addnum() {
    this.exampleService.add();
  }
}
