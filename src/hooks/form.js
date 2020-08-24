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
  const [disabled, setDisabled] = useState(false);
  const { validator: typeValidator, ...props } = inputTypeList[type] || {};
  const validatorFn = useCallback((text) => {
    const typeError = typeValidator && typeValidator(text);
    const customError = validator && validator(text);
    return typeError || customError || null;
  }, [typeValidator, validator]);
  const error = validatorFn(value);
  return {
    value, onChangeText, error, touched, setTouched, disabled, setDisabled, ...props
  };
}

const initialStatus = {
  error: null,
  isLoading: false,
  isSuccess: false,
};
export function useSubmit(onSubmit, fields) {
  const [status, setStatus] = useState(initialStatus);
  const onSubmitWithValidation = async () => {
    fields.forEach((filed) => filed.setTouched(true));
    const hasError = fields.some((filed) => filed.error);
    if (!hasError && !status.isLoading) {
      try {
        fields.forEach((f) => f.setDisabled(true));
        setStatus({ ...initialStatus, isLoading: true });
        const response = await onSubmit(...fields.map((filed) => filed.value));
        setStatus({ ...initialStatus, isSuccess: true });
        return response;
      } catch (error) {
        setStatus({ ...initialStatus, error: error.message });
      } finally {
        fields.forEach((f) => f.setDisabled(false));
      }
    }
    return null;
  };
  return [onSubmitWithValidation, status];
}

export function useBool(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const setTrue = useCallback(() => setValue(true), [setValue]);
  const setFalse = useCallback(() => setValue(false), [setValue]);
  return [value, setTrue, setFalse];
}
