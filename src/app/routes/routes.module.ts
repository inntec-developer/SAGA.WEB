import { AuthService } from './../service/auth/auth.service';
import { ComponentsModule } from './../components/components.module';
import { MenuService } from '../core/menu/menu.service';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TranslatorService } from '../core/translator/translator.service';
import { menu } from './menu';
import { routes } from './routes';
import { LogInGuardGuard } from './../auth-guard/log-in-guard.guard';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        PagesModule       
    ],
    declarations: [
    ],
    exports: [RouterModule],
    providers: [LogInGuardGuard, AuthService]
})

export class RoutesModule {
    constructor(public menuService: MenuService, tr: TranslatorService) {
        menuService.addMenu(menu);
    }
}
