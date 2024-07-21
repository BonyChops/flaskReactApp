import 'vite/modulepreload-polyfill';
import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import './index.css'
import {StrictMode} from "react";
document.addEventListener('DOMContentLoaded', () => {
    createInertiaApp({
        resolve: (name) => {
            const pages = import.meta.glob('./pages/**/*.tsx', {eager: true});
            return pages[`./pages/${name}/index.tsx`];
        },
        setup({el, App, props}) {
            createRoot(el).render(
                <StrictMode>
                    <App {...props} />
                </StrictMode>
            );
        }
    }).then(() => {
    });
});