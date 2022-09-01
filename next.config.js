/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['images.squarespace-cdn.com']
  }
 /* env:{
    uri:"mongodb+srv://faith:JPAMJ6zsfijUrbqw@first-cluster.zloee.mongodb.net/test?retryWrites=true&w=majority"
  }*/
}


module.exports = nextConfig

