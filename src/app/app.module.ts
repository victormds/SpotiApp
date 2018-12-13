import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { ArtistaComponent } from './components/artista/artista.component';


// Importar Rutas

import { ROUTES } from './app.routes';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './compononent/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    SearchComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
