#!/usr/bin/env python3
import http.server
import socketserver
import os
from urllib.parse import urlparse

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urlparse(self.path)
        if parsed_path.path.startswith('/fill-details/'):
            self.path = '/index.html'
        return super().do_GET()

PORT = int(os.environ.get('PORT', 10000))
with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"Server running on port {PORT}")
    httpd.serve_forever()
