import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  name: string;
  constructor(private route: ActivatedRoute) {
    this.name = "";
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

}
