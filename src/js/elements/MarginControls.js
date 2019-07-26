import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { RangeControl } from "@wordpress/components";

function MarginControls(props = {}) {
  const {
    // Margin top props
    marginTop,
    marginTopLabel,
    marginTopMin,
    marginTopMax,
    marginTopStep,
    marginEnableTop,
    onChangeMarginTop = () => {},
    // Margin right props
    marginRight,
    marginRightLabel,
    marginRightMin,
    marginRightMax,
    marginRightStep,
    marginEnableRight,
    onChangeMarginRight = () => {},
    // Margin bottom props
    marginBottom,
    marginBottomLabel,
    marginBottomMin,
    marginBottomMax,
    marginBottomStep,
    marginEnableBottom,
    onChangeMarginBottom = () => {},
    // Margin left props
    marginLeft,
    marginLeftLabel,
    marginLeftMin,
    marginLeftMax,
    marginLeftStep,
    marginEnableLeft,
    onChangeMarginLeft = () => {},
    // Margin vertical props
    marginVertical,
    marginVerticalLabel,
    marginEnableVertical,
    marginVerticalMin,
    marginVerticalStep,
    marginVerticalMax,
    onChangeMarginVertical = () => {},
    // Margin horizontal props
    marginHorizontal,
    marginHorizontalLabel,
    marginEnableHorizontal,
    marginHorizontalMin,
    marginHorizontalStep,
    marginHorizontalMax,
    onChangeMarginHorizontal = () => {}
  } = props;

  return (
    <Fragment>
      {marginEnableTop && (
        <RangeControl
          label={
            marginTopLabel
              ? marginTopLabel
              : __("Margin Top", "semantic-blocks")
          }
          value={marginTop}
          min={marginTopMin}
          max={marginTopMax}
          step={marginTopStep}
          onChange={onChangeMarginTop}
        />
      )}
      {marginEnableRight && (
        <RangeControl
          label={
            marginRightLabel
              ? marginRightLabel
              : __("Margin Right", "semantic-blocks")
          }
          value={marginRight}
          min={marginRightMin}
          max={marginRightMax}
          step={marginRightStep}
          onChange={onChangeMarginRight}
        />
      )}
      {marginEnableBottom && (
        <RangeControl
          label={
            marginBottomLabel
              ? marginBottomLabel
              : __("Margin Bottom", "semantic-blocks")
          }
          value={marginBottom}
          min={marginBottomMin}
          max={marginBottomMax}
          step={marginBottomStep}
          onChange={onChangeMarginBottom}
        />
      )}
      {marginEnableLeft && (
        <RangeControl
          label={
            marginLeftLabel
              ? marginLeftLabel
              : __("Margin Left", "semantic-blocks")
          }
          value={marginLeft}
          min={marginLeftMin}
          max={marginLeftMax}
          step={marginLeftStep}
          onChange={onChangeMarginLeft}
        />
      )}
      {marginEnableVertical && (
        <RangeControl
          label={
            marginVerticalLabel
              ? marginVerticalLabel
              : __("Margin Vertical", "semantic-blocks")
          }
          value={marginVertical}
          min={marginVerticalMin}
          max={marginVerticalMax}
          step={marginVerticalStep}
          onChange={onChangeMarginVertical}
        />
      )}
      {marginEnableHorizontal && (
        <RangeControl
          label={
            marginHorizontalLabel
              ? marginHorizontalLabel
              : __("Margin Horizontal", "semantic-blocks")
          }
          value={marginHorizontal}
          min={marginHorizontalMin}
          max={marginHorizontalMax}
          step={marginHorizontalStep}
          onChange={onChangeMarginHorizontal}
        />
      )}
    </Fragment>
  );
}

export default MarginControls;
