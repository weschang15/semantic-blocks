import { _x, __ } from "@wordpress/i18n";
import { isEmpty, isNumber } from "lodash";

/**
 * Units of measurements. `a11yLabel` is used by screenreaders.
 */
export const CSS_UNITS = [
  { value: "px", label: "px", default: 0, a11yLabel: __("pixels") },
  { value: "%", label: "%", default: 10, a11yLabel: __("percent") },
  {
    value: "em",
    label: "em",
    default: 0,
    a11yLabel: _x("ems", "Relative to parent font size (em)"),
  },
  {
    value: "rem",
    label: "rem",
    default: 0,
    a11yLabel: _x("rems", "Relative to root font size (rem)"),
  },
  {
    value: "vw",
    label: "vw",
    default: 10,
    a11yLabel: __("viewport widths"),
  },
  {
    value: "vh",
    label: "vh",
    default: 10,
    a11yLabel: __("viewport heights"),
  },
];

/**
 * Gets an items with the most occurance within an array
 * https://stackoverflow.com/a/20762713
 *
 * @param {Array<any>} arr Array of items to check.
 * @return {any} The item with the most occurances.
 */
function mode(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}

/**
 * Checks if units are defined.
 *
 * @param {any} units Units to check.
 * @return {boolean} Whether units are defined.
 */
export function hasUnits(units) {
  return !isEmpty(units) && units.length > 1 && units !== false;
}

/**
 * Parses a number and unit from a value.
 *
 * @param {string} initialValue Value to parse
 * @param {Array<Object>} units Units to derive from.
 * @return {Array<number, string>} The extracted number and unit.
 */
export function parseUnit(initialValue, units = CSS_UNITS) {
  const value = String(initialValue).trim();

  let num = parseFloat(value, 10);
  num = isNaN(num) ? "" : num;

  const unitMatch = value.match(/[\d.\-\+]*\s*(.*)/)[1];

  let unit = unitMatch !== undefined ? unitMatch : "";
  unit = unit.toLowerCase();

  if (hasUnits(units)) {
    const match = units.find((item) => item.value === unit);
    unit = match?.value;
  } else {
    unit = CSS_UNITS[0].value;
  }

  return [num, unit];
}

/**
 * Gets the 'all' input value and unit from values data.
 *
 * @param {Object} values Box values.
 * @return {string} A value + unit for the 'all' input.
 */
export function getAllValue(values = {}) {
  const parsedValues = Object.values(values).map((value) => parseUnit(value));

  const allValues = parsedValues.map((value) => value[0]);
  const allUnits = parsedValues.map((value) => value[1]);

  const value = allValues.every((v) => v === allValues[0]) ? allValues[0] : "";
  const unit = mode(allUnits);

  /**
   * The isNumber check is important. On reset actions, the incoming value
   * may be null or an empty string.
   *
   * Also, the value may also be zero (0), which is considered a valid unit value.
   *
   * isNumber() is more specific for these cases, rather than relying on a
   * simple truthy check.
   */
  const allValue = isNumber(value) ? `${value}${unit}` : null;

  return allValue;
}

/**
 * Checks to determine if values are mixed.
 *
 * @param {Object} values Box values.
 * @return {boolean} Whether values are mixed.
 */
export function isValuesMixed(values = {}) {
  const allValue = getAllValue(values);
  const isMixed = isNaN(parseFloat(allValue));

  return isMixed;
}
