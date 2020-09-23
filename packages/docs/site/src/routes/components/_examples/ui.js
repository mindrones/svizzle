import {formatExamples} from './utils';

export default formatExamples([
	{
		data: [{
			key: 'A switch',
			props: {
				value: 'Off',
				values: ['Off', 'On']
			},
			usage: `
				<Switch
					value='Off'
					values={['Off', 'On']}
				/>
			`,
		}, {
			key: 'A switch set to the second value',
			props: {
				value: 'On',
				values: ['Off', 'On']
			},
			usage: `
				<Switch
					value='On'
					values={['Off', 'On']}
				/>
			`,
		}, {
			key: 'A switch with no value',
			props: {
				values: ['Off', 'On']
			},
			usage: `
				<Switch values={['Off', 'On']} />
			`,
		}, {
			key: 'A switch with a theme',
			props: {
				values: ['Off', 'On'],
				theme: {
					height: '60px',
					color: 'orange',
					backgroundColor: 'darkviolet',
					knobColor: 'orange'
				}
			},
			usage: `
				<Switch
					values={['Off', 'On']}
					theme={{
						height: '60px',
						color: 'orange',
						backgroundColor: 'darkviolet',
						knobColor: 'orange'
					}}
				/>
			`,
		}, {
			key: 'A switch without labels',
			props: {
				values: ['Off', 'On'],
				hideLabels: true
			},
			usage: `
				<Switch
					values={['Off', 'On']}
					hideLabels={true}
				/>
			`,
		}],
		doc: [
			{tag: 'p', content: 'A simple toggle to select one of two values.'},
			{tag: 'p', content: 'By default it will be created with the first value of `values`, or you can pass the `value` prop to control it.'},
			{tag: 'p', content: 'Passing a `theme` it is possible to style it.'},
		],
		events: [
			'toggled',
		],
		name: 'Switch',
		packageName: 'ui',
		slug: 'ui-Switch',
		title: 'Switch',
	},
]);
