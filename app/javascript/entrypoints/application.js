// This file is automatically compiled by Vite, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import '~/styles/application.css';

import { createInertiaApp } from '@inertiajs/react';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

const pages = import.meta.glob('../Pages/**/*.jsx', { eager: true });

createInertiaApp({
  resolve: (name) => {
    const component = pages[`../Pages/${name}.jsx`];
    if (!component)
      throw new Error(
        `Unknown page ${name}. Is it located under Pages with a .jsx extension?`,
      );

    return component;
  },

  title: (title) => (title ? `${title} - Ping CRM` : 'Ping CRM'),

  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(createElement(App, props));
  },
});
