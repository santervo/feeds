export default {
  getFeeds() {
    return new Promise((resolve, reject) => {
      fetch('/api/feeds')
        .then(response => {
          if (response.status === 200) {
            resolve(response.json())
          }
          else {
            reject(response.json())
          }
        })
    })
  },

  createFeed(feed) {
    return new Promise((resolve, reject) => {
      if (!feed.url || !feed.url.match('https?:\/\/')) {
        reject({ url: 'Invalid url' })
      }
      else {
        fetch('/api/feeds', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ feed })
        })
          .then(response => {
            if (response.status === 200) {
              resolve(response.json())
            }
            else {
              reject(response.json())
            }
          })
      }
    })
  }
}