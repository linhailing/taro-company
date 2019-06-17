import  Taro,{Component} from '@tarojs/taro';
import  {View,Text,Image} from  '@tarojs/components';

import {connect} from '@tarojs/redux';

import './index.less'

class  Item  extends Component{
  render(){
    const { item } = this.props
    return (<View className='item'>
      <View className='item-header'>
        <Image className='item-img' src={item.imgs} />
      </View>
      <View className='item-body'>
        <Text className='item-title'>{item.title}</Text>
        <Text className='item-subtitle'>{item.subTitle}</Text>
      </View>
    </View>)
  }
}
export default  Item;
