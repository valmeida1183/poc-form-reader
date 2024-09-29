import { Component, inject } from '@angular/core';
import { PocReaderLibService } from './poc-reader-lib.service';

@Component({
  selector: 'poc-reader-lib',
  standalone: true,
  imports: [],
  templateUrl: './poc-reader-lib.component.html',
  styles: ``,
})
export class PocReaderLibComponent {
  pocReaderLibService = inject(PocReaderLibService);

  users = this.pocReaderLibService.getUsers();
  constructor() {}
}
