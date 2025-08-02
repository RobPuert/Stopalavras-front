import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { CronometroService } from '../../services/configuracoes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-configuracoes',
  imports: [RouterLink, CommonModule, FormsModule, MatIconModule],
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.css'
})
export class ConfiguracoesComponent {
  tempo: number | null = null;
  temas: string[] = [];

  constructor(private cronometroService: CronometroService) {}

  onClickCronometro() {
    this.cronometroService.chamarCronometro().subscribe({
      next: (res) => {
        console.log('Resposta da API:', res);
        // Espera-se um array com um objeto contendo 'segundos'
        if (Array.isArray(res) && res.length > 0 && 'segundos' in res[0]) {
          this.tempo = res[0].segundos;
        }
      },
      error: (err) => console.error('Erro na API:', err),
    });
  };

  onClickTemas() {
    this.cronometroService.chamarTemas().subscribe({
      next: (res) => {
        console.log('Resposta da API:', res);
        this.temas = [];
        // Espera-se um array com varios objetos contendo 'id' e 'titulo'
        if (Array.isArray(res) && res.length > 0) {
          res.forEach(element => {
              this.temas?.push(element.titulo);
          });
        };
      },
      error: (err) => console.error('Erro na API:', err),
    });
  }

  segundos: number = 0;
  mensagem: string = '';
  salvar() {
    this.cronometroService.definirCronometro(this.segundos).subscribe({
    });
    this.segundos = 0;
  }

  id: number = 0;
  titulo: string = '';
  mensagemTema: string = '';
  salvarTema() {
    this.cronometroService.inserirTema(this.segundos, this.titulo).subscribe({
    });
    this.titulo = '';
  }

  // deletarTema() {  this.cronometroService.deletarTema(this.id).subscribe({
  //     next: (res) => {
  //       console.log(this.id);
  //     },
  //     error: (err) => console.error('Erro na API:', err),
  //   });
  // }
}
