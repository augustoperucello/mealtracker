import {Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'grid-list',
  templateUrl: 'grid.list.html',
  styleUrls: ['grid.list.scss'],
})
export class GridListDynamicExample {
  tiles: Tile[] = [
    {cols: 4, rows: 2, color: '#121212'},
    {cols: 3, rows: 10, color: '#484848'},
    {cols: 1, rows: 5, color: '#242424'},
    {cols: 1, rows: 5, color: '#363636'},
  ];
}
