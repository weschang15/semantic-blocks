import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { namespace } from "../../config";

import attributes from "./attributes";
import { Icons } from "../../elements";

registerBlockType(`${namespace}/hero`, {
  title: __("Hero", namespace),
  description: __(
    "Add a Hero component to introduce a new page.",
    "semantic-blocks"
  ),
  icon: <Icons name="hero" />,
  category: namespace,
  keywords: [__("hero", "semantic-blocks"), __("header", "semantic-blocks")],
  attributes: {
    align: {
      type: "string",
      default: "full"
    },
    ...attributes
  },
  /* Add alignment to block wrapper. */
  getEditWrapperProps({ align }) {
    if (
      "left" === align ||
      "right" === align ||
      "full" === align ||
      "wide" === align
    ) {
      return { "data-align": align };
    }
  },
  edit: () => {},
  save: () => {}
});
