import sharp from "sharp"

class ImageProcessor {
  async encodeToBlurHash(imageUrl) {
    try {
      const imageBuffer = await sharp(imageUrl)
        .resize(98, 98, {
          fit: "cover",
        })
        .webp({
          quality: 2,
        })
        .toBuffer()

      return imageBuffer.toString("base64")
    } catch (error) {
      console.error("Error generating BlurHash:", error)
      throw error
    }
  }
}

export const imageProcessor = new ImageProcessor()

async function base64() {
  const data = await imageProcessor.encodeToBlurHash(
    "./data/uploaded-images/img-1.jpg",
  )
  console.log(data)
}

base64()
