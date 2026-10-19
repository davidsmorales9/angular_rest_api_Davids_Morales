import { HttpErrorResponse, httpResource } from '@angular/common/http';
import { computed, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ProductsRestService {

  private username = "estudiante"; //Si se modifica aquí sería 401 no autorizado
  private password = "cambiar-esta-clave";
  private credentials = btoa(`${this.username}:${this.password}`);

  productsResource = httpResource(() => ({
    url: `http://172.17.207.216:3000/api/v1/products1`, //Si se modifica el enlace es 404
    method: 'GET',
    headers: {
      'Authorization': `Basic ${this.credentials}`,
    }
  })
);

errorMessage = computed(() => {
  const data = this.productsResource.error();

  if(data instanceof HttpErrorResponse) {
    switch(data.status){
      case 401:
        return "Verifica las credenciales";
        case 404:
        return "Producto no econtrado";
      default:
        return "Ha ocurrido un error en la petición"
    }
  }
return "Ocurrió un error inesperado.";
})
}
