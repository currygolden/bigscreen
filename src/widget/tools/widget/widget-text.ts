/*
 * widget-text组件的默认配置值
 * @Author: hejp
 * @Date: 2022-08-10 10:05:22
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-10 10:24:00
 */
import baseConfiguration from '../base-configuration';
const { font, animate, data } = baseConfiguration;

export default {
	code: 'widgetText',
	type: 'text',
	label: '文本',
	// 配置项值
	configureValue: {
		display: 'block',
		textShadowX: 0,
		textShadowY: 0,
		textShadowF: 0,
		textShadowC: '',
		borderStyle: 'none',
		borderWidth: 0,
		borderColor: '',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		...animate.configureValue,
		...font.configureValue
	},
	// 坐标值
	coordinateValue: {
		left: 0,
		top: 0,
		width: 100,
		height: 40
	},
	// 数据值
	dataValue: data.configureValue
};
