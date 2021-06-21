import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '美国队长' },
      { id: 2, name: '钢铁侠' },
      { id: 3, name: '绿巨人' },
      { id: 4, name: '哪吒' },
      { id: 5, name: '张飞' },
      { id: 6, name: '关羽' },
      { id: 7, name: '菲奥娜' },
      { id: 8, name: '亨德尔' },
      { id: 9, name: '鹰眼' },
      { id: 10, name: '蜘蛛侠' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
