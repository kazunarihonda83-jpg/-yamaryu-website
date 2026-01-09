#!/bin/bash
set -e

# Start the server in background
npm run dev:sandbox &
SERVER_PID=$!

# Wait for server to be ready
sleep 5

# Generate static HTML
curl -s http://localhost:3000 > index.html

# Copy public directory
cp -r public/* . 2>/dev/null || true

# Kill the server
kill $SERVER_PID 2>/dev/null || true

echo "Static site generated successfully!"
