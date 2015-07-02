

function checkUsersValid(users) {
  return function(submittedUsers) {
    return submittedUsers.every(function(value, index, arr) { return value.id in users; });
  };
}
module.exports = checkUsersValid;
