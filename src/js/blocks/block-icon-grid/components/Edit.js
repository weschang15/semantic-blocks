import memoize from "memize";
import times from "lodash/times";

import {
  InnerBlocks,
  BlockControls,
  BlockAlignmentToolbar
} from "@wordpress/editor";
import IconGrid from "./IconGrid";

// Only allow certain types of blocks within this block
const ALLOWED_BLOCKS = ["mindtouch-components/icon-grid-item"];

// Get Column Inner blocks for number selected
const getTemplate = memoize(items =>
  times(items, () => ["mindtouch-components/icon-grid-item"])
);

const IconGridEdit = (props = {}) => {
  const {
    attributes: { align, items },
    setAttributes
  } = props;
  return [
    <BlockControls key="block-controls">
      <BlockAlignmentToolbar
        value={align}
        onChange={value => setAttributes({ align: value })}
        controls={["wide", "full"]}
      />
    </BlockControls>,
    <IconGrid {...props}>
      <InnerBlocks
        template={getTemplate(items)}
        allowedBlocks={ALLOWED_BLOCKS}
        templateLock={false}
      />
    </IconGrid>
  ];
};

export default IconGridEdit;
