export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  if(src.startsWith('https://images.pexels.com')){
    return src
  }
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
  return `https://lucsbasto.com/${params.join(
    ','
  )}${src}`
}