import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { InspectorControls, PanelColorSettings } from "@wordpress/editor";
import {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl
} from "@wordpress/components";

import { PaddingControls } from "../../../elements";

class Inspector extends Component {
  render() {
    const { attributes, setAttributes } = this.props;
    const {
      contentAlignment,
      maxWidth,
      paddingUnit,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      textColor
    } = attributes;

    /* CSS Units. */
    const UNITS = [
      { value: "px", label: __("Pixel (px)", "semantic-blocks") },
      { value: "%", label: __("Percent (%)", "semantic-blocks") },
      { value: "em", label: __("Em (em)", "semantic-blocks") }
    ];

    return [
      <InspectorControls key="inspector">
        <PanelBody title="General Settings">
          <p>{__("Content alignment:")}</p>
          <ToggleControl
            label={__("Align Left", "semantic-blocks")}
            checked={contentAlignment.left}
            onChange={() =>
              setAttributes({
                contentAlignment: {
                  center: false,
                  left: !contentAlignment.left,
                  right: false
                }
              })
            }
          />
          <ToggleControl
            label={__("Align Center", "semantic-blocks")}
            checked={contentAlignment.center}
            onChange={() =>
              setAttributes({
                contentAlignment: {
                  center: !contentAlignment.center,
                  left: false,
                  right: false
                }
              })
            }
          />
          <ToggleControl
            label={__("Align Right", "semantic-blocks")}
            checked={contentAlignment.right}
            onChange={() =>
              setAttributes({
                contentAlignment: {
                  center: false,
                  left: false,
                  right: !contentAlignment.right
                }
              })
            }
          />
        </PanelBody>
        <PanelBody title={__("Margin and Padding")} initialOpen={true}>
          <RangeControl
            label={__("Max Width (px)", "semantic-blocks")}
            value={maxWidth}
            onChange={val => setAttributes({ maxWidth: val })}
            min={500}
            max={1440}
            step={1}
          />
          <SelectControl
            label={__("Padding Unit", "semantic-blocks")}
            help={__(
              "Choose between pixel, percent, or em units.",
              "semantic-blocks"
            )}
            options={UNITS}
            value={paddingUnit}
            onChange={val => setAttributes({ paddingUnit: val })}
          />
          <PaddingControls
            /* Padding top. */
            paddingEnableTop={true}
            paddingTop={paddingTop}
            paddingTopMin="0"
            paddingTopMax="200"
            onChangePaddingTop={val => setAttributes({ paddingTop: val })}
            /* Padding right. */
            paddingEnableRight={true}
            paddingRight={paddingRight}
            paddingRightMin="0"
            paddingRightMax="200"
            onChangePaddingRight={val => setAttributes({ paddingRight: val })}
            /* Padding bottom. */
            paddingEnableBottom={true}
            paddingBottom={paddingBottom}
            paddingBottomMin="0"
            paddingBottomMax="200"
            onChangePaddingBottom={val => setAttributes({ paddingBottom: val })}
            /* Padding left. */
            paddingEnableLeft={true}
            paddingLeft={paddingLeft}
            paddingLeftMin="0"
            paddingLeftMax="200"
            onChangePaddingLeft={val => setAttributes({ paddingLeft: val })}
          />
        </PanelBody>
        <PanelColorSettings
          title={__("Color Settings", "semantic-blocks")}
          initialOpen={false}
          colorSettings={[
            {
              value: textColor,
              onChange: val =>
                setAttributes({
                  textColor: val
                }),
              label: __("Text Color", "semantic-blocks")
            }
          ]}
        />
      </InspectorControls>
    ];
  }
}

export default Inspector;
