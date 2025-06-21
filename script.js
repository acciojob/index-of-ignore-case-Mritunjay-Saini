function indexOfIgnoreCase(str, subStr) {
  if (subStr === "") return 0; // Empty substring is always at index 0
  if (str === "") return -1;   // Cannot find anything in an empty string

  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  return lowerStr.indexOf(lowerSubStr);
}
