var
    _      = require('lodash'),
    assert = require('assert'),
    events = require('events'),
    util   = require('util')
    ;

var Message = module.exports = function Message(opts)
{
    events.EventEmitter.call(this);
    _.defaults(this, opts);
};
util.inherits(Message, events.EventEmitter);

Message.prototype.send = function send(payload)
{
    if (_.isString(payload)) payload = { text: payload };

    var fullReply =_.extend(
    {
        channel:      this.channel,
        username:     this.botname,
        link_names:   1,
        parse:        'full',
        unfurl_links: true
    }, payload);

    this.emit('reply', fullReply);
};

Message.prototype.done = function done(reply)
{
    if (reply) this.send(reply);
    this.removeAllListeners('reply');
};
