import { d as data } from "../../../chunks/scribbles.js";
const prerender = true;
const ssr = true;
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
