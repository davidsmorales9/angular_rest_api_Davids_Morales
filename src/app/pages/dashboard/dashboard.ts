import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(private router: Router) {}

  universes = [
    {
      name: 'Demon Slayer',
      route: '/demon-slayer',
      image: 'https://i.pinimg.com/1200x/ea/2e/bd/ea2ebd4914bd2acefa3a695a2fdd9627.jpg',
      description: 'Todo el universo de los cazadores de demonios y sus técnicas de combate.'
    },
    {
      name: 'Dragon Ball',
      route: '/dragon-ball',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Logo_Dragon_Ball_Z.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original',
      description: 'Descubre a los guerreros Saiyajin y sus épicas batallas por las esferas del dragón.'
    },
    {
      name: 'Digimon',
      route: '/digimon-list',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60',
      description: 'Adéntrate en el mundo digital y conoce a todas las criaturas Digimon.'
    },
    {
      name: 'Pokémon',
      route: '/pokemon',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tJkejQOKlNQj26yEQN_41_a7Wzo9mLIqBDrKku1wg2M6-BCGUgKNY-H2&s=10',
      description: 'Atrapa y entrena a tus criaturas favoritas en este universo pendiente.'
    }
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
