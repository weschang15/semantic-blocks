import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { RangeControl } from "@wordpress/components";

function PaddingControls(props = {}) {
  const {
    // Padding props
    padding,
    paddingTitle,
    paddingHelp,
    paddingMin,
    paddingMax,
    paddingStep,
    paddingEnable,
    onChangePadding = () => {},
    // Padding top props
    paddingTop,
    paddingTopMin,
    paddingTopMax,
    paddingTopStep,
    paddingEnableTop,
    onChangePaddingTop = () => {},
    // Padding right props
    paddingRight,
    paddingRightMin,
    paddingRightMax,
    paddingRightStep,
    paddingEnableRight,
    onChangePaddingRight = () => {},
    // Padding bottom props
    paddingBottom,
    paddingBottomMin,
    paddingBottomMax,
    paddingBottomStep,
    paddingEnableBottom,
    onChangePaddingBottom = () => {},
    // Padding left props
    paddingLeft,
    paddingLeftMin,
    paddingLeftMax,
    paddingLeftStep,
    paddingEnableLeft,
    onChangePaddingLeft = () => {},
    // Padding vertical props
    paddingVertical,
    paddingEnableVertical,
    paddingVerticalMin,
    paddingVerticalStep,
    paddingVerticalMax,
    onChangePaddingVertical = () => {},
    // Padding horizontal props
    paddingHorizontal,
    paddingEnableHorizontal,
    paddingHorizontalMin,
    paddingHorizontalStep,
    paddingHorizontalMax,
    onChangePaddingHorizontal = () => {}
  } = props;

  return (
    <Fragment>
      {paddingEnable && (
        <RangeControl
          label={paddingTitle ? paddingTitle : __("Padding", "semantic-blocks")}
          help={paddingHelp ? paddingHelp : null}
          value={padding}
          min={paddingMin}
          max={paddingMax}
          step={paddingStep}
          onChange={onChangePadding}
        />
      )}
      {paddingEnableTop && (
        <RangeControl
          label={__("Padding Top", "semantic-blocks")}
          value={paddingTop}
          min={paddingTopMin}
          max={paddingTopMax}
          step={paddingTopStep}
          onChange={onChangePaddingTop}
        />
      )}
      {paddingEnableRight && (
        <RangeControl
          label={__("Padding Right", "semantic-blocks")}
          value={paddingRight}
          min={paddingRightMin}
          max={paddingRightMax}
          step={paddingRightStep}
          onChange={onChangePaddingRight}
        />
      )}
      {paddingEnableBottom && (
        <RangeControl
          label={__("Padding Bottom", "semantic-blocks")}
          value={paddingBottom}
          min={paddingBottomMin}
          max={paddingBottomMax}
          step={paddingBottomStep}
          onChange={onChangePaddingBottom}
        />
      )}
      {paddingEnableLeft && (
        <RangeControl
          label={__("Padding Left", "semantic-blocks")}
          value={paddingLeft}
          min={paddingLeftMin}
          max={paddingLeftMax}
          step={paddingLeftStep}
          onChange={onChangePaddingLeft}
        />
      )}
      {paddingEnableVertical && (
        <RangeControl
          label={__("Padding Vertical", "semantic-blocks")}
          value={paddingVertical}
          min={paddingVerticalMin}
          max={paddingVerticalMax}
          step={paddingVerticalStep}
          onChange={onChangePaddingVertical}
        />
      )}
      {paddingEnableHorizontal && (
        <RangeControl
          label={__("Padding Horizontal", "semantic-blocks")}
          value={paddingHorizontal}
          min={paddingHorizontalMin}
          max={paddingHorizontalMax}
          step={paddingHorizontalStep}
          onChange={onChangePaddingHorizontal}
        />
      )}
    </Fragment>
  );
}

export default PaddingControls;
