import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent {
  message = 'ボタンを押すと現在の日時を表示します。';

  changeMessage() {
    const now = new Date();
    const formatted = now.toLocaleString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    this.message = `現在の日時：${formatted}`;
  }
}
