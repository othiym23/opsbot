// Respond with npm package facts.

var
    P = require('bluebird')
    ;

var NPMPlugin = module.exports = function NPMPlugin()
{


};

NPMPlugin.prototype.matches = function matches(msg)
{
    return false;
};

NPMPlugin.prototype.respond = function respond(msg)
{
    return P.resolve(null);
};

NPMPlugin.prototype.help = function help(msg)
{
    return 'npm: not implemented yet';
};
