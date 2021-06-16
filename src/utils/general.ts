export function importImages (path: string) {
  const r = require.context(path, false, /\.(png|jpe?g|svg)$/)
  return r.keys().map(r)
}
