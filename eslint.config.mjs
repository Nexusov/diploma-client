import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,

    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            js,
            react: pluginReact,
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
        },
    },
]);

