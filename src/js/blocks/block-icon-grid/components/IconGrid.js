import classnames from "classnames";

const IconGrid = (props = {}) => {
  const className = classnames(props.className, "icon-grid");

  return <div className={className}>{props.children}</div>;
};

export default IconGrid;
