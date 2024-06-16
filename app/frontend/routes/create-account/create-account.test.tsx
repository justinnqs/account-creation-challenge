import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios, { AxiosError } from 'axios';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CreateAccount } from './create-account';

// Mock jest and set the type
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AccountSelection', () => {
  test('render', async () => {
    const response = {
      data: {
        data: {
          username: ['Username must be longer than 10 characters.'],
          password: ['Password needs at least 1 number.', 'Password is not strong enough.'],
        },
      },
      status: 422,
      statusText: 'Unprocessable Entity',
      headers: {} as never,
      config: {} as never,
    };
    const axiosError = new AxiosError();
    const wrapper = Object.create(axiosError);
    // Had to force a response here because the AxiosError constructor was not
    // populating the response property even if being passed in
    wrapper.response = response;
    mockedAxios.post.mockRejectedValueOnce(wrapper);

    render(<CreateAccount />, { wrapper: BrowserRouter });
    // Check Labels exist
    screen.getByText('Create New Account');
    const username = screen.getByLabelText('Username');
    const password = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Create Account') as HTMLButtonElement;
    // Check client side form validation
    username.focus();
    password.focus();
    username.focus();

    const usernameIsRequired = screen.queryByText('Username is a required field');
    const passwordIsRequired = screen.queryByTestId('Password is a required field');

    expect(usernameIsRequired).toBeDefined;
    expect(passwordIsRequired).toBeDefined;

    // Check API validations are displayed
    fireEvent.change(username, { target: { value: 'Justin1234' } });
    fireEvent.change(password, { target: { value: 'complex_password_1234' } });
    await waitFor(() => {
      expect(usernameIsRequired).not.toBeDefined;
      expect(passwordIsRequired).not.toBeDefined;
      expect(submitButton.disabled).toEqual(false);
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalled();
      screen.getByText('Password is not strong enough.');
      screen.getByText('Password needs at least 1 number.');
      screen.getByText('Username must be longer than 10 characters.');
    });
  });
});
