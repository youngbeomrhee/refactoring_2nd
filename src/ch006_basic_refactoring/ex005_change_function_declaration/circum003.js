// @Deprecated
function circum(radius) {
  console.warn('This method is deprecated. Use circumference');
  return circumference(radius);
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

module.exports = {circum, circumference}