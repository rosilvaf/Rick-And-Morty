import { JsonPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Character } from '@app/models/character.model';
import { GlobalStore } from '@app/store';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {
  character = input.required<Character>()
  
  readonly store = inject(GlobalStore)

  removeCharacter(id : number){
    this.store.removeCharacter(id)
  }
}
