import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/wechat/wechat',
      'pages/wechat/detail',
      'pages/project/project',
      'pages/about/about'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "list":[
        {
          'pagePath': 'pages/index/index',
          'text': '首页',
          'iconPath': 'static/images/icon/home.png',
          'selectedIconPath': 'static/images/icon/home-s.png'
        },
        {
          'pagePath': 'pages/wechat/wechat',
          'text': '小程序',
          'iconPath': 'static/images/icon/pro.png',
          'selectedIconPath': 'static/images/icon/pro-s.png'
        },
        {
          'pagePath': 'pages/project/project',
          'text': '软件展示',
          'iconPath': 'static/images/icon/com.png',
          'selectedIconPath': 'static/images/icon/com-s.png'
        },
        {
          'pagePath': 'pages/about/about',
          'text': '联系我们',
          'iconPath': 'static/images/icon/tel.png',
          'selectedIconPath': 'static/images/icon/tel-s.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
