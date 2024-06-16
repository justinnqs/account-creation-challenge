import React, { ReactNode } from 'react';
import { FieldValues, FormProvider, SubmitErrorHandler, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { Stack } from '../layouts/stack/stack';
import { Card } from '../primitives/card/card';

interface Props<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined
> {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
  form: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
  onValidSubmit: TTransformedValues extends undefined
    ? SubmitHandler<TFieldValues>
    : TTransformedValues extends FieldValues
    ? SubmitHandler<TTransformedValues>
    : never;
  onInvalidSubmit?: SubmitErrorHandler<TFieldValues>;
}

export function Form<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined
>({
  header,
  footer,
  children,
  form,
  onValidSubmit,
  onInvalidSubmit,
}: Props<TFieldValues, TContext, TTransformedValues>) {
  return (
    <Card>
      <Stack className="justify-between h-full" flexDirection="col">
        <header>{header}</header>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onValidSubmit, onInvalidSubmit)}>
            <Stack>{children}</Stack>
            <footer>{footer}</footer>
          </form>
        </FormProvider>
      </Stack>
    </Card>
  );
}
