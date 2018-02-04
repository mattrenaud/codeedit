function b64EncodeUnicode(str) {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(
      match,
      p1
    ) {
      return String.fromCharCode("0x" + p1);
    })
  );
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(
    atob(str)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
}

export function encode({ languageSelection, contentValue }) {
  const urlSafeContentValue = encodeURIComponent(
    b64EncodeUnicode(contentValue)
  );
  const prefix = languageSelection ? "?" : "";
  const sep = urlSafeContentValue ? "&" : "";
  return `${prefix}${languageSelection}${sep}${urlSafeContentValue}`;
}

export function decode(searchStr) {
  const [languageSelectionRaw = "", contentValueRaw = ""] = searchStr.split(
    "&"
  );
  const startIndex = languageSelectionRaw[0] === "?" ? 1 : 0;
  const languageSelection = languageSelectionRaw.slice(startIndex);
  const contentValue = b64DecodeUnicode(decodeURIComponent(contentValueRaw));
  return { languageSelection, contentValue };
}
