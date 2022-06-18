module.exports = {
  type: 'service_account',
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PROJECT_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: 'upload-image@ancient-sunspot-328301.iam.gserviceaccount.com',
  client_id: process.env.CLIENT_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: process.env.CLIENT_CERT_URL
}
