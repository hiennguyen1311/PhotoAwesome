const config = {
  'TEST': {
    baseURL: 'http://localhost:5000/',
    timeout: 25000,
    contentJSON: 'application/json'
  }
}

export const appConfig = {
  imageColumn: 2,
  maxImageCount: 3,
}

export default config['TEST'];