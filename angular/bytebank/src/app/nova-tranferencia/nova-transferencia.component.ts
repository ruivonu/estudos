import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Transferencia } from '../model/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-tranferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})

export class NovaTransfernciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();
  @Output() aoGerarErro = new EventEmitter<any>();

  valor: number;
  destino: number;
  valoresComErro: string;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {
    if (this.ehValido()) {
      //console.log('Solicitado nova transferencia valor: ' + this.valor + ' - Destino: ' + this.destino );
      //const valorEmitir = {valor: this.valor, destino: this.destino};
      //this.aoTransferir.emit(valorEmitir);
      const valorEmitir:Transferencia = {valor: this.valor, destino: this.destino};

      this.service.adicinar(valorEmitir).subscribe(resultado => {
        console.log(resultado);
        //this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      error => console.error(error)
      )
      //this.limparCampos();
    }else{
      console.log('Informe um valor válido');
    }
  }

  limparCampos(){
    this.valor = 0 ;
    this.destino = 0 ;
    this.valoresComErro = null;
  }

  private ehValido() {
    const valido = this.valor > 0;
    if (!valido) {
      this.aoGerarErro.emit('Informe um valor válido');
    }
    return valido;
  }
}
