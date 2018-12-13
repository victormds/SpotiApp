import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor( private router: Router) { }

  verArtista ( item: any ) {
    let artitistaId;

      if (item.type === 'artist') {
          artitistaId = item.id;

      } else {
        artitistaId = item.artists[0].id;
      }


      this.router.navigate(['/artist', artitistaId]);
    }
}
