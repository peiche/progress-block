import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		title,
		percentage,
		height,
		rounded,
		showLabels,
		bgColor,
		customBgColor,
		fillColor,
		customFillColor,
	} = attributes;
	const percentageWithFallback = percentage || 0;
	const heightWithFallback = height || 15;

	return (
		<div { ...useBlockProps.save() }>
			<p className="wp-block-peiche-progress-block--sr-only">
				Progress value is { percentageWithFallback }%
			</p>
			{ showLabels && (
				<div className="wp-block-peiche-progress-block--labels">
					{ title && (
						<span className="wp-block-peiche-progress-block--title">
							{ title }
						</span>
					) }
					<span className="wp-block-peiche-progress-block--value">
						{ percentageWithFallback }%
					</span>
				</div>
			) }
			<div
				className={ `
						wp-block-peiche-progress-block--bg 
						${ rounded ? 'wp-block-peiche-progress-block--rounded' : '' }
						${ bgColor !== undefined ? `has-${ bgColor }-background-color` : '' }
					` }
				style={ {
					'background-color': customBgColor,
					height: heightWithFallback,
				} }
			>
				<div
					className={ `
							wp-block-peiche-progress-block--fill
							${ fillColor !== undefined ? `has-${ fillColor }-background-color` : '' }
						` }
					style={ {
						'background-color': customFillColor,
						width: `${ percentageWithFallback }%`,
					} }
				></div>
			</div>
		</div>
	);
}
