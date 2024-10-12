import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from '@app/store';
import { CharacterCardComponent } from './components';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent {
  readonly store = inject(GlobalStore)
}
