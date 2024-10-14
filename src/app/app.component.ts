import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  PocReaderLibComponent,
  PocReaderLibService,
  PocRenderComponent,
} from 'poc-reader-lib';
import { FormSchema } from '../../projects/poc-reader-lib/src/lib/types/form-schema';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PocReaderLibComponent, PocRenderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'poc-form-reader';
  userService = inject(PocReaderLibService);
  http = inject(HttpClient);

  formSchema = signal<FormSchema | null>(null);

  ngOnInit(): void {
    console.log(this.userService.getUsers()());
    this.loadFormSchema();
  }

  private loadFormSchema(): void {
    this.http
      .get<FormSchema>(
        'http://localhost:4200/assets/form_schema_sample_v2.json'
      )
      .subscribe(fromSchema => {
        console.log(fromSchema);
      });
  }
}
