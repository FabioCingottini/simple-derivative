export async function(f, h = 0.000001) {
  return x => (f(x + h) - f(x - h)) / (2 * h);
}
