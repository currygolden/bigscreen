/*
 * line类型的配置
 * @Author: hejp
 * @Date: 2022-08-10 09:57:10
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-10 11:53:49
 */
import baseConfiguration from '../base-configuration';
const { echarts, animate, data } = baseConfiguration;

const line = {
	configure: [
		[
			{
				name: '标题',
				list: echarts.title
			},
			{
				name: '图例',
				list: echarts.legend
			},
			{
				name: '网格',
				list: echarts.grid
			},
			...animate.configure
		]
	],
	data: data.configure
};

export default line;
