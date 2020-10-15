
import React,{Component} from 'react';
import {
  Container,
} from 'reactstrap';

import Navbar from '../components/Navigation';
import NewItems from '../components/NewItems';
import PopularItems from '../components/PopularItems';
import CarouselPromo from '../components/CarouselPromo'
import CarouselCategory from '../components/CarouselCategory'
import SetCarousel from '../components/setCarousel'

import newItemsAction from '../redux/actions/item'
import categoryAction from '../redux/actions/category'
import {connect} from 'react-redux'

class Home extends Component {
  componentDidMount() {
    this.props.getItems()
    this.props.getCategory()
    // console.log("cek lagi",this.props.getItems());
  }
  
  render() {
    const {data} = this.props.item
    const {category} = this.props.category
    // console.log("cek:",this.props.auth.isLogin);
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
        <NewItems data={data} />
        <PopularItems data={data} />
      </Container>
    </>
    );
  }
}


const mapStateToProps = state => ({
  item: state.newItems,
  category: state.listCategory,
  auth: state.auth
})

const mapDispatchToProps = {
  getItems: newItemsAction.getData,
  getCategory: categoryAction.getCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
