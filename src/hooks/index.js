import { useState, useCallback } from 'react';
import { emailRegex } from 'constants/util';

const inputTypeList = {
  required: {
    validator: (value) => (!value && 'This is required.'),
    required: true
  },
  email: {
    validator: (value) => !emailRegex.test(value.toLowerCase()) && 'Incorrect email.',
    required: true
  }
};

export function useTextInput(initialValue = '', type, validator) {
  const [value, onChangeText] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const { validator: typeValidator, ...props } = inputTypeList[type] || {};
  const validatorFn = useCallback((text) => {
    const typeError = typeValidator && typeValidator(text);
    const customError = validator && validator(text);
    return typeError || customError || null;
  }, [typeValidator, validator]);
  const error = validatorFn(value);
  return {
    value, onChangeText, error, touched, setTouched, ...props
  };
}

export function useSubmit(onSubmit, fields) {
  const onSubmitWithValidation = () => {
    fields.forEach((filed) => filed.setTouched(true));
    const hasError = fields.some((filed) => filed.error);
    if (!hasError) { onSubmit(); }
  };
  return onSubmitWithValidation;
}

export function useBool(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const setTrue = useCallback(() => setValue(true), [setValue]);
  const setFalse = useCallback(() => setValue(false), [setValue]);
  return [value, setTrue, setFalse];
}
