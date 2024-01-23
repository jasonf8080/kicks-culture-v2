import React, { useEffect } from 'react'
import { Hero, Featured, Brands, Blog, Locations} from '../components'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from '../features/authSlice';
import Wrapper from '../assets/css-wrappers/Home';
import { handleLinkClick } from '../utils/helpers';


const Home = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
      handleLinkClick();
     dispatch(getCurrentUser())
  }, [])

      

  return (
    <>
        <Wrapper>
          <Hero></Hero>
          <Brands></Brands>
          <Featured></Featured>
          <Blog></Blog>
          <Locations></Locations>
        </Wrapper>
    </>
  )
}

export default Home