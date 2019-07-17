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
    marginEnableTop,
    onChangeMarginTop = () => {},
    // Margin right props
    marginRight,
    marginRightLabel,
    marginRightMin,
    marginRightMax,
    marginEnableRight,
    onChangeMarginRight = () => {},
    // Margin bottom props
    marginBottom,
    marginBottomLabel,
    marginBottomMin,
    marginBottomMax,
    marginEnableBottom,
    onChangeMarginBottom = () => {},
    // Margin left props
    marginLeft,
    marginLeftLabel,
    marginLeftMin,
    marginLeftMax,
    marginEnableLeft,
    onChangeMarginLeft = () => {},
    // Margin vertical props
    marginVertical,
    marginVerticalLabel,
    marginEnableVertical,
    marginVerticalMin,
    marginVerticalMax,
    onChangeMarginVertical = () => {},
    // Margin horizontal props
    marginHorizontal,
    marginHorizontalLabel,
    marginEnableHorizontal,
    marginHorizontalMin,
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
          onChange={onChangeMarginHorizontal}
        />
      )}
    </Fragment>
  );
}

export default MarginControls;
