import classnames from "classnames";
import { Component } from "@wordpress/element";

class Section extends Component {
  render() {
    const { attributes, className } = this.props;
    const {
      innerContainerMaxWidth,
      innerContainerPaddingUnit,
      innerContainerPaddingTop,
      innerContainerPaddingRight,
      innerContainerPaddingBottom,
      innerContainerPaddingLeft,
      innerContainerHorizontalAlignment,
      overlayBackgroundColor,
      sectionBackground,
      textColor,
      withOverlay
    } = attributes;

    const sectionStyles = {
      backgroundColor:
        sectionBackground.color && !!sectionBackground.color.length
          ? sectionBackground.color
          : null,
      backgroundImage:
        sectionBackground.url && !!sectionBackground.url.length
          ? `url("${sectionBackground.url}")`
          : null,
      backgroundSize: sectionBackground.size,
      backgroundPosition: sectionBackground.position,
      backgroundRepeat: sectionBackground.repeat
    };

    const innerContainerStyles = {
      marginLeft:
        innerContainerHorizontalAlignment.center ||
        innerContainerHorizontalAlignment.right
          ? `auto`
          : null,
      marginRight:
        innerContainerHorizontalAlignment.center ||
        innerContainerHorizontalAlignment.left
          ? `auto`
          : null,
      maxWidth:
        innerContainerMaxWidth > 0 ? innerContainerMaxWidth + "px" : null,
      paddingTop:
        innerContainerPaddingTop >= 0
          ? innerContainerPaddingTop + innerContainerPaddingUnit
          : null,
      paddingRight:
        innerContainerPaddingRight >= 0
          ? innerContainerPaddingRight + innerContainerPaddingUnit
          : null,
      paddingBottom:
        innerContainerPaddingBottom >= 0
          ? innerContainerPaddingBottom + innerContainerPaddingUnit
          : null,
      paddingLeft:
        innerContainerPaddingLeft >= 0
          ? innerContainerPaddingLeft + innerContainerPaddingUnit
          : null,
      color: textColor ? textColor : null,
      zIndex: withOverlay && overlayBackgroundColor ? 2 : null
    };

    const overlayStyles = {
      backgroundColor:
        withOverlay && overlayBackgroundColor ? overlayBackgroundColor : null
    };

    return (
      <section
        className={classnames(className, "sb-block-section", "section")}
        style={sectionStyles}
      >
        {withOverlay && (
          <div className="sb-block-section__overlay" style={overlayStyles} />
        )}
        <div
          className={classnames("sb-block-section-inner", "container")}
          style={innerContainerStyles}
        >
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Section;
