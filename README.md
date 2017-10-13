# feeds

Realtime feed aggregator built with Vue, Vuex, UIkit and Ruby on Rails

## Features

- UI built with Vue/Vuex/UIkit
- Background syncing of feeds
- Realtime updates via websockets to client

## Requirements

- Ruby
- Yarn
- Foreman
- Postgresql
- Redis

## Setup

```
bundle install
yarn
rake db:setup
```

## Usage

```
foreman start
```

It starts web server in port 5000 and background scheduler for syncing feeds.
