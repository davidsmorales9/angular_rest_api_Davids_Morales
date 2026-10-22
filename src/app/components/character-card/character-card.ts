import {Component, input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {CharacterModel} from '../../interfaces/character-model';
import {NgClass} from '@angular/common';
import {CharacterCardType} from '../../enums/character-card-type';

@Component({
  selector: 'app-character-card',
  imports: [MatCard, MatCardHeader, MatCardContent, NgClass],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
})
export class CharacterCard {
  data = input<CharacterModel>();
  type = input<CharacterCardType>(CharacterCardType.FILLED);


// Variables de estado para el modal de imagen, Funcionan como el interruptor y la memoria. 
// Recuerda que el modal puede estar abierto( True) o cerrado (False).
  isModalOpen = false;
  selectedImage = '';

  // Método para abrir el modal con la imagen seleccionada
  // Toma su enlace, lo asigna a la memoria y cambia el interruptor a true.
  openImageModal(imageUrl: string | undefined) {
    if (imageUrl) {
      this.selectedImage = imageUrl;
      this.isModalOpen = true;
    }
  }

  // Método para cerrar el modal
  closeModal() {
    this.isModalOpen = false;
    this.selectedImage = '';
  }
}