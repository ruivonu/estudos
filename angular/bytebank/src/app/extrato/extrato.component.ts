import { Transferencia } from './../model/transferencia.model';
import { Component, OnInit, Input } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  //@Input() transferencias: any[];
  transferencias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    //this.transferencias = this.service.transferencias;
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }

}
