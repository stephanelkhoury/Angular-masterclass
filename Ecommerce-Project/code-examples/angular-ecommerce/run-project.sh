#!/bin/bash

# Angular E-commerce Project Runner Script
# This script kills any process on port 4200, builds the project, and runs it

echo "🚀 Starting Angular E-commerce Project Setup..."

# Change to the project directory
cd "$(dirname "$0")"

# Function to kill process on port 4200
kill_port_4200() {
    echo "🔍 Checking for processes on port 4200..."
    
    # Find process using port 4200
    PID=$(lsof -ti:4200)
    
    if [ ! -z "$PID" ]; then
        echo "⚠️  Found process $PID using port 4200. Killing it..."
        kill -9 $PID
        sleep 2
        echo "✅ Process killed successfully"
    else
        echo "✅ Port 4200 is available"
    fi
}

# Function to check if Angular CLI is installed
check_angular_cli() {
    if ! command -v ng &> /dev/null; then
        echo "❌ Angular CLI not found. Installing globally..."
        npm install -g @angular/cli
    else
        echo "✅ Angular CLI is installed"
    fi
}

# Function to install dependencies
install_dependencies() {
    echo "📦 Installing project dependencies..."
    if [ ! -d "node_modules" ]; then
        echo "🔧 Running npm install..."
        npm install
    else
        echo "🔧 Updating dependencies..."
        npm install
    fi
}

# Function to build the project
build_project() {
    echo "🔨 Building the project..."
    ng build --configuration development
    if [ $? -eq 0 ]; then
        echo "✅ Build completed successfully"
    else
        echo "❌ Build failed. Please check the errors above."
        exit 1
    fi
}

# Function to start the development server
start_server() {
    echo "🌐 Starting development server on port 4200..."
    echo "📱 The application will be available at: http://localhost:4200"
    echo "🛑 Press Ctrl+C to stop the server"
    echo ""
    ng serve --port 4200 --open
}

# Main execution
main() {
    echo "==========================================="
    echo "   Angular E-commerce Project Runner"
    echo "==========================================="
    echo ""
    
    # Step 1: Kill any process on port 4200
    kill_port_4200
    
    # Step 2: Check Angular CLI
    check_angular_cli
    
    # Step 3: Install dependencies
    install_dependencies
    
    # Step 4: Build the project
    build_project
    
    # Step 5: Start the server
    start_server
}

# Handle script interruption
trap 'echo -e "\n🛑 Script interrupted. Cleaning up..."; kill_port_4200; exit 0' INT

# Run the main function
main
