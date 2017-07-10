function number2key (number) {
  var keys = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
  return keys[number%12] + Math.floor(number / 12);
}
