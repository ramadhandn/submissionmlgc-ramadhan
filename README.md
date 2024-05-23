## Quick Setup Google Cloud SDK

Check version
```bash
$ gcloud --version
```

Initialize gcloud
```bash
$ gcloud init --no-launch-browser
```

Authenticate application default login
```bash
$ gcloud auth application-default login --no-launch-browser
```


## Testing on Local

Change this line [server.js#L10-L11](https://github.com/ramadhandn/submissionmlgc-ramadhan/blob/main/backend/src/server/server.js#L10-L11)

from

```js
port: process.env.PORT,
host: '0.0.0.0',
```

to

```js
port: 3000,
host: 'localhost',
```

## Deploy Backend with GCR (Google Cloud Run)

```bash
$ cd backend

$ gcloud run deploy --source . --port 3000

> Service name (your-service-name): <Enter or type anything>

> Do you want enable these APIs to continue (this will take a few minutes)? (y/N) y
```

## Deploy Frontend with GAE (Google App Engine)

```bash
$ cd frontend

$ gcloud app deploy

> Please choose the region where you want your App Engine application located:
> [8] asia-southeast2  (i choose this in my region)

> Do you want to continue (Y/n)? y
```