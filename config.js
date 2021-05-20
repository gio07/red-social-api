module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'ok8RwhX5EL',
    password: process.env.MYSQL_PASS || 't0cjjonY5v',
    database: process.env.MYSQL_DB || 'ok8RwhX5EL',
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
  cacheService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3003,
  },
  redis: {
    host: process.env.REDIS_HOST || 'redis-16761.c266.us-east-1-3.ec2.cloud.redislabs.com',
    port: process.env.REDIS_PORT || 16761,
    password: process.env.REDIS_PASS || 'QqNHb0A3gsjyCYzxpoh9AM3f2Du4hLrk'
  }
};
