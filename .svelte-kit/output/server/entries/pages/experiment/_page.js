import { r as redirect } from "../../../chunks/index.js";
const prerender = false;
function load() {
  throw redirect(301, "/tinkering");
}
export {
  load,
  prerender
};
