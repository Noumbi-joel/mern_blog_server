// server/roles.js
const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
ac.grant("USER")
 .readOwn("profile")
 .updateOwn("profile")
 
ac.grant(process.env.ADMIN)
 .extend("USER")
 .updateAny("profile")
 .deleteAny("profile")
 
return ac;
})();