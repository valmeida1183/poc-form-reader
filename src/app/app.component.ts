import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PocReaderLibComponent, PocReaderLibService } from 'poc-reader-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PocReaderLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'poc-form-reader';
  userService = inject(PocReaderLibService);

  ngOnInit(): void {
    console.log(this.userService.getUsers()());
  }
}
