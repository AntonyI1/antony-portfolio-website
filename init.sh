#!/bin/bash
# Development environment initialization script
# This script sets up and runs the development server

echo "🚀 Initializing Antony Ibrahim Portfolio Website - Cozy Redesign"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Start development server
echo "🌐 Starting development server..."
echo "   Local:   http://localhost:5173"
echo "   Network: Check terminal output for network address"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
