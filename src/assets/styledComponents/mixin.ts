import type { TypeOrNull } from "../../types/object";
import { CSSProperties } from "react";
import { isUpperCase } from "../../utils/string.util";

type SetProperty = {
	[key in keyof CSSStyleDeclaration]?: TypeOrNull<string>;
};
const propertiesToString = (properties: SetProperty) => {
	const cssString = Object.entries(properties)
		.map(([key, value]) => {
			const keyOnKebabCase = key
				.split("")
				.map((character) =>
					isUpperCase(character)
						? `-${character.toLowerCase()}`
						: character
				)
				.join("");

			return value !== null ? `${keyOnKebabCase}:${value};` : "";
		})
		.join("");

	return cssString;
};

export const size = (width: TypeOrNull<string>, height?: TypeOrNull<string>) =>
	propertiesToString({
		width,
		height: height === undefined ? width : height,
	});

export const flex = (
	flexDirection: CSSProperties["flexDirection"] = "row",
	alignItems: CSSProperties["alignItems"] = "flex-start",
	justifyContent: CSSProperties["justifyContent"] = "flex-start",
	isInline: boolean = false,
	gapSize?: [string] | [string, string]
) =>
	propertiesToString({
		display: isInline ? "inline-flex" : "flex",
		flexDirection,
		alignItems,
		justifyContent,
		gap: gapSize && (gapSize[1] ? gapSize.join(" ") : gapSize[0]),
	});

export const position = (
	position = "relative",
	top?: TypeOrNull<string>,
	right?: TypeOrNull<string>,
	bottom?: TypeOrNull<string>,
	left?: TypeOrNull<string>
) =>
	propertiesToString({
		position,
		top: top || null,
		right: right || null,
		bottom: bottom || null,
		left: left || null,
	});

export const text = (
	color: TypeOrNull<string>,
	fontSize?: TypeOrNull<string>,
	fontWeight?: TypeOrNull<string>,
	textAlign?: TypeOrNull<string>,
	lineHeight?: TypeOrNull<string>
) =>
	propertiesToString({
		color,
		fontSize: fontSize || null,
		fontWeight: fontWeight || null,
		textAlign: textAlign || null,
		lineHeight: lineHeight || null,
	});
