import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import Logo from '../../Shared/Logo.jsx';
import FlashMessages from '../../Shared/FlashMessages.jsx';
import TextInput from '../../Shared/TextInput.jsx';
import LoadingButton from '../../Shared/LoadingButton.jsx';

import * as Routes from '@/routes';

export default function Login({ flash }) {
  const { data, setData, post, processing } = useForm({
    user: {
      email: 'johndoe@example.com',
      password: 'secret',
      remember_me: false,
    },
  });

  const submit = (e) => {
    e.preventDefault();
    post(Routes.user_session());
  };

  const csrf_token = document.querySelector('meta[name="csrf-token"]').content;

  return (
    <div className="flex min-h-screen items-center justify-center bg-indigo-800 p-6">
      <Head title="Login" />
      <div className="w-full max-w-md">
        <Logo
          className="mx-auto block w-full max-w-xs fill-white"
          height="50"
        />
        <form
          className="mt-8 overflow-hidden rounded-lg bg-white shadow-xl"
          onSubmit={submit}
        >
          <input type="hidden" name="authenticity_token" value={csrf_token} />
          <div className="px-10 py-12">
            <FlashMessages props={flash} />

            <h1 className="text-center text-3xl font-bold">Welcome Back!</h1>
            <div className="mx-auto mt-6 w-24 border-b-2" />
            <TextInput
              id="email"
              label="Email"
              type="email"
              className="mt-10"
              value={data.user.email}
              onChange={(e) => setData('user.email', e.target.value)}
            />
            <TextInput
              id="password"
              label="Password"
              type="password"
              className="mt-6"
              value={data.user.password}
              onChange={(e) => setData('user.password', e.target.value)}
            />
            <label className="mt-6 flex select-none items-center">
              <input
                id="remember"
                className="mr-1"
                type="checkbox"
                value={data.user.remember_me}
                onChange={(e) => setData('user.remember_me', e.target.value)}
              />
              <span className="text-sm">Remember Me</span>
            </label>
          </div>
          <div className="flex border-t border-gray-200 bg-gray-100 px-10 py-4">
            <LoadingButton
              className="btn-indigo ml-auto"
              type="submit"
              loading={processing}
            >
              Login
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
