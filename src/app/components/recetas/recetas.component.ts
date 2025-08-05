import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-pizza-detail',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {
  
  pizzaForm!: FormGroup;

  producto = {
    saleItemID: "FGPZT3026",
    description: "Grilled Chicken, Spanish Mushroom, Alfredo Sauce, Cheese Mix ",
    name: "Alfredo Chicken",
    originalPrice: 45,
    price: 39,
    quantity: 2,
    topping_names: "Spanish Mushroom,Grilled Chicken,Maestro Cheese,Thin,",
    toppings: "033;664;671;+636"
  };

  toppingIds: string[] = [];
  toppingNames: string[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.toppingIds = this.producto.toppings.replace(/\+/g, '').split(';').filter(Boolean);
    this.toppingNames = this.producto.topping_names.split(',').filter(Boolean);
  }

  getToppingImgUrl(id: string): string {
    return `https://objects.maestropizza.com/ksa/assets/rebranding/toppings/${id}.png`;
  }
}
