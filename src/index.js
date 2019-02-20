/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.unshift(0);
  var count = 0;
  for (var i = 1; i < preferences.length; i++) {
    var a = i,
        b = preferences[a],
        c = preferences[b];
    if (preferences[a] == a || preferences[b] == b || preferences[c] == c) continue;
    if (preferences[c] == a) count += 1;
  }
  return count/3;
};
