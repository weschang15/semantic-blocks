import { Component } from "@wordpress/element";
import {
  InnerBlocks,
  BlockControls,
  BlockAlignmentToolbar
} from "@wordpress/editor";

import Header from "./Header";
import Inspector from "./Inspector";

class Edit extends Component {
  render() {
    const {
      attributes: { alignment },
      setAttributes
    } = this.props;
    return [
      <BlockControls key="block-controls">
        <BlockAlignmentToolbar
          value={alignment}
          onChange={val => setAttributes({ alignment: val })}
          controls={["wide"]}
        />
      </BlockControls>,
      <Inspector key="inspector-controls" {...this.props} />,
      <Header key="header" {...this.props}>
        <InnerBlocks />
      </Header>
    ];
  }
}

export default Edit;
