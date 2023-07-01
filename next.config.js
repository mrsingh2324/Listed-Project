/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
      CLIENT_ID: '1091834768364-2b31urjsj5pp9a6o3mfbi4g6oihp5ego.apps.googleusercontent.com',
    CLIENT_SECRET: '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',
    NEXTAUTH_SECRET: 'secret-listed@app'
  }
  
}

module.exports = nextConfig
