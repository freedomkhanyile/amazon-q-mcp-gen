import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class]="buttonClasses"
      [disabled]="disabled"
      (click)="onClick.emit($event)"
      type="button">
      {{ label }}
    </button>
  `,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  
  @Output() onClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    return [
      'btn',
      `btn-${this.variant}`,
      `btn-${this.size}`,
      this.fullWidth ? 'w-100' : '',
      this.disabled ? 'disabled' : ''
    ].filter(Boolean).join(' ');
  }
}