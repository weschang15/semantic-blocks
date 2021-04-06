const POSITION_CLASSNAMES = {
  "top left": "flex items-start justify-start",
  "top center": "flex items-start justify-center",
  "top right": "flex items-start justify-end",
  "center left": "is-position-center-left",
  "center center": "flex items-center justify-center",
  center: "flex items-center justify-center",
  "center right": "flex items-center justify-end",
  "bottom left": "flex items-end justify-start",
  "bottom center": "flex items-end justify-center",
  "bottom right": "flex items-end justify-end",
};

/**
 * Checks of the contentPosition is the center (default) position.
 *
 * @param {string} contentPosition The current content position.
 * @return {boolean} Whether the contentPosition is center.
 */
export function isContentPositionCenter(contentPosition) {
  return (
    !contentPosition ||
    contentPosition === "center center" ||
    contentPosition === "center"
  );
}

/**
 * Retrieves the className for the current contentPosition.
 * The default position (center) will not have a className.
 *
 * @param {string} contentPosition The current content position.
 * @return {string} The className assigned to the contentPosition.
 */
export function getPositionClassName(contentPosition) {
  /*
   * Only render a className if the contentPosition is not center (the default).
   */
  if (isContentPositionCenter(contentPosition)) return "";

  return POSITION_CLASSNAMES[contentPosition];
}
