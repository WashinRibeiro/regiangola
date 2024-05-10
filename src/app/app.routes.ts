import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'music',
        loadComponent: () => import('./pages/music/music.component').then(m => m.MusicComponent),
    },
]
