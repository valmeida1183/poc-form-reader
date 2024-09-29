import { Injectable, signal, Signal } from '@angular/core';
import { UserInterface } from './types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class PocReaderLibService {
  constructor() {}

  getUsers(): Signal<UserInterface[]> {
    const users = signal<UserInterface[]>([
      { id: '1', name: 'Foo' },
      { id: '2', name: 'Bar' },
    ]);

    return users;
  }
}
