import { FormFieldSchema } from './form-field-schema';

export type FormSectionSchema = {
  id: number;
  question: string;
  fields: FormFieldSchema[];
};
