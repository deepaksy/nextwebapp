/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader:'akamai',
    path:''
  },
  basePath:'/nextwebapp',
  assetPrefix:'/nextwebapp'
}

module.exports = nextConfig
