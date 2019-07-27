import { Component, Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  RangeControl,
  SelectControl,
  TextControl
} from "@wordpress/components";
import {
  ContrastChecker,
  InspectorControls,
  PanelColorSettings
} from "@wordpress/block-editor";

import { MarginControls, PaddingControls } from "../../../elements";

function Inspector(props = {}) {
  const { attributes, setAttributes } = props;
  const {
    backgroundColor,
    maxWidth,
    marginUnit,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingUnit,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    textColor,
    title
  } = attributes;

  /* CSS Units. */
  const UNITS = [
    { value: "px", label: __("Pixel (px)", "semantic-blocks") },
    { value: "%", label: __("Percent (%)", "semantic-blocks") },
    { value: "em", label: __("Em (em)", "semantic-blocks") }
  ];

  return [
    <InspectorControls key="inspector">
      <PanelBody title={__("General Settings")} initialOpen={true}>
        <TextControl
          label="Dropdown label"
          value={title}
          onChange={val => setAttributes({ title: val })}
        />
      </PanelBody>
      <PanelBody>
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
          paddingTopStep={0.25}
          onChangePaddingTop={val => setAttributes({ paddingTop: val })}
          /* Padding right. */
          paddingEnableRight={true}
          paddingRight={paddingRight}
          paddingRightMin="0"
          paddingRightMax="200"
          paddingRightStep={0.25}
          onChangePaddingRight={val => setAttributes({ paddingRight: val })}
          /* Padding bottom. */
          paddingEnableBottom={true}
          paddingBottom={paddingBottom}
          paddingBottomMin="0"
          paddingBottomMax="200"
          paddingBottomStep={0.25}
          onChangePaddingBottom={val => setAttributes({ paddingBottom: val })}
          /* Padding left. */
          paddingEnableLeft={true}
          paddingLeft={paddingLeft}
          paddingLeftMin="0"
          paddingLeftMax="200"
          paddingLeftStep={0.25}
          onChangePaddingLeft={val => setAttributes({ paddingLeft: val })}
        />
        <RangeControl
          label={__("Max Width (px)", "semantic-blocks")}
          value={maxWidth}
          onChange={val => setAttributes({ maxWidth: val })}
          min={0}
          max={640}
          step={1}
        />
        <SelectControl
          label={__("Margin Unit", "semantic-blocks")}
          help={__(
            "Choose between pixel, percent, or em units.",
            "semantic-blocks"
          )}
          options={UNITS}
          value={marginUnit}
          onChange={val => setAttributes({ marginUnit: val })}
        />
        <MarginControls
          /* margin top. */
          marginEnableTop={true}
          marginTop={marginTop}
          marginTopMin="0"
          marginTopMax="200"
          marginTopStep={0.25}
          onChangeMarginTop={val => setAttributes({ marginTop: val })}
          /* margin right. */
          marginEnableRight={true}
          marginRight={marginRight}
          marginRightMin="0"
          marginRightMax="200"
          marginRightStep={0.25}
          onChangeMarginRight={val => setAttributes({ marginRight: val })}
          /* margin bottom. */
          marginEnableBottom={true}
          marginBottom={marginBottom}
          marginBottomMin="0"
          marginBottomMax="200"
          marginBottomStep={0.25}
          onChangeMarginBottom={val => setAttributes({ marginBottom: val })}
          /* margin left. */
          marginEnableLeft={true}
          marginLeft={marginLeft}
          marginLeftMin="0"
          marginLeftMax="200"
          marginLeftStep={0.25}
          onChangeMarginLeft={val => setAttributes({ marginLeft: val })}
        />
      </PanelBody>
      <PanelColorSettings
        title={__("Color Settings", "semantic-blocks")}
        initialOpen={false}
        colorSettings={[
          {
            value: backgroundColor,
            label: __("Background Color"),
            onChange: val => setAttributes({ backgroundColor: val })
          },
          {
            value: textColor,
            onChange: val => setAttributes({ textColor: val }),
            label: __("Text Color", "semantic-blocks")
          }
        ]}
      >
        <ContrastChecker
          {...{
            textColor,
            backgroundColor: backgroundColor
          }}
        />
      </PanelColorSettings>
    </InspectorControls>
  ];
}

export default Inspector;
