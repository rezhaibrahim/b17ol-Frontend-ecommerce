
import React,{useEffect,useState} from 'react';
import {
  Container,
} from 'reactstrap';

import Navbar from '../components/Navigation';
import NewItems from '../components/NewItems';
import PopularItems from '../components/PopularItems';
import CarouselPromo from '../components/CarouselPromo'
import CarouselCategory from '../components/CarouselCategory'
import SetCarousel from '../components/setCarousel'

// import newItemsAction from '../redux/actions/item'
import itemAction from '../redux/actions/item'
import itemsPopularAction from '../redux/actions/item'
import categoryAction from '../redux/actions/category'

import { useSelector,useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const {itemNew} = useSelector(state => state.item)
  const {itemPopular} = useSelector(state => state.item)
  const {category} = useSelector(state => state.category)
  // console.log(category);

  useEffect(() => {
    dispatch(itemAction.getNewItem())
    dispatch(itemAction.getPopularItem())
    dispatch(categoryAction.getCategory())
    dispatch(itemAction.clear())
  }, [])

  useEffect(() => {
    
  }, [itemNew,itemPopular])
    return (
      <>
      <Navbar />
      <Container className="mb-5">
      <SetCarousel>
          <CarouselPromo />
        </SetCarousel>
        <SetCarousel>
          <CarouselCategory category={category}/>
        </SetCarousel>
        <NewItems itemNew={itemNew} />
        <PopularItems  itemPopular={itemPopular} />
      </Container>
    </>
    );
}



export default Home
