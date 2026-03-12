import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CliModule, resolveCliProviders, resolveCliModuleProvider } from '@qodalis/angular-cli';
import { guidModule } from '@qodalis/cli-guid';
import { filesModule } from '@qodalis/cli-files';
import { usersModule } from '@qodalis/cli-users';

@NgModule({
    declarations: [],
    imports: [BrowserModule, BrowserAnimationsModule, CliModule],
    providers: [
        resolveCliProviders(),
        resolveCliModuleProvider(guidModule),
        resolveCliModuleProvider(filesModule),
        resolveCliModuleProvider(usersModule),
    ],
    bootstrap: [],
})
export class AppModule {}
