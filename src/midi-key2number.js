function key2number (key) {
  var keys = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
  var n0,n1;
  for(var i = 0;i < keys.length;i++){
    if(keys[i].match(key.charAt(0))){
      n0 = i;
      break;
    }
  }
  n1 = Number(key.slice(1));//二文字目以降を抜き出す

  return n0 + n1 * 12;
}
