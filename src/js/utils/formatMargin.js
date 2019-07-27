const formatMargin = ({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginUnit
}) =>
  `${marginTop >= 0 ? `${marginTop}${marginUnit}` : 0} ${
    marginRight >= 0 ? `${marginRight}${marginUnit}` : 0
  } ${marginBottom >= 0 ? `${marginBottom}${marginUnit}` : 0} ${
    marginLeft >= 0 ? `${marginLeft}${marginUnit}` : 0
  }`;

export default formatMargin;
