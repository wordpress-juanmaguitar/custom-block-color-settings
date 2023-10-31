/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
} from "@wordpress/block-editor";

export default function markerColorDropdown(props) {
	const colorGradientSettings = useMultipleOriginColorsAndGradients();
	const {
		attributes: { customMarkerColor },
		presetMarkerColor,
		setPresetMarkerColor,
		setAttributes,
		clientId,
	} = props;

	console.log('markerColorDropdown');
	console.log(props);

	const colorValue = presetMarkerColor.color || customMarkerColor;
	const onColorChange = (value) => {
		setPresetMarkerColor(value);
		setAttributes({ customMarkerColor: value });
	};

	return (
		<ColorGradientSettingsDropdown
			settings={[
				{
					label: __("Marker", "devblog"),
					colorValue,
					onColorChange,
				},
			]}
			panelId={clientId}
			hasColorsOrGradients={false}
			disableCustomColors={false}
			__experimentalIsRenderedInSidebar
			{...colorGradientSettings}
		/>
	);
}
