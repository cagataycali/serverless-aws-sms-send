'use strict';
var Sender = require('aws-sms-send');
var config = {
  AWS: {
    accessKeyId: 'xxxxxxxxxx',
    secretAccessKey: 'xxxxxxxxxx',
    region: 'xxxxxxxxxx',
  },
  topicArn: 'xxxxxxxxxx',
};
var sender = new Sender(config);

module.exports.handler = function(event, context, cb) {
  return cb(null, {
     response: sender.sendSms(event.smsBody, event.label, true);
  });
};
