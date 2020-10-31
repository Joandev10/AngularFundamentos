import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  cursos: string[] = ["Algebra", "Geometria", "Aritmetica", "Trigonmetria"];
  animales: Array<any> = [
    { tipo: "perro", nombre: "pepon", edad: 5 },
    { tipo: "gato", nombre: "lucy", edad: 6 },
    { tipo: "pato", nombre: "paco", edad: 8 },
  ];
}
