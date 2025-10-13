import { r as redirect } from "../../../chunks/index2.js";
const prerender = false;
function load() {
  throw redirect(301, "/tinkering");
}
export {
  load,
  prerender
};
