import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { namespace } from "../../config";
import { Icons } from "../../elements";
import Save from "./components/Save";
import Edit from "./components/Edit";

registerBlockType(`${namespace}/details-dropdown`, {
  title: __("Dropdown", "semantic-blocks"),
  description: __(
    "Add a Detail Dropdown to specify additional details that the user can view or hide on demand.",
    "semantic-blocks"
  ),
  icon: <Icons name="dropdown" />,
  category: namespace,
  keywords: [
    __("dropdown", "semantic-blocks"),
    __("details", "semantic-blocks"),
    __("summary dropdown", "semantic-blocks")
  ],
  attributes: {
    backgroundColor: {
      type: "string"
    },
    editorBlockWidth: {
      type: "string"
    },
    marginUnit: {
      type: "string",
      default: "em"
    },
    marginTop: {
      type: "number",
      default: 1
    },
    marginRight: {
      type: "number",
      default: 1
    },
    marginBottom: {
      type: "number",
      default: 1
    },
    marginLeft: {
      type: "number",
      default: 1
    },
    paddingUnit: {
      type: "string",
      default: "em"
    },
    paddingTop: {
      type: "number",
      default: 1
    },
    paddingRight: {
      type: "number",
      default: 1
    },
    paddingBottom: {
      type: "number",
      default: 0
    },
    paddingLeft: {
      type: "number",
      default: 1
    },
    maxWidth: {
      type: "number",
      default: 480
    },
    title: {
      type: "string",
      source: "text",
      selector: ".sb-block-details-dropdown__title",
      default: "Details"
    },
    textColor: {
      type: "string"
    }
  },
  /* Add alignment to block wrapper. */
  getEditWrapperProps({ editorBlockWidth }) {
    if (["left", "right", "full", "wide"].includes(editorBlockWidth)) {
      return { "data-align": editorBlockWidth };
    }
  },
  edit: props => <Edit {...props} />,
  save: props => <Save {...props} />
});
