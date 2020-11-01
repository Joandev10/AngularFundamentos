import { RouterModule, Routes } from "@angular/router";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { NosotrosComponent } from "./nosotros/nosotros.component";
import { InicioComponent } from "./inicio/inicio.component";

const routes: Routes = [
  { path: "contacto", component: ContactoComponent },
  { path: "nosotros", component: NosotrosComponent },
  { path: "", component: InicioComponent, pathMatch: "full" },
  { path: "**", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    ContactoComponent,
    NosotrosComponent,
    InicioComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
