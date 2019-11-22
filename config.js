module.exports = {
  port: process.env.PORT || 3001,
  db: 'mongodb://testUser:testpassword@pmontoya-shard-00-00-codbc.mongodb.net:27017,pmontoya-shard-00-01-codbc.mongodb.net:27017,pmontoya-shard-00-02-codbc.mongodb.net:27017/test?ssl=true&replicaSet=pmontoya-shard-0&authSource=admin&retryWrites=true&w=majority'
}