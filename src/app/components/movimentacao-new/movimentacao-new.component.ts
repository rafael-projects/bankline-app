import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService} from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-new',
  templateUrl: './movimentacao-new.component.html',
  styleUrls: ['./movimentacao-new.component.css']
})

export class MovimentacaoNewComponent implements OnInit {
  dataHora:any;
  tipo:any;
  valor:any;
  idConta:any;
  descricao:any;


  correntistas:any;
  correntista:any;


  constructor(private correntistaService: CorrentistaService,
              private movimentacaoService: MovimentacaoService) { }

  ngOnInit(): void {
    this.exibirCorrentista();
  }

  exibirCorrentista(): void {
    this.correntistaService.list()
    .subscribe(
      data => {
        this.correntistas = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    }
    save(): void{
      console.log(this.correntista);
      const movimentacao = {
        valor:this.valor,
        descricao:this.descricao,
        tipo:this.tipo,
        idConta:this.correntista.id,
        dataHora:this.dataHora
      };
      console.log(movimentacao);
      this.movimentacaoService.create(movimentacao)
        .subscribe(
          response => {
            alert(" Nova movimentação adicionada! ")
            console.log(response);
          },
          error => {
            console.log(error);
          }
        )};
}
