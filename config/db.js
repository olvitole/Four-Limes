var dbURIs = {
  test: "mongodb://localhost/angular-app-test",
  development: "mongodb://localhost/angular-app",
  production: process.env.MONGODB_URI || "mongodb://localhost/angular-app"
};

module.exports = function(env) {
  return dbURIs[env];
}