export type FormFieldValidatorSchema = {
  min?: number;
  max?: number;
  required?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string | RegExp;
};
