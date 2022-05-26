import React, { FC } from 'react'
import { SideImage, SideImageContainer, styles } from './ProductGallery.styles'

import watchImage from "../../assets/watch.webp"
import { ProductPreview } from './ProductPreview/ProductPreview'

type Props = {
  onClick?: () => void,
  imageUrls?: string[],

}

const ProductGallery: FC<Props> = () => {
  return (
    <div className={styles()}>
      <SideImageContainer>
        <SideImage type="active" src={watchImage} alt="" />
        <SideImage src={watchImage} alt="" />
        <SideImage src={watchImage} alt="" />
        <SideImage src={watchImage} alt="" />
        <SideImage src={watchImage} alt="" />
        <SideImage src={watchImage} alt="" />
        <SideImage src={watchImage} alt="" />
      </SideImageContainer>
      <ProductPreview imageUrl={watchImage} />
    </div>
  )
}

export { ProductGallery }