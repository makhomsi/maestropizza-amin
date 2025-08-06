import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/ingredientes.service';
import { Producto } from '../../models/producto.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pizza-detail',
  imports: [RouterModule, CommonModule, HttpClientModule],
  standalone: true,
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {
  
  pizzaForm!: FormGroup;
  productos: Producto[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    const branchID = 5;
    const orderNumber = 1010039081;
    const source = 'W';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjkxNzc0NywiaWF0IjoxNzU0Mzk3MDYwLCJleHAiOjE3ODU5NTQ2NjB9.j3o10aEHFsQwCPCzrZOZJhxJJ5eEDhc0J5gZHahK8P8';

    this.apiService.getTicketDetail(branchID, orderNumber, source, token).subscribe({
      next: (data) => {
        console.log('Detalle del ticket:', data);

        if (data.lines && data.lines.length > 0) {
          this.productos = data.lines.map((line: Producto) => {
            // Procesamos toppings para CADA pizza individualmente
            const toppingIds = line.toppings.split(';')
              .map(id => id.replace('+', '').trim())
              .filter(id => id.length > 0);

            const toppingNames = line.topping_names.split(',')
              .map(name => name.trim())
              .filter(name => name.length > 0);

            return {
              ...line,
              originalPrice: line.price,
              toppingIds,    // Asignamos los IDs procesados
              toppingNames   // Asignamos los nombres procesados
            };
          });
        }
      },
      error: (err) => {
        console.error('Error al cargar el ticket:', err);
      }
    });
  }

  getToppingImgUrl(id: string): string {
    return `https://objects.maestropizza.com/ksa/assets/rebranding/toppings/${id}.png`;
  }
}