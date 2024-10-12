import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from '@app/store';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent {
  readonly store = inject(GlobalStore)
}
