import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-join-code',
  templateUrl: './join-code.html',
  styleUrl: './join-code.css'
})
export class JoinCode {
  code = signal('SCRM-4X9K');
  copied = signal(false);

  copyCode() {
    navigator.clipboard.writeText(this.code());
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }
}