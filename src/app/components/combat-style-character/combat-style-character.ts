import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-combat-style-character',
  imports: [CommonModule],
  templateUrl: './combat-style-character.html',
  styleUrl: './combat-style-character.css',
})
export class CombatStyleCharacter {

  //guarda una lista de puros textos 
  //undefined para que no dé problemas si algún personaje no tiene estilos
  combatStyles = input<string[] | undefined>([]);
}
