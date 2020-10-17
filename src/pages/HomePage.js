
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

// import newItemsAction from '../redux/actions/item'
import itemsNewAction from '../redux/actions/itemNew'
import itemsPopularAction from '../redux/actions/itemPopular'
import categoryAction from '../redux/actions/category'
import {connect} from 'react-redux'

class Home extends Component {
  componentDidMount() {
    // this.props.getItems()
    this.props.getItemNew()
    this.props.getItemPopular()
    this.props.getCategory()
    // console.log("cek lagi",this.props.getItemNew());
  }
  
  render() {
    // const {data} = this.props.item
    const {category} = this.props.category
    const {dataNew} = this.props.itemConditionNew
    const {dataPopular} = this.props.itemConditionPopular
    console.log("cek new:",this.props.itemNew);
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
        <NewItems dataNew={dataNew} />
        <PopularItems dataPopular={dataPopular} />
      </Container>
    </>
    );
  }
}


const mapStateToProps = state => ({
  // item: state.newItems,
  category: state.listCategory,
  auth: state.auth,
  itemConditionNew: state.itemNew,
  itemConditionPopular: state.itemPopular
})

const mapDispatchToProps = {
  // getItems: newItemsAction.getData,
  getCategory: categoryAction.getCategory,
  getItemNew: itemsNewAction.getDataNew,
  getItemPopular:itemsPopularAction.getDataPopular
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
