// This is an active module of the Big Data Replacer addon
exports.main = function() {
    var pageMod = require("sdk/page-mod");
    var data = require("sdk/self").data;
 
    pageMod.PageMod({
      include: "*.facebook.com",
      contentScriptFile: data.url('content-script.js')
    });
};
