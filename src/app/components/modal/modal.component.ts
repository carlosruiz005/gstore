import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public title: string = "";
  public body: string = "";
  constructor(public modalRef: MdbModalRef<ModalComponent>) { }

  ngOnInit(): void {
  }

}
