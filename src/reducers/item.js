import png1 from '../static/images/temp/4.png'
import png2 from '../static/images/temp/5.png'
import png3 from '../static/images/temp/6.png'
import png4 from '../static/images/temp/7.png'


const ITEM_INIT = {
  data: [
    {id:1, imgs: png1,title:'微信开发',subTitle:'微信定制开发微官网、微商城、微分销、微营销等'}
    ,{id:2, imgs: png2,title:'智慧医疗',subTitle:'打造新时期的新医疗体系 更加智慧化、高效化'}
    ,{id:3, imgs: png3,title:'企业一体化工作流程',subTitle:'根据您的需求量身定制，让您的想法可以执行'}
    ,{id:4, imgs: png4,title:'智慧城市建设',subTitle:'技术支持，大数据技术助力新城市建设'}
  ]
}

export default function item(state=ITEM_INIT,action) {
  switch (action.type) {
    case 'init':
      return {...state}
    default:
      return state
  }
}
