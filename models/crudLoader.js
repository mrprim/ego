var normalizedPath = require("path").join(__dirname, "crud");

module.exports = function(router,mongoOp) {
	require("fs").readdirSync(normalizedPath).forEach(function(file) {
  		require("./crud/" + file)(router,mongoOp);
	});
}