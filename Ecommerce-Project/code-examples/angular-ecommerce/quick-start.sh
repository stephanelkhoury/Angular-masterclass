#!/bin/bash

# Quick Angular Project Runner
# Simple script to kill port 4200 and start the project

echo "🚀 Quick Start - Angular E-commerce Project"

# Navigate to project directory
cd "$(dirname "$0")"

# Kill process on port 4200
echo "🔍 Killing any process on port 4200..."
lsof -ti:4200 | xargs kill -9 2>/dev/null || echo "✅ Port 4200 is free"

# Start the development server
echo "🌐 Starting development server..."
ng serve --port 4200 --open
