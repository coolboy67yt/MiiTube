#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 8000

# Serve from the current directory (and subdirectories)
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    pass

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving files from {os.getcwd()} on port {PORT}")
    print(f"→ http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped")
