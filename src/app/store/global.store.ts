import { InjectionToken, inject } from "@angular/core";
import { Character } from "@app/models/character.model";
import { CharacterService } from "@app/service/character.service";
import { signalStore, withMethods, withState, patchState, withHooks} from '@ngrx/signals'
import { lastValueFrom } from "rxjs";
import {withEntities} from "@ngrx/signals/entities"

type StoreState = {
    characters: Character[]
}

const initialState: StoreState = {
    characters: []
}

const STORE_STATE = new InjectionToken<StoreState>('GlobalStore', {
    factory: ()=> initialState
})

export const GlobalStore = signalStore(
    {providedIn : 'root'},
    withState(()=> inject(STORE_STATE)),
    withEntities<StoreState>(),
    withMethods((store, characterService = inject(CharacterService))=>({
        getCharacter(id:number){
            return store.characters().find(char => char.id == id)
        },
        async addCharacter(character: Omit<Character,"id">){
           try{               
               await lastValueFrom(characterService.addCharacter(character))
               patchState(store, ({ characters})=>({
                characters: [...characters,{ id: new Date().getTime(), ...character}]
               }))
           } catch(error){

           }
        },
        
        async removeCharacter(id: number){
           try{               
               await lastValueFrom(characterService.removeCharacter(id))
               patchState(store, ({ characters})=>({
                characters: [...characters.filter(char => char.id != id)]
               }))
           } catch(error){

           }
        },
        async updateCharacter(character: Character){
           try{               
               await lastValueFrom(characterService.updateCharacter(character))
               patchState(store, ({ characters})=>({
                characters:[... characters.map((char) => char.id === character.id ? { ...char, ...characters} : char)]
               }))
           } catch(error){

           }
        }
        })),
        withHooks(
            {
                async onInit(store, charactersService = inject(CharacterService)){
                    const characters = await lastValueFrom(
                        charactersService.getAllCharacters(),
                    )
                    patchState(store, { characters })
                },
            }
        )
)