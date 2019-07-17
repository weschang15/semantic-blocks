import { Component, Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
  ContrastChecker,
  InspectorControls,
  PanelColorSettings,
  MediaUpload,
  MediaUploadCheck
} from "@wordpress/editor";
import {
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  IconButton,
  ToggleControl,
  ColorPicker
} from "@wordpress/components";

import { PaddingControls } from "../../../elements";

class Inspector extends Component {
  render() {
    const { attributes, setAttributes } = this.props;
    const {
      innerContainerPaddingUnit,
      innerContainerPaddingTop,
      innerContainerPaddingRight,
      innerContainerPaddingBottom,
      innerContainerPaddingLeft,
      innerContainerMaxWidth,
      innerContainerHorizontalAlignment,
      overlayBackgroundColor,
      sectionBackground,
      textColor,
      withOverlay
    } = attributes;

    /* CSS Units. */
    const UNITS = [
      { value: "px", label: __("Pixel (px)", "semantic-blocks") },
      { value: "%", label: __("Percent (%)", "semantic-blocks") },
      { value: "em", label: __("Em (em)", "semantic-blocks") }
    ];

    const onSelectImage = img => {
      setAttributes({
        sectionBackground: {
          ...sectionBackground,
          url: img.url,
          alt: img.alt,
          id: img.id
        }
      });
    };

    const onRemoveImage = () => {
      setAttributes({
        sectionBackground: {
          ...sectionBackground,
          url: null,
          alt: null,
          id: null
        }
      });
    };

    return [
      <InspectorControls key="inspector">
        <PanelBody title="Background Settings" initialOpen={true}>
          <p>{__("Select a background image:")}</p>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              type="image"
              value={sectionBackground.id}
              render={({ open }) => (
                <Fragment>
                  <PanelRow>
                    <IconButton
                      label={__("Edit image")}
                      icon="format-image"
                      onClick={open}
                    >
                      {__("Select Image")}
                    </IconButton>

                    {sectionBackground.url && !!sectionBackground.url.length && (
                      <IconButton
                        label={__("Remove Image")}
                        icon="dismiss"
                        onClick={onRemoveImage}
                      >
                        {__("Remove")}
                      </IconButton>
                    )}
                  </PanelRow>
                  {sectionBackground.url && !!sectionBackground.url.length && (
                    <Fragment>
                      <PanelRow>
                        <ToggleControl
                          label={__("Set an overlay", "semantic-blocks")}
                          checked={withOverlay}
                          onChange={() =>
                            setAttributes({ withOverlay: !withOverlay })
                          }
                        />
                      </PanelRow>
                      {withOverlay && (
                        <ColorPicker
                          color={overlayBackgroundColor}
                          onChangeComplete={props =>
                            setAttributes({
                              overlayBackgroundColor: `rgba(${props.rgb.r}, ${
                                props.rgb.g
                              }, ${props.rgb.b}, ${props.rgb.a})`
                            })
                          }
                        />
                      )}
                    </Fragment>
                  )}
                </Fragment>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>
        <PanelBody title={__("Inner Container Settings")} initialOpen={false}>
          <p>{__("Inner container alignment:")}</p>
          <ToggleControl
            label={__("Align Left", "semantic-blocks")}
            checked={innerContainerHorizontalAlignment.left}
            onChange={() =>
              setAttributes({
                innerContainerHorizontalAlignment: {
                  center: false,
                  left: !innerContainerHorizontalAlignment.left,
                  right: false
                }
              })
            }
          />
          <ToggleControl
            label={__("Align Center", "semantic-blocks")}
            checked={innerContainerHorizontalAlignment.center}
            onChange={() =>
              setAttributes({
                innerContainerHorizontalAlignment: {
                  center: !innerContainerHorizontalAlignment.center,
                  left: false,
                  right: false
                }
              })
            }
          />
          <ToggleControl
            label={__("Align Right", "semantic-blocks")}
            checked={innerContainerHorizontalAlignment.right}
            onChange={() =>
              setAttributes({
                innerContainerHorizontalAlignment: {
                  center: false,
                  left: false,
                  right: !innerContainerHorizontalAlignment.right
                }
              })
            }
          />
          <RangeControl
            label={__("Max Width (px)", "semantic-blocks")}
            value={innerContainerMaxWidth}
            onChange={val => setAttributes({ innerContainerMaxWidth: val })}
            min={500}
            max={1600}
            step={1}
          />
          <SelectControl
            label={__("Padding Unit", "semantic-blocks")}
            help={__(
              "Choose between pixel, percent, or em units.",
              "semantic-blocks"
            )}
            options={UNITS}
            value={innerContainerPaddingUnit}
            onChange={val => setAttributes({ innerContainerPaddingUnit: val })}
          />
          <PaddingControls
            /* Padding top. */
            paddingEnableTop={true}
            paddingTop={innerContainerPaddingTop}
            paddingTopMin="0"
            paddingTopMax="200"
            onChangePaddingTop={val =>
              setAttributes({ innerContainerPaddingTop: val })
            }
            /* Padding right. */
            paddingEnableRight={true}
            paddingRight={innerContainerPaddingRight}
            paddingRightMin="0"
            paddingRightMax="200"
            onChangePaddingRight={val =>
              setAttributes({ innerContainerPaddingRight: val })
            }
            /* Padding bottom. */
            paddingEnableBottom={true}
            paddingBottom={innerContainerPaddingBottom}
            paddingBottomMin="0"
            paddingBottomMax="200"
            onChangePaddingBottom={val =>
              setAttributes({ innerContainerPaddingBottom: val })
            }
            /* Padding left. */
            paddingEnableLeft={true}
            paddingLeft={innerContainerPaddingLeft}
            paddingLeftMin="0"
            paddingLeftMax="200"
            onChangePaddingLeft={val =>
              setAttributes({ innerContainerPaddingLeft: val })
            }
          />
        </PanelBody>
        <PanelColorSettings
          title={__("Color Settings", "semantic-blocks")}
          initialOpen={false}
          colorSettings={[
            {
              value: sectionBackground.color,
              label: __("Background Color"),
              onChange: val =>
                setAttributes({
                  sectionBackground: {
                    ...sectionBackground,
                    color: val
                  }
                })
            },
            {
              value: textColor,
              onChange: val =>
                setAttributes({
                  textColor: val
                }),
              label: __("Text Color", "semantic-blocks")
            }
          ]}
        >
          <ContrastChecker
            {...{
              textColor,
              backgroundColor: sectionBackground.color
            }}
          />
        </PanelColorSettings>
      </InspectorControls>
    ];
  }
}

export default Inspector;
