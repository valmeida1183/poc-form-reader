import { Component, inject, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormSchema } from '../types/form-schema';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'poc-render',
  standalone: true,
  imports: [],
  templateUrl: './poc-render.component.html',
  styleUrl: './poc-render.component.scss',
})
export class PocRenderComponent implements OnInit {
  formBuilder = inject(FormBuilder);

  formSchema = input<FormSchema>();

  form: FormGroup = this.formBuilder.group({});

  ngOnInit(): void {
    console.log('Hello from poc-render!!!');
  }

  private buildForm() {}
}
