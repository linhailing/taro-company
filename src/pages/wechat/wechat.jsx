import  Taro,{Component} from '@tarojs/taro';
import {View, Text, Button, Swiper, SwiperItem, Image} from '@tarojs/components';
import {connect} from '@tarojs/redux';

import './wechat.less'

import img_1 from "../../static/images/temp/1.jpeg";
import img_2 from "../../static/images/temp/2.jpeg";
import img_3 from "../../static/images/temp/3.jpeg";

import item_1 from '../../static/images/temp/8.jpeg'
import item_2 from '../../static/images/temp/9.jpeg'
import item_3 from '../../static/images/temp/10.jpeg'
import item_4 from '../../static/images/temp/11.jpeg'
import item_5 from '../../static/images/temp/12.jpeg'


class Wechat  extends   Component{
  goto = (id)=>(e)=>{
    e.stopPropagation()
    Taro.navigateTo({
      url: '/pages/wechat/detail?id=' + id
    })
  }
  render(){
    return (<View className='wechat'>
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
      <View className='wechat-body'>
        <Text className='wechat-title'>---小程序系列---</Text>
        <View className='wechat-list'>
          <View className='wechat-item' onClick={this.goto(1)}>
            <View className='wechatImg'>
              <Image className='wechat-img' src={item_1} />
            </View>
            <Text className='wechat-title'>服务类小程序</Text>
          </View>
          <View className='wechat-item' onClick={this.goto(2)}>
            <View className='wechatImg'>
              <Image className='wechat-img' src={item_2} />
            </View>
            <Text className='wechat-title'>服务类小程序2</Text>
          </View>
          <View className='wechat-item' onClick={this.goto(3)}>
            <View className='wechatImg'>
              <Image className='wechat-img' src={item_3} />
            </View>
            <Text className='wechat-title'>服务类小程序3</Text>
          </View>
          <View className='wechat-item' onClick={this.goto(4)}>
            <View className='wechatImg'>
              <Image className='wechat-img' src={item_4} />
            </View>
            <Text className='wechat-title'>服务类小程序4</Text>
          </View>
          <View className='wechat-item' onClick={this.goto(5)}>
            <View className='wechatImg'>
              <Image className='wechat-img' src={item_5} />
            </View>
            <Text className='wechat-title'>服务类小程序5</Text>
          </View>
        </View>
      </View>
    </View>)
  }
}
export default  Wechat;
