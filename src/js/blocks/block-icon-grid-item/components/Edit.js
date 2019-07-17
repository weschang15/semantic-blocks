import IconGridItem from "./IconGridItem";

import { InnerBlocks } from "@wordpress/editor";

const TEMPLATE = [
  [
    "core/heading",
    {
      className: "icon-grid-item__headline",
      level: 5,
      placeholder: "Insert, edit, or remove item headline"
    }
  ],
  [
    "core/paragraph",
    {
      className: "icon-grid-item__copy",
      placeholder: "Insert, edit, or remove item copy"
    }
  ]
];

const ALLOWED_BLOCKS = ["core/heading", "core/paragraph"];

const Edit = (props = {}) => {
  return (
    <IconGridItem {...props}>
      <InnerBlocks
        template={TEMPLATE}
        allowedBlocks={ALLOWED_BLOCKS}
        templateLock={false}
      />
    </IconGridItem>
  );
};

export default Edit;
