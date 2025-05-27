# 🎵 Music Tracks Management App

This is a frontend React application for managing a list of music tracks. It allows users to add, edit, delete tracks, sort and search them, and upload cover images and audio files. Includes built-in audio player.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm start
```

The app will be available at:

```
http://localhost:3000
```

> ❗ The app uses your server API. Make sure your backend server is running and accessible.

---

## ✅ Features

- View list of music tracks
- Add new track (with genre, album, cover image, audio file)
- Edit existing track
- Delete track
- Sort tracks by title, artist, album (ascending/descending)
- Filter by genre and artist
- Search functionality
- Pagination
- Audio player with play/pause
- Upload audio and cover image
- Responsive UI

---

## 📦 Folder Structure

```
/src
  /components     - Reusable UI components (dropdown, player, etc.)
  /forms          - Form components for creating/editing tracks
  /pages          - Main views (e.g. Home page)
  /scripts
    /backend      - API requests
    /hooks        - Custom hooks
  /store
    /reducers     - useReducer logic
    /actions      - Action creators
  /constants      - App constants (e.g. default images, API urls)
```

---

## 🧪 Testability Requirements (Implemented)

Each required element includes appropriate `data-testid` attributes, such as:

- `data-testid="tracks-header"`
- `data-testid="create-track-button"`
- `data-testid="search-input"`
- `data-testid="track-item-{id}"`
- `data-testid="track-item-{id}-title"`
- `data-testid="edit-track-{id}"`  
  ...and more (see assignment spec for full list)

---

## 📌 Extra Work Done

- Integrated full Redux-style state management via `useReducer`
- Modular and scalable folder structure
- Reusable component architecture
- Audio upload and inline playback
- Dynamic dropdown interactions
- Styled with Tailwind CSS
- File preview and removal logic for uploads
- Field-level validation using `react-hook-form`

---

## 🧼 Notes

- Backend code is **excluded** from this submission, as required.
- `node_modules` and build artifacts are not included.
- Only frontend code is zipped and submitted.

---
