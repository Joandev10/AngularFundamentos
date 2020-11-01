import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from '../equipo.service';

@Component({
    selector: 'app-equipo',
    templateUrl: './equipo.component.html',
    styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
    equipo: any[] = [];

    constructor(private route: ActivatedRoute, private equipoService: EquipoService) {
        this.route.params.subscribe((params) => {
            this.equipo = this.equipoService.obtenerUno(params['id']);
            console.log(this.equipo);
        });
    }

    ngOnInit() {}
}
