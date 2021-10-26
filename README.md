# Next Websocket fast refresh doesn't work with assetPrefix

This example repository shows how the Websocket fast refresh doesn't work if assetPrefix is defined.

## Running the example
- `npm i`
- `npm run dev`
- `open http://localhost:3000`

Notice an error in console
```
Uncaught DOMException: Failed to construct 'WebSocket': The URL 'ws://localhost:3000custom-asset-prefix/_next/webpack-hmr' is invalid.
```
