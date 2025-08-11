import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'app-pizza-detail',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
  host: {
    '[class]': 'marcaClass'
  }
})
export class RecetasComponent implements OnInit {
constructor(private route: ActivatedRoute, private router: Router) {}

  productos: Producto[] = [];
  
  marcaClass: string = '';
  /*productoFinal = {
    COD: "PLMA",
    DESC: "Pizza Margarita Large",
    MARCA: 488,
    TIPO: "F",
    ELABORACION: "Let's start with the easiest, the Margarita. We roll out the dough, add tomato sauce, and add cheese.",
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
    ELABORACION: "Add two different halves.",
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
            CAPA: 21,
            CANTIDAD: 0.15,
            UNIDAD: "Kg",
            TIPO: "I",
            ARRAY_COMPOSICION: null
          }
        ]
      }
    ]
  };
  productoCompuesto = {
  COD: "NPPL",
  DESC: "PIANO PIZZA",
  MARCA: 488,
  TIPO: "C",
  ELABORACION: "Add multiple pizzas.",
  ARRAY_COMPOSICION: [
    {
      COD: "PLMA",
      DESC: "Pizza Margarita Large",
      TIPO: "R",
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
      TIPO: "R",
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
    },
    {
      COD: "PLPE",
      DESC: "Pizza Pepperoni Large",
      TIPO: "R",
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
          COD: "023",
          DESC: "Pepperoni",
          CAPA: 4,
          CANTIDAD: 0.15,
          UNIDAD: "Kg",
          TIPO: "I",
          ARRAY_COMPOSICION: null
        }
      ]
    }
  ]
};*/


  productoSeleccionado: any;
  product: any;

  ngOnInit(): void {
  const params = new URLSearchParams(window.location.search);
  let productStr = params.get('product');

  if (productStr) {
    try {
      productStr = decodeURIComponent(productStr);
      productStr = this.toJSONSafe(productStr);
      productStr = this.cleanJsonString(productStr);

      console.log('Cleaned productStr:', productStr);

      this.productoSeleccionado = JSON.parse(productStr);
      this.actualizarClaseMarca(); 

      console.log('Producto seleccionado:', this.productoSeleccionado);
    } catch (e) {
      console.error('Error al parsear product:', e);
    }
  }
}

// Añade comillas a las claves para convertir formato JS en JSON válido
toJSONSafe(str: string): string {
  return str.replace(/(\w+):/g, '"$1":');
}

// Elimina comas finales sobrantes y punto y coma para limpiar JSON inválido
cleanJsonString(str: string): string {
  str = str.replace(/,\s*([\]}])/g, '$1');
  str = str.trim();
  if (str.endsWith(';')) {
    str = str.slice(0, -1);
  }
  return str;
}


actualizarClaseMarca(): void {
    if (this.productoSeleccionado && this.productoSeleccionado.MARCA) {
      this.marcaClass = 'marca-' + this.productoSeleccionado.MARCA;
    } else {
      this.marcaClass = ''; 
    }
  }
   seleccionarProducto(producto: any): void {
    this.productoSeleccionado = producto;
    this.actualizarClaseMarca();
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
    for (const mitad of producto.ARRAY_COMPOSICION) {
      recorrer(mitad);
    }
  } else {
    recorrer(producto);
  }

  return ingredientes;
}


  getImagenProducto(id: string): string {
    return `https://objects.maestropizza.com/ksa/assets/rebranding/products/${id}.png`;
  }
  getImagenIngrediente(id: string, marca: number): string {
  switch (marca) {
    case 488:
      return `https://objects.maestropizza.com/ksa/assets/rebranding/toppings/${id}.png`;
    case 48801:
      return `https://objects.maestropizza.com/uae/assets/rebranding/toppings/${id}.png`;
    case 48802:
      return `https://objects.pinzatta.com/pinzattav2/assets/toppings/${id}.png`;
    case 48804:
      return `https://objects.madpizza.sa/mad/assets/toppings/${id}.png`;
    case 48805:
      return `https://objects.groundr.com/groundr/assets/toppings/${id}.png`;
    default:
      return `https://sources-sp001.s3.eu-south-2.amazonaws.com/produccion/recursos/${marca}/imagenes/fotos/ingredientes/${id}.png`;
  }
}


}
