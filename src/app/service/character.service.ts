import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Character, CharacterInfo } from '@app/models/character.model';
import { catchError, map, Observable } from 'rxjs';
import { CharacterAdapter} from '@app/adapters/character.adapter';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private readonly baseUrl= 'https://rickandmortyapi.com/api/character';
  http = inject(HttpClient)

  getAllCharacters(): Observable<Character[]>{
    return this.http.get<CharacterInfo>(this.baseUrl).pipe(map(info =>CharacterAdapter(info)))
  }

  addCharacter(character: Omit<Character,'id'>): Observable<void>{
    return this.http.post<void>(this.baseUrl, { character }).pipe(
      catchError(()=>{
        console.info('error')
        return Promise.resolve();
      })
    )
  }
  removeCharacter(id: number): Observable<void>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url).pipe(
      catchError(()=>{
        console.info('error')
        return Promise.resolve();
      })
    )
  }

  updateCharacter(character: Character): Observable<void>{
    return this.http.put<void>(this.baseUrl, {character}).pipe(
      catchError(()=>{
        console.info('error')
        return Promise.resolve();
      })
    )
  }
}
