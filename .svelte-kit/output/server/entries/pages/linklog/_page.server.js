const prerender = true;
async function load({ fetch }) {
  const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSlgMV5lFDlkoOlCsDFBfNAsd8hVmEI42TnvUtEEhl0g0uz5_v3pF4SJM3q8aoddp69fsii054BnRcK/pub?gid=0&single=true&output=csv";
  const response = await fetch(csvUrl);
  const csvText = await response.text();
  function parseCSVLine(line) {
    const result = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result.map((field) => {
      if (field.startsWith('"') && field.endsWith('"')) {
        return field.slice(1, -1);
      }
      return field;
    });
  }
  const lines = csvText.trim().split("\n");
  const headers = parseCSVLine(lines[0]);
  const data = lines.slice(1).map((line) => {
    const values = parseCSVLine(line);
    const item = {};
    headers.forEach((header, index) => {
      item[header] = values[index] || "";
    });
    return item;
  });
  return { data };
}
export {
  load,
  prerender
};
