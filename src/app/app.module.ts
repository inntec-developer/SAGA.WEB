import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ButtonDeleteComponent } from './components/buttons/button-delete/button-delete.component'
// https://github.com/ocombe/ng2-translate/issues/218
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent
    
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule, // required for ng2-tag-input
        CoreModule,
        LayoutModule,
        SharedModule.forRoot(),
        RoutesModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        ButtonDeleteComponent
        
        
    ],
    providers: [HttpClientModule, CookieService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
