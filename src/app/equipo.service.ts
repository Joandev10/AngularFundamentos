import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EquipoService {
    constructor() {
        console.log('Funcionando Servicio');
    }

    equipo: any[] = [
        {
            nombre: 'Jose',
            especialidad: 'Spring-Angular',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            nombre: 'Carlos',
            especialidad: 'Node JS',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            nombre: 'Luis',
            especialidad: 'React JS',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            nombre: 'Josefa',
            especialidad: 'JSF',
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
    ];

    obtenerEquipo() {
        return this.equipo;
    }

    obtenerUno(i) {
        return this.equipo[i];
    }
}
