# 🍎 Owocowa Przystań - Monorepo

Projekt strony internetowej dla gospodarstwa edukacyjno-sadowniczego "Owocowa Przystań".
Oparty na architekturze Monorepo (Turborepo-style) z wykorzystaniem Astro (Frontend) i Sanity (CMS).
Projekt wykorzystuje Vercel CLI.

## 🏗 Struktura Projektu

- **`apps/web`**: Strona internetowa (Astro + Tailwind CSS + React).
- **`apps/studio`**: Panel CMS (Sanity Studio).

## 🚀 Wymagania

- Node.js (v18+)
- npm

## 🛠 Instalacja

W głównym katalogu uruchom:

```bash
npm install
```

## Uruchomienie

npm run dev (uruchamia jednocześnie Astro na porcie 4321 i Sanity Studio na 3333).

## Zarządzanie treścią

Wejdź na localhost:3333.
Zaloguj się do Sanity.
W sekcji "Warsztaty Edukacyjne" dodaj nowy wpis używając danych z dokumentu "W poszukiwaniu owadów...".

## Deployment

Astro jest skonfigurowane jako Static Site Generation (SSG) domyślnie. Przy deployu na Vercel/Netlify należy dodać adapter (np. npx astro add vercel).
Sanity wymaga dodania domeny produkcyjnej w ustawieniach CORS panelu zarządzania Sanity.
