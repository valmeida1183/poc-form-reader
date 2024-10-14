import { FormSectionSchema } from './form-section-schema';

export type FormSchema = {
  id: number;
  version: number;
  title: string;
  sections: FormSectionSchema[];
};
