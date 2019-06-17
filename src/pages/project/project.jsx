import  Taro,{Component} from '@tarojs/taro';
import {View, Text, Button, Swiper, SwiperItem, Image} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import {init} from "../../actions/item";

import './project.less'

import img_1 from "../../static/images/temp/1.jpeg";
import img_2 from "../../static/images/temp/2.jpeg";
import img_3 from "../../static/images/temp/3.jpeg";

import { Item } from '../../components/item/index'

@connect(function (state) {
  return {...state.item}
}, function (dispatch) {
  return {
    init(){
      dispatch(init())
    }
  }
})

class  Project  extends   Component{
  render(){
    let { data } = this.props
    return (<View>
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
      <View className='project-body'>
        <Text className='project-title'>系统展示</Text>
        <View className='project-list'>
          {data.map((items)=>{
            return (
              <View className='project-item' key={items.id}>
                <Item item={items} />
              </View>
            )
          })}
        </View>
      </View>
    </View>)
  }
}
export default  Project;
