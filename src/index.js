
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return (matrix || []).reduce((result, row, i) => i % 2 == 0 ? [...result, ...row] : [...result, ...row.reverse()], []);
}
