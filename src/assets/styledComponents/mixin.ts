import { CSSProperties } from 'react';
import { isUpperCase } from '../../utils/string.util';

type SetProperty = {
	[key in keyof CSSStyleDeclaration]?: string | null;
};
const propertiesToString = (properties: SetProperty) => {
	const cssString = Object.entries(properties)
		.map(([key, value]) => {
			const keyOnKebabCase = key
				.split('')
				.map((character) =>
					isUpperCase(character)
						? `-${character.toLowerCase()}`
						: character
				)
				.join('');

			return value !== null ? `${keyOnKebabCase}:${value};` : '';
		})
		.join('');

	return cssString;
};

export const size = (width: string | null, height?: string | null) =>
	propertiesToString({
		width,
		height: height === undefined ? width : height,
	});

export const flex = (
	flexDirection: CSSProperties['flexDirection'] = 'row',
	alignItems: CSSProperties['alignItems'] = 'flex-start',
	justifyContent: CSSProperties['justifyContent'] = 'flex-start',
	isInline: boolean = false
) =>
	propertiesToString({
		display: isInline ? 'inline-flex' : 'flex',
		flexDirection,
		alignItems,
		justifyContent,
	});

export const position = (
	position = 'relative',
	top?: string | null,
	right?: string | null,
	bottom?: string | null,
	left?: string | null
) =>
	propertiesToString({
		position,
		top: !top ? null : top,
		right: !right ? null : right,
		bottom: !bottom ? null : bottom,
		left: !left ? null : left,
	});

export const text = (
	color: string,
	fontSize?: string,
	fontWeight?: string,
	textAlign?: string,
	lineHeight?: string
) =>
	propertiesToString({
		color,
		fontSize,
		fontWeight,
		textAlign,
		lineHeight,
	});
