export default function getImages() {
  const photos = []
  for (let i = 1; i <= 9; i++) {
    photos.push(`photo_${i}`)
  }
  return photos
}

