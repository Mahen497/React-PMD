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

## Future Updation

| Status | Feature/Improvement |
|--------|--------------------|
| ✅     | Basic CRUD (Add/Edit/Delete) |
| ✅     | Search & Filter |
| ⏳     | Backend Integration |
| ⏳     | Authentication |
| ✅     | Pagination |
| ⏳     | Sorting Options |
| ⏳     | Export Data (CSV/PDF) |
| ⏳     | Dashboard Analytics |
| ⏳     | Unit/Integration Tests |
| ⏳     | Improved Mobile UX |
| ⏳     | API Documentation |
| ⏳     | CI/CD Setup |

- ✅ Complete
- ⏳ Remaining/Working

---

## Update Log

### Date: October 4, 2025

**Pagination Component Improvements:**
- Added accessibility with `aria-label` attributes for navigation and page buttons.
- Implemented logic to show only a subset of page numbers when `totalPages` is large, with ellipsis and first/last page navigation.

### Date: October 6, 2025

- Improved the product form by adding an "Image URL" field for both add and update operations.
- Fixed pagination logic so that new products do not appear repeatedly when navigating pages.
- Moved pagination state and logic from `ProductList.jsx` to `App.jsx` for better control and synchronization with search/filter.
- Ensured pagination resets to the first page when search or filter changes.
- Enhanced grid and card responsiveness, including width and minimum width fixes.
- Added a toggle feature for the search/filter panel, with smooth show/hide animation, and moved its control to `App.jsx`.
- Provided code and guidance for managing search panel visibility from the parent component.
- Helped synchronize search/filter and pagination for a better user experience.

## License
MIT
