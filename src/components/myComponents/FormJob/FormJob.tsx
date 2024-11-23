import { Box, Heading, Input, Textarea } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { JobType } from '../../../types/listJobs.type';
import { Field } from '../../ui/field';
import { NativeSelectField, NativeSelectRoot } from '../../ui/native-select';
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHook';
import { Button } from '../../ui/button';
import {
  createListJob,
  getListJob,
  setError,
  setLoading,
  setSuccess,
  updateJob,
} from '../../../store/sliceJobs/sliceJobs';

type PropsTypeFromJob = {
  title: string;
  formStateEdit?: JobType | object;
};

interface Inputs extends JobType {}

const FormJob = ({ title, formStateEdit = {} }: PropsTypeFromJob) => {
  const { isLoading, page, error, isSuccess } = useAppSelector(
    (state) => state.sliceJobs
  );
  const dispatch = useAppDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: formStateEdit });

  const submitForm = async (data: Inputs) => {
    dispatch(setError(null));
    dispatch(setSuccess(null));
    if (formStateEdit.hasOwnProperty('_id')) {
      await dispatch(updateJob(data, data._id));
    } else {
      await dispatch(createListJob(data));
    }
    await dispatch(getListJob(page));
  };

  useEffect(() => {
    if (
      error === null &&
      isSuccess !== null &&
      !formStateEdit.hasOwnProperty('_id')
    ) {
      reset();
    }
  }, [error, isSuccess]);

  return (
    <Box>
      <Heading marginBottom={'20px'}>{title}</Heading>
      <form onSubmit={handleSubmit(submitForm)}>
        <Field
          label="Название компании"
          invalid={!!errors.nameCompany}
          errorText={errors.nameCompany?.message}
        >
          <Input
            {...register('nameCompany', {
              required: 'Название компании обязательно',
            })}
            placeholder="Введите название компании"
          />
        </Field>
        <Field
          label="Название вакансии"
          invalid={!!errors.nameVacancy}
          errorText={errors.nameVacancy?.message}
        >
          <Input
            {...register('nameVacancy', {
              required: 'Название вакансии обязательно',
            })}
            placeholder="Введите название вакансии"
          />
        </Field>
        <Field
          label="Вилка по зарплате"
          invalid={!!errors.salary}
          errorText={errors.salary?.message}
        >
          <Input
            placeholder="Введите вилку по зарплате"
            {...register('salary', { required: 'Укажите вилку по зарплате' })}
          />
        </Field>
        <Field label="Заметка">
          <Textarea
            placeholder="Введите заметку..."
            {...register('desc')}
          />
        </Field>
        <Field label="Статус">
          <NativeSelectRoot>
            <NativeSelectField
              {...register('status')}
              items={[
                { value: 'true', label: 'Активно' },
                { value: 'false', label: 'Не активно' },
              ]}
            />
          </NativeSelectRoot>
        </Field>
        <Button
          type="submit"
          marginTop={'20px'}
          bg={'#fff500'}
          color={'#111'}
          loading={isLoading}
        >
          Отправить
        </Button>
      </form>
    </Box>
  );
};

export default FormJob;
