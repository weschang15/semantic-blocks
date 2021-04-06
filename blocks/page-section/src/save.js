/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { css } from "@emotion/core";
import {
	getColorClassName,
	InnerBlocks,
	useBlockProps,
	__experimentalGetGradientClass,
} from "@wordpress/block-editor";
import classnames from "classnames";
import {
	getMarginClassNames,
	getPaddingClassNames,
	getPositionClassName,
	isContentPositionCenter,
} from "../../shared";

export default function save({ attributes }) {
	const {
		contentMaxWidth,
		contentPosition,
		padding,
		margin,
		backgroundColor,
		customBackgroundColor,
		gradient,
		customGradient,
	} = attributes;

	const backgroundColorClassName = getColorClassName(
		"background-color",
		backgroundColor
	);

	const gradientClass = __experimentalGetGradientClass(gradient);

	const marginUtilityClasses = getMarginClassNames(margin);
	const paddingUtilityClasses = getPaddingClassNames(padding);

	const styles = {
		selector: css`
			max-width: ${contentMaxWidth};
		`,
	};

	return (
		<section
			{...useBlockProps.save({
				className: classnames(
					{
						"has-custom-content-position": !isContentPositionCenter(
							contentPosition
						),
						"has-background-color":
							backgroundColorClassName || customBackgroundColor,
						"has-background-gradient": gradient || customGradient,
						"has-semantic-blocks-utility": !!(
							marginUtilityClasses || paddingUtilityClasses
						),
					},
					getPositionClassName(contentPosition),
					gradientClass,
					backgroundColorClassName,
					...marginUtilityClasses,
					...paddingUtilityClasses
				),
				style: {
					backgroundColor: !backgroundColorClassName
						? customBackgroundColor
						: undefined,
					backgroundImage: customGradient ? customGradient : undefined,
				},
			})}
		>
			<div
				className={classnames("wp-block-semantic-blocks-page-section__inner")}
				style={{
					...(contentMaxWidth && {
						"--semantic-blocks-page-section-content-width": contentMaxWidth,
					}),
				}}
			>
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
