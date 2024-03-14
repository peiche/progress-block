import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	PanelColorSettings,
	withColors,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	ToggleControl,
	RangeControl,
} from '@wordpress/components';

function Edit( {
	attributes,
	setAttributes,
	bgColor,
	setBgColor,
	fillColor,
	setFillColor,
} ) {
	const { title, percentage, height, rounded, showLabels } = attributes;
	const percentageWithFallback = percentage || 0;
	const heightWithFallback = height || 15;

	if ( ! bgColor.color ) {
		bgColor.color = '#aaa';
	}

	if ( ! fillColor.color ) {
		fillColor.color = '#666';
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'peiche/progress-block' ) }>
					<TextControl
						label={ __( 'Title', 'peiche/progress-block' ) }
						value={ title }
						onChange={ ( value ) =>
							setAttributes( { title: value } )
						}
					/>
					<RangeControl
						label={ __( 'Percentage', 'peiche/progress-block' ) }
						value={ percentageWithFallback }
						onChange={ ( value ) =>
							setAttributes( { percentage: value } )
						}
						min={ 0 }
						max={ 100 }
					/>

					<PanelColorSettings
						title={ __( 'Colors', 'peiche/progress-block' ) }
						colorSettings={ [
							{
								label: 'Background',
								value: bgColor.color,
								onChange: setBgColor,
							},
							{
								label: 'Fill',
								value: fillColor.color,
								onChange: setFillColor,
							},
						] }
					/>

					<ToggleControl
						label={ __( 'Rounded', 'peiche/progress-block' ) }
						checked={ rounded }
						onChange={ () =>
							setAttributes( { rounded: ! rounded } )
						}
					/>
					<RangeControl
						label={ __(
							'Height (in px)',
							'peiche/progress-block'
						) }
						value={ heightWithFallback }
						onChange={ ( value ) =>
							setAttributes( { height: value } )
						}
						min={ 1 }
						max={ 100 }
					/>
					<ToggleControl
						label={ __( 'Show Labels', 'peiche/progress-block' ) }
						checked={ showLabels }
						onChange={ () =>
							setAttributes( { showLabels: ! showLabels } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
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
						${ bgColor?.class !== undefined ? bgColor.class : '' }
					` }
					style={ {
						'background-color': bgColor.color,
						height: heightWithFallback,
					} }
				>
					<div
						className={ `
							wp-block-peiche-progress-block--fill
							${ fillColor?.class !== undefined ? fillColor.class : '' }
						` }
						style={ {
							'background-color': fillColor.color,
							width: `${ percentageWithFallback }%`,
						} }
					></div>
				</div>
			</div>
		</>
	);
}

export default withColors( {
	bgColor: 'bg-color',
	fillColor: 'fill-color',
} )( Edit );
