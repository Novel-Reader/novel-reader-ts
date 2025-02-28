import { createRoot } from 'react-dom/client';
import Router from './router.tsx';

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/font.css";
import "./css/common.css";

const container = document.getElementById('root');

const root = createRoot(container);

root.render(Router);
