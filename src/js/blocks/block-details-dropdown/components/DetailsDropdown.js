import classnames from "classnames";
import formatMargin from "../../../utils/formatMargin";
import formatPadding from "../../../utils/formatPadding";

function DetailsDropdown(props = {}) {
  const { attributes, className } = props;
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

  const margin = formatMargin({
    marginUnit,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft
  });

  const padding = formatPadding({
    paddingUnit,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  });

  const styles = {
    backgroundColor: backgroundColor ? backgroundColor : null,
    color: textColor ? textColor : null,
    margin,
    padding,
    maxWidth: maxWidth > 0 ? maxWidth + "px" : null
  };

  return (
    <details
      className={classnames(className, "sb-block-details-dropdown")}
      style={styles}
    >
      <summary className={classnames("sb-block-details-dropdown__title")}>
        {title}
      </summary>
      {props.children}
    </details>
  );
}

export default DetailsDropdown;
