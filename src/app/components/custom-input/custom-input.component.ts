import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomInputComponent {
  control = input.required<FormControl>()
  label = input.required<FormControl>()
  type = input.required<FormControl>()
  placeHolder = input.required<FormControl>()
  errorMessage = input.required<FormControl>()
}
