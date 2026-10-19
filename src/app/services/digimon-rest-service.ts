import {Injectable, signal} from '@angular/core';
import {httpResource} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class DigimonRestService {

  pageNumber = signal<number>(1);
  //id, name, href, image. donde se ponga la imagen debe 
  //de ser posible usar componentes reutilizables.
  //se va a utilizar material.

  digimonResource = httpResource(() => `https://digimon-api.vercel.app/api/digimon`);
}
