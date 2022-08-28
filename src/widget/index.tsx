import './index.scss'
// 文本
import text from './text'
// 表单
import form from './form'
// 组件分类
export const componentsClassify: any[] = [
  {
    type: 'text',
    icon: '&#xe7f7;',
    name: '文本',
    datas: [
      {
        src: require('../assets/image/configuration/line/widgetBaseLine.png'),
        widgetName: 'widgetBaseText',
        name: '基础文本'
      },
      {
        src: require('../assets/image/configuration/line/widgetBaseLine.png'),
        widgetName: 'widgetTimeText',
        name: '时间文本'
      },
      {
        src: require('../assets/image/configuration/line/widgetBaseLine.png'),
        widgetName: 'widgetDigitalScroll',
        name: '数字滚动'
      }
    ]
  },
  {
    type: 'image',
    icon: '&#xe7de;',
    name: '图片',
    widgetName: 'widgetImage'
  },
  {
    type: 'table',
    icon: '&#xe7df;',
    name: '表格',
    datas: [
      {
        src: require('../assets/image/configuration/line/widgetBaseLine.png'),
        widgetName: 'widgetBaseTable',
        name: '基础表格'
      }
    ]
  },
  {
    type: 'line',
    icon: '&#xe7af;',
    name: '折线图',
    datas: [
      {
        src: require('../assets/image/configuration/line/widgetBaseLine.png'),
        widgetName: 'widgetBaseLine',
        name: '基础折线图'
      },
      {
        src: require('../assets/image/configuration/line/widgetBaseSmoothLine.png'),
        widgetName: 'widgetBaseSmoothLine',
        name: '基础平滑折线图'
      },
      {
        src: require('../assets/image/configuration/line/widgetBaseAreaLine.png'),
        widgetName: 'widgetBaseAreaLine',
        name: '基础面积图'
      },
      {
        src: require('../assets/image/configuration/line/widgetBaseLengthwaysLine.png'),
        widgetName: 'widgetBaseLengthwaysLine',
        name: '基础纵向折线图'
      }
    ]
  },
  {
    type: 'bar',
    icon: '&#xe7b0;',
    name: '柱状图',
    datas: [
      {
        src: require('../assets/image/configuration/bar/widgetBaseBar.png'),
        widgetName: 'widgetBaseBar',
        name: '基础柱状图'
      },
      {
        src: require('../assets/image/configuration/bar/widgetBackgroudBar.png'),
        widgetName: 'widgetBackgroudBar',
        name: '带背景色的柱状图'
      },
      {
        src: require('../assets/image/configuration/bar/widgetAlignmentBar.png'),
        widgetName: 'widgetAlignmentBar',
        name: '坐标轴刻度与标签对齐'
      },
      {
        src: require('../assets/image/configuration/bar/widgetRadiusBar.png'),
        widgetName: 'widgetRadiusBar',
        name: '圆角柱状图'
      },
      {
        src: require('../assets/image/configuration/bar/widgetLengthwaysBar.png'),
        widgetName: 'widgetLengthwaysBar',
        name: '纵向柱状图'
      },
      {
        src: require('../assets/image/configuration/bar/widgetStackBar.png'),
        widgetName: 'widgetStackBar',
        name: '堆积柱状图'
      }
    ]
  },
  {
    type: 'pie',
    icon: '&#xe78e;',
    name: '饼图',
    datas: [
      {
        src: require('../assets/image/configuration/pie/widgetBasePie.png'),
        widgetName: 'widgetBasePie',
        name: '基础饼图'
      },
      {
        src: require('../assets/image/configuration/pie/widgetAnnulusPie.png'),
        widgetName: 'widgetAnnulusPie',
        name: '圆环饼图'
      },
      {
        src: require('../assets/image/configuration/pie/widgetRosetypePie.png'),
        widgetName: 'widgetRosetypePie',
        name: '南丁格尔图'
      }
    ]
  },
  {
    type: 'radar',
    icon: '&#xe7dc;',
    name: '雷达图',
    datas: [
      {
        src: require('../assets/image/configuration/radar/widgetBaseRadar.png'),
        widgetName: 'widgetBaseRadar',
        name: '基础雷达图'
      },
      {
        src: require('../assets/image/configuration/radar/widgetCircleRadar.png'),
        widgetName: 'widgetCircleRadar',
        name: '圆形雷达图'
      }
    ]
  },
  {
    type: 'funnel',
    icon: '&#xe6a9;',
    name: '漏斗图',
    datas: [
      {
        src: require('../assets/image/configuration/funnel/widgetBaseFunnel.png'),
        widgetName: 'widgetBaseFunnel',
        name: '基础漏斗图'
      }
    ]
  },
  {
    type: 'scatter',
    icon: '&#xe7b1;',
    name: '散点图',
    datas: [
      {
        src: require('../assets/image/configuration/scatter/widgetBaseScatter.png'),
        widgetName: 'widgetBaseScatter',
        name: '基础散点图'
      }
    ]
  }
]

// 所有组件地址
const components: any = {
  // 文本
  ...text,
  // 表单
  ...form,
  // 图片
  image: require('./image').default,
  // 组
  group: require('./group').default,
  // 折线图
  line: require('./line').default,
  // 柱状图
  bar: require('./bar').default,
  // 饼图
  pie: require('./pie').default,
  // 雷达图
  radar: require('./radar').default,
  // 漏斗图
  funnel: require('./funnel').default,
  // 散点图
  scatter: require('./scatter').default,
  // 表格
  table: require('./table').default
}

export default components
