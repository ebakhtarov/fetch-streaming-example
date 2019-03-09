# fetch-streaming-example
##Fetch Api Stream Example

A very simple example how to stream data to a client/browser using fetch api.

This code would also work for http/2. Worked properly only on Chrome (currently v72 is installed).

###How to start:
Download the two files and navigate into the folder.

Start the NodeJS based backend with the command:
```
node server.js
```
Start a simple server to serve the index.html file with:
```
python -m http.server (python 3)
```
or
```
python -m SimpleHTTPServer 8000 (python 2)
```
Open the start page in browser: localhost:8000.

You should see loading of messages (chunks) with delays and at the end a final message closing the stream.
