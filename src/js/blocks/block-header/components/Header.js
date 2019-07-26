import classnames from "classnames";
import { Component } from "@wordpress/element";

class Header extends Component {
  render() {
    const { attributes, className } = this.props;
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

    const styles = {
      marginLeft:
        contentAlignment.center || contentAlignment.right ? `auto` : null,
      marginRight:
        contentAlignment.center || contentAlignment.left ? `auto` : null,
      maxWidth: maxWidth > 0 ? maxWidth + "px" : null,
      paddingTop: paddingTop >= 0 ? paddingTop + paddingUnit : null,
      paddingRight: paddingRight >= 0 ? paddingRight + paddingUnit : null,
      paddingBottom: paddingBottom >= 0 ? paddingBottom + paddingUnit : null,
      paddingLeft: paddingLeft >= 0 ? paddingLeft + paddingUnit : null,
      color: textColor ? textColor : null
    };

    return (
      <header
        className={classnames(className, "sb-block-header", "header")}
        style={styles}
      >
        {this.props.children}
      </header>
    );
  }
}

export default Header;
