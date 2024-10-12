import { ChangeDetectionStrategy, Component, computed, inject, input, Signal } from '@angular/core';
import { GlobalStore } from '@app/store';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { EmptyCharacter } from '@app/models/character.model';

interface CharacterForm{
  name: FormControl<string>,
  image: FormControl<string>
}

@Component({
  selector: 'app-character-add-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './character-add-edit.component.html',
  styleUrl: './character-add-edit.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterAddEditComponent {
  id = input<number>();

  readonly store = inject(GlobalStore)

  characterToEdit = computed(
    ()=> this.store.getCharacter(Number(this.id)) ?? EmptyCharacter
  )

  characterForm : Signal<FormGroup> = computed(
    () => new FormGroup<CharacterForm>({
      name: new FormControl(this.characterToEdit().name, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      image: new FormControl(this.characterToEdit().image, {
        nonNullable: true,
        validators: [Validators.required],
      })
    })
  )

  onSubmit(): void {
    if(this.characterForm().valid){
     const character = {
      ...(this.id() ? { id : Number(this.id())} : {}),
      ...this.characterForm().value,
     }
     const methodToUse = this.id() ? 'updateCharacter' : 'addCharacter'
     
     this.store[methodToUse](character);

     this.characterForm().reset()
    }
  }
} 
