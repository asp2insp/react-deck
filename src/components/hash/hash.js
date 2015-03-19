module.exports = {
  setHash: function(input) {
    window.location.hash = "#" + input;
  },
  getHash: function() {
    var hash = window.location.hash;
    if (hash.length > 1) {
      hash = hash.substr(1);
    } else {
      hash = undefined;
    }
    return hash;
  }
};
