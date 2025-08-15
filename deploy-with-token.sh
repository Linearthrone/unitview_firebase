#!/bin/bash

# Script to deploy the application using a Firebase token

echo "Deploying application to Firebase..."

# Check if Firebase token is provided as an argument
if [ -z "$1" ]; then
  echo "Error: Firebase token not provided"
  echo "Usage: ./deploy-with-token.sh <firebase-token>"
  exit 1
fi

# Deploy using the provided token
firebase deploy --token "$1"

echo "Deployment complete!"