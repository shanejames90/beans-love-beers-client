let apiUrl
const apiUrls = {
  production: 'https://api.punkapi.com/v2/beers?beer_name=',
  development: 'https://api.punkapi.com/v2/beers?beer_name='
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
