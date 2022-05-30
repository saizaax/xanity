import React, { FC } from "react"
import { SideImage, SideImageContainer, styles } from "./ProductGallery.styles"

import { ProductPreview } from "./ProductPreview/ProductPreview"

type Props = {
  onClick?: () => void
  imageUrls: string[]
}

const ProductGallery: FC<Props> = ({ imageUrls }) => {
  const [activeImage, setActiveImage] = React.useState<string>(
    imageUrls ? imageUrls[0] : ""
  )

  React.useEffect(() => {
    setActiveImage(imageUrls ? imageUrls[0] : "")
  }, [imageUrls])

  return (
    <div className={styles()}>
      <SideImageContainer>
        {imageUrls
          ? imageUrls.map((imageUrl, index) =>
              !index ? (
                <SideImage
                  key={index}
                  src={imageUrl}
                  alt=""
                  onClick={() => setActiveImage(imageUrl)}
                />
              ) : (
                <SideImage src={imageUrl} onClick={() => setActiveImage(imageUrl)} alt="" key={index} />
              )
            )
          : null}
      </SideImageContainer>
      <ProductPreview imageUrl={activeImage} />
    </div>
  )
}

export { ProductGallery }
