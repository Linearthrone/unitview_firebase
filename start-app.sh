#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Create .env.local file if it doesn't exist
if [ ! -f .env.local ]; then
  echo "Creating .env.local file..."
  cp .env.local.example .env.local
  echo "Please update .env.local with your Firebase credentials"
fi

# Start the development server
echo "Starting development server..."
npm run dev