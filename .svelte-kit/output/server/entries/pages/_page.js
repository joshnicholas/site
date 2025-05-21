import { d as data } from "../../chunks/scribbles.js";
const prerender = false;
const ssr = false;
async function load({ fetch, params }) {
  return {
    data
    // imageDataArray: imageDataArray
  };
}
export {
  load,
  prerender,
  ssr
};
