import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // isso torna o serviço disponível sem precisar importar em um módulo
})
export class CronometroService {
  private apiUrl = 'https://localhost:7164/api/';

  constructor(private http: HttpClient) {}

  chamarCronometro(): Observable<any> {
    return this.http.get(this.apiUrl + 'Cronometro');
  }

  chamarTemas(): Observable<any> {
    return this.http.get(this.apiUrl + 'Tema');
  }

  definirCronometro(segundos: number): Observable<any> {
    var objeto = {"segundos":segundos}
    return this.http.put(this.apiUrl + 'Cronometro', objeto);
  }

  inserirTema(id: number, titulo: string): Observable<any> {
    var objeto = {"id":id, "titulo": titulo}
    return this.http.post(this.apiUrl + 'Tema', objeto);
  }

  // deletarTema(id: number) : Observable<any> {
  //   return this.http.delete(this.apiUrl + 'Tema', id);
  // }
}