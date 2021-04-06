import { negate } from "lodash";
import { isValuesMixed } from "./isValuesMixed";

const MARGIN_BOX_CLASSES = {
  left: "ml",
  top: "mt",
  right: "mr",
  bottom: "mb",
};

export function getMarginClassNames(padding) {
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
        ? `-${MARGIN_BOX_CLASSES[side]}-${Math.abs(size)}`
        : `${MARGIN_BOX_CLASSES[side]}-${size}`;
    });
  }

  const size = parseInt(Object.values(padding)[0]);
  const isNegative = Math.sign(size) === -1;
  return isNegative ? [`-m-${Math.abs(size)}`] : [`m-${size}`];
}
