import { negate } from "lodash";
import { isValuesMixed } from "./isValuesMixed";

const PADDING_BOX_CLASSES = {
  left: "pl",
  top: "pt",
  right: "pr",
  bottom: "pb",
};

export function getPaddingClassNames(padding) {
  const hasValues = !!Object.values(padding)
    .map((value) => parseInt(value))
    .filter(negate(isNaN)).length;

  if (!hasValues) {
    return "";
  }

  if (isValuesMixed(padding)) {
    return Object.entries(padding).map((pad) => {
      const side = pad[0];
      const val = pad[1];

      const size = parseInt(val);
      const isNegative = Math.sign(size) === -1;
      return isNegative
        ? `-${PADDING_BOX_CLASSES[side]}-${Math.abs(size)}`
        : `${PADDING_BOX_CLASSES[side]}-${size}`;
    });
  }

  const size = parseInt(Object.values(padding)[0]);
  const isNegative = Math.sign(size) === -1;
  return isNegative ? [`-p-${Math.abs(size)}`] : [`p-${size}`];
}
