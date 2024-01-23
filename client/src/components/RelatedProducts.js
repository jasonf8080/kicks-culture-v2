import React from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader';
import MainRelatedProducts from './MainRelatedProducts';
import MobileRelatedProducts from './MobileRelatedProducts';

const RelatedProducts = () => {
    const {relatedProducts, productLoading} = useSelector((store) => store.filter);
    if(productLoading){
      return <Loader classProp={'medium-loader'}/>
    }

  return (
    <>
      <MainRelatedProducts relatedProducts={relatedProducts}/>
      <MobileRelatedProducts relatedProducts={relatedProducts}/>
    </>
  )
}

export default RelatedProducts