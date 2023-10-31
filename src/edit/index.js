import {
	InspectorControls,
	useBlockProps,
	withColors
} from "@wordpress/block-editor";
import MarkerColorDropdown from "./markerColorDropdown.js";

import { __ } from "@wordpress/i18n";

const Edit = props => {
	const {
		attributes: { customMarkerColor },
		presetMarkerColor,
		style,
	} = props;

	const blockProps = useBlockProps({
		style: {
			...style,
			"--devblog-list-marker": presetMarkerColor.slug
				? `var( --wp--preset--color--${presetMarkerColor.slug} )`
				: customMarkerColor,
		},
	});

	return (
		<>
			<InspectorControls group="color">
				<MarkerColorDropdown {...props} />
			</InspectorControls>
			<ul {...blockProps}>
				<li>{__("List Item 1", "devblog")}</li>
				<li>{__("List Item 2", "devblog")}</li>
				<li>{__("List Item 3", "devblog")}</li>
				<li>{__("List Item 4", "devblog")}</li>
				<li>{__("List Item 5", "devblog")}</li>
			</ul>
		</>
	);
};

export default withColors({
	presetMarkerColor: "preset-marker-color",
})(Edit);
