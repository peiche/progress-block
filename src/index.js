import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';

const progressIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
	>
		<rect
			data-element="frame"
			x="0"
			y="0"
			width="24"
			height="24"
			rx="1"
			ry="1"
			stroke="none"
			fill="transparent"
		></rect>
		<g fill="currentColor" transform="translate(3 3) scale(0.75)">
			<path
				d="M23,12H1c-.552,0-1,.448-1,1v6c0,.552,.448,1,1,1H23c.552,0,1-.448,1-1v-6c0-.552-.448-1-1-1Zm-1,6H12v-4h10v4Z"
				fill="currentColor"
			></path>
			<path
				d="M11.628,7.834c.096,.105,.23,.166,.372,.166s.276-.06,.372-.166l4.5-5c.132-.147,.165-.357,.085-.538-.081-.18-.26-.296-.457-.296H7.5c-.197,0-.376,.116-.457,.296-.08,.181-.047,.391,.085,.538l4.5,5Z"
				fill="currentColor"
			></path>
		</g>
	</svg>
);

registerBlockType( metadata.name, {
	icon: progressIcon,
	edit: Edit,
	save,
} );
