import Taro, { Component } from '@tarojs/taro'
import { View,Text, Swiper, SwiperItem, Image} from '@tarojs/components'
import { connect } from '@tarojs/redux'

// import { add, minus, asyncAdd } from '../../actions/counter'
import { init } from "../../actions/item"

import Item from '../../components/item/index'

import img_1 from '../../static/images/temp/1.jpeg'
import img_2 from '../../static/images/temp/2.jpeg'
import img_3 from '../../static/images/temp/3.jpeg'

import './index.less'


// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))

@connect(function (state) {
  return {...state.item}
}, function (dispatch) {
  return {
    init(){
      dispatch(init())
    }
  }
})
class Index extends Component {
  config = {
    navigationBarTitleText: '公司名称'
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }
  render () {
    const { data } = this.props
    return (
      <View className='index'>
        <View className='nav-carouse'>
          <Swiper className='carouse' indicatorColor='#999' indicatorActiveColor='#333' circular indicatorDots autoplay>
            <SwiperItem>
              <Image className='carouse-img' src={img_1} />
            </SwiperItem>
            <SwiperItem>
              <Image className='carouse-img' src={img_2} />
            </SwiperItem>
            <SwiperItem>
              <Image className='carouse-img' src={img_3} />
            </SwiperItem>
          </Swiper>
        </View>
        <View className='wrapper'>
          <View className='wrapper-header'>
            <Text className='title'>产品介绍</Text>
          </View>
          <View className='wrapper-list'>
            { data.map( (item)=>{
              return (<View className='wrapper-item' key={item.id}>
                <Item item={item} />
              </View>)
            } )}
          </View>
        </View>
      </View>
    )
  }
}

export default Index
