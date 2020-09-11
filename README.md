# URL Shortener

## Install and Start

1. Clone project
2. Run `npm i`
3. Create `.env` file in top level directory
4. Add `CLIENT_URL=http://localhost:3000` to `.env`
5. Start project with `npm run start`

## Routes

```javascript
POST

{
  "url": "any url"
}

/api/shorten/make-new-url
```

```javascript
GET

/api/shorten/get-original-url/:code

:code = urlCode from DB
```
