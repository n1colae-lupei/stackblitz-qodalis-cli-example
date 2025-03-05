import { Component } from '@angular/core';
import { CliOptions } from '@qodalis/cli-core';
import { CliModule } from '@qodalis/angular-cli';

@Component({
  selector: 'app-root',
  template: `<cli [options]="options" />  <cli-panel [options]="options" />`,
  styleUrls: ['./app.component.sass'],
  imports: [CliModule],
})
export class AppComponent {
  options: CliOptions = {
    usersModule: {
      enabled: true,
    },
  };

  title = 'my-simple-app';
}
