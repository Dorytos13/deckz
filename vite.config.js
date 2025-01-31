import { defineConfig } from 'vite';

export default defineConfig({
//   root: 'challenge16deck', // Définit le dossier racine 
  build: {
    target: 'es6',
    outDir: 'dist', // Dossier de sortie des fichiers build
    emptyOutDir: true // Supprime le dossier de sortie avant chaque build
  },
});