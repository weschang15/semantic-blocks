import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { namespace } from "../../config";
import Save from "./components/Save";
import Edit from "./components/Edit";

registerBlockType(`${namespace}/icon-grid`, {
  title: __("Icon Grid", "semantic-blocks"),
  description: __(
    "Add an Icon Grid to better distinguish bulleted content.",
    "semantic-blocks"
  ),
  icon: "grid-view",
  category: namespace,
  keywords: [
    __("icon", "semantic-blocks"),
    __("grid", "semantic-blocks"),
    __("list", "semantic-blocks")
  ],
  attributes: {
    align: {
      type: "string"
    },
    items: {
      type: "number",
      default: 3
    }
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
  edit: props => <Edit {...props} />,
  save: props => <Save {...props} />
});
