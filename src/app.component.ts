import { Component } from '@angular/core';
import { CliOptions } from '@qodalis/cli-core';
import { CliModule } from '@qodalis/angular-cli';

@Component({
  selector: 'app-root',
  template: `
    <div class="window">
      <div class="titlebar">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="title">qodalis-cli</span>
      </div>
      <div class="body">
        <cli [options]="options" height="100%" />
      </div>
    </div>
    <cli-panel [options]="options" />
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: #0a0e17;
        padding: 24px;
        box-sizing: border-box;
      }
      .window {
        flex: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        overflow: hidden;
        border: 1px solid #2a2f3a;
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
      }
      .titlebar {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 16px;
        background: #1c1f2b;
        border-bottom: 1px solid #2a2f3a;
        flex-shrink: 0;
      }
      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }
      .dot.red { background: #ff5f57; }
      .dot.yellow { background: #febc2e; }
      .dot.green { background: #28c840; }
      .title {
        margin-left: 8px;
        font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.45);
      }
      .body {
        flex: 1;
        min-height: 0;
        background: #000;
      }
    `,
  ],
  imports: [CliModule],
  standalone: true,
})
export class AppComponent {
  options: CliOptions = {
    usersModule: {
      enabled: true,
    },
  };
}
