
export default function searchParser(search) {
  const parsedSearch = window.parsedSearch || (function () {
    let match;
    let regex = /\??(.*?)=([^\&]*)&?/gi;
    let result = {};
    while (match = regex.exec(document.location.search)) {
      result[match[1]] = match[2];
    }
    return result;
  })();
  return parsedSearch[search];
};
