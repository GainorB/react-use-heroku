# react-use-heroku

[![NPM version](https://badgen.net/npm/v/react-use-heroku)](https://www.npmjs.com/package/react-use-heroku) [![Bundle size](https://badgen.net/bundlephobia/min/react-use-heroku?label=size)](https://bundlephobia.com/result?p=react-use-heroku) [![Bundle size](https://badgen.net/bundlephobia/minzip/react-use-heroku?label=gzip%20size)](https://bundlephobia.com/result?p=react-use-heroku)

> Have you deployed any of your projects on Heroku's Free Plan? You definitely noticed your app sleeps after **30** minutes of inactivity. `react-use-heroku` is custom hook that fetchs an endpoint on your server to **wake up** heroku. At this point, render a loading message, once successful, load your app. 

# Install

```
$ npm i react-use-heroku
```

```
$ yarn add react-use-heroku
```

# Requirement
This package only works in versions of React that support Hooks.

# Usage: Client

## Parameters

You pass `useHeroku` an object with the following properties.

| Key        | Description                                            |
| :--------- |:------------------------------------------------------ |
| `url`      | The endpoint to fetch in your api, to `wake-up` heroku |

## Returned

A **boolean** indicating whether heroku is up and running.

```javascript
import React from 'react';
import useHeroku from 'react-use-heroku';

const url = 'https://.........herokuapp.com/wake-up';

const App = () => {
    const isHerokuLoading = useHeroku({ url });

    if (isHerokuLoading) return <div>Heroku is sleeping, hang tight..</div>;

    return (
        <div>
            Welcome to My React App
        </div>
    );
};

export default App;
```

# Usage: Api

An extremely simple Express Server

```javascript
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const logger = require('morgan');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;

// MIDDLEWARE
app.use(cors());
app.use(logger('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// THIS IS THE ENDPOINT WE ARE REQUESTING FROM OUR CLIENT TO WAKE-UP HEROKU
app.get('/wake-up', (_, res) => res.json({ status: 'Awake' }));

// START SERVER
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
```

# Sample Apps

Here is a list of apps using `react-use-heroku`. If you have an app you would like to include on this list, open a PR.

1. [BigPlant Demo App](https://bigplant.netlify.com/) by [GainorB](https://github.com/GainorB)

