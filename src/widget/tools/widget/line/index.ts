/*
 * widget-base-line组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-14 11:39:22
 */
import baseConfiguration from '../../base-configuration';
const { echarts, animate, data } = baseConfiguration;

export default {
	type: 'line',
	// 配置项值
	configureValue: {
		display: 'block',
		...animate.configureValue,
		...echarts.titleValue,
		...echarts.legendValue,
		...echarts.gridValue,
		...echarts.xAxisValue,
		...echarts.yAxisValue,
		...echarts.echartColorValue,
		...echarts.lineValue,
		...echarts.seriesLabel,
		...echarts.seriesStackValue,
		...echarts.symbolValue
	},
	// 坐标值
	coordinateValue: {
		left: 0,
		top: 0,
		width: 500,
		height: 320
	},
	// 数据值
	dataValue: {
		...data.configureValue,
		field: 'series',
		mock: {
			series: [
				{
					seriesName: 'Email',
					data: [
						{
							name: 'Mon',
							value: 120
						},
						{
							name: 'Tue',
							value: 132
						},
						{
							name: 'Wed',
							value: 101
						},
						{
							name: 'Thu',
							value: 134
						},
						{
							name: 'Fri',
							value: 90
						},
						{
							name: 'Sat',
							value: 230
						},
						{
							name: 'Sun',
							value: 210
						}
					]
				}
			]
		}
	}
};
