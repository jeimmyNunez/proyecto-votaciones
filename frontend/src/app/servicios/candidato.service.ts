import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Candidato } from '../modelos/candidato.model';
import { Usuarios } from '../modelos/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private http: HttpClient){ }

  listar(): Observable<Candidato[]>{
    return this.http.get<Candidato[]>(`${environment.url_gateway}/candidatos`);
  }
  eliminar(id:string){
    return this.http.delete<Candidato>(`${environment.url_gateway}/candidatos/${id}`,);
  }

  getCandidato(id:string): Observable<Candidato> {
    return this.http.get<Candidato>(`${environment.url_gateway}/candidatos/${id}`);
  }
  crear(elCandidato: Candidato){
    return this.http.post(`${environment.url_gateway}/candidatos`, elCandidato);
  }
  editar(id:string, elCandidato: Candidato){
    return this.http.put(`${environment.url_gateway}/candidatos/${id}`, elCandidato);
  }
}