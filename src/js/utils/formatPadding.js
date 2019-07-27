const formatPadding = ({
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingUnit
}) =>
  `${paddingTop >= 0 ? `${paddingTop}${paddingUnit}` : 0} ${
    paddingRight >= 0 ? `${paddingRight}${paddingUnit}` : 0
  } ${paddingBottom >= 0 ? `${paddingBottom}${paddingUnit}` : 0} ${
    paddingLeft >= 0 ? `${paddingLeft}${paddingUnit}` : 0
  }`;

export default formatPadding;
