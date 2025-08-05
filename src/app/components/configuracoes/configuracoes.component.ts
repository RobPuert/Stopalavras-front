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
  temas: { id: number, titulo: string }[] = [];

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

  onClickTemas(): void {
  this.cronometroService.chamarTemas().subscribe((resposta) => {
    this.temas = resposta;
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

  deletarTema(id: number): void {
    console.log(id);
  this.cronometroService.deletarTema(id).subscribe(() => {
    this.temas = this.temas.filter(tema => tema.id !== id);
  });
}
}
