# Library Reservation App

A simple web application to view and reserve books from a library.

- **Frontend:** React + TypeScript + Tailwind CSS  
- **Backend:** ASP.NET Core Web API + EF Core In Memory Database  

Backend handles all calculation logic for reservations.  
Frontend allows browsing books, searching, reserving, and viewing reservations.

## Features

- View list of books (picture, name, year)
- Search by name, year, type
- Reserve a book or audiobook
- Choose quick pick up and number of days
- View my reservations on a separate page
- Pricing rules:
  - Book: €2/day
  - Audiobook: €3/day
  - Discounts: >3 days → 10% off, >10 days → 20% off
  - Service fee: €3 per reservation
  - Quick pick up fee: €5 if selected

## Backend Repository

Backend source code is here:  
[Library Reservation Backend](https://github.com/aldask/BooksReservationAPI)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/aldask/BooksLibraryFE.git
```

### Install dependencies
```bash
npm install
```

### Run the app
```bash
npm start
```
Runs at: [http://localhost:3000](http://localhost:3000)
