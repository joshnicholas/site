const prerender = true;
async function load({ fetch }) {
  const jsonUrl = "https://cms-gules-alpha.vercel.app/links_json";
  const response = await fetch(jsonUrl);
  const data = await response.json();
  return { data };
}
export {
  load,
  prerender
};
