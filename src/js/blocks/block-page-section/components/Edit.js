import { Component } from "@wordpress/element";
import {
  InnerBlocks,
  BlockControls,
  BlockAlignmentToolbar
} from "@wordpress/editor";

import Section from "./Section";
import Inspector from "./Inspector";

class Edit extends Component {
  render() {
    const {
      attributes: { sectionWidth },
      setAttributes
    } = this.props;
    return [
      <BlockControls key="block-controls">
        <BlockAlignmentToolbar
          value={sectionWidth}
          onChange={val => setAttributes({ sectionWidth: val })}
          controls={["wide", "full"]}
        />
      </BlockControls>,
      <Inspector key="inspector-controls" {...this.props} />,
      <Section key="section" {...this.props}>
        <InnerBlocks />
      </Section>
    ];
  }
}

export default Edit;
