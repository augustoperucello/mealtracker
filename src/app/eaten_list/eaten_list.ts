import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

/**
 * @title List with selection
 */
@Component({
  selector: 'eaten-list',
  styleUrls: ['eaten_list.scss'],
  templateUrl: 'eaten_list.html',
})
export class ListSelectionExample {
  typesOfShoes: string[] = ['Tapioca Primícia', 'Marmita FIT', 'Hamburguesas', 'McDonaldinhos', 'Teste Oculto', 'Scrollbar'];
}
