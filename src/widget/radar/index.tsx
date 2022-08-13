import { FC, useMemo } from 'react'
// 自定义ehcarts
import CustomEcharts from '@src/components/echarts'
// echarts类型
import { IEchartConfig } from '@src/types'
// 处理options
import { handleEchartsOption, handleData } from '@src/utils/echarts'

interface IRadarProps extends IEchartConfig {
	style: any;
	data: any;
	field: string;
}

const Radar: FC<IRadarProps> = ({ style, data, field }) => {
	// 处理echarts数据
	const getOption = useMemo(() => {
		const configuration = handleEchartsOption(style);
		const currentData = data && data[field] ? data[field] : [];
		const { legendData, xAxisData, yAxisData, series } =
			handleData(currentData);

		console.log(series, 'seriesseries')
		return {
			...configuration,
			legend: {
				...configuration.legend,
				data: legendData
			},
			xAxis: {
				...configuration.xAxis,
				data: xAxisData
			},
			yAxis: {
				...configuration.yAxis,
				data: yAxisData
			},
			radar: {
				...configuration.radar.config,
				indicator: xAxisData.map(item => ({
					name: item
				}))
			},
			series: series
				? [{
					...configuration.radar.series,
					data: series.map((item, index) => ({
						name: item.name,
						value: item.data,
						areaStyle: {
							color: configuration.color[index]
						},
						lineStyle: {
							width: 1
						}
					}))
				}]
				: []
		};
	}, [data, field, style]);


	return (
		<CustomEcharts style={{
			width: style.width,
			height: style.height
		}} options={getOption} />
	)
}

export default Radar
