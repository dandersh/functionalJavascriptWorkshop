var test = [
  { message: 'Esse id amet quis eu esse aute officia ipsum.'},
  { message: 'Blah blah blah'},
  { message: 'This one should be longer than fifty characters but I guess we will see right'},
  { message: 'Another message'},
  { message: 'Woah now this one is definately not going to show up as I am going to make sure it is too longgggggggg' }
];

// Return an array containing just the message strings and filter out all strings > 50 characters
function getShortMessages(message) {
  return message.map(function(obj) {      
    return obj.message;
  }).filter(function(messageStr) {
    return messageStr.length < 50;
  });  
};

module.exports = getShortMessages;

