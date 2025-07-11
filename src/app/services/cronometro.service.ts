import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // isso torna o serviço disponível sem precisar importar em um módulo
})
export class CronometroService {
  private apiUrl = 'https://localhost:7164/api/Cronometro';

  constructor(private http: HttpClient) {}

  chamarCronometro(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}