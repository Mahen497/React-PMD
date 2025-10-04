# Product Management Dashboard

## Overview
A React-based dashboard for managing products. Features include add, edit, delete, search, and filter.

## Features
- Add new products
- Edit existing products
- Delete products
- Search by title
- Filter by category
- Responsive design with Tailwind CSS

## Folder Structure
```
react/pmd/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── ProductForm.jsx
│   │   ├── ProductList.jsx
│   │   └── SearchFilter.jsx
│   └── index.css
```

## Components

### App.jsx
Main app logic, state management, and layout.

### ProductForm.jsx
Form for adding/updating products.

### ProductList.jsx
Displays products in a grid, with edit/delete buttons.

### SearchFilter.jsx
Inputs for searching and filtering products.

## Usage

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## License
MIT
