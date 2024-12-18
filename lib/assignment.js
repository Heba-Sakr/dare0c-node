function Reverser() {
  this.reverse = function(text) {
    // Create an empty string to store the reversed result
    let reversedText = '';
    
    // Iterate through the input text in reverse order
    for (let i = text.length - 1; i >= 0; i--) {
      reversedText += text[i];
    }    
    return reversedText;
  };
}

module.exports = Reverser;
