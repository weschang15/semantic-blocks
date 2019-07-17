import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { namespace } from "../../config";
import Save from "./components/Save";
import Edit from "./components/Edit";

registerBlockType(`${namespace}/icon-grid-item`, {
  title: __("Icon Grid Item", namespace),
  description: __("An individual item within an Icon Grid.", "semantic-blocks"),
  category: namespace,
  icon: "list-view",
  parent: [`${namespace}/icon-grid`],
  keywords: [
    __("icon", "semantic-blocks"),
    __("list-litem", "semantic-blocks")
  ],
  attributes: {
    image: {
      type: "object",
      default: {
        id: null,
        src: null,
        alt: null
      }
    },
    index: {
      type: "number"
    }
  },
  edit: props => <Edit {...props} />,
  save: props => <Save {...props} />
});
