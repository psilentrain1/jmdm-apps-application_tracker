#!/bin/bash

# Exit on error
set -e

echo "Installing dependencies..."
npm install
cd backend
npm install
cd ..

echo "Setting up database..."
cd backend/database

# Check if sqlite3 is installed
if ! command -v sqlite3 &> /dev/null; then
    echo "Error: sqlite3 is not installed. Please install it first."
    exit 1
fi

# Create database file if it doesn't exist
touch applications.db
sqlite3 applications.db < setup.sql
cd ../..

echo "Setup complete."
echo "When ready to run, use two terminals."
echo "In the first terminal, run:"
echo "cd backend"
echo "npm run dev"
echo ""
echo "In the second terminal, run:"
echo "npm run dev"
echo ""
echo "Use the local URL to access the application."
echo "The backend will be running on port 3000 and the frontend on port 5173."