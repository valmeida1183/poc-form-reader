import { FormFieldTypeEnum } from '../enums/form-field-type.enum';
import { FormFieldValidatorSchema } from './form-field-validator-schema';

export type FormFieldSchema = {
  id: number;
  label: string;
  modelPropertyName: string;
  type: FormFieldTypeEnum;
  validator: FormFieldValidatorSchema;
};
