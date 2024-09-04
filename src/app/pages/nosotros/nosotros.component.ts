import { Component } from '@angular/core';
import { Equipo } from '../home/utils/equipo';
import * as equipoTrabajo from '../../../../public/json/equipoTrabajo.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  equipo: Equipo[] = (equipoTrabajo as any).default;

}
