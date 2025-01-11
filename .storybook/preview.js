/** @type { import('@storybook/react').Preview } */

import { withThemeByDataAttribute } from '@storybook/addon-themes';
import React from 'react';
import { ApolloWrapper } from "@/lib/apollo-provider";

import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito'
});

import '../src/app/globals.css';

const preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      options: {
        light: { name: 'light', value: '#ffffff' },
        neutral: { name: 'neutral', value: '#2A303E' },
      }
    },
    paddings: {
      values: [
        { name: 'Small', value: '16px' },
        { name: 'Medium', value: '32px' },
        { name: 'Large', value: '64px' },
      ],
      default: 'Medium',
    },
    options: {
      storySort: {
        //method: 'alphabetical',
        includeNames: true,
        order: ['Introduction', 'Components', 'Pages'],
      },
    },
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    Story => (
      <main className={`${nunitoSans.className} antialiased`}>
        <ApolloWrapper>
          <Story />
        </ApolloWrapper>
      </main>
    )
  ],

};

export default preview;
