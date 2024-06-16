import { yupResolver } from '@hookform/resolvers/yup';
import axios, { AxiosError } from 'axios';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import WealthfrontLogo from '../../../assets/wealthfront-logo.svg';
import { PasswordInput } from '../../components/form/fields/password-input.tsx';
import { TextInput } from '../../components/form/fields/text-input.tsx';
import { Form } from '../../components/form/form.tsx';
import { CenterLayout } from '../../components/layouts/center-layout/center-layout';
import { Stack } from '../../components/layouts/stack/stack';
import { Button } from '../../components/primitives/button/button';
import { H1 } from '../../components/primitives/typography/typography';
import { GET_PATH } from '../../routes.tsx';

type CreateAccountForm = {
  username?: string;
  password?: string;
};

const schema = yup
  .object({
    username: yup.string().test({
      test(value, ctx) {
        if (!value) {
          return ctx.createError({ message: 'Username is a required field' });
        }
        return true;
      },
    }),
    password: yup.string().test({
      test(value, ctx) {
        if (!value) {
          return ctx.createError({ message: 'Password is a required field' });
        }
        return true;
      },
    }),
  })
  .required();

export function CreateAccount() {
  const navigateTo = useNavigate();
  const form = useForm<CreateAccountForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const {
    setError,
    formState: { errors, isDirty },
  } = form;

  const handleSubmit = async (data: CreateAccountForm) => {
    try {
      await axios.post('http://localhost:3000/api/v1/users', data);
      navigateTo(GET_PATH.account_selection);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const data = error.response?.data.data;
        if (data.username) {
          setError('username', {
            type: 'validate',
            message: data.username.join('|'),
          });
        }
        if (data.password) {
          setError('password', {
            type: 'validate',
            message: data.password.join('|'),
          });
        }
      }
    }
  };

  return (
    <CenterLayout>
      <div className="w-2/3 max-w-lg">
        <Form<CreateAccountForm>
          form={form}
          header={
            <Stack className="items-center gap-4 mb-5">
              <img className="w-14" src={WealthfrontLogo} alt="Wealthfront Logo" />
              <H1 className="text-center">Create New Account</H1>
            </Stack>
          }
          footer={
            <Button
              name="create-account"
              type="submit"
              size={'full'}
              disabled={Object.keys(errors).length !== 0 || !isDirty}
            >
              Create Account
            </Button>
          }
          onValidSubmit={handleSubmit}
        >
          <Controller
            name="username"
            control={form.control}
            render={({ field }) => <TextInput label="Username" errorMessage={errors.username?.message} {...field} />}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field }) => (
              <PasswordInput label="Password" errorMessage={errors.password?.message} {...field} />
            )}
          />
        </Form>
      </div>
    </CenterLayout>
  );
}
