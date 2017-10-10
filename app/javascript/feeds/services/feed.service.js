export default {
  getFeeds() {
    return new Promise((resolve, reject) => {
      fetch('/api/feeds')
        .then(response => response.json().then(response.status === 200 ? resolve : reject))
    })
  },

  createFeed(feed) {
    return new Promise((resolve, reject) => {
      if (!feed.url || !feed.url.match('https?:\/\/')) {
        reject({ errors: { url: 'Invalid url' } })
      }
      else {
        fetch('/api/feeds', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ feed })
        })
          .then(response => response.json().then(response.status === 200 ? resolve : reject))
      }
    })
  }
}