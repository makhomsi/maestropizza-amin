import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-pizza-detail',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  productos: Producto[] = [];

  productoFinal = {
    COD: "PLMA",
    DESC: "Pizza Margarita Large",
    MARCA: 488,
    TIPO: "F",
    ELABORACION: "Empezamos por la más fácil, la Margarita. Extendemos la masa, agregamos salsa de tomate y queso ",
    ARRAY_COMPOSICION: [
      {
        COD: "FGPZT3042",
        DESC: "Thick",
        CAPA: 1,
        CANTIDAD: 1,
        UNIDAD: "Kg",
        TIPO: "I",
        ARRAY_COMPOSICION: null
      },
      {
        COD: "601",
        DESC: "Tomato Sauce",
        CAPA: 2,
        CANTIDAD: 0.15,
        UNIDAD: "Kg",
        TIPO: "I",
        ARRAY_COMPOSICION: null
      },
      {
        COD: "671",
        DESC: "Maestro Cheese",
        CAPA: 3,
        CANTIDAD: 0.15,
        UNIDAD: "Kg",
        TIPO: "I",
        ARRAY_COMPOSICION: null
      }
    ]
  };

  productoMitadMitad = {
    COD: "HALVES_PRODUCT_INTERNAL",
    DESC: "Create Your Own",
    MARCA: 488,
    TIPO: "C",
    ELABORACION: "Añadir dos mitades diferentes.",
    ARRAY_COMPOSICION: [
      {
        COD: "PLMA",
        DESC: "Pizza Margarita Large",
        TIPO: "M",
        ARRAY_COMPOSICION: [
          {
            COD: "FGPZT3042",
            DESC: "Thick",
            CAPA: 1,
            CANTIDAD: 1,
            UNIDAD: "Kg",
            TIPO: "I",
            ARRAY_COMPOSICION: null
          },
          {
            COD: "601",
            DESC: "Tomato Sauce",
            CAPA: 2,
            CANTIDAD: 0.15,
            UNIDAD: "Kg",
            TIPO: "I",
            ARRAY_COMPOSICION: null
          },
          {
            COD: "671",
            DESC: "Maestro Cheese",
            CAPA: 3,
            CANTIDAD: 0.15,
            UNIDAD: "Kg",
            TIPO: "I",
            ARRAY_COMPOSICION: null
          },
        ]
      },
      {
        COD: "PLCB",
        DESC: "Pizza Barbacoa Large",
        TIPO: "M",
        ARRAY_COMPOSICION: [
          {
            COD: "FGPZT3042",
            DESC: "Thick",
            CAPA: 1,
            CANTIDAD: 1,
            UNIDAD: "Kg",
            TIPO: "I",
            ARRAY_COMPOSICION: null
          },
          {
            COD: "601",
            DESC: "Tomato Sauce",
            CAPA: 2,
            CANTIDAD: 0.15,
            UNIDAD: "Kg",
            TIPO: "I",
            ARRAY_COMPOSICION: null
          },
          {
            COD: "671",
            DESC: "Maestro Cheese",
            CAPA: 3,
            CANTIDAD: 0.15,
            UNIDAD: "Kg",
            TIPO: "I",
            ARRAY_COMPOSICION: null
          },
          {
            COD: "664",
            DESC: "Grilled Chicken",
            CAPA: 4,
            CANTIDAD: 0.15,
            UNIDAD: "Kg",
            TIPO: "I",
            ARRAY_COMPOSICION: null
          },
          {
            COD: "059",
            DESC: "Onion",
            CAPA: 5,
            CANTIDAD: 0.15,
            UNIDAD: "Kg",
            TIPO: "I",
            ARRAY_COMPOSICION: null
          }
        ]
      }
    ]
  };

  // Producto que se mostrará en la interfaz
  productoSeleccionado: any;

  ngOnInit(): void {
    // Cambia aquí el producto que quieres visualizar:
    // this.productoSeleccionado = this.productoFinal;
    this.productoSeleccionado = this.productoMitadMitad;

    this.productos = [this.productoSeleccionado];
  }

 obtenerIngredientes(producto: any): any[] {
  const ingredientes: any[] = [];
  
  function recorrer(nodo: any) {
    if (!nodo.ARRAY_COMPOSICION) return;
    for (const item of nodo.ARRAY_COMPOSICION) {
      if (item.TIPO === 'I') {
        ingredientes.push(item);
      } else {
        recorrer(item);
      }
    }
  }

  if (producto.TIPO === 'C') {
    // Es un producto compuesto, recorrer cada mitad y extraer ingredientes
    for (const mitad of producto.ARRAY_COMPOSICION) {
      recorrer(mitad);
    }
  } else {
    // Producto normal, recorrer directamente
    recorrer(producto);
  }

  return ingredientes;
}


  getImagenProducto(id: string): string {
    return `https://objects.maestropizza.com/ksa/assets/rebranding/products/${id}.png`;
  }
}
