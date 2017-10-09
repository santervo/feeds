export default {
  getFeedEntries(feedId) {
    return new Promise((resolve, reject) => {
      fetch(`/api/feeds/${feedId}/feed_entries`)
        .then(response => {
          if (response.status === 200) {
            resolve(response.json())
          }
          else {
            reject(response.json())
          }
        })
    })
  }
}