/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
	withColors,
	__experimentalBlockAlignmentMatrixToolbar as BlockAlignmentMatrixToolbar,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	__experimentalUnitControl as UnitControl,
	__experimentalUseGradient,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { compose } from "@wordpress/compose";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import {
	getMarginClassNames,
	getPaddingClassNames,
	getPositionClassName,
	isContentPositionCenter,
} from "../../shared";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

const CSS_UNITS = [
	{
		value: "px",
		label: "px",
		default: 0,
		a11yLabel: __("pixels"),
	},
];

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function Edit({
	attributes,
	setAttributes,
	setBackgroundColor,
	backgroundColor,
}) {
	const {
		contentMaxWidth,
		contentPosition,
		padding,
		margin,
		customBackgroundColor,
		customGradient,
	} = attributes;

	const {
		gradientClass,
		gradientValue,
		setGradient,
	} = __experimentalUseGradient();

	const marginUtilityClasses = getMarginClassNames(margin);
	const paddingUtilityClasses = getPaddingClassNames(padding);

	const hasSemanticBlockUtilities =
		marginUtilityClasses ||
		paddingUtilityClasses ||
		!isContentPositionCenter(contentPosition);

	const blockProps = useBlockProps({
		className: classnames(
			{
				"has-custom-content-position": !isContentPositionCenter(
					contentPosition
				),
				"has-background-color": backgroundColor.class || customBackgroundColor,
				"has-background-gradient": gradientValue || customGradient,
				"has-semantic-blocks-utility": !!hasSemanticBlockUtilities,
			},
			getPositionClassName(contentPosition),
			gradientClass,
			backgroundColor.class,
			...marginUtilityClasses,
			...paddingUtilityClasses
		),

		style: {
			...(gradientValue ? { backgroundImage: gradientValue } : undefined),
			backgroundColor: backgroundColor.color,
		},
	});

	const innerBlockProps = useInnerBlocksProps(
		{ className: "wp-block-semantic-blocks-page-section__inner-container" },
		{
			template: [
				[
					`core/heading`,
					{
						placeholder: "Add a title...",
					},
				],
				[
					`core/paragraph`,
					{
						placeholder: "Add content to section...",
					},
				],
			],
		}
	);

	const { __Visualizer: BoxControlVisualizer } = BoxControl;

	return (
		<>
			<BlockControls>
				<BlockAlignmentMatrixToolbar
					label={__("Change content position")}
					value={contentPosition}
					onChange={(contentPosition) => setAttributes({ contentPosition })}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title="Content container settings">
					<PanelRow>
						<UnitControl
							label={__("Max Width")}
							value={contentMaxWidth}
							min={0}
							onChange={(contentMaxWidth) => setAttributes({ contentMaxWidth })}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Margin and Padding">
					<PanelRow>
						<BoxControl
							label={__("Margin")}
							values={margin}
							unit="px"
							units={CSS_UNITS}
							onChange={(values) => setAttributes({ margin: { ...values } })}
							inputProps={{
								min: -30,
								max: 30,
								step: 2,
							}}
						/>
					</PanelRow>
					<PanelRow>
						<BoxControl
							label={__("Padding")}
							values={padding}
							unit="px"
							units={CSS_UNITS}
							onChange={(values) => setAttributes({ padding: { ...values } })}
							inputProps={{
								min: 0,
								max: 30,
								step: 2,
							}}
						/>
					</PanelRow>
				</PanelBody>
				<PanelColorGradientSettings
					title={__("Background settings")}
					settings={[
						{
							colorValue: backgroundColor.color,
							gradientValue,
							onColorChange: setBackgroundColor,
							onGradientChange: setGradient,
							label: __("Color"),
						},
					]}
				/>
			</InspectorControls>
			<BoxControlVisualizer values={attributes?.padding}>
				<section {...blockProps}>
					<div
						className={classnames(
							"wp-block-semantic-blocks-page-section__inner"
						)}
						style={{
							...(contentMaxWidth && {
								"--semantic-blocks-page-section-content-width": contentMaxWidth,
							}),
						}}
					>
						<div {...innerBlockProps} />
					</div>
				</section>
			</BoxControlVisualizer>
		</>
	);
}

export default compose([withColors({ backgroundColor: "background-color" })])(
	Edit
);
