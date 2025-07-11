import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { CronometroService } from '../../services/cronometro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configuracoes',
  imports: [RouterLink, CommonModule],
  templateUrl: './configuracoes.component.html',
  styleUrl: './configuracoes.component.css'
})
export class ConfiguracoesComponent {
  tempo: number | null = null;
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
  }
}
