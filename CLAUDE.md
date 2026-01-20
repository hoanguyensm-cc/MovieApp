# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

This is a React 19 + Vite movie application that integrates with The Movie Database (TMDB) API.

### Key Structure

- **Entry point**: `src/main.jsx` - Sets up React with BrowserRouter
- **Root component**: `src/App.jsx` - Wraps app with MovieProvider and defines routes
- **API layer**: `src/services/api.js` - TMDB API calls (getPopularMovies, searchMovies)
- **State management**: `src/contexts/MovieContext.jsx` - React Context for favorites (persisted to localStorage)

### Routes

- `/` - Home page with movie search and popular movies grid
- `/favorites` - User's saved favorite movies

### Data Flow

1. TMDB API responses flow through `src/services/api.js`
2. Movie data is displayed via `MovieCard` component
3. Favorites are managed via `MovieContext` and persisted to localStorage
4. `useMovieContext()` hook provides access to favorites state and actions

### Styling

CSS files in `src/css/` correspond to their components (e.g., `MovieCard.css` for `MovieCard.jsx`).
