Sun Position API
============

Sun Position is a simple tool for getting sun position data. It returns data such as altitude, azimuth, and distance of the sun from the location provided.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Javascript Wrapper for the [Sun Position API](https://apiverve.com/marketplace/api/sunposition)

---

## Installation
	npm install @apiverve/sunposition --save

---

## Configuration

Before using the sunposition API client, you have to setup your account and obtain your API Key.  
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Usage

The Sun Position API documentation is found here: [https://docs.apiverve.com/api/sunposition](https://docs.apiverve.com/api/sunposition).  
You can find parameters, example responses, and status codes documented here.

### Setup

```
var sunpositionAPI = require('@apiverve/sunposition');
var api = new sunpositionAPI({
    api_key: [YOUR_API_KEY],
    secure: true //(Optional, defaults to true)
});
```

---


### Perform Request
Using the API client, you can perform requests to the API.

###### Define Query

```
var query = {
  lat: 37.7749,
  lon: -122.4194,
  date: "03-27-2025"
};
```

###### Simple Request (using Callback)

```
api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

###### Example Response

```
{
  "status": "ok",
  "error": null,
  "data": {
    "date": "02-20-2025",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "sun": {
      "altitude": 0.34488656913202226,
      "azimuth": 1.0048051768374293
    }
  },
  "code": 200
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2025 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.