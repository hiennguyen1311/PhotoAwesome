const config = {
  'DEBUG': {
    baseURL: 'http://localhost:5000/',
    timeout: 25000,
    contentJSON: 'application/json'
  },
  'TEST': {
    baseURL: 'http://64.52.85.41:5000/',
    timeout: 25000,
    contentJSON: 'application/json'
  }
}

export const appConfig = {
  imageColumn: 2,
  maxImageCount: 3,
}

export default config['TEST'];