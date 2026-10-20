import {Routes} from '@angular/router';
import {DemonSlayerCharactersList} from './pages/demon-slayer-characters-list/demon-slayer-characters-list';
import {DbzCharactersList} from './pages/dbz-characters-list/dbz-characters-list';
import { CombatStyles } from './pages/combat-styles/combat-styles';
import { DigimonList } from './pages/digimon-list/digimon-list';
import { ProductsList } from './pages/products-list/products-list';
import { Dashboard } from './pages/dashboard/dashboard';
import { PokemonList } from './pages/pokemon-list/pokemon-list';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: Dashboard},
  {path: "demon-slayer", component: DemonSlayerCharactersList},
  {path: "dragon-ball", component: DbzCharactersList},
  {path: "combat-styles", component: CombatStyles},
  {path: "digimon-list", component: DigimonList},
  {path: "pokemon-list", component: PokemonList},
  {path: "products-list", component: ProductsList}
];
