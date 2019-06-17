import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Button,Image} from  '@tarojs/components';
import {connect} from '@tarojs/redux';

import img_1 from '../../static/images/temp/13.jpeg'

import './about.less'

class  About  extends   Component{
  render(){
    return (<View className='about'>
      <View className='about-header'>
        <Image className='about-img' src={img_1} />
      </View>
      <View className='about-body'>
        <View className='about-list'>
          <View className='about-item'>联系电话：12332132132/1232131233</View>
          <View className='about-item'>联系QQ：12332132132/1232131233</View>
          <View className='about-item'>微信号：12332132132/1232131233</View>
          <View className='about-item'>公司网站：www.baidu.com</View>
          <View className='about-item'>公司地址：上海上海想休息休息想想想</View>
        </View>
      </View>
    </View>)
  }
}
export default  About;
