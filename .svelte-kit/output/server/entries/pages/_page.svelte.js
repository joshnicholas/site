import { f as ensure_array_like, e as bind_props, c as pop, p as push, h as stringify, i as copy_payload, j as assign_payload } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import { shuffle, ascending, descending } from "d3-array";
import { timeParse, timeFormat } from "d3-time-format";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Radio($$payload, $$props) {
  push();
  let options = $$props["options"];
  let sortBy = $$props["sortBy"];
  const slugify = (str = "") => str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
  const each_array = ensure_array_like(options);
  $$payload.out += `<div id="sortRow" class="flex justify-between text-l pb-5 svelte-pc4onl"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let option = each_array[$$index];
    $$payload.out += `<input class="sr-only mr-5 svelte-pc4onl" type="radio"${attr("id", slugify(option))}${attr("checked", sortBy === option, true)}${attr("value", option)}> <label${attr("for", slugify(option))} class="svelte-pc4onl">${escape_html(option)}</label>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { options, sortBy });
  pop();
}
const __vite_glob_0_0 = {
  sources: {
    avif: "/_app/immutable/assets/03598547cb.2Y6UCkcE.avif 300w, /_app/immutable/assets/03598547cb.BlfCWtTZ.avif 600w",
    webp: "/_app/immutable/assets/03598547cb.COCls5ab.webp 300w, /_app/immutable/assets/03598547cb.C55_Y1vT.webp 600w",
    jpeg: "/_app/immutable/assets/03598547cb.Cik6p3li.jpeg 300w, /_app/immutable/assets/03598547cb.DidH89Qp.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/03598547cb.DidH89Qp.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_1 = {
  sources: {
    avif: "/_app/immutable/assets/047539495b.B_We43Pv.avif 300w, /_app/immutable/assets/047539495b.D3aLusdA.avif 600w",
    webp: "/_app/immutable/assets/047539495b.CzwWq-H_.webp 300w, /_app/immutable/assets/047539495b.BdX8wPeO.webp 600w",
    jpeg: "/_app/immutable/assets/047539495b.BG59egEU.jpeg 300w, /_app/immutable/assets/047539495b.D4WH_ZSj.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/047539495b.D4WH_ZSj.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_2 = {
  sources: {
    avif: "/_app/immutable/assets/0633ff9c88.C5f6HhlC.avif 300w, /_app/immutable/assets/0633ff9c88.CTAnvaBy.avif 600w",
    webp: "/_app/immutable/assets/0633ff9c88.DehsNSWT.webp 300w, /_app/immutable/assets/0633ff9c88.X3rGs8nb.webp 600w",
    jpeg: "/_app/immutable/assets/0633ff9c88.BJhtPfD7.jpeg 300w, /_app/immutable/assets/0633ff9c88.CJaCI8KK.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/0633ff9c88.CJaCI8KK.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_3 = {
  sources: {
    avif: "/_app/immutable/assets/0866e14f37.8ydxqopN.avif 300w, /_app/immutable/assets/0866e14f37.C6PFAbkr.avif 600w",
    webp: "/_app/immutable/assets/0866e14f37.CVyzhdt-.webp 300w, /_app/immutable/assets/0866e14f37.CFVTQqAO.webp 600w",
    jpeg: "/_app/immutable/assets/0866e14f37.Cauwl1nL.jpeg 300w, /_app/immutable/assets/0866e14f37.Btj3XbZt.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/0866e14f37.Btj3XbZt.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_4 = {
  sources: {
    avif: "/_app/immutable/assets/0Yorkedagain1.68Yt28qJ.avif 1200w, /_app/immutable/assets/0Yorkedagain1.C-7UVSby.avif 2400w",
    webp: "/_app/immutable/assets/0Yorkedagain1.LPwKxxmJ.webp 1200w, /_app/immutable/assets/0Yorkedagain1.BPKwHehM.webp 2400w",
    jpeg: "/_app/immutable/assets/0Yorkedagain1.CmUSAbi2.jpeg 1200w, /_app/immutable/assets/0Yorkedagain1.DPi8qg4_.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/0Yorkedagain1.DPi8qg4_.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_5 = {
  sources: {
    avif: "/_app/immutable/assets/0c85263293.mJGiVIxE.avif 300w, /_app/immutable/assets/0c85263293.BSXQ8y5j.avif 600w",
    webp: "/_app/immutable/assets/0c85263293.qVUVcIMz.webp 300w, /_app/immutable/assets/0c85263293.BchyZiYr.webp 600w",
    jpeg: "/_app/immutable/assets/0c85263293.B8JsOjcj.jpeg 300w, /_app/immutable/assets/0c85263293.yikRFf3k.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/0c85263293.yikRFf3k.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_6 = {
  sources: {
    avif: "/_app/immutable/assets/0d78144ebd.DB_z0ZE-.avif 300w, /_app/immutable/assets/0d78144ebd.C4j8ZYWZ.avif 600w",
    webp: "/_app/immutable/assets/0d78144ebd.COeCKSNm.webp 300w, /_app/immutable/assets/0d78144ebd.BiUPYNyK.webp 600w",
    jpeg: "/_app/immutable/assets/0d78144ebd.CRwITOco.jpeg 300w, /_app/immutable/assets/0d78144ebd.CRMkiiuF.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/0d78144ebd.CRMkiiuF.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_7 = {
  sources: {
    avif: "/_app/immutable/assets/100Cat-------1.EUofSSKs.avif 900w, /_app/immutable/assets/100Cat-------1.BTduJit6.avif 1800w",
    webp: "/_app/immutable/assets/100Cat-------1.C9aarlVz.webp 900w, /_app/immutable/assets/100Cat-------1.DMU9ierF.webp 1800w",
    jpeg: "/_app/immutable/assets/100Cat-------1.C-Brl6pS.jpeg 900w, /_app/immutable/assets/100Cat-------1.DVoafWY4.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/100Cat-------1.DVoafWY4.jpeg",
    w: 1800,
    h: 2400
  }
};
const __vite_glob_0_8 = {
  sources: {
    avif: "/_app/immutable/assets/101Scream------1.D17NmnQp.avif 900w, /_app/immutable/assets/101Scream------1.BiukZvMG.avif 1800w",
    webp: "/_app/immutable/assets/101Scream------1.DW63k5B0.webp 900w, /_app/immutable/assets/101Scream------1.CtctzQLk.webp 1800w",
    jpeg: "/_app/immutable/assets/101Scream------1.DyxN_egV.jpeg 900w, /_app/immutable/assets/101Scream------1.BqjZtsZp.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/101Scream------1.BqjZtsZp.jpeg",
    w: 1800,
    h: 2343
  }
};
const __vite_glob_0_9 = {
  sources: {
    avif: "/_app/immutable/assets/102I-llsingyouasongasongofthesea--------1.D8315hY0.avif 900w, /_app/immutable/assets/102I-llsingyouasongasongofthesea--------1.BDx0-KiZ.avif 1800w",
    webp: "/_app/immutable/assets/102I-llsingyouasongasongofthesea--------1.BQGcQgou.webp 900w, /_app/immutable/assets/102I-llsingyouasongasongofthesea--------1.DWLVeO5E.webp 1800w",
    jpeg: "/_app/immutable/assets/102I-llsingyouasongasongofthesea--------1.BPB_C-Hc.jpeg 900w, /_app/immutable/assets/102I-llsingyouasongasongofthesea--------1.D1xaadGa.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/102I-llsingyouasongasongofthesea--------1.D1xaadGa.jpeg",
    w: 1800,
    h: 1800
  }
};
const __vite_glob_0_10 = {
  sources: {
    avif: "/_app/immutable/assets/103BackinLondonforafewdays------1.DFqARFRE.avif 900w, /_app/immutable/assets/103BackinLondonforafewdays------1.CcjG0VTQ.avif 1800w",
    webp: "/_app/immutable/assets/103BackinLondonforafewdays------1.D4iAOvrV.webp 900w, /_app/immutable/assets/103BackinLondonforafewdays------1.Dsvd_jvm.webp 1800w",
    jpeg: "/_app/immutable/assets/103BackinLondonforafewdays------1.8IPa7WLC.jpeg 900w, /_app/immutable/assets/103BackinLondonforafewdays------1.D_c8r8GH.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/103BackinLondonforafewdays------1.D_c8r8GH.jpeg",
    w: 1800,
    h: 2857
  }
};
const __vite_glob_0_11 = {
  sources: {
    avif: "/_app/immutable/assets/104--------1.C4PR0lDf.avif 689w, /_app/immutable/assets/104--------1.CXmhd8oi.avif 1378w",
    webp: "/_app/immutable/assets/104--------1.ZU-4BTiz.webp 689w, /_app/immutable/assets/104--------1.8_5HCILR.webp 1378w",
    jpeg: "/_app/immutable/assets/104--------1.ALj6no8I.jpeg 689w, /_app/immutable/assets/104--------1.XzoEZAlO.jpeg 1378w"
  },
  img: {
    src: "/_app/immutable/assets/104--------1.XzoEZAlO.jpeg",
    w: 1378,
    h: 2103
  }
};
const __vite_glob_0_12 = {
  sources: {
    avif: "/_app/immutable/assets/105TryingsomenewcolourcombinationsinBudapest------1.DRwnZMUd.avif 900w, /_app/immutable/assets/105TryingsomenewcolourcombinationsinBudapest------1.BsoZCvEF.avif 1800w",
    webp: "/_app/immutable/assets/105TryingsomenewcolourcombinationsinBudapest------1.7h3NzbSi.webp 900w, /_app/immutable/assets/105TryingsomenewcolourcombinationsinBudapest------1.Bq6D60T0.webp 1800w",
    jpeg: "/_app/immutable/assets/105TryingsomenewcolourcombinationsinBudapest------1.CSK_IL3m.jpeg 900w, /_app/immutable/assets/105TryingsomenewcolourcombinationsinBudapest------1.CKSZdA3C.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/105TryingsomenewcolourcombinationsinBudapest------1.CKSZdA3C.jpeg",
    w: 1800,
    h: 1190
  }
};
const __vite_glob_0_13 = {
  sources: {
    avif: "/_app/immutable/assets/106Boughtsomeorangecrayons--------4.BNeXN6iU.avif 900w, /_app/immutable/assets/106Boughtsomeorangecrayons--------4.C6TS_BEd.avif 1800w",
    webp: "/_app/immutable/assets/106Boughtsomeorangecrayons--------4.D-92mKn5.webp 900w, /_app/immutable/assets/106Boughtsomeorangecrayons--------4.CurTVOrX.webp 1800w",
    jpeg: "/_app/immutable/assets/106Boughtsomeorangecrayons--------4.Dg7ZYUNc.jpeg 900w, /_app/immutable/assets/106Boughtsomeorangecrayons--------4.H3j4D_WY.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/106Boughtsomeorangecrayons--------4.H3j4D_WY.jpeg",
    w: 1800,
    h: 2591
  }
};
const __vite_glob_0_14 = {
  sources: {
    avif: "/_app/immutable/assets/107LovingthesetreesliningthestreetsinBudapest------0.Dl600Elp.avif 900w, /_app/immutable/assets/107LovingthesetreesliningthestreetsinBudapest------0.DI-T2B9R.avif 1800w",
    webp: "/_app/immutable/assets/107LovingthesetreesliningthestreetsinBudapest------0.DGXSzAZq.webp 900w, /_app/immutable/assets/107LovingthesetreesliningthestreetsinBudapest------0.C7kBMtXu.webp 1800w",
    jpeg: "/_app/immutable/assets/107LovingthesetreesliningthestreetsinBudapest------0.CZIV1LYd.jpeg 900w, /_app/immutable/assets/107LovingthesetreesliningthestreetsinBudapest------0.DSeJf6TI.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/107LovingthesetreesliningthestreetsinBudapest------0.DSeJf6TI.jpeg",
    w: 1800,
    h: 2400
  }
};
const __vite_glob_0_15 = {
  sources: {
    avif: "/_app/immutable/assets/108AnotherviewoftheTempleofStNicholas-yup-------1.Dl_Vj7pL.avif 900w, /_app/immutable/assets/108AnotherviewoftheTempleofStNicholas-yup-------1.CNJUBZkJ.avif 1799w",
    webp: "/_app/immutable/assets/108AnotherviewoftheTempleofStNicholas-yup-------1.CNmV4fb2.webp 900w, /_app/immutable/assets/108AnotherviewoftheTempleofStNicholas-yup-------1.CAKgNXer.webp 1799w",
    jpeg: "/_app/immutable/assets/108AnotherviewoftheTempleofStNicholas-yup-------1.C-ax7J_a.jpeg 900w, /_app/immutable/assets/108AnotherviewoftheTempleofStNicholas-yup-------1.C_G_WhNM.jpeg 1799w"
  },
  img: {
    src: "/_app/immutable/assets/108AnotherviewoftheTempleofStNicholas-yup-------1.C_G_WhNM.jpeg",
    w: 1799,
    h: 1349
  }
};
const __vite_glob_0_16 = {
  sources: {
    avif: "/_app/immutable/assets/109TheclocktowerinBratislava------1.C2Ls_8w1.avif 900w, /_app/immutable/assets/109TheclocktowerinBratislava------1.CK9rSiEd.avif 1799w",
    webp: "/_app/immutable/assets/109TheclocktowerinBratislava------1.D92PqvCb.webp 900w, /_app/immutable/assets/109TheclocktowerinBratislava------1.CMNIl8g1.webp 1799w",
    jpeg: "/_app/immutable/assets/109TheclocktowerinBratislava------1.DV5Umkaa.jpeg 900w, /_app/immutable/assets/109TheclocktowerinBratislava------1.zNvkSl-M.jpeg 1799w"
  },
  img: {
    src: "/_app/immutable/assets/109TheclocktowerinBratislava------1.zNvkSl-M.jpeg",
    w: 1799,
    h: 1103
  }
};
const __vite_glob_0_17 = {
  sources: {
    avif: "/_app/immutable/assets/110TFWyouforgettoleaveenoughroomonthepageforthesteepleofthechurch------1.-In39fzc.avif 900w, /_app/immutable/assets/110TFWyouforgettoleaveenoughroomonthepageforthesteepleofthechurch------1.CVK4HLn5.avif 1800w",
    webp: "/_app/immutable/assets/110TFWyouforgettoleaveenoughroomonthepageforthesteepleofthechurch------1.y2aCgLVY.webp 900w, /_app/immutable/assets/110TFWyouforgettoleaveenoughroomonthepageforthesteepleofthechurch------1.B0UFTu8A.webp 1800w",
    jpeg: "/_app/immutable/assets/110TFWyouforgettoleaveenoughroomonthepageforthesteepleofthechurch------1.C-QjgNym.jpeg 900w, /_app/immutable/assets/110TFWyouforgettoleaveenoughroomonthepageforthesteepleofthechurch------1.DZHLMe0T.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/110TFWyouforgettoleaveenoughroomonthepageforthesteepleofthechurch------1.DZHLMe0T.jpeg",
    w: 1800,
    h: 1234
  }
};
const __vite_glob_0_18 = {
  sources: {
    avif: "/_app/immutable/assets/111MorningfromBratislavaCastle--------1.gi9t2aF2.avif 900w, /_app/immutable/assets/111MorningfromBratislavaCastle--------1.CxZhVLgI.avif 1799w",
    webp: "/_app/immutable/assets/111MorningfromBratislavaCastle--------1.C5cRrSBF.webp 900w, /_app/immutable/assets/111MorningfromBratislavaCastle--------1.BVkol7UL.webp 1799w",
    jpeg: "/_app/immutable/assets/111MorningfromBratislavaCastle--------1.DkbPvypF.jpeg 900w, /_app/immutable/assets/111MorningfromBratislavaCastle--------1.Db2YYjxR.jpeg 1799w"
  },
  img: {
    src: "/_app/immutable/assets/111MorningfromBratislavaCastle--------1.Db2YYjxR.jpeg",
    w: 1799,
    h: 1340
  }
};
const __vite_glob_0_19 = {
  sources: {
    avif: "/_app/immutable/assets/112BeersbytheriverinBratislava------5.Ci85uN7D.avif 900w, /_app/immutable/assets/112BeersbytheriverinBratislava------5.BYzBqPQ-.avif 1799w",
    webp: "/_app/immutable/assets/112BeersbytheriverinBratislava------5.Cx4JguDo.webp 900w, /_app/immutable/assets/112BeersbytheriverinBratislava------5.iweBk6_X.webp 1799w",
    jpeg: "/_app/immutable/assets/112BeersbytheriverinBratislava------5.9TY5lSia.jpeg 900w, /_app/immutable/assets/112BeersbytheriverinBratislava------5.Bt29AgLA.jpeg 1799w"
  },
  img: {
    src: "/_app/immutable/assets/112BeersbytheriverinBratislava------5.Bt29AgLA.jpeg",
    w: 1799,
    h: 1349
  }
};
const __vite_glob_0_20 = {
  sources: {
    avif: "/_app/immutable/assets/113MesittinginthesuninBratislava------c.COVfYLe_.avif 900w, /_app/immutable/assets/113MesittinginthesuninBratislava------c.DD1dlR8w.avif 1800w",
    webp: "/_app/immutable/assets/113MesittinginthesuninBratislava------c.BJaPua4g.webp 900w, /_app/immutable/assets/113MesittinginthesuninBratislava------c.BzzqnSUJ.webp 1800w",
    jpeg: "/_app/immutable/assets/113MesittinginthesuninBratislava------c.BYMPPNLi.jpeg 900w, /_app/immutable/assets/113MesittinginthesuninBratislava------c.D7RgsCnQ.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/113MesittinginthesuninBratislava------c.D7RgsCnQ.jpeg",
    w: 1800,
    h: 2400
  }
};
const __vite_glob_0_21 = {
  sources: {
    avif: "/_app/immutable/assets/114LastonefromVienna-BelvederePalace------4.CO0GgQUZ.avif 900w, /_app/immutable/assets/114LastonefromVienna-BelvederePalace------4.CcrclD1t.avif 1799w",
    webp: "/_app/immutable/assets/114LastonefromVienna-BelvederePalace------4.BepPWY99.webp 900w, /_app/immutable/assets/114LastonefromVienna-BelvederePalace------4.yJj0QOOG.webp 1799w",
    jpeg: "/_app/immutable/assets/114LastonefromVienna-BelvederePalace------4.Qdy6-JtW.jpeg 900w, /_app/immutable/assets/114LastonefromVienna-BelvederePalace------4.yFRorCe2.jpeg 1799w"
  },
  img: {
    src: "/_app/immutable/assets/114LastonefromVienna-BelvederePalace------4.yFRorCe2.jpeg",
    w: 1799,
    h: 1127
  }
};
const __vite_glob_0_22 = {
  sources: {
    avif: "/_app/immutable/assets/115Waitingfortheartgallerytoopen--------9.D5pSEM-X.avif 900w, /_app/immutable/assets/115Waitingfortheartgallerytoopen--------9.DPwKfSY6.avif 1800w",
    webp: "/_app/immutable/assets/115Waitingfortheartgallerytoopen--------9.gtg0GhSN.webp 900w, /_app/immutable/assets/115Waitingfortheartgallerytoopen--------9.BVyzF17d.webp 1800w",
    jpeg: "/_app/immutable/assets/115Waitingfortheartgallerytoopen--------9.spXd6UUp.jpeg 900w, /_app/immutable/assets/115Waitingfortheartgallerytoopen--------9.UYp14nCH.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/115Waitingfortheartgallerytoopen--------9.UYp14nCH.jpeg",
    w: 1800,
    h: 1164
  }
};
const __vite_glob_0_23 = {
  sources: {
    avif: "/_app/immutable/assets/116DaybythecanalsinVienna------9.HaQEQ2cm.avif 900w, /_app/immutable/assets/116DaybythecanalsinVienna------9.BocT0KBO.avif 1799w",
    webp: "/_app/immutable/assets/116DaybythecanalsinVienna------9.D8Ipt46g.webp 900w, /_app/immutable/assets/116DaybythecanalsinVienna------9.Do48kOBw.webp 1799w",
    jpeg: "/_app/immutable/assets/116DaybythecanalsinVienna------9.B25SvdZ_.jpeg 900w, /_app/immutable/assets/116DaybythecanalsinVienna------9.Djj4prFf.jpeg 1799w"
  },
  img: {
    src: "/_app/immutable/assets/116DaybythecanalsinVienna------9.Djj4prFf.jpeg",
    w: 1799,
    h: 1171
  }
};
const __vite_glob_0_24 = {
  sources: {
    avif: "/_app/immutable/assets/117SomekindofministrybuildinginPrague--------7.kVDz2y57.avif 900w, /_app/immutable/assets/117SomekindofministrybuildinginPrague--------7.I17vfcnD.avif 1800w",
    webp: "/_app/immutable/assets/117SomekindofministrybuildinginPrague--------7.T_M4-Fri.webp 900w, /_app/immutable/assets/117SomekindofministrybuildinginPrague--------7.DV4rOZu7.webp 1800w",
    jpeg: "/_app/immutable/assets/117SomekindofministrybuildinginPrague--------7.B7qtpIOK.jpeg 900w, /_app/immutable/assets/117SomekindofministrybuildinginPrague--------7.C6Oz2_Be.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/117SomekindofministrybuildinginPrague--------7.C6Oz2_Be.jpeg",
    w: 1800,
    h: 1138
  }
};
const __vite_glob_0_25 = {
  sources: {
    avif: "/_app/immutable/assets/118TheOverlookHotelPraguepalace------5.BiShZ7yP.avif 900w, /_app/immutable/assets/118TheOverlookHotelPraguepalace------5.D6u2oMG2.avif 1799w",
    webp: "/_app/immutable/assets/118TheOverlookHotelPraguepalace------5.DX3FSwLr.webp 900w, /_app/immutable/assets/118TheOverlookHotelPraguepalace------5.V_0NeMJ3.webp 1799w",
    jpeg: "/_app/immutable/assets/118TheOverlookHotelPraguepalace------5.BGMP7A54.jpeg 900w, /_app/immutable/assets/118TheOverlookHotelPraguepalace------5.B3FsGS6Y.jpeg 1799w"
  },
  img: {
    src: "/_app/immutable/assets/118TheOverlookHotelPraguepalace------5.B3FsGS6Y.jpeg",
    w: 1799,
    h: 1166
  }
};
const __vite_glob_0_26 = {
  sources: {
    avif: "/_app/immutable/assets/11Shannon.B8b7EOjM.avif 1200w, /_app/immutable/assets/11Shannon.D3F1iejo.avif 2400w",
    webp: "/_app/immutable/assets/11Shannon.P_AYesRR.webp 1200w, /_app/immutable/assets/11Shannon.ByaMaxYb.webp 2400w",
    jpeg: "/_app/immutable/assets/11Shannon.DcbBRwKJ.jpeg 1200w, /_app/immutable/assets/11Shannon.UiWbsBYp.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/11Shannon.UiWbsBYp.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_27 = {
  sources: {
    avif: "/_app/immutable/assets/122AcoupleofdaysbytheVltavariverinPrague------c.DadKxinI.avif 900w, /_app/immutable/assets/122AcoupleofdaysbytheVltavariverinPrague------c.BDMifcKR.avif 1799w",
    webp: "/_app/immutable/assets/122AcoupleofdaysbytheVltavariverinPrague------c.BeSz0TuT.webp 900w, /_app/immutable/assets/122AcoupleofdaysbytheVltavariverinPrague------c.Eprm6Gn7.webp 1799w",
    jpeg: "/_app/immutable/assets/122AcoupleofdaysbytheVltavariverinPrague------c.Cht9yaW1.jpeg 900w, /_app/immutable/assets/122AcoupleofdaysbytheVltavariverinPrague------c.BBnh_fkm.jpeg 1799w"
  },
  img: {
    src: "/_app/immutable/assets/122AcoupleofdaysbytheVltavariverinPrague------c.BBnh_fkm.jpeg",
    w: 1799,
    h: 1218
  }
};
const __vite_glob_0_28 = {
  sources: {
    avif: "/_app/immutable/assets/123Toooooorists------8.Jhtg6qbH.avif 900w, /_app/immutable/assets/123Toooooorists------8.DgPwjL06.avif 1799w",
    webp: "/_app/immutable/assets/123Toooooorists------8.aKIuQBhV.webp 900w, /_app/immutable/assets/123Toooooorists------8.enD47O2r.webp 1799w",
    jpeg: "/_app/immutable/assets/123Toooooorists------8.CC2vY15P.jpeg 900w, /_app/immutable/assets/123Toooooorists------8.Bb7azYID.jpeg 1799w"
  },
  img: {
    src: "/_app/immutable/assets/123Toooooorists------8.Bb7azYID.jpeg",
    w: 1799,
    h: 1135
  }
};
const __vite_glob_0_29 = {
  sources: {
    avif: "/_app/immutable/assets/126CouplemorefromKrakow--e.CSqgoCkb.avif 900w, /_app/immutable/assets/126CouplemorefromKrakow--e.WnXsV3vB.avif 1799w",
    webp: "/_app/immutable/assets/126CouplemorefromKrakow--e.BDRJhfll.webp 900w, /_app/immutable/assets/126CouplemorefromKrakow--e.BaZf2drL.webp 1799w",
    jpeg: "/_app/immutable/assets/126CouplemorefromKrakow--e.BnTWXQU6.jpeg 900w, /_app/immutable/assets/126CouplemorefromKrakow--e.DBkNFQQi.jpeg 1799w"
  },
  img: {
    src: "/_app/immutable/assets/126CouplemorefromKrakow--e.DBkNFQQi.jpeg",
    w: 1799,
    h: 1208
  }
};
const __vite_glob_0_30 = {
  sources: {
    avif: "/_app/immutable/assets/127KrakowKathedral--therearetoomanybuildingstodrawinthiscity------5.CTSHjt9b.avif 900w, /_app/immutable/assets/127KrakowKathedral--therearetoomanybuildingstodrawinthiscity------5.CzTKbRgz.avif 1800w",
    webp: "/_app/immutable/assets/127KrakowKathedral--therearetoomanybuildingstodrawinthiscity------5.CcEPGI7P.webp 900w, /_app/immutable/assets/127KrakowKathedral--therearetoomanybuildingstodrawinthiscity------5.DORjMl4-.webp 1800w",
    jpeg: "/_app/immutable/assets/127KrakowKathedral--therearetoomanybuildingstodrawinthiscity------5.DNUHTMve.jpeg 900w, /_app/immutable/assets/127KrakowKathedral--therearetoomanybuildingstodrawinthiscity------5.DSRURDrc.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/127KrakowKathedral--therearetoomanybuildingstodrawinthiscity------5.DSRURDrc.jpeg",
    w: 1800,
    h: 2400
  }
};
const __vite_glob_0_31 = {
  sources: {
    avif: "/_app/immutable/assets/129Beforeandafter--------b.CDHd7UEX.avif 900w, /_app/immutable/assets/129Beforeandafter--------b.BZv0uoE4.avif 1800w",
    webp: "/_app/immutable/assets/129Beforeandafter--------b.BXAQ_oXq.webp 900w, /_app/immutable/assets/129Beforeandafter--------b.DoLdZ75a.webp 1800w",
    jpeg: "/_app/immutable/assets/129Beforeandafter--------b.Dxa7S5WW.jpeg 900w, /_app/immutable/assets/129Beforeandafter--------b.DjhhinNY.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/129Beforeandafter--------b.DjhhinNY.jpeg",
    w: 1800,
    h: 2400
  }
};
const __vite_glob_0_32 = {
  sources: {
    avif: "/_app/immutable/assets/12Selfie-5.DTaUgmGI.avif 1000w, /_app/immutable/assets/12Selfie-5.Dh7-FzjZ.avif 2000w",
    webp: "/_app/immutable/assets/12Selfie-5.COquoSy3.webp 1000w, /_app/immutable/assets/12Selfie-5.CeP2zmyp.webp 2000w",
    jpeg: "/_app/immutable/assets/12Selfie-5.H4TM7tnP.jpeg 1000w, /_app/immutable/assets/12Selfie-5.8bAWzQHT.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/12Selfie-5.8bAWzQHT.jpeg",
    w: 2e3,
    h: 2248
  }
};
const __vite_glob_0_33 = {
  sources: {
    avif: "/_app/immutable/assets/131Warsawisdamnprettytbh------0.DVW__Tui.avif 900w, /_app/immutable/assets/131Warsawisdamnprettytbh------0.DTXZ4-MW.avif 1800w",
    webp: "/_app/immutable/assets/131Warsawisdamnprettytbh------0.C0UMDttO.webp 900w, /_app/immutable/assets/131Warsawisdamnprettytbh------0.y8PgweNI.webp 1800w",
    jpeg: "/_app/immutable/assets/131Warsawisdamnprettytbh------0.CWtIZrwZ.jpeg 900w, /_app/immutable/assets/131Warsawisdamnprettytbh------0.NusA86mt.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/131Warsawisdamnprettytbh------0.NusA86mt.jpeg",
    w: 1800,
    h: 2665
  }
};
const __vite_glob_0_34 = {
  sources: {
    avif: "/_app/immutable/assets/132Sawaguywithpigtailsinhisbeardf.CFsggWLa.avif 900w, /_app/immutable/assets/132Sawaguywithpigtailsinhisbeardf.3da17zf0.avif 1800w",
    webp: "/_app/immutable/assets/132Sawaguywithpigtailsinhisbeardf.Bw-KCVa3.webp 900w, /_app/immutable/assets/132Sawaguywithpigtailsinhisbeardf.BJattsIY.webp 1800w",
    jpeg: "/_app/immutable/assets/132Sawaguywithpigtailsinhisbeardf.CnQDcVvB.jpeg 900w, /_app/immutable/assets/132Sawaguywithpigtailsinhisbeardf.KHB8i1aV.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/132Sawaguywithpigtailsinhisbeardf.KHB8i1aV.jpeg",
    w: 1800,
    h: 2465
  }
};
const __vite_glob_0_35 = {
  sources: {
    avif: "/_app/immutable/assets/134ScribblingfromDublincastle--------3.DdcT4csY.avif 900w, /_app/immutable/assets/134ScribblingfromDublincastle--------3.ClGbYJ7k.avif 1799w",
    webp: "/_app/immutable/assets/134ScribblingfromDublincastle--------3.tmJB-AcR.webp 900w, /_app/immutable/assets/134ScribblingfromDublincastle--------3.O-Cgs0hs.webp 1799w",
    jpeg: "/_app/immutable/assets/134ScribblingfromDublincastle--------3.CZc5K307.jpeg 900w, /_app/immutable/assets/134ScribblingfromDublincastle--------3.DCK-Sgps.jpeg 1799w"
  },
  img: {
    src: "/_app/immutable/assets/134ScribblingfromDublincastle--------3.DCK-Sgps.jpeg",
    w: 1799,
    h: 1446
  }
};
const __vite_glob_0_36 = {
  sources: {
    avif: "/_app/immutable/assets/13Sittingbythedockofthebay.D1qFeuO_.avif 1200w, /_app/immutable/assets/13Sittingbythedockofthebay.DfPicbCW.avif 2400w",
    webp: "/_app/immutable/assets/13Sittingbythedockofthebay.CpAslAQU.webp 1200w, /_app/immutable/assets/13Sittingbythedockofthebay.CNcAMKPs.webp 2400w",
    jpeg: "/_app/immutable/assets/13Sittingbythedockofthebay.DYi11Vw5.jpeg 1200w, /_app/immutable/assets/13Sittingbythedockofthebay.DyrHmmis.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/13Sittingbythedockofthebay.DyrHmmis.jpeg",
    w: 2400,
    h: 1718
  }
};
const __vite_glob_0_37 = {
  sources: {
    avif: "/_app/immutable/assets/14Selfie-4.C_wwBaiS.avif 1000w, /_app/immutable/assets/14Selfie-4.BKZOKLM3.avif 2000w",
    webp: "/_app/immutable/assets/14Selfie-4.CKqj06tH.webp 1000w, /_app/immutable/assets/14Selfie-4.Cx3_c27k.webp 2000w",
    jpeg: "/_app/immutable/assets/14Selfie-4.CBMEzCkB.jpeg 1000w, /_app/immutable/assets/14Selfie-4.D-TC1Zx6.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/14Selfie-4.D-TC1Zx6.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_38 = {
  sources: {
    avif: "/_app/immutable/assets/15Selfie-3.Dfg0gakH.avif 1000w, /_app/immutable/assets/15Selfie-3.B8Kd4Bms.avif 2000w",
    webp: "/_app/immutable/assets/15Selfie-3.Cs1k1jP5.webp 1000w, /_app/immutable/assets/15Selfie-3.C1Dmi7JG.webp 2000w",
    jpeg: "/_app/immutable/assets/15Selfie-3.CssxxEWh.jpeg 1000w, /_app/immutable/assets/15Selfie-3.Zmt3rhgh.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/15Selfie-3.Zmt3rhgh.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_39 = {
  sources: {
    avif: "/_app/immutable/assets/16Selfie-2.4PAXkc2h.avif 1000w, /_app/immutable/assets/16Selfie-2.DTnHX_R3.avif 2000w",
    webp: "/_app/immutable/assets/16Selfie-2.D3lkzRe8.webp 1000w, /_app/immutable/assets/16Selfie-2.DO4IJeVu.webp 2000w",
    jpeg: "/_app/immutable/assets/16Selfie-2.hjs0RqeM.jpeg 1000w, /_app/immutable/assets/16Selfie-2.DRUaBAkB.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/16Selfie-2.DRUaBAkB.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_40 = {
  sources: {
    avif: "/_app/immutable/assets/18Selfie-1.Ma_dqVlE.avif 1000w, /_app/immutable/assets/18Selfie-1.Zn3sLtpp.avif 2000w",
    webp: "/_app/immutable/assets/18Selfie-1.C-cdyXmc.webp 1000w, /_app/immutable/assets/18Selfie-1.Vhojryy_.webp 2000w",
    jpeg: "/_app/immutable/assets/18Selfie-1.BP6A6ozQ.jpeg 1000w, /_app/immutable/assets/18Selfie-1.D9SOZxVa.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/18Selfie-1.D9SOZxVa.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_41 = {
  sources: {
    avif: "/_app/immutable/assets/19Whiterabbits7.CDHimjBG.avif 400w, /_app/immutable/assets/19Whiterabbits7.CUjEBB_4.avif 800w",
    webp: "/_app/immutable/assets/19Whiterabbits7.Dsr7I5Xm.webp 400w, /_app/immutable/assets/19Whiterabbits7.EpN1G-Zd.webp 800w",
    jpeg: "/_app/immutable/assets/19Whiterabbits7.CpfAVxes.jpeg 400w, /_app/immutable/assets/19Whiterabbits7.BIQpTFCo.jpeg 800w"
  },
  img: {
    src: "/_app/immutable/assets/19Whiterabbits7.BIQpTFCo.jpeg",
    w: 800,
    h: 1066
  }
};
const __vite_glob_0_42 = {
  sources: {
    avif: "/_app/immutable/assets/1Straussindahausss.C1oxJ_f8.avif 768w, /_app/immutable/assets/1Straussindahausss.DN95eW6x.avif 1536w",
    webp: "/_app/immutable/assets/1Straussindahausss.DNaWEz-l.webp 768w, /_app/immutable/assets/1Straussindahausss.XGGbNHJO.webp 1536w",
    png: "/_app/immutable/assets/1Straussindahausss.CsGWqYAu.png 768w, /_app/immutable/assets/1Straussindahausss.t-mHPtUx.png 1536w"
  },
  img: {
    src: "/_app/immutable/assets/1Straussindahausss.t-mHPtUx.png",
    w: 1536,
    h: 2048
  }
};
const __vite_glob_0_43 = {
  sources: {
    avif: "/_app/immutable/assets/1f4ba01297.DpQWwn0v.avif 300w, /_app/immutable/assets/1f4ba01297.DV8--iY5.avif 599w",
    webp: "/_app/immutable/assets/1f4ba01297.CwE2_7XA.webp 300w, /_app/immutable/assets/1f4ba01297.B7yoPHRf.webp 599w",
    jpeg: "/_app/immutable/assets/1f4ba01297.CnnUhYsB.jpeg 300w, /_app/immutable/assets/1f4ba01297.CXtJcUfp.jpeg 599w"
  },
  img: {
    src: "/_app/immutable/assets/1f4ba01297.CXtJcUfp.jpeg",
    w: 599,
    h: 449
  }
};
const __vite_glob_0_44 = {
  sources: {
    avif: "/_app/immutable/assets/2020-07-08-14.26.59.DK6o2J6A.avif 800w, /_app/immutable/assets/2020-07-08-14.26.59.B2jNOyUc.avif 1600w",
    webp: "/_app/immutable/assets/2020-07-08-14.26.59.Cys_-kBN.webp 800w, /_app/immutable/assets/2020-07-08-14.26.59.X8XUDDWa.webp 1600w",
    jpeg: "/_app/immutable/assets/2020-07-08-14.26.59.DDsTu9hH.jpeg 800w, /_app/immutable/assets/2020-07-08-14.26.59.DiknRHEZ.jpeg 1600w"
  },
  img: {
    src: "/_app/immutable/assets/2020-07-08-14.26.59.DiknRHEZ.jpeg",
    w: 1600,
    h: 2133
  }
};
const __vite_glob_0_45 = {
  sources: {
    avif: "/_app/immutable/assets/2020-09-30-13.56.03.DWX77tO-.avif 800w, /_app/immutable/assets/2020-09-30-13.56.03.CuWFMktA.avif 1600w",
    webp: "/_app/immutable/assets/2020-09-30-13.56.03.D7vIrq62.webp 800w, /_app/immutable/assets/2020-09-30-13.56.03.DRUlKqDu.webp 1600w",
    jpeg: "/_app/immutable/assets/2020-09-30-13.56.03.Cmspjhbu.jpeg 800w, /_app/immutable/assets/2020-09-30-13.56.03.CDOpMB13.jpeg 1600w"
  },
  img: {
    src: "/_app/immutable/assets/2020-09-30-13.56.03.CDOpMB13.jpeg",
    w: 1600,
    h: 1200
  }
};
const __vite_glob_0_46 = {
  sources: {
    avif: "/_app/immutable/assets/2020-10-25-08.17.46.ooTIdJrR.avif 800w, /_app/immutable/assets/2020-10-25-08.17.46.YwwKzdRl.avif 1600w",
    webp: "/_app/immutable/assets/2020-10-25-08.17.46.DaIIbAh0.webp 800w, /_app/immutable/assets/2020-10-25-08.17.46.Catc8VuT.webp 1600w",
    jpeg: "/_app/immutable/assets/2020-10-25-08.17.46.D0fcGJMW.jpeg 800w, /_app/immutable/assets/2020-10-25-08.17.46.yY-QGi8i.jpeg 1600w"
  },
  img: {
    src: "/_app/immutable/assets/2020-10-25-08.17.46.yY-QGi8i.jpeg",
    w: 1600,
    h: 2133
  }
};
const __vite_glob_0_47 = {
  sources: {
    avif: "/_app/immutable/assets/20Inamood2.C_mJNKzg.avif 1200w, /_app/immutable/assets/20Inamood2.-ucWyO0o.avif 2400w",
    webp: "/_app/immutable/assets/20Inamood2.DtJvr9Cf.webp 1200w, /_app/immutable/assets/20Inamood2.DT-m7mb5.webp 2400w",
    jpeg: "/_app/immutable/assets/20Inamood2.CeEXxdgw.jpeg 1200w, /_app/immutable/assets/20Inamood2.rWH-M3Os.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/20Inamood2.rWH-M3Os.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_48 = {
  sources: {
    avif: "/_app/immutable/assets/20b80c15d7.oFuNgdd5.avif 300w, /_app/immutable/assets/20b80c15d7.DgECM5__.avif 600w",
    webp: "/_app/immutable/assets/20b80c15d7.CdjNNX_O.webp 300w, /_app/immutable/assets/20b80c15d7.DSLZRFGR.webp 600w",
    jpeg: "/_app/immutable/assets/20b80c15d7.DSr9RU7q.jpeg 300w, /_app/immutable/assets/20b80c15d7.Dko_jWVH.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/20b80c15d7.Dko_jWVH.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_49 = {
  sources: {
    avif: "/_app/immutable/assets/21Gotanewbrushpen2.D6W5Hm6K.avif 1200w, /_app/immutable/assets/21Gotanewbrushpen2.CTrh8-2q.avif 2400w",
    webp: "/_app/immutable/assets/21Gotanewbrushpen2.7NhKZCmD.webp 1200w, /_app/immutable/assets/21Gotanewbrushpen2.D1zM2ehh.webp 2400w",
    jpeg: "/_app/immutable/assets/21Gotanewbrushpen2.CSmp5uaV.jpeg 1200w, /_app/immutable/assets/21Gotanewbrushpen2.pBs--pVF.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/21Gotanewbrushpen2.pBs--pVF.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_50 = {
  sources: {
    avif: "/_app/immutable/assets/2202morningpracticeface.CqMgneO4.avif 672w, /_app/immutable/assets/2202morningpracticeface.BuCNckBm.avif 1344w",
    webp: "/_app/immutable/assets/2202morningpracticeface.Brkh_4Vc.webp 672w, /_app/immutable/assets/2202morningpracticeface.kQT43ssx.webp 1344w",
    jpeg: "/_app/immutable/assets/2202morningpracticeface.Dp6VdW39.jpeg 672w, /_app/immutable/assets/2202morningpracticeface.BO1kNL0Z.jpeg 1344w"
  },
  img: {
    src: "/_app/immutable/assets/2202morningpracticeface.BO1kNL0Z.jpeg",
    w: 1344,
    h: 1008
  }
};
const __vite_glob_0_51 = {
  sources: {
    avif: "/_app/immutable/assets/221224-lifeguard-tower.xDu3FfRK.avif 2016w, /_app/immutable/assets/221224-lifeguard-tower.Omd1cNVh.avif 4032w",
    webp: "/_app/immutable/assets/221224-lifeguard-tower.DFUPfh7z.webp 2016w, /_app/immutable/assets/221224-lifeguard-tower.B4KnGbZR.webp 4032w",
    jpeg: "/_app/immutable/assets/221224-lifeguard-tower.FZ0c0W82.jpeg 2016w, /_app/immutable/assets/221224-lifeguard-tower.BtsD9fvL.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/221224-lifeguard-tower.BtsD9fvL.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_52 = {
  sources: {
    avif: "/_app/immutable/assets/221225-christmas-at-the-beach.cEUp8YXR.avif 2016w, /_app/immutable/assets/221225-christmas-at-the-beach.BRVr9eGT.avif 4032w",
    webp: "/_app/immutable/assets/221225-christmas-at-the-beach.7EHvte2y.webp 2016w, /_app/immutable/assets/221225-christmas-at-the-beach.BRPcs1ZT.webp 4032w",
    jpeg: "/_app/immutable/assets/221225-christmas-at-the-beach.BF9m3kQK.jpeg 2016w, /_app/immutable/assets/221225-christmas-at-the-beach.zKEp4ug-.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/221225-christmas-at-the-beach.zKEp4ug-.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_53 = {
  sources: {
    avif: "/_app/immutable/assets/221225-surfers-paradise-cityscape.6yRZLhgn.avif 1512w, /_app/immutable/assets/221225-surfers-paradise-cityscape.Cn4Tw2Kn.avif 3024w",
    webp: "/_app/immutable/assets/221225-surfers-paradise-cityscape.D2bqLn9l.webp 1512w, /_app/immutable/assets/221225-surfers-paradise-cityscape.CMKTvmC2.webp 3024w",
    jpeg: "/_app/immutable/assets/221225-surfers-paradise-cityscape.BuecgzlL.jpeg 1512w, /_app/immutable/assets/221225-surfers-paradise-cityscape.DK9krmS9.jpeg 3024w"
  },
  img: {
    src: "/_app/immutable/assets/221225-surfers-paradise-cityscape.DK9krmS9.jpeg",
    w: 3024,
    h: 4032
  }
};
const __vite_glob_0_54 = {
  sources: {
    avif: "/_app/immutable/assets/221227-queen-st-mall.CEN-bB7g.avif 2016w, /_app/immutable/assets/221227-queen-st-mall.D8R55mnE.avif 4032w",
    webp: "/_app/immutable/assets/221227-queen-st-mall.C4oXywMM.webp 2016w, /_app/immutable/assets/221227-queen-st-mall.D4IXpzpo.webp 4032w",
    jpeg: "/_app/immutable/assets/221227-queen-st-mall.C2fpb-WE.jpeg 2016w, /_app/immutable/assets/221227-queen-st-mall.DPn_eRxs.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/221227-queen-st-mall.DPn_eRxs.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_55 = {
  sources: {
    avif: "/_app/immutable/assets/22333f115f.D0B-ez3M.avif 300w, /_app/immutable/assets/22333f115f.BQ3vI0P2.avif 600w",
    webp: "/_app/immutable/assets/22333f115f.DMr-1sVH.webp 300w, /_app/immutable/assets/22333f115f._Y2TnChK.webp 600w",
    jpeg: "/_app/immutable/assets/22333f115f.D2fsn0us.jpeg 300w, /_app/immutable/assets/22333f115f.C6YkJkgx.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/22333f115f.C6YkJkgx.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_56 = {
  sources: {
    avif: "/_app/immutable/assets/22S-rennotS-ren9.BNkvlZ8Z.avif 1200w, /_app/immutable/assets/22S-rennotS-ren9.ChdTBpht.avif 2400w",
    webp: "/_app/immutable/assets/22S-rennotS-ren9.DeJ4Ehbv.webp 1200w, /_app/immutable/assets/22S-rennotS-ren9.DKYFxpRP.webp 2400w",
    jpeg: "/_app/immutable/assets/22S-rennotS-ren9.eRENaEh2.jpeg 1200w, /_app/immutable/assets/22S-rennotS-ren9.COoVI2vv.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/22S-rennotS-ren9.COoVI2vv.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_57 = {
  sources: {
    avif: "/_app/immutable/assets/22ed8a7c65.DjsYeIzx.avif 300w, /_app/immutable/assets/22ed8a7c65.BbIz7lYn.avif 600w",
    webp: "/_app/immutable/assets/22ed8a7c65.Bio8QWF8.webp 300w, /_app/immutable/assets/22ed8a7c65.C3wF0mom.webp 600w",
    jpeg: "/_app/immutable/assets/22ed8a7c65.BjHqMABX.jpeg 300w, /_app/immutable/assets/22ed8a7c65._kw2Diua.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/22ed8a7c65._kw2Diua.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_58 = {
  sources: {
    avif: "/_app/immutable/assets/230106-victoria-st-melbourne-cityscape.o7ONNiMb.avif 1447w, /_app/immutable/assets/230106-victoria-st-melbourne-cityscape.DaDmpyLW.avif 2894w",
    webp: "/_app/immutable/assets/230106-victoria-st-melbourne-cityscape.DMoq9Gmz.webp 1447w, /_app/immutable/assets/230106-victoria-st-melbourne-cityscape.D63I9OfT.webp 2894w",
    jpeg: "/_app/immutable/assets/230106-victoria-st-melbourne-cityscape.BQfT7ekR.jpeg 1447w, /_app/immutable/assets/230106-victoria-st-melbourne-cityscape.DzlskIv-.jpeg 2894w"
  },
  img: {
    src: "/_app/immutable/assets/230106-victoria-st-melbourne-cityscape.DzlskIv-.jpeg",
    w: 2894,
    h: 3759
  }
};
const __vite_glob_0_59 = {
  sources: {
    avif: "/_app/immutable/assets/230110-queen-vic-markets-again.CreCJVC2.avif 1876w, /_app/immutable/assets/230110-queen-vic-markets-again.BX43RVKQ.avif 3751w",
    webp: "/_app/immutable/assets/230110-queen-vic-markets-again.B5R68u7T.webp 1876w, /_app/immutable/assets/230110-queen-vic-markets-again.C6PElr1I.webp 3751w",
    jpeg: "/_app/immutable/assets/230110-queen-vic-markets-again.qxfJo7bW.jpeg 1876w, /_app/immutable/assets/230110-queen-vic-markets-again.CTPi1zWL.jpeg 3751w"
  },
  img: {
    src: "/_app/immutable/assets/230110-queen-vic-markets-again.CTPi1zWL.jpeg",
    w: 3751,
    h: 2602
  }
};
const __vite_glob_0_60 = {
  sources: {
    avif: "/_app/immutable/assets/2301_hobart_gpo.qEcy-dRL.avif 2016w, /_app/immutable/assets/2301_hobart_gpo.ChgnCrHV.avif 4032w",
    webp: "/_app/immutable/assets/2301_hobart_gpo.CHeEfBa1.webp 2016w, /_app/immutable/assets/2301_hobart_gpo.D3Y1qLxL.webp 4032w",
    jpeg: "/_app/immutable/assets/2301_hobart_gpo.Dd_XcE_M.jpeg 2016w, /_app/immutable/assets/2301_hobart_gpo.DovEar1C.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/2301_hobart_gpo.DovEar1C.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_61 = {
  sources: {
    avif: "/_app/immutable/assets/2301_quick_twelve_apostles.BspgEGGq.avif 2016w, /_app/immutable/assets/2301_quick_twelve_apostles.BNtXB0t4.avif 4032w",
    webp: "/_app/immutable/assets/2301_quick_twelve_apostles.Bc8djaZC.webp 2016w, /_app/immutable/assets/2301_quick_twelve_apostles.C7cbOgee.webp 4032w",
    jpeg: "/_app/immutable/assets/2301_quick_twelve_apostles.BmfyRHFG.jpeg 2016w, /_app/immutable/assets/2301_quick_twelve_apostles.TNBYwfJM.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/2301_quick_twelve_apostles.TNBYwfJM.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_62 = {
  sources: {
    avif: "/_app/immutable/assets/2302_hobart_boats.CxNgjeDN.avif 2016w, /_app/immutable/assets/2302_hobart_boats.5bwEaMqi.avif 4032w",
    webp: "/_app/immutable/assets/2302_hobart_boats.DvgXIVXZ.webp 2016w, /_app/immutable/assets/2302_hobart_boats.BVnn_j3C.webp 4032w",
    jpeg: "/_app/immutable/assets/2302_hobart_boats.Dkiu_9F-.jpeg 2016w, /_app/immutable/assets/2302_hobart_boats.DrW6IhbQ.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/2302_hobart_boats.DrW6IhbQ.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_63 = {
  sources: {
    avif: "/_app/immutable/assets/2302_hobart_harbour.B2M8FCN6.avif 2016w, /_app/immutable/assets/2302_hobart_harbour.CsV4toKo.avif 4032w",
    webp: "/_app/immutable/assets/2302_hobart_harbour.__RI3qM8.webp 2016w, /_app/immutable/assets/2302_hobart_harbour.CBl57r7a.webp 4032w",
    jpeg: "/_app/immutable/assets/2302_hobart_harbour.FmQPmSJY.jpeg 2016w, /_app/immutable/assets/2302_hobart_harbour.CZHhfAFk.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/2302_hobart_harbour.CZHhfAFk.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_64 = {
  sources: {
    avif: "/_app/immutable/assets/2302_hobart_markets.c_W1U3Ei.avif 1448w, /_app/immutable/assets/2302_hobart_markets.CXApKrN-.avif 2895w",
    webp: "/_app/immutable/assets/2302_hobart_markets.DC6MFqJU.webp 1448w, /_app/immutable/assets/2302_hobart_markets.BpsCru5x.webp 2895w",
    jpeg: "/_app/immutable/assets/2302_hobart_markets.BBXP84u3.jpeg 1448w, /_app/immutable/assets/2302_hobart_markets.BWNEvTPP.jpeg 2895w"
  },
  img: {
    src: "/_app/immutable/assets/2302_hobart_markets.BWNEvTPP.jpeg",
    w: 2895,
    h: 2075
  }
};
const __vite_glob_0_65 = {
  sources: {
    avif: "/_app/immutable/assets/2302_lolli_shop.DJnraO9c.avif 2016w, /_app/immutable/assets/2302_lolli_shop.rsBjDQgW.avif 4032w",
    webp: "/_app/immutable/assets/2302_lolli_shop.BXNNx3_5.webp 2016w, /_app/immutable/assets/2302_lolli_shop.DnLS1MVY.webp 4032w",
    jpeg: "/_app/immutable/assets/2302_lolli_shop.BPrU74Ga.jpeg 2016w, /_app/immutable/assets/2302_lolli_shop.7Wjeaya7.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/2302_lolli_shop.7Wjeaya7.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_66 = {
  sources: {
    avif: "/_app/immutable/assets/2302_port_arthur.whCIvVhF.avif 2016w, /_app/immutable/assets/2302_port_arthur.BgqksHNh.avif 4032w",
    webp: "/_app/immutable/assets/2302_port_arthur.ZCcgHLH7.webp 2016w, /_app/immutable/assets/2302_port_arthur.Ci305ZPH.webp 4032w",
    jpeg: "/_app/immutable/assets/2302_port_arthur.CxnExbmn.jpeg 2016w, /_app/immutable/assets/2302_port_arthur.DpH7yYzk.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/2302_port_arthur.DpH7yYzk.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_67 = {
  sources: {
    avif: "/_app/immutable/assets/2302_salamanca_strip.Dlg1C_Pa.avif 2016w, /_app/immutable/assets/2302_salamanca_strip.BQkRB3V7.avif 4032w",
    webp: "/_app/immutable/assets/2302_salamanca_strip.EKRmFnm5.webp 2016w, /_app/immutable/assets/2302_salamanca_strip.BCOFMAht.webp 4032w",
    jpeg: "/_app/immutable/assets/2302_salamanca_strip.BuVbYpZK.jpeg 2016w, /_app/immutable/assets/2302_salamanca_strip.DQ3MYNlO.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/2302_salamanca_strip.DQ3MYNlO.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_68 = {
  sources: {
    avif: "/_app/immutable/assets/2302_spirit_of_tasmania.Bsh2-fOr.avif 2016w, /_app/immutable/assets/2302_spirit_of_tasmania.C4PqwtEE.avif 4032w",
    webp: "/_app/immutable/assets/2302_spirit_of_tasmania.ClO5zRYX.webp 2016w, /_app/immutable/assets/2302_spirit_of_tasmania.BLIrrhSa.webp 4032w",
    jpeg: "/_app/immutable/assets/2302_spirit_of_tasmania.CZzFjRBm.jpeg 2016w, /_app/immutable/assets/2302_spirit_of_tasmania.BokUFbG7.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/2302_spirit_of_tasmania.BokUFbG7.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_69 = {
  sources: {
    avif: "/_app/immutable/assets/2302_waiting_for_mona.C1SQQVkz.avif 2016w, /_app/immutable/assets/2302_waiting_for_mona.DGfQ7W9-.avif 4032w",
    webp: "/_app/immutable/assets/2302_waiting_for_mona.BewfPcfo.webp 2016w, /_app/immutable/assets/2302_waiting_for_mona.DrIL-gtt.webp 4032w",
    jpeg: "/_app/immutable/assets/2302_waiting_for_mona.CvRpQMIH.jpeg 2016w, /_app/immutable/assets/2302_waiting_for_mona.CpiqBCPE.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/2302_waiting_for_mona.CpiqBCPE.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_70 = {
  sources: {
    avif: "/_app/immutable/assets/230317_yellow_and_blue.B0UYhDLL.avif 500w, /_app/immutable/assets/230317_yellow_and_blue.Bd0IiR4F.avif 1000w",
    webp: "/_app/immutable/assets/230317_yellow_and_blue.DVmcZrwt.webp 500w, /_app/immutable/assets/230317_yellow_and_blue.CiNTiMFg.webp 1000w",
    jpeg: "/_app/immutable/assets/230317_yellow_and_blue.BPPydvL4.jpeg 500w, /_app/immutable/assets/230317_yellow_and_blue.D6C0xiVb.jpeg 1000w"
  },
  img: {
    src: "/_app/immutable/assets/230317_yellow_and_blue.D6C0xiVb.jpeg",
    w: 1e3,
    h: 1333
  }
};
const __vite_glob_0_71 = {
  sources: {
    avif: "/_app/immutable/assets/230320mouse-in-a-hat.Ds1RdK7C.avif 1512w, /_app/immutable/assets/230320mouse-in-a-hat.CTQ3dTwR.avif 3024w",
    webp: "/_app/immutable/assets/230320mouse-in-a-hat.Km6qz8K9.webp 1512w, /_app/immutable/assets/230320mouse-in-a-hat.CX_rEalj.webp 3024w",
    jpeg: "/_app/immutable/assets/230320mouse-in-a-hat.Cp-QhyP-.jpeg 1512w, /_app/immutable/assets/230320mouse-in-a-hat.B6mfaILk.jpeg 3024w"
  },
  img: {
    src: "/_app/immutable/assets/230320mouse-in-a-hat.B6mfaILk.jpeg",
    w: 3024,
    h: 4032
  }
};
const __vite_glob_0_72 = {
  sources: {
    avif: "/_app/immutable/assets/230610-petronas.Xm86UePF.avif 504w, /_app/immutable/assets/230610-petronas.3JeiD1RS.avif 1008w",
    webp: "/_app/immutable/assets/230610-petronas.CPyqQsSl.webp 504w, /_app/immutable/assets/230610-petronas.6wHxRaiM.webp 1008w",
    jpeg: "/_app/immutable/assets/230610-petronas.IF4Nm8I6.jpeg 504w, /_app/immutable/assets/230610-petronas.8HL40iIF.jpeg 1008w"
  },
  img: {
    src: "/_app/immutable/assets/230610-petronas.8HL40iIF.jpeg",
    w: 1008,
    h: 1344
  }
};
const __vite_glob_0_73 = {
  sources: {
    avif: "/_app/immutable/assets/230611-ipoh_coffee.p8k4tOUm.avif 504w, /_app/immutable/assets/230611-ipoh_coffee.B2o5lQht.avif 1008w",
    webp: "/_app/immutable/assets/230611-ipoh_coffee.CNRqs7DO.webp 504w, /_app/immutable/assets/230611-ipoh_coffee.DFbN3A7r.webp 1008w",
    jpeg: "/_app/immutable/assets/230611-ipoh_coffee.PQJakjOj.jpeg 504w, /_app/immutable/assets/230611-ipoh_coffee.DQulexRu.jpeg 1008w"
  },
  img: {
    src: "/_app/immutable/assets/230611-ipoh_coffee.DQulexRu.jpeg",
    w: 1008,
    h: 1344
  }
};
const __vite_glob_0_74 = {
  sources: {
    avif: "/_app/immutable/assets/230612-ipoh-shopping.xO2F5H0e.avif 504w, /_app/immutable/assets/230612-ipoh-shopping.B8Yj3LuN.avif 1008w",
    webp: "/_app/immutable/assets/230612-ipoh-shopping.DdG-Hhpn.webp 504w, /_app/immutable/assets/230612-ipoh-shopping.DwGy4Ouq.webp 1008w",
    jpeg: "/_app/immutable/assets/230612-ipoh-shopping.D7gHG0SU.jpeg 504w, /_app/immutable/assets/230612-ipoh-shopping.DCzFNpB9.jpeg 1008w"
  },
  img: {
    src: "/_app/immutable/assets/230612-ipoh-shopping.DCzFNpB9.jpeg",
    w: 1008,
    h: 1344
  }
};
const __vite_glob_0_75 = {
  sources: {
    avif: "/_app/immutable/assets/230613-ipoh-french-patisserie.C-QZJ9Fw.avif 672w, /_app/immutable/assets/230613-ipoh-french-patisserie.CqFBn0WF.avif 1344w",
    webp: "/_app/immutable/assets/230613-ipoh-french-patisserie.DLtErSab.webp 672w, /_app/immutable/assets/230613-ipoh-french-patisserie.DE2Zf0s8.webp 1344w",
    jpeg: "/_app/immutable/assets/230613-ipoh-french-patisserie.OsvPRLgu.jpeg 672w, /_app/immutable/assets/230613-ipoh-french-patisserie.BWUwiWYF.jpeg 1344w"
  },
  img: {
    src: "/_app/immutable/assets/230613-ipoh-french-patisserie.BWUwiWYF.jpeg",
    w: 1344,
    h: 1008
  }
};
const __vite_glob_0_76 = {
  sources: {
    avif: "/_app/immutable/assets/230613-ipoh-train-station.Bji3nvIK.avif 672w, /_app/immutable/assets/230613-ipoh-train-station.CLa977yi.avif 1344w",
    webp: "/_app/immutable/assets/230613-ipoh-train-station.CvVZpdE8.webp 672w, /_app/immutable/assets/230613-ipoh-train-station.WOU5lUZo.webp 1344w",
    jpeg: "/_app/immutable/assets/230613-ipoh-train-station.CbZQoKrW.jpeg 672w, /_app/immutable/assets/230613-ipoh-train-station.DoVumN4B.jpeg 1344w"
  },
  img: {
    src: "/_app/immutable/assets/230613-ipoh-train-station.DoVumN4B.jpeg",
    w: 1344,
    h: 1008
  }
};
const __vite_glob_0_77 = {
  sources: {
    avif: "/_app/immutable/assets/230614-the-alley.DhU4KswP.avif 504w, /_app/immutable/assets/230614-the-alley.BUh4ihvq.avif 1008w",
    webp: "/_app/immutable/assets/230614-the-alley.DHmOqfgM.webp 504w, /_app/immutable/assets/230614-the-alley.B9sTdPE1.webp 1008w",
    jpeg: "/_app/immutable/assets/230614-the-alley.5wSAO8-U.jpeg 504w, /_app/immutable/assets/230614-the-alley.BUdUK7tw.jpeg 1008w"
  },
  img: {
    src: "/_app/immutable/assets/230614-the-alley.BUdUK7tw.jpeg",
    w: 1008,
    h: 1344
  }
};
const __vite_glob_0_78 = {
  sources: {
    avif: "/_app/immutable/assets/230619-penang-breakfast.Bwf-fT79.avif 504w, /_app/immutable/assets/230619-penang-breakfast.CoFG7szZ.avif 1008w",
    webp: "/_app/immutable/assets/230619-penang-breakfast.sbq3PcI5.webp 504w, /_app/immutable/assets/230619-penang-breakfast.Dy1pSwlV.webp 1008w",
    jpeg: "/_app/immutable/assets/230619-penang-breakfast.CiCcFI1I.jpeg 504w, /_app/immutable/assets/230619-penang-breakfast.CrU0bZy8.jpeg 1008w"
  },
  img: {
    src: "/_app/immutable/assets/230619-penang-breakfast.CrU0bZy8.jpeg",
    w: 1008,
    h: 1344
  }
};
const __vite_glob_0_79 = {
  sources: {
    avif: "/_app/immutable/assets/230620-escaping-the-heat.CLbH6NVT.avif 504w, /_app/immutable/assets/230620-escaping-the-heat.C6RQjBCU.avif 1008w",
    webp: "/_app/immutable/assets/230620-escaping-the-heat.NU2S-mWo.webp 504w, /_app/immutable/assets/230620-escaping-the-heat.B8KyqJjF.webp 1008w",
    jpeg: "/_app/immutable/assets/230620-escaping-the-heat.FjMLRnD5.jpeg 504w, /_app/immutable/assets/230620-escaping-the-heat.DxUGyWYQ.jpeg 1008w"
  },
  img: {
    src: "/_app/immutable/assets/230620-escaping-the-heat.DxUGyWYQ.jpeg",
    w: 1008,
    h: 1344
  }
};
const __vite_glob_0_80 = {
  sources: {
    avif: "/_app/immutable/assets/230621-penang-town-hall.D74IwBME.avif 504w, /_app/immutable/assets/230621-penang-town-hall.BWSgHC3e.avif 1008w",
    webp: "/_app/immutable/assets/230621-penang-town-hall.HlzeW8Hn.webp 504w, /_app/immutable/assets/230621-penang-town-hall.BWq8fIgL.webp 1008w",
    jpeg: "/_app/immutable/assets/230621-penang-town-hall.CMU5PZBG.jpeg 504w, /_app/immutable/assets/230621-penang-town-hall.B9wyxu8u.jpeg 1008w"
  },
  img: {
    src: "/_app/immutable/assets/230621-penang-town-hall.B9wyxu8u.jpeg",
    w: 1008,
    h: 1344
  }
};
const __vite_glob_0_81 = {
  sources: {
    avif: "/_app/immutable/assets/230622-langkawi-umbrella.DhqYCOvV.avif 504w, /_app/immutable/assets/230622-langkawi-umbrella.CxKG-1xZ.avif 1008w",
    webp: "/_app/immutable/assets/230622-langkawi-umbrella.DbhmzOmr.webp 504w, /_app/immutable/assets/230622-langkawi-umbrella.Blgd67b0.webp 1008w",
    jpeg: "/_app/immutable/assets/230622-langkawi-umbrella.C2gmtmju.jpeg 504w, /_app/immutable/assets/230622-langkawi-umbrella.0_t0L-8v.jpeg 1008w"
  },
  img: {
    src: "/_app/immutable/assets/230622-langkawi-umbrella.0_t0L-8v.jpeg",
    w: 1008,
    h: 1344
  }
};
const __vite_glob_0_82 = {
  sources: {
    avif: "/_app/immutable/assets/230623-the-hotel.DHCdPm4o.avif 672w, /_app/immutable/assets/230623-the-hotel.BJAJyR6E.avif 1344w",
    webp: "/_app/immutable/assets/230623-the-hotel.BGqs3sSe.webp 672w, /_app/immutable/assets/230623-the-hotel.97gkul9h.webp 1344w",
    jpeg: "/_app/immutable/assets/230623-the-hotel.DpgwRbHu.jpeg 672w, /_app/immutable/assets/230623-the-hotel.DbDWR5cF.jpeg 1344w"
  },
  img: {
    src: "/_app/immutable/assets/230623-the-hotel.DbDWR5cF.jpeg",
    w: 1344,
    h: 1008
  }
};
const __vite_glob_0_83 = {
  sources: {
    avif: "/_app/immutable/assets/230624-langkawi-bay.D1wddMZI.avif 672w, /_app/immutable/assets/230624-langkawi-bay.DniQbNIo.avif 1343w",
    webp: "/_app/immutable/assets/230624-langkawi-bay.DkPgREJ1.webp 672w, /_app/immutable/assets/230624-langkawi-bay.BdKCA35h.webp 1343w",
    jpeg: "/_app/immutable/assets/230624-langkawi-bay.CX-x28ZA.jpeg 672w, /_app/immutable/assets/230624-langkawi-bay.CEaXur0l.jpeg 1343w"
  },
  img: {
    src: "/_app/immutable/assets/230624-langkawi-bay.CEaXur0l.jpeg",
    w: 1343,
    h: 1007
  }
};
const __vite_glob_0_84 = {
  sources: {
    avif: "/_app/immutable/assets/230701-kuala-lumpur-last-day.U9wGAhgh.avif 504w, /_app/immutable/assets/230701-kuala-lumpur-last-day.Ds3mRyrn.avif 1008w",
    webp: "/_app/immutable/assets/230701-kuala-lumpur-last-day.kMqlGnDg.webp 504w, /_app/immutable/assets/230701-kuala-lumpur-last-day.D0IDhYe1.webp 1008w",
    jpeg: "/_app/immutable/assets/230701-kuala-lumpur-last-day.DQJW_uAW.jpeg 504w, /_app/immutable/assets/230701-kuala-lumpur-last-day.DXEwRpGJ.jpeg 1008w"
  },
  img: {
    src: "/_app/immutable/assets/230701-kuala-lumpur-last-day.DXEwRpGJ.jpeg",
    w: 1008,
    h: 1344
  }
};
const __vite_glob_0_85 = {
  sources: {
    avif: "/_app/immutable/assets/231006-mcdonalds-flinders.BNMJNkD5.avif 225w, /_app/immutable/assets/231006-mcdonalds-flinders.D4Vrix5L.avif 450w",
    webp: "/_app/immutable/assets/231006-mcdonalds-flinders.9Sk9YUXo.webp 225w, /_app/immutable/assets/231006-mcdonalds-flinders.DkSsiA3s.webp 450w",
    jpeg: "/_app/immutable/assets/231006-mcdonalds-flinders.M0qvk-OZ.jpeg 225w, /_app/immutable/assets/231006-mcdonalds-flinders.BASaO9VD.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/231006-mcdonalds-flinders.BASaO9VD.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_86 = {
  sources: {
    avif: "/_app/immutable/assets/231008_streetball.CDwbumPg.avif 225w, /_app/immutable/assets/231008_streetball.IH5gJxaC.avif 450w",
    webp: "/_app/immutable/assets/231008_streetball.BljVJEcd.webp 225w, /_app/immutable/assets/231008_streetball.5vZFs1py.webp 450w",
    jpeg: "/_app/immutable/assets/231008_streetball.CJX1UMUY.jpeg 225w, /_app/immutable/assets/231008_streetball.83jv-gaE.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/231008_streetball.83jv-gaE.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_87 = {
  sources: {
    avif: "/_app/immutable/assets/231109_scratchy_beard.Bku0_fNz.avif 225w, /_app/immutable/assets/231109_scratchy_beard.B5EkezAF.avif 450w",
    webp: "/_app/immutable/assets/231109_scratchy_beard.Cbk5tT6G.webp 225w, /_app/immutable/assets/231109_scratchy_beard.CIz65N6z.webp 450w",
    jpeg: "/_app/immutable/assets/231109_scratchy_beard.BiqHMijm.jpeg 225w, /_app/immutable/assets/231109_scratchy_beard.FTp46W_K.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/231109_scratchy_beard.FTp46W_K.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_88 = {
  sources: {
    avif: "/_app/immutable/assets/231220-melbourne-trams.BndAkmRP.avif 952w, /_app/immutable/assets/231220-melbourne-trams.BJI-fXSX.avif 1904w",
    webp: "/_app/immutable/assets/231220-melbourne-trams.B9tE4trW.webp 952w, /_app/immutable/assets/231220-melbourne-trams.CxwszJ9-.webp 1904w",
    jpeg: "/_app/immutable/assets/231220-melbourne-trams.DnzWw3jT.jpeg 952w, /_app/immutable/assets/231220-melbourne-trams.D6z-yM3L.jpeg 1904w"
  },
  img: {
    src: "/_app/immutable/assets/231220-melbourne-trams.D6z-yM3L.jpeg",
    w: 1904,
    h: 1428
  }
};
const __vite_glob_0_89 = {
  sources: {
    avif: "/_app/immutable/assets/23DefinitelynotKierkegaard7.DS0L-7Jj.avif 1200w, /_app/immutable/assets/23DefinitelynotKierkegaard7.D1TdJYHg.avif 2400w",
    webp: "/_app/immutable/assets/23DefinitelynotKierkegaard7.BiYmy6Ty.webp 1200w, /_app/immutable/assets/23DefinitelynotKierkegaard7.ChWX5xSX.webp 2400w",
    jpeg: "/_app/immutable/assets/23DefinitelynotKierkegaard7.Bk1n4yj-.jpeg 1200w, /_app/immutable/assets/23DefinitelynotKierkegaard7.B5voZ2eX.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/23DefinitelynotKierkegaard7.B5voZ2eX.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_90 = {
  sources: {
    avif: "/_app/immutable/assets/240114-sydney-opera-house.CHY1ATCQ.avif 500w, /_app/immutable/assets/240114-sydney-opera-house.7VKVMBDj.avif 1000w",
    webp: "/_app/immutable/assets/240114-sydney-opera-house.CyKEdhwd.webp 500w, /_app/immutable/assets/240114-sydney-opera-house.CLffxJPS.webp 1000w",
    jpeg: "/_app/immutable/assets/240114-sydney-opera-house.B5jG9Iga.jpeg 500w, /_app/immutable/assets/240114-sydney-opera-house.DDvk0HaL.jpeg 1000w"
  },
  img: {
    src: "/_app/immutable/assets/240114-sydney-opera-house.DDvk0HaL.jpeg",
    w: 1e3,
    h: 750
  }
};
const __vite_glob_0_91 = {
  sources: {
    avif: "/_app/immutable/assets/240117-misty-sydney-cbd.CkAhtbaH.avif 500w, /_app/immutable/assets/240117-misty-sydney-cbd.CePtR8Ex.avif 1000w",
    webp: "/_app/immutable/assets/240117-misty-sydney-cbd.Br4K9bY0.webp 500w, /_app/immutable/assets/240117-misty-sydney-cbd.DSzIbs-w.webp 1000w",
    jpeg: "/_app/immutable/assets/240117-misty-sydney-cbd.lIjPzZ8A.jpeg 500w, /_app/immutable/assets/240117-misty-sydney-cbd.BHD9iSSh.jpeg 1000w"
  },
  img: {
    src: "/_app/immutable/assets/240117-misty-sydney-cbd.BHD9iSSh.jpeg",
    w: 1e3,
    h: 750
  }
};
const __vite_glob_0_92 = {
  sources: {
    avif: "/_app/immutable/assets/240124-sydney-ferry.Bxa6pWPF.avif 500w, /_app/immutable/assets/240124-sydney-ferry.Dcz-SjB7.avif 1000w",
    webp: "/_app/immutable/assets/240124-sydney-ferry.C0bOOlTx.webp 500w, /_app/immutable/assets/240124-sydney-ferry.DyEmtcPz.webp 1000w",
    jpeg: "/_app/immutable/assets/240124-sydney-ferry.3KcB-P7f.jpeg 500w, /_app/immutable/assets/240124-sydney-ferry.BYqtacyn.jpeg 1000w"
  },
  img: {
    src: "/_app/immutable/assets/240124-sydney-ferry.BYqtacyn.jpeg",
    w: 1e3,
    h: 1333
  }
};
const __vite_glob_0_93 = {
  sources: {
    avif: "/_app/immutable/assets/240125-melbourne-trams.C5zOCAKc.avif 500w, /_app/immutable/assets/240125-melbourne-trams.CjigTCaN.avif 1000w",
    webp: "/_app/immutable/assets/240125-melbourne-trams.DKZW9nly.webp 500w, /_app/immutable/assets/240125-melbourne-trams.gBcFnug6.webp 1000w",
    jpeg: "/_app/immutable/assets/240125-melbourne-trams.Bl6YAM0s.jpeg 500w, /_app/immutable/assets/240125-melbourne-trams.B6E6zNT9.jpeg 1000w"
  },
  img: {
    src: "/_app/immutable/assets/240125-melbourne-trams.B6E6zNT9.jpeg",
    w: 1e3,
    h: 1333
  }
};
const __vite_glob_0_94 = {
  sources: {
    avif: "/_app/immutable/assets/240129-the-knitter.DBbwaWhy.avif 714w, /_app/immutable/assets/240129-the-knitter.B0aVC3K7.avif 1428w",
    webp: "/_app/immutable/assets/240129-the-knitter.Q082a33S.webp 714w, /_app/immutable/assets/240129-the-knitter.CgMWdYq2.webp 1428w",
    jpeg: "/_app/immutable/assets/240129-the-knitter.DjoW2J3b.jpeg 714w, /_app/immutable/assets/240129-the-knitter.Bczvwx4L.jpeg 1428w"
  },
  img: {
    src: "/_app/immutable/assets/240129-the-knitter.Bczvwx4L.jpeg",
    w: 1428,
    h: 1904
  }
};
const __vite_glob_0_95 = {
  sources: {
    avif: "/_app/immutable/assets/240204-blue-earrings.vW-ZH4Qv.avif 714w, /_app/immutable/assets/240204-blue-earrings.CmaUcNgD.avif 1428w",
    webp: "/_app/immutable/assets/240204-blue-earrings.wPkiW0kG.webp 714w, /_app/immutable/assets/240204-blue-earrings.Bm4nAxs1.webp 1428w",
    jpeg: "/_app/immutable/assets/240204-blue-earrings.sjToOcLl.jpeg 714w, /_app/immutable/assets/240204-blue-earrings.CmaaXNCl.jpeg 1428w"
  },
  img: {
    src: "/_app/immutable/assets/240204-blue-earrings.CmaaXNCl.jpeg",
    w: 1428,
    h: 1904
  }
};
const __vite_glob_0_96 = {
  sources: {
    avif: "/_app/immutable/assets/240402_decided-to-challenge_counter.CDU2VM4F.avif 225w, /_app/immutable/assets/240402_decided-to-challenge_counter.gWsnuNyB.avif 450w",
    webp: "/_app/immutable/assets/240402_decided-to-challenge_counter.DVWthUt_.webp 225w, /_app/immutable/assets/240402_decided-to-challenge_counter.Dj3PFpRI.webp 450w",
    jpeg: "/_app/immutable/assets/240402_decided-to-challenge_counter.DHdQPFKH.jpeg 225w, /_app/immutable/assets/240402_decided-to-challenge_counter._iZkRwRT.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/240402_decided-to-challenge_counter._iZkRwRT.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_97 = {
  sources: {
    avif: "/_app/immutable/assets/240413_yet-more-phones_counter.DLFy-M6x.avif 225w, /_app/immutable/assets/240413_yet-more-phones_counter.DHHlhuWD.avif 450w",
    webp: "/_app/immutable/assets/240413_yet-more-phones_counter.BrIX-JCl.webp 225w, /_app/immutable/assets/240413_yet-more-phones_counter.BvnDcp_j.webp 450w",
    jpeg: "/_app/immutable/assets/240413_yet-more-phones_counter.BO6KrAge.jpeg 225w, /_app/immutable/assets/240413_yet-more-phones_counter.DkqQwYtz.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/240413_yet-more-phones_counter.DkqQwYtz.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_98 = {
  sources: {
    avif: "/_app/immutable/assets/240415_morning-coffee_counter.Bn_IRS8Z.avif 225w, /_app/immutable/assets/240415_morning-coffee_counter.B_sYEB7x.avif 450w",
    webp: "/_app/immutable/assets/240415_morning-coffee_counter.Dw8W6yBR.webp 225w, /_app/immutable/assets/240415_morning-coffee_counter.CmoHIbip.webp 450w",
    jpeg: "/_app/immutable/assets/240415_morning-coffee_counter.DYe0hUsu.jpeg 225w, /_app/immutable/assets/240415_morning-coffee_counter.BnbLqv1e.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/240415_morning-coffee_counter.BnbLqv1e.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_99 = {
  sources: {
    avif: "/_app/immutable/assets/240417_morning-coffee_counter.DsPAMLmN.avif 225w, /_app/immutable/assets/240417_morning-coffee_counter.BVyUY_Gu.avif 450w",
    webp: "/_app/immutable/assets/240417_morning-coffee_counter.CCZ6AgcQ.webp 225w, /_app/immutable/assets/240417_morning-coffee_counter.BSKtEqsx.webp 450w",
    jpeg: "/_app/immutable/assets/240417_morning-coffee_counter.B6l3F6wd.jpeg 225w, /_app/immutable/assets/240417_morning-coffee_counter.BCWuvWxA.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/240417_morning-coffee_counter.BCWuvWxA.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_100 = {
  sources: {
    avif: "/_app/immutable/assets/240418_red-and-yellow_counter.D7qAaiPC.avif 225w, /_app/immutable/assets/240418_red-and-yellow_counter.D1ER2ogp.avif 450w",
    webp: "/_app/immutable/assets/240418_red-and-yellow_counter.Lkw_Drqf.webp 225w, /_app/immutable/assets/240418_red-and-yellow_counter.A2PKlhxS.webp 450w",
    jpeg: "/_app/immutable/assets/240418_red-and-yellow_counter.BdQfqLJZ.jpeg 225w, /_app/immutable/assets/240418_red-and-yellow_counter.CQlp2Htq.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/240418_red-and-yellow_counter.CQlp2Htq.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_101 = {
  sources: {
    avif: "/_app/immutable/assets/240422_i-scribbled-a_0.bvLKa4mp.avif 300w, /_app/immutable/assets/240422_i-scribbled-a_0.DUhXmqOl.avif 600w",
    webp: "/_app/immutable/assets/240422_i-scribbled-a_0.B_qY3HgS.webp 300w, /_app/immutable/assets/240422_i-scribbled-a_0.B2ha3PiU.webp 600w",
    jpeg: "/_app/immutable/assets/240422_i-scribbled-a_0.CO3NDryy.jpeg 300w, /_app/immutable/assets/240422_i-scribbled-a_0.CTFFmnVN.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/240422_i-scribbled-a_0.CTFFmnVN.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_102 = {
  sources: {
    avif: "/_app/immutable/assets/240425_its-getting-cold_0.C9IVqoHT.avif 300w, /_app/immutable/assets/240425_its-getting-cold_0.quXjxB-j.avif 600w",
    webp: "/_app/immutable/assets/240425_its-getting-cold_0.Bnks-hmv.webp 300w, /_app/immutable/assets/240425_its-getting-cold_0.BF3-IDKU.webp 600w",
    jpeg: "/_app/immutable/assets/240425_its-getting-cold_0.2QGEeORF.jpeg 300w, /_app/immutable/assets/240425_its-getting-cold_0.BAr_nKYu.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/240425_its-getting-cold_0.BAr_nKYu.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_103 = {
  sources: {
    avif: "/_app/immutable/assets/240425_its-getting-cold_1.D_kGGARc.avif 300w, /_app/immutable/assets/240425_its-getting-cold_1.Ce-wE80U.avif 600w",
    webp: "/_app/immutable/assets/240425_its-getting-cold_1.Bx6XecSI.webp 300w, /_app/immutable/assets/240425_its-getting-cold_1.Df-v7asz.webp 600w",
    jpeg: "/_app/immutable/assets/240425_its-getting-cold_1.BK_1yYuE.jpeg 300w, /_app/immutable/assets/240425_its-getting-cold_1.e9OIqniT.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/240425_its-getting-cold_1.e9OIqniT.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_104 = {
  sources: {
    avif: "/_app/immutable/assets/240427_maybe-i-should_0.Cg5BPNG4.avif 225w, /_app/immutable/assets/240427_maybe-i-should_0.BkpgdmHy.avif 450w",
    webp: "/_app/immutable/assets/240427_maybe-i-should_0.DRNJ-BZv.webp 225w, /_app/immutable/assets/240427_maybe-i-should_0.D5s3IaKC.webp 450w",
    jpeg: "/_app/immutable/assets/240427_maybe-i-should_0.vcJP73uQ.jpeg 225w, /_app/immutable/assets/240427_maybe-i-should_0.CRg-V0IF.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/240427_maybe-i-should_0.CRg-V0IF.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_105 = {
  sources: {
    avif: "/_app/immutable/assets/240507_i-got-a_0.RILnnG8O.avif 225w, /_app/immutable/assets/240507_i-got-a_0.BF8tmXm9.avif 450w",
    webp: "/_app/immutable/assets/240507_i-got-a_0.zmVRkFqp.webp 225w, /_app/immutable/assets/240507_i-got-a_0.Cz3r_8TZ.webp 450w",
    jpeg: "/_app/immutable/assets/240507_i-got-a_0.DeV9KXPR.jpeg 225w, /_app/immutable/assets/240507_i-got-a_0.CAjv8Rz1.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/240507_i-got-a_0.CAjv8Rz1.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_106 = {
  sources: {
    avif: "/_app/immutable/assets/240508_even-more-uggs_0.CxKySpHH.avif 225w, /_app/immutable/assets/240508_even-more-uggs_0.BeJQG0ZH.avif 450w",
    webp: "/_app/immutable/assets/240508_even-more-uggs_0.Cx3EsnBL.webp 225w, /_app/immutable/assets/240508_even-more-uggs_0.Dv3MjIXS.webp 450w",
    jpeg: "/_app/immutable/assets/240508_even-more-uggs_0.DFI5QDUe.jpeg 225w, /_app/immutable/assets/240508_even-more-uggs_0.Bzs9QB9W.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/240508_even-more-uggs_0.Bzs9QB9W.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_107 = {
  sources: {
    avif: "/_app/immutable/assets/240709_beating-the-heat_0.pQkqubRf.avif 300w, /_app/immutable/assets/240709_beating-the-heat_0.DV5Iod6-.avif 600w",
    webp: "/_app/immutable/assets/240709_beating-the-heat_0.DUdjUsNu.webp 300w, /_app/immutable/assets/240709_beating-the-heat_0.DstCMyqq.webp 600w",
    jpeg: "/_app/immutable/assets/240709_beating-the-heat_0.xhj2miTt.jpeg 300w, /_app/immutable/assets/240709_beating-the-heat_0.C61abwEj.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/240709_beating-the-heat_0.C61abwEj.jpeg",
    w: 600,
    h: 619
  }
};
const __vite_glob_0_108 = {
  sources: {
    avif: "/_app/immutable/assets/240710_had-another-crack_0.V0WNiajz.avif 300w, /_app/immutable/assets/240710_had-another-crack_0.C1vU9tfq.avif 600w",
    webp: "/_app/immutable/assets/240710_had-another-crack_0.DLSkS7zS.webp 300w, /_app/immutable/assets/240710_had-another-crack_0.YhIHp2z-.webp 600w",
    jpeg: "/_app/immutable/assets/240710_had-another-crack_0.CBPwZYC4.jpeg 300w, /_app/immutable/assets/240710_had-another-crack_0.C4hNRyfT.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/240710_had-another-crack_0.C4hNRyfT.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_109 = {
  sources: {
    avif: "/_app/immutable/assets/240711_last-full-day_0.DpA8uXt-.avif 300w, /_app/immutable/assets/240711_last-full-day_0.BlRW6Kvq.avif 600w",
    webp: "/_app/immutable/assets/240711_last-full-day_0.DMVSZUSS.webp 300w, /_app/immutable/assets/240711_last-full-day_0.BzmbCfQA.webp 600w",
    jpeg: "/_app/immutable/assets/240711_last-full-day_0.CU6IKHGD.jpeg 300w, /_app/immutable/assets/240711_last-full-day_0.Clw855ix.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/240711_last-full-day_0.Clw855ix.jpeg",
    w: 600,
    h: 641
  }
};
const __vite_glob_0_110 = {
  sources: {
    avif: "/_app/immutable/assets/240714_130013_0.C51ZVssC.avif 300w, /_app/immutable/assets/240714_130013_0.q_ulRL_6.avif 600w",
    webp: "/_app/immutable/assets/240714_130013_0.BsPLyHv4.webp 300w, /_app/immutable/assets/240714_130013_0.B3g1GlRd.webp 600w",
    jpeg: "/_app/immutable/assets/240714_130013_0.Dh6SP_4p.jpeg 300w, /_app/immutable/assets/240714_130013_0.B8WfN-mh.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/240714_130013_0.B8WfN-mh.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_111 = {
  sources: {
    avif: "/_app/immutable/assets/240714_escaping-the-hu_0.BxjiXl7H.avif 300w, /_app/immutable/assets/240714_escaping-the-hu_0.jPmgOGhS.avif 600w",
    webp: "/_app/immutable/assets/240714_escaping-the-hu_0.L3OQQdyC.webp 300w, /_app/immutable/assets/240714_escaping-the-hu_0.Db9cbGem.webp 600w",
    jpeg: "/_app/immutable/assets/240714_escaping-the-hu_0.CTsFYicJ.jpeg 300w, /_app/immutable/assets/240714_escaping-the-hu_0.Brk6_wF3.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/240714_escaping-the-hu_0.Brk6_wF3.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_112 = {
  sources: {
    avif: "/_app/immutable/assets/240718_sitting-in-a_0.Mabwnepq.avif 225w, /_app/immutable/assets/240718_sitting-in-a_0.CfqG2Cdh.avif 450w",
    webp: "/_app/immutable/assets/240718_sitting-in-a_0.SqRHCCc1.webp 225w, /_app/immutable/assets/240718_sitting-in-a_0.DgRg_tEf.webp 450w",
    jpeg: "/_app/immutable/assets/240718_sitting-in-a_0.DuKsIa0T.jpeg 225w, /_app/immutable/assets/240718_sitting-in-a_0.ALsvZ_6V.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/240718_sitting-in-a_0.ALsvZ_6V.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_113 = {
  sources: {
    avif: "/_app/immutable/assets/240719_pretty-sparkling-day_0.DUrZ777k.avif 225w, /_app/immutable/assets/240719_pretty-sparkling-day_0.BzXh-wQd.avif 450w",
    webp: "/_app/immutable/assets/240719_pretty-sparkling-day_0.BeuPitY1.webp 225w, /_app/immutable/assets/240719_pretty-sparkling-day_0.pKe3uIVI.webp 450w",
    jpeg: "/_app/immutable/assets/240719_pretty-sparkling-day_0.C7XKAkqc.jpeg 225w, /_app/immutable/assets/240719_pretty-sparkling-day_0.DEz-g30b.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/240719_pretty-sparkling-day_0.DEz-g30b.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_114 = {
  sources: {
    avif: "/_app/immutable/assets/240725_sending-a-whoooooole_0.BzOxVjrJ.avif 300w, /_app/immutable/assets/240725_sending-a-whoooooole_0.Cr9BT0Fy.avif 600w",
    webp: "/_app/immutable/assets/240725_sending-a-whoooooole_0.DX0pZ3YD.webp 300w, /_app/immutable/assets/240725_sending-a-whoooooole_0.BOr_leMn.webp 600w",
    jpeg: "/_app/immutable/assets/240725_sending-a-whoooooole_0.An7P_lDR.jpeg 300w, /_app/immutable/assets/240725_sending-a-whoooooole_0.D5v-euR9.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/240725_sending-a-whoooooole_0.D5v-euR9.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_115 = {
  sources: {
    avif: "/_app/immutable/assets/240726_food-here-has_0.DKLQw66h.avif 300w, /_app/immutable/assets/240726_food-here-has_0.CrdUiZA2.avif 600w",
    webp: "/_app/immutable/assets/240726_food-here-has_0.CQaq-QhX.webp 300w, /_app/immutable/assets/240726_food-here-has_0.DcCq0tCP.webp 600w",
    jpeg: "/_app/immutable/assets/240726_food-here-has_0.CdC70_Q4.jpeg 300w, /_app/immutable/assets/240726_food-here-has_0.BcX1P5gh.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/240726_food-here-has_0.BcX1P5gh.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_116 = {
  sources: {
    avif: "/_app/immutable/assets/240726_some-very-serious_0.Dk-ryilX.avif 300w, /_app/immutable/assets/240726_some-very-serious_0.DzRzGcYo.avif 600w",
    webp: "/_app/immutable/assets/240726_some-very-serious_0.BQ-qWIEX.webp 300w, /_app/immutable/assets/240726_some-very-serious_0.Cuf1eICO.webp 600w",
    jpeg: "/_app/immutable/assets/240726_some-very-serious_0.BXqRtZHZ.jpeg 300w, /_app/immutable/assets/240726_some-very-serious_0.D6Mo0tkj.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/240726_some-very-serious_0.D6Mo0tkj.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_117 = {
  sources: {
    avif: "/_app/immutable/assets/240727_we-went-on_0.Db4LKQrC.avif 300w, /_app/immutable/assets/240727_we-went-on_0.CUzn_KGu.avif 600w",
    webp: "/_app/immutable/assets/240727_we-went-on_0.BgqNEj02.webp 300w, /_app/immutable/assets/240727_we-went-on_0.CT75xD5n.webp 600w",
    jpeg: "/_app/immutable/assets/240727_we-went-on_0.DVQU9Pn-.jpeg 300w, /_app/immutable/assets/240727_we-went-on_0.DtrT_a9c.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/240727_we-went-on_0.DtrT_a9c.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_118 = {
  sources: {
    avif: "/_app/immutable/assets/240803_flicking-through-my_0.De-SmLpF.avif 300w, /_app/immutable/assets/240803_flicking-through-my_0.4nxYhhrM.avif 600w",
    webp: "/_app/immutable/assets/240803_flicking-through-my_0.BcpDWTYL.webp 300w, /_app/immutable/assets/240803_flicking-through-my_0.sBqbE3sB.webp 600w",
    jpeg: "/_app/immutable/assets/240803_flicking-through-my_0.CAXhdVPa.jpeg 300w, /_app/immutable/assets/240803_flicking-through-my_0.BfXvNNU9.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/240803_flicking-through-my_0.BfXvNNU9.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_119 = {
  sources: {
    avif: "/_app/immutable/assets/24GnT0.CrccX9pu.avif 1200w, /_app/immutable/assets/24GnT0.C0FR6uoD.avif 2400w",
    webp: "/_app/immutable/assets/24GnT0.D1qXDo55.webp 1200w, /_app/immutable/assets/24GnT0.BxzeuRan.webp 2400w",
    jpeg: "/_app/immutable/assets/24GnT0.CiCwojgp.jpeg 1200w, /_app/immutable/assets/24GnT0.Lh5O5pdR.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/24GnT0.Lh5O5pdR.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_120 = {
  sources: {
    avif: "/_app/immutable/assets/25OhDahvid8.B4zDxA2S.avif 1200w, /_app/immutable/assets/25OhDahvid8.B9g2QNf5.avif 2400w",
    webp: "/_app/immutable/assets/25OhDahvid8.CxLVYF68.webp 1200w, /_app/immutable/assets/25OhDahvid8.B3TVRKI2.webp 2400w",
    jpeg: "/_app/immutable/assets/25OhDahvid8.BCt22Ydb.jpeg 1200w, /_app/immutable/assets/25OhDahvid8.CBl6DPXP.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/25OhDahvid8.CBl6DPXP.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_121 = {
  sources: {
    avif: "/_app/immutable/assets/26Thespace5.CKBWpN8g.avif 1000w, /_app/immutable/assets/26Thespace5.B2fZf9pm.avif 2000w",
    webp: "/_app/immutable/assets/26Thespace5.CmnAxD97.webp 1000w, /_app/immutable/assets/26Thespace5.zFpUpoPu.webp 2000w",
    jpeg: "/_app/immutable/assets/26Thespace5.CQLZqa6U.jpeg 1000w, /_app/immutable/assets/26Thespace5.CFXtwmC7.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/26Thespace5.CFXtwmC7.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_122 = {
  sources: {
    avif: "/_app/immutable/assets/27Keepsgoing6.B2YSuXuV.avif 682w, /_app/immutable/assets/27Keepsgoing6.DFLs3WXG.avif 1364w",
    webp: "/_app/immutable/assets/27Keepsgoing6.vawgii_o.webp 682w, /_app/immutable/assets/27Keepsgoing6.CoT7Bryy.webp 1364w",
    jpeg: "/_app/immutable/assets/27Keepsgoing6.D6SnVQQy.jpeg 682w, /_app/immutable/assets/27Keepsgoing6.D2FZUPNw.jpeg 1364w"
  },
  img: {
    src: "/_app/immutable/assets/27Keepsgoing6.D2FZUPNw.jpeg",
    w: 1364,
    h: 1775
  }
};
const __vite_glob_0_123 = {
  sources: {
    avif: "/_app/immutable/assets/28Lockdowndaywhatever5.CKcFTx-w.avif 256w, /_app/immutable/assets/28Lockdowndaywhatever5.J4-9rK5K.avif 512w",
    webp: "/_app/immutable/assets/28Lockdowndaywhatever5.C14_cwU8.webp 256w, /_app/immutable/assets/28Lockdowndaywhatever5.4eEbvkaR.webp 512w",
    png: "/_app/immutable/assets/28Lockdowndaywhatever5.ZlOCuzgz.png 256w, /_app/immutable/assets/28Lockdowndaywhatever5.BV2vDdWH.png 512w"
  },
  img: {
    src: "/_app/immutable/assets/28Lockdowndaywhatever5.BV2vDdWH.png",
    w: 512,
    h: 682
  }
};
const __vite_glob_0_124 = {
  sources: {
    avif: "/_app/immutable/assets/29Subjectsstartingtorundry2.CV7QZtoD.avif 653w, /_app/immutable/assets/29Subjectsstartingtorundry2.oJWgXGFi.avif 1305w",
    webp: "/_app/immutable/assets/29Subjectsstartingtorundry2.C_3t-tE-.webp 653w, /_app/immutable/assets/29Subjectsstartingtorundry2.CeodBodz.webp 1305w",
    jpeg: "/_app/immutable/assets/29Subjectsstartingtorundry2.KKrwI0J0.jpeg 653w, /_app/immutable/assets/29Subjectsstartingtorundry2.Pt2-h0eK.jpeg 1305w"
  },
  img: {
    src: "/_app/immutable/assets/29Subjectsstartingtorundry2.Pt2-h0eK.jpeg",
    w: 1305,
    h: 1148
  }
};
const __vite_glob_0_125 = {
  sources: {
    avif: "/_app/immutable/assets/2Yorkedd-1.BSN84wgx.avif 1200w, /_app/immutable/assets/2Yorkedd-1.x35h5Rdn.avif 2400w",
    webp: "/_app/immutable/assets/2Yorkedd-1.DUXIKXQR.webp 1200w, /_app/immutable/assets/2Yorkedd-1.BYc7nfVV.webp 2400w",
    jpeg: "/_app/immutable/assets/2Yorkedd-1.DnKin9Mt.jpeg 1200w, /_app/immutable/assets/2Yorkedd-1.BGvueam5.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/2Yorkedd-1.BGvueam5.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_126 = {
  sources: {
    avif: "/_app/immutable/assets/2c0c21041c.DZPaDo0_.avif 300w, /_app/immutable/assets/2c0c21041c.C-nz1WsL.avif 600w",
    webp: "/_app/immutable/assets/2c0c21041c.mwmcQibk.webp 300w, /_app/immutable/assets/2c0c21041c.DkWKxB0q.webp 600w",
    jpeg: "/_app/immutable/assets/2c0c21041c.C6n37E7w.jpeg 300w, /_app/immutable/assets/2c0c21041c.D3YQPYaJ.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/2c0c21041c.D3YQPYaJ.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_127 = {
  sources: {
    avif: "/_app/immutable/assets/2f484d4367.BnkrX7jx.avif 300w, /_app/immutable/assets/2f484d4367.CezKv5PV.avif 600w",
    webp: "/_app/immutable/assets/2f484d4367.CVhv3lqA.webp 300w, /_app/immutable/assets/2f484d4367.CTsJtGhc.webp 600w",
    jpeg: "/_app/immutable/assets/2f484d4367.Bx50t2cA.jpeg 300w, /_app/immutable/assets/2f484d4367.019_p461.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/2f484d4367.019_p461.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_128 = {
  sources: {
    avif: "/_app/immutable/assets/2f5ec9184a.DmeTwfb6.avif 300w, /_app/immutable/assets/2f5ec9184a.DginYyIf.avif 600w",
    webp: "/_app/immutable/assets/2f5ec9184a.BuynIA4X.webp 300w, /_app/immutable/assets/2f5ec9184a.BQsJlHG_.webp 600w",
    jpeg: "/_app/immutable/assets/2f5ec9184a.BSbH1uIS.jpeg 300w, /_app/immutable/assets/2f5ec9184a.-E-EjLS1.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/2f5ec9184a.-E-EjLS1.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_129 = {
  sources: {
    avif: "/_app/immutable/assets/30Painpoint4.CaoNDG_c.avif 768w, /_app/immutable/assets/30Painpoint4.BmHArtBt.avif 1536w",
    webp: "/_app/immutable/assets/30Painpoint4.Pvoz2usB.webp 768w, /_app/immutable/assets/30Painpoint4.D2FhFhzE.webp 1536w",
    png: "/_app/immutable/assets/30Painpoint4.DdwMQek5.png 768w, /_app/immutable/assets/30Painpoint4.C06RxNxb.png 1536w"
  },
  img: {
    src: "/_app/immutable/assets/30Painpoint4.C06RxNxb.png",
    w: 1536,
    h: 2048
  }
};
const __vite_glob_0_130 = {
  sources: {
    avif: "/_app/immutable/assets/31Scribblingtomediocrity3.Cna5Sv6Z.avif 256w, /_app/immutable/assets/31Scribblingtomediocrity3.kVgvwovr.avif 512w",
    webp: "/_app/immutable/assets/31Scribblingtomediocrity3.CapajwZ6.webp 256w, /_app/immutable/assets/31Scribblingtomediocrity3.CIKBbUaR.webp 512w",
    png: "/_app/immutable/assets/31Scribblingtomediocrity3.EBY4x9OU.png 256w, /_app/immutable/assets/31Scribblingtomediocrity3.CIXRmRS0.png 512w"
  },
  img: {
    src: "/_app/immutable/assets/31Scribblingtomediocrity3.CIXRmRS0.png",
    w: 512,
    h: 682
  }
};
const __vite_glob_0_131 = {
  sources: {
    avif: "/_app/immutable/assets/32Elementary0.C6SyEJ79.avif 768w, /_app/immutable/assets/32Elementary0.BKxw2TfU.avif 1535w",
    webp: "/_app/immutable/assets/32Elementary0.CSR2BSlD.webp 768w, /_app/immutable/assets/32Elementary0.CtqlZPbJ.webp 1535w",
    jpeg: "/_app/immutable/assets/32Elementary0.DCBCPNiv.jpeg 768w, /_app/immutable/assets/32Elementary0.ul9lExQD.jpeg 1535w"
  },
  img: {
    src: "/_app/immutable/assets/32Elementary0.ul9lExQD.jpeg",
    w: 1535,
    h: 1664
  }
};
const __vite_glob_0_132 = {
  sources: {
    avif: "/_app/immutable/assets/33AtticusPunding5.7X_4XwPi.avif 256w, /_app/immutable/assets/33AtticusPunding5.jLYCFjqN.avif 512w",
    webp: "/_app/immutable/assets/33AtticusPunding5.DxNoyVvx.webp 256w, /_app/immutable/assets/33AtticusPunding5.MA4eJoq6.webp 512w",
    png: "/_app/immutable/assets/33AtticusPunding5.GvURlZMm.png 256w, /_app/immutable/assets/33AtticusPunding5.DM0Z8YVB.png 512w"
  },
  img: {
    src: "/_app/immutable/assets/33AtticusPunding5.DM0Z8YVB.png",
    w: 512,
    h: 682
  }
};
const __vite_glob_0_133 = {
  sources: {
    avif: "/_app/immutable/assets/34Purpleperiod8.B6F2_91I.avif 256w, /_app/immutable/assets/34Purpleperiod8.DXX8ccfP.avif 512w",
    webp: "/_app/immutable/assets/34Purpleperiod8.LtWlBhsx.webp 256w, /_app/immutable/assets/34Purpleperiod8.OiGIyCwk.webp 512w",
    png: "/_app/immutable/assets/34Purpleperiod8.CUqXzu0Y.png 256w, /_app/immutable/assets/34Purpleperiod8.DY0XrDKu.png 512w"
  },
  img: {
    src: "/_app/immutable/assets/34Purpleperiod8.DY0XrDKu.png",
    w: 512,
    h: 682
  }
};
const __vite_glob_0_134 = {
  sources: {
    avif: "/_app/immutable/assets/35Attheembassy3.B9mtt1Z3.avif 628w, /_app/immutable/assets/35Attheembassy3.j5yBL9Ut.avif 1255w",
    webp: "/_app/immutable/assets/35Attheembassy3.B0PuwaYP.webp 628w, /_app/immutable/assets/35Attheembassy3.BqYUBii_.webp 1255w",
    jpeg: "/_app/immutable/assets/35Attheembassy3.B3KZQ_XX.jpeg 628w, /_app/immutable/assets/35Attheembassy3.Bc7du6vD.jpeg 1255w"
  },
  img: {
    src: "/_app/immutable/assets/35Attheembassy3.Bc7du6vD.jpeg",
    w: 1255,
    h: 1717
  }
};
const __vite_glob_0_135 = {
  sources: {
    avif: "/_app/immutable/assets/36Financier2.CKrOF2y0.avif 606w, /_app/immutable/assets/36Financier2.CPFuubSB.avif 1212w",
    webp: "/_app/immutable/assets/36Financier2.BLm5gNLK.webp 606w, /_app/immutable/assets/36Financier2.S2nbthEI.webp 1212w",
    jpeg: "/_app/immutable/assets/36Financier2.B8tCz3Be.jpeg 606w, /_app/immutable/assets/36Financier2.BdIa7fxB.jpeg 1212w"
  },
  img: {
    src: "/_app/immutable/assets/36Financier2.BdIa7fxB.jpeg",
    w: 1212,
    h: 1693
  }
};
const __vite_glob_0_136 = {
  sources: {
    avif: "/_app/immutable/assets/38Britishcarday0.CH5fWicU.avif 1200w, /_app/immutable/assets/38Britishcarday0.DC33LZgo.avif 2400w",
    webp: "/_app/immutable/assets/38Britishcarday0.ChDBhX55.webp 1200w, /_app/immutable/assets/38Britishcarday0.CtL1C7_1.webp 2400w",
    jpeg: "/_app/immutable/assets/38Britishcarday0.DptmRl-a.jpeg 1200w, /_app/immutable/assets/38Britishcarday0.CV-afvMZ.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/38Britishcarday0.CV-afvMZ.jpeg",
    w: 2400,
    h: 1800
  }
};
const __vite_glob_0_137 = {
  sources: {
    avif: "/_app/immutable/assets/39Doesn-tlikegreentea6.D4N3YoGc.avif 1200w, /_app/immutable/assets/39Doesn-tlikegreentea6.CIi0FW5j.avif 2400w",
    webp: "/_app/immutable/assets/39Doesn-tlikegreentea6.BR2Ko6Sl.webp 1200w, /_app/immutable/assets/39Doesn-tlikegreentea6.BDUkhoO8.webp 2400w",
    jpeg: "/_app/immutable/assets/39Doesn-tlikegreentea6.D7ot2sBN.jpeg 1200w, /_app/immutable/assets/39Doesn-tlikegreentea6.-wPPBN0o.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/39Doesn-tlikegreentea6.-wPPBN0o.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_138 = {
  sources: {
    avif: "/_app/immutable/assets/3Bitexxyd.Dh7-rKSt.avif 1200w, /_app/immutable/assets/3Bitexxyd.PgRNY8iH.avif 2400w",
    webp: "/_app/immutable/assets/3Bitexxyd.CP_kjFQV.webp 1200w, /_app/immutable/assets/3Bitexxyd.B7p2usUX.webp 2400w",
    jpeg: "/_app/immutable/assets/3Bitexxyd.oOcMqKg_.jpeg 1200w, /_app/immutable/assets/3Bitexxyd.D1eE81ui.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/3Bitexxyd.D1eE81ui.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_139 = {
  sources: {
    avif: "/_app/immutable/assets/40Whyarehandssohard-6.IW2Jseax.avif 1000w, /_app/immutable/assets/40Whyarehandssohard-6.DTsBzQKI.avif 2000w",
    webp: "/_app/immutable/assets/40Whyarehandssohard-6.D9Xy611n.webp 1000w, /_app/immutable/assets/40Whyarehandssohard-6.CkFNT_YJ.webp 2000w",
    jpeg: "/_app/immutable/assets/40Whyarehandssohard-6.BkC0b2-W.jpeg 1000w, /_app/immutable/assets/40Whyarehandssohard-6.CY1LmUj5.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/40Whyarehandssohard-6.CY1LmUj5.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_140 = {
  sources: {
    avif: "/_app/immutable/assets/41Mouseinprofile2.BBzWuQtS.avif 400w, /_app/immutable/assets/41Mouseinprofile2.DZXl3tb6.avif 800w",
    webp: "/_app/immutable/assets/41Mouseinprofile2.Xd7gSpPT.webp 400w, /_app/immutable/assets/41Mouseinprofile2.SpZTUpvu.webp 800w",
    jpeg: "/_app/immutable/assets/41Mouseinprofile2.Dalmqp_U.jpeg 400w, /_app/immutable/assets/41Mouseinprofile2.BeMZfg5d.jpeg 800w"
  },
  img: {
    src: "/_app/immutable/assets/41Mouseinprofile2.BeMZfg5d.jpeg",
    w: 800,
    h: 1066
  }
};
const __vite_glob_0_141 = {
  sources: {
    avif: "/_app/immutable/assets/42Cafecat1.HnzdlD1a.avif 400w, /_app/immutable/assets/42Cafecat1.CeqoIxbN.avif 800w",
    webp: "/_app/immutable/assets/42Cafecat1.DGbciBue.webp 400w, /_app/immutable/assets/42Cafecat1.CcyMnRH4.webp 800w",
    jpeg: "/_app/immutable/assets/42Cafecat1.DWORWagP.jpeg 400w, /_app/immutable/assets/42Cafecat1.BKI1pOLC.jpeg 800w"
  },
  img: {
    src: "/_app/immutable/assets/42Cafecat1.BKI1pOLC.jpeg",
    w: 800,
    h: 1066
  }
};
const __vite_glob_0_142 = {
  sources: {
    avif: "/_app/immutable/assets/43Liltree6.BYPBkRiQ.avif 1200w, /_app/immutable/assets/43Liltree6.BsG2eb0e.avif 2400w",
    webp: "/_app/immutable/assets/43Liltree6.BqGrXEsI.webp 1200w, /_app/immutable/assets/43Liltree6.nsBUGQX0.webp 2400w",
    jpeg: "/_app/immutable/assets/43Liltree6.BO28lm3b.jpeg 1200w, /_app/immutable/assets/43Liltree6.B1Us0jPX.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/43Liltree6.B1Us0jPX.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_143 = {
  sources: {
    avif: "/_app/immutable/assets/449685c884.ewccADd-.avif 300w, /_app/immutable/assets/449685c884.Cco_nonU.avif 600w",
    webp: "/_app/immutable/assets/449685c884.D3sZUegM.webp 300w, /_app/immutable/assets/449685c884.B6EdT0-W.webp 600w",
    jpeg: "/_app/immutable/assets/449685c884.D-NxHQYE.jpeg 300w, /_app/immutable/assets/449685c884.Bm8Juwyc.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/449685c884.Bm8Juwyc.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_144 = {
  sources: {
    avif: "/_app/immutable/assets/44ArrivedinBangkok1.DdRXEm2k.avif 1200w, /_app/immutable/assets/44ArrivedinBangkok1.Do7gdbA-.avif 2400w",
    webp: "/_app/immutable/assets/44ArrivedinBangkok1.3oENifhf.webp 1200w, /_app/immutable/assets/44ArrivedinBangkok1.-ZtFia_1.webp 2400w",
    jpeg: "/_app/immutable/assets/44ArrivedinBangkok1.DTOUpiST.jpeg 1200w, /_app/immutable/assets/44ArrivedinBangkok1.BxLXRLGF.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/44ArrivedinBangkok1.BxLXRLGF.jpeg",
    w: 2400,
    h: 3077
  }
};
const __vite_glob_0_145 = {
  sources: {
    avif: "/_app/immutable/assets/4561_2023_7e4c61a426.yKkjxrkz.avif 500w, /_app/immutable/assets/4561_2023_7e4c61a426.mCGMVPrr.avif 1000w",
    webp: "/_app/immutable/assets/4561_2023_7e4c61a426.CLyAeIVG.webp 500w, /_app/immutable/assets/4561_2023_7e4c61a426.BBvYQGcM.webp 1000w",
    jpeg: "/_app/immutable/assets/4561_2023_7e4c61a426.DsVelSeE.jpeg 500w, /_app/immutable/assets/4561_2023_7e4c61a426.CPrgzrt4.jpeg 1000w"
  },
  img: {
    src: "/_app/immutable/assets/4561_2023_7e4c61a426.CPrgzrt4.jpeg",
    w: 1e3,
    h: 1333
  }
};
const __vite_glob_0_146 = {
  sources: {
    avif: "/_app/immutable/assets/45IwenttoafarminSiemReap-3.5tkxBXYf.avif 1000w, /_app/immutable/assets/45IwenttoafarminSiemReap-3.Dm1KaxvB.avif 2000w",
    webp: "/_app/immutable/assets/45IwenttoafarminSiemReap-3.BaAOzt2w.webp 1000w, /_app/immutable/assets/45IwenttoafarminSiemReap-3.C_WTVyXF.webp 2000w",
    jpeg: "/_app/immutable/assets/45IwenttoafarminSiemReap-3.BSE9cJVb.jpeg 1000w, /_app/immutable/assets/45IwenttoafarminSiemReap-3.YuOQ9UJU.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/45IwenttoafarminSiemReap-3.YuOQ9UJU.jpeg",
    w: 2e3,
    h: 2824
  }
};
const __vite_glob_0_147 = {
  sources: {
    avif: "/_app/immutable/assets/48887f9617.BgoQgezu.avif 300w, /_app/immutable/assets/48887f9617.Coap2QGQ.avif 600w",
    webp: "/_app/immutable/assets/48887f9617.3jFaiX8g.webp 300w, /_app/immutable/assets/48887f9617.2M_MHK45.webp 600w",
    jpeg: "/_app/immutable/assets/48887f9617.CeoM5-27.jpeg 300w, /_app/immutable/assets/48887f9617.Mz9-Zh48.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/48887f9617.Mz9-Zh48.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_148 = {
  sources: {
    avif: "/_app/immutable/assets/48Reallylovingtheremorque-sinCambodia1.DLKcHB36.avif 1200w, /_app/immutable/assets/48Reallylovingtheremorque-sinCambodia1.DdVtowea.avif 2400w",
    webp: "/_app/immutable/assets/48Reallylovingtheremorque-sinCambodia1.kxMUNVR5.webp 1200w, /_app/immutable/assets/48Reallylovingtheremorque-sinCambodia1.Dfh7ThWu.webp 2400w",
    jpeg: "/_app/immutable/assets/48Reallylovingtheremorque-sinCambodia1.ClM8j3dd.jpeg 1200w, /_app/immutable/assets/48Reallylovingtheremorque-sinCambodia1.CV-shiPh.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/48Reallylovingtheremorque-sinCambodia1.CV-shiPh.jpeg",
    w: 2400,
    h: 1505
  }
};
const __vite_glob_0_149 = {
  sources: {
    avif: "/_app/immutable/assets/4ahoandmaho1.Dt5Q4aqT.avif 1200w, /_app/immutable/assets/4ahoandmaho1.arSESQ83.avif 2400w",
    webp: "/_app/immutable/assets/4ahoandmaho1.92t9pkD9.webp 1200w, /_app/immutable/assets/4ahoandmaho1.Dq24aQS9.webp 2400w",
    jpeg: "/_app/immutable/assets/4ahoandmaho1.BhK9np_W.jpeg 1200w, /_app/immutable/assets/4ahoandmaho1.C9An6VFJ.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/4ahoandmaho1.C9An6VFJ.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_150 = {
  sources: {
    avif: "/_app/immutable/assets/4c11f1c672.PAKZ-cBT.avif 300w, /_app/immutable/assets/4c11f1c672.CyxyKf9T.avif 600w",
    webp: "/_app/immutable/assets/4c11f1c672.D-b-Uf-A.webp 300w, /_app/immutable/assets/4c11f1c672.arP43cCI.webp 600w",
    jpeg: "/_app/immutable/assets/4c11f1c672.ChpHb6pz.jpeg 300w, /_app/immutable/assets/4c11f1c672.ZA1Vjk5F.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/4c11f1c672.ZA1Vjk5F.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_151 = {
  sources: {
    avif: "/_app/immutable/assets/51SomemorefromAngkorThom8.DYSpFAoL.avif 1200w, /_app/immutable/assets/51SomemorefromAngkorThom8.BfVtqvEb.avif 2400w",
    webp: "/_app/immutable/assets/51SomemorefromAngkorThom8.CcC8GP1q.webp 1200w, /_app/immutable/assets/51SomemorefromAngkorThom8.CheWFCnN.webp 2400w",
    jpeg: "/_app/immutable/assets/51SomemorefromAngkorThom8.hWVQ-OUM.jpeg 1200w, /_app/immutable/assets/51SomemorefromAngkorThom8.CwwcYvh0.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/51SomemorefromAngkorThom8.CwwcYvh0.jpeg",
    w: 2400,
    h: 1800
  }
};
const __vite_glob_0_152 = {
  sources: {
    avif: "/_app/immutable/assets/524827789a.C3tUErv7.avif 300w, /_app/immutable/assets/524827789a.BfCUDn6I.avif 600w",
    webp: "/_app/immutable/assets/524827789a.CcnlXfCN.webp 300w, /_app/immutable/assets/524827789a.rMeLoC64.webp 600w",
    jpeg: "/_app/immutable/assets/524827789a.BoEKdm3Y.jpeg 300w, /_app/immutable/assets/524827789a.BLQhCJmY.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/524827789a.BLQhCJmY.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_153 = {
  sources: {
    avif: "/_app/immutable/assets/53973A7F-F147-46CB-ADEC-4D01A774C743_1_105_c.Be4N3_oQ.avif 512w, /_app/immutable/assets/53973A7F-F147-46CB-ADEC-4D01A774C743_1_105_c.BnQTwODy.avif 1024w",
    webp: "/_app/immutable/assets/53973A7F-F147-46CB-ADEC-4D01A774C743_1_105_c.B7yU6zU8.webp 512w, /_app/immutable/assets/53973A7F-F147-46CB-ADEC-4D01A774C743_1_105_c.C1QjuCwZ.webp 1024w",
    jpeg: "/_app/immutable/assets/53973A7F-F147-46CB-ADEC-4D01A774C743_1_105_c.C3w9nolP.jpeg 512w, /_app/immutable/assets/53973A7F-F147-46CB-ADEC-4D01A774C743_1_105_c.BathfwUU.jpeg 1024w"
  },
  img: {
    src: "/_app/immutable/assets/53973A7F-F147-46CB-ADEC-4D01A774C743_1_105_c.BathfwUU.jpeg",
    w: 1024,
    h: 768
  }
};
const __vite_glob_0_154 = {
  sources: {
    avif: "/_app/immutable/assets/53AngkorThomtoday3.Bc__8MoT.avif 1200w, /_app/immutable/assets/53AngkorThomtoday3.BYAl9s0D.avif 2400w",
    webp: "/_app/immutable/assets/53AngkorThomtoday3.DpZkcdQI.webp 1200w, /_app/immutable/assets/53AngkorThomtoday3.VdUbSJt1.webp 2400w",
    jpeg: "/_app/immutable/assets/53AngkorThomtoday3.zYy5_y4O.jpeg 1200w, /_app/immutable/assets/53AngkorThomtoday3.C7lmKUC_.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/53AngkorThomtoday3.C7lmKUC_.jpeg",
    w: 2400,
    h: 1652
  }
};
const __vite_glob_0_155 = {
  sources: {
    avif: "/_app/immutable/assets/53DAF7A4-8DEB-403E-B082-51E949B9EB8A_1_105_c.ysT0fhD7.avif 384w, /_app/immutable/assets/53DAF7A4-8DEB-403E-B082-51E949B9EB8A_1_105_c.tQGQz8Sc.avif 768w",
    webp: "/_app/immutable/assets/53DAF7A4-8DEB-403E-B082-51E949B9EB8A_1_105_c.CFkTthMD.webp 384w, /_app/immutable/assets/53DAF7A4-8DEB-403E-B082-51E949B9EB8A_1_105_c.DjOR3Iw8.webp 768w",
    jpeg: "/_app/immutable/assets/53DAF7A4-8DEB-403E-B082-51E949B9EB8A_1_105_c.BOpoizgI.jpeg 384w, /_app/immutable/assets/53DAF7A4-8DEB-403E-B082-51E949B9EB8A_1_105_c.BSgiAKbZ.jpeg 768w"
  },
  img: {
    src: "/_app/immutable/assets/53DAF7A4-8DEB-403E-B082-51E949B9EB8A_1_105_c.BSgiAKbZ.jpeg",
    w: 768,
    h: 1024
  }
};
const __vite_glob_0_156 = {
  sources: {
    avif: "/_app/immutable/assets/54b6324344.Cwb3PFAv.avif 300w, /_app/immutable/assets/54b6324344.BFPpuaru.avif 600w",
    webp: "/_app/immutable/assets/54b6324344.DeaYYPaj.webp 300w, /_app/immutable/assets/54b6324344.CPhNLsvt.webp 600w",
    jpeg: "/_app/immutable/assets/54b6324344.Bb70r1pg.jpeg 300w, /_app/immutable/assets/54b6324344.D8HLlrzh.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/54b6324344.D8HLlrzh.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_157 = {
  sources: {
    avif: "/_app/immutable/assets/55More-from-around-Angkor-Wat1.CBblVXBX.avif 1200w, /_app/immutable/assets/55More-from-around-Angkor-Wat1.DzbmOfEe.avif 2400w",
    webp: "/_app/immutable/assets/55More-from-around-Angkor-Wat1.Dmmkqz3v.webp 1200w, /_app/immutable/assets/55More-from-around-Angkor-Wat1.DD80-lLU.webp 2400w",
    jpeg: "/_app/immutable/assets/55More-from-around-Angkor-Wat1.DJi0e4Cl.jpeg 1200w, /_app/immutable/assets/55More-from-around-Angkor-Wat1.DquTpItF.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/55More-from-around-Angkor-Wat1.DquTpItF.jpeg",
    w: 2400,
    h: 1800
  }
};
const __vite_glob_0_158 = {
  sources: {
    avif: "/_app/immutable/assets/56FinallymadeittoAngkorWat3.EDMQTSsy.avif 1200w, /_app/immutable/assets/56FinallymadeittoAngkorWat3.CMwxpteo.avif 2400w",
    webp: "/_app/immutable/assets/56FinallymadeittoAngkorWat3.BGqnJD4d.webp 1200w, /_app/immutable/assets/56FinallymadeittoAngkorWat3.BtOiNX95.webp 2400w",
    jpeg: "/_app/immutable/assets/56FinallymadeittoAngkorWat3.BHIZ_Zqr.jpeg 1200w, /_app/immutable/assets/56FinallymadeittoAngkorWat3.DVeF14IN.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/56FinallymadeittoAngkorWat3.DVeF14IN.jpeg",
    w: 2400,
    h: 1473
  }
};
const __vite_glob_0_159 = {
  sources: {
    avif: "/_app/immutable/assets/58Reflections-on-a-thousand-Buddhas9.Dlgv_YKE.avif 1200w, /_app/immutable/assets/58Reflections-on-a-thousand-Buddhas9.CdFIf0c0.avif 2400w",
    webp: "/_app/immutable/assets/58Reflections-on-a-thousand-Buddhas9.CHxpQd4x.webp 1200w, /_app/immutable/assets/58Reflections-on-a-thousand-Buddhas9.DLfvZR_U.webp 2400w",
    jpeg: "/_app/immutable/assets/58Reflections-on-a-thousand-Buddhas9.BhzHK7mr.jpeg 1200w, /_app/immutable/assets/58Reflections-on-a-thousand-Buddhas9.CiRa022A.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/58Reflections-on-a-thousand-Buddhas9.CiRa022A.jpeg",
    w: 2400,
    h: 3247
  }
};
const __vite_glob_0_160 = {
  sources: {
    avif: "/_app/immutable/assets/58f2b47be4.0zrcZmR5.avif 300w, /_app/immutable/assets/58f2b47be4.CQp6PWkD.avif 600w",
    webp: "/_app/immutable/assets/58f2b47be4.DdRw0tsh.webp 300w, /_app/immutable/assets/58f2b47be4.4cf1FK_6.webp 600w",
    jpeg: "/_app/immutable/assets/58f2b47be4.jyLCMay-.jpeg 300w, /_app/immutable/assets/58f2b47be4.DCgX6eym.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/58f2b47be4.DCgX6eym.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_161 = {
  sources: {
    avif: "/_app/immutable/assets/59Thinkthere-samonasteryattheendofmystreet0.BQhWpbae.avif 1200w, /_app/immutable/assets/59Thinkthere-samonasteryattheendofmystreet0.imQmxJW1.avif 2400w",
    webp: "/_app/immutable/assets/59Thinkthere-samonasteryattheendofmystreet0.zI_ka8fR.webp 1200w, /_app/immutable/assets/59Thinkthere-samonasteryattheendofmystreet0.BEW5x0cP.webp 2400w",
    jpeg: "/_app/immutable/assets/59Thinkthere-samonasteryattheendofmystreet0.CYjVEwog.jpeg 1200w, /_app/immutable/assets/59Thinkthere-samonasteryattheendofmystreet0.DiMHzuwN.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/59Thinkthere-samonasteryattheendofmystreet0.DiMHzuwN.jpeg",
    w: 2400,
    h: 1872
  }
};
const __vite_glob_0_162 = {
  sources: {
    avif: "/_app/immutable/assets/5Ku-rvi-Tasch.BUfDvGLm.avif 1200w, /_app/immutable/assets/5Ku-rvi-Tasch.DJt_uVFt.avif 2400w",
    webp: "/_app/immutable/assets/5Ku-rvi-Tasch.BQsw-RUH.webp 1200w, /_app/immutable/assets/5Ku-rvi-Tasch.Dv97DSve.webp 2400w",
    jpeg: "/_app/immutable/assets/5Ku-rvi-Tasch.C9EmEiQU.jpeg 1200w, /_app/immutable/assets/5Ku-rvi-Tasch.3OqDX1Hz.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/5Ku-rvi-Tasch.3OqDX1Hz.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_163 = {
  sources: {
    avif: "/_app/immutable/assets/60ReallygettingintoKhmerarchitecture3.CMP4aVJr.avif 1200w, /_app/immutable/assets/60ReallygettingintoKhmerarchitecture3.CgduWkcE.avif 2400w",
    webp: "/_app/immutable/assets/60ReallygettingintoKhmerarchitecture3.K-D53KhH.webp 1200w, /_app/immutable/assets/60ReallygettingintoKhmerarchitecture3.Cd-dTDaq.webp 2400w",
    jpeg: "/_app/immutable/assets/60ReallygettingintoKhmerarchitecture3.CQ_g3ZA4.jpeg 1200w, /_app/immutable/assets/60ReallygettingintoKhmerarchitecture3.Bw9iVokI.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/60ReallygettingintoKhmerarchitecture3.Bw9iVokI.jpeg",
    w: 2400,
    h: 1756
  }
};
const __vite_glob_0_164 = {
  sources: {
    avif: "/_app/immutable/assets/61WalkingalongtheMekong2.Cc57w7Xe.avif 1200w, /_app/immutable/assets/61WalkingalongtheMekong2.t1MH8_V6.avif 2400w",
    webp: "/_app/immutable/assets/61WalkingalongtheMekong2.DkMHGL6m.webp 1200w, /_app/immutable/assets/61WalkingalongtheMekong2.BjvkRfgE.webp 2400w",
    jpeg: "/_app/immutable/assets/61WalkingalongtheMekong2.D2xq6tGX.jpeg 1200w, /_app/immutable/assets/61WalkingalongtheMekong2.DOiNebq_.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/61WalkingalongtheMekong2.DOiNebq_.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_165 = {
  sources: {
    avif: "/_app/immutable/assets/62Mmmmmboats1.CNg_rx4v.avif 1200w, /_app/immutable/assets/62Mmmmmboats1.-wzFpgzw.avif 2400w",
    webp: "/_app/immutable/assets/62Mmmmmboats1.LTYIQTUy.webp 1200w, /_app/immutable/assets/62Mmmmmboats1.Di17FT6x.webp 2400w",
    jpeg: "/_app/immutable/assets/62Mmmmmboats1.D2jdJmqu.jpeg 1200w, /_app/immutable/assets/62Mmmmmboats1.B2lfT4EB.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/62Mmmmmboats1.B2lfT4EB.jpeg",
    w: 2400,
    h: 1761
  }
};
const __vite_glob_0_166 = {
  sources: {
    avif: "/_app/immutable/assets/63Quicklines9.CkYTKrvX.avif 400w, /_app/immutable/assets/63Quicklines9.DkKMWQwu.avif 800w",
    webp: "/_app/immutable/assets/63Quicklines9.BDp1glHs.webp 400w, /_app/immutable/assets/63Quicklines9.C1MCFoGa.webp 800w",
    jpeg: "/_app/immutable/assets/63Quicklines9.rCO7oS42.jpeg 400w, /_app/immutable/assets/63Quicklines9.DF-pLwKk.jpeg 800w"
  },
  img: {
    src: "/_app/immutable/assets/63Quicklines9.DF-pLwKk.jpeg",
    w: 800,
    h: 1168
  }
};
const __vite_glob_0_167 = {
  sources: {
    avif: "/_app/immutable/assets/64InKualaLumpurafteralongtime7.OdG7riwc.avif 1200w, /_app/immutable/assets/64InKualaLumpurafteralongtime7.BL1vfUtc.avif 2400w",
    webp: "/_app/immutable/assets/64InKualaLumpurafteralongtime7.Bse2aGYC.webp 1200w, /_app/immutable/assets/64InKualaLumpurafteralongtime7.C9gB-jI7.webp 2400w",
    jpeg: "/_app/immutable/assets/64InKualaLumpurafteralongtime7.CFoJFxps.jpeg 1200w, /_app/immutable/assets/64InKualaLumpurafteralongtime7.E8zBOaiM.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/64InKualaLumpurafteralongtime7.E8zBOaiM.jpeg",
    w: 2400,
    h: 3381
  }
};
const __vite_glob_0_168 = {
  sources: {
    avif: "/_app/immutable/assets/68Needascarf5.CCwHUls0.avif 1200w, /_app/immutable/assets/68Needascarf5.tjLYQL93.avif 2400w",
    webp: "/_app/immutable/assets/68Needascarf5.B1enovL_.webp 1200w, /_app/immutable/assets/68Needascarf5.Dc9H41JK.webp 2400w",
    jpeg: "/_app/immutable/assets/68Needascarf5.DEiavz8P.jpeg 1200w, /_app/immutable/assets/68Needascarf5.DMVSc-1y.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/68Needascarf5.DMVSc-1y.jpeg",
    w: 2400,
    h: 3124
  }
};
const __vite_glob_0_169 = {
  sources: {
    avif: "/_app/immutable/assets/69041e4d81.DLbYOoqn.avif 256w, /_app/immutable/assets/69041e4d81.BLQn8aAT.avif 512w",
    webp: "/_app/immutable/assets/69041e4d81.BFNPQ5R_.webp 256w, /_app/immutable/assets/69041e4d81.CBdfVAEg.webp 512w",
    jpeg: "/_app/immutable/assets/69041e4d81.rjA_uugH.jpeg 256w, /_app/immutable/assets/69041e4d81.CYmnwmi3.jpeg 512w"
  },
  img: {
    src: "/_app/immutable/assets/69041e4d81.CYmnwmi3.jpeg",
    w: 512,
    h: 682
  }
};
const __vite_glob_0_170 = {
  sources: {
    avif: "/_app/immutable/assets/69Christmasmarkets2.B1hEDKD7.avif 1200w, /_app/immutable/assets/69Christmasmarkets2.T-xM4rU5.avif 2400w",
    webp: "/_app/immutable/assets/69Christmasmarkets2.C92helaS.webp 1200w, /_app/immutable/assets/69Christmasmarkets2.B69w7Jld.webp 2400w",
    jpeg: "/_app/immutable/assets/69Christmasmarkets2.DWeyTxpt.jpeg 1200w, /_app/immutable/assets/69Christmasmarkets2.QN-m4JJm.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/69Christmasmarkets2.QN-m4JJm.jpeg",
    w: 2400,
    h: 1655
  }
};
const __vite_glob_0_171 = {
  sources: {
    avif: "/_app/immutable/assets/6Laksaman.BtyNx_Tj.avif 1200w, /_app/immutable/assets/6Laksaman.BHOPrdWP.avif 2400w",
    webp: "/_app/immutable/assets/6Laksaman.kYBz444-.webp 1200w, /_app/immutable/assets/6Laksaman.BjCwLuXL.webp 2400w",
    jpeg: "/_app/immutable/assets/6Laksaman.CMRM744d.jpeg 1200w, /_app/immutable/assets/6Laksaman.D6PXoJtO.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/6Laksaman.D6PXoJtO.jpeg",
    w: 2400,
    h: 3196
  }
};
const __vite_glob_0_172 = {
  sources: {
    avif: "/_app/immutable/assets/70E4BA8B-6459-44BC-874D-7C866B83F903_1_105_c.CrNZRgkF.avif 512w, /_app/immutable/assets/70E4BA8B-6459-44BC-874D-7C866B83F903_1_105_c.3kXVz8_6.avif 1024w",
    webp: "/_app/immutable/assets/70E4BA8B-6459-44BC-874D-7C866B83F903_1_105_c.DROSa8dV.webp 512w, /_app/immutable/assets/70E4BA8B-6459-44BC-874D-7C866B83F903_1_105_c.VPTzaboM.webp 1024w",
    jpeg: "/_app/immutable/assets/70E4BA8B-6459-44BC-874D-7C866B83F903_1_105_c.pLG80HCR.jpeg 512w, /_app/immutable/assets/70E4BA8B-6459-44BC-874D-7C866B83F903_1_105_c.u4hfrpJu.jpeg 1024w"
  },
  img: {
    src: "/_app/immutable/assets/70E4BA8B-6459-44BC-874D-7C866B83F903_1_105_c.u4hfrpJu.jpeg",
    w: 1024,
    h: 768
  }
};
const __vite_glob_0_173 = {
  sources: {
    avif: "/_app/immutable/assets/70Ghost6.BknXASRh.avif 400w, /_app/immutable/assets/70Ghost6.DTesFdXx.avif 800w",
    webp: "/_app/immutable/assets/70Ghost6.BjLVAIku.webp 400w, /_app/immutable/assets/70Ghost6.CUCyN5ro.webp 800w",
    jpeg: "/_app/immutable/assets/70Ghost6.D1mJQB6W.jpeg 400w, /_app/immutable/assets/70Ghost6.DlyIKiod.jpeg 800w"
  },
  img: {
    src: "/_app/immutable/assets/70Ghost6.DlyIKiod.jpeg",
    w: 800,
    h: 1106
  }
};
const __vite_glob_0_174 = {
  sources: {
    avif: "/_app/immutable/assets/719b1a493e.DIC-npJf.avif 300w, /_app/immutable/assets/719b1a493e.BVGReCn5.avif 600w",
    webp: "/_app/immutable/assets/719b1a493e.DW8y0FYI.webp 300w, /_app/immutable/assets/719b1a493e.jIFMIT2b.webp 600w",
    jpeg: "/_app/immutable/assets/719b1a493e.BMNI4QNr.jpeg 300w, /_app/immutable/assets/719b1a493e.CeeOnJzH.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/719b1a493e.CeeOnJzH.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_175 = {
  sources: {
    avif: "/_app/immutable/assets/72Wrinkly3.Cf_rdL0i.avif 768w, /_app/immutable/assets/72Wrinkly3.C_6BHsW-.avif 1536w",
    webp: "/_app/immutable/assets/72Wrinkly3.Drnrk5cA.webp 768w, /_app/immutable/assets/72Wrinkly3.CxoNWQYs.webp 1536w",
    png: "/_app/immutable/assets/72Wrinkly3.Bu9xC15E.png 768w, /_app/immutable/assets/72Wrinkly3.BgEnYItF.png 1536w"
  },
  img: {
    src: "/_app/immutable/assets/72Wrinkly3.BgEnYItF.png",
    w: 1536,
    h: 2048
  }
};
const __vite_glob_0_176 = {
  sources: {
    avif: "/_app/immutable/assets/74Morepotplants8.BQCDAZCy.avif 547w, /_app/immutable/assets/74Morepotplants8.BNYxgJfE.avif 1094w",
    webp: "/_app/immutable/assets/74Morepotplants8.gYOsTSg6.webp 547w, /_app/immutable/assets/74Morepotplants8.U3XwymbT.webp 1094w",
    jpeg: "/_app/immutable/assets/74Morepotplants8.BfPQPvcW.jpeg 547w, /_app/immutable/assets/74Morepotplants8.ftuTsxC6.jpeg 1094w"
  },
  img: {
    src: "/_app/immutable/assets/74Morepotplants8.ftuTsxC6.jpeg",
    w: 1094,
    h: 1214
  }
};
const __vite_glob_0_177 = {
  sources: {
    avif: "/_app/immutable/assets/75Playingwithstylii3.CyXcKSHF.avif 425w, /_app/immutable/assets/75Playingwithstylii3.DPWMa-Vn.avif 850w",
    webp: "/_app/immutable/assets/75Playingwithstylii3.CMz1qUMT.webp 425w, /_app/immutable/assets/75Playingwithstylii3.C1dapm5G.webp 850w",
    jpeg: "/_app/immutable/assets/75Playingwithstylii3.BOQwU6wy.jpeg 425w, /_app/immutable/assets/75Playingwithstylii3.QByQ_tyy.jpeg 850w"
  },
  img: {
    src: "/_app/immutable/assets/75Playingwithstylii3.QByQ_tyy.jpeg",
    w: 850,
    h: 1695
  }
};
const __vite_glob_0_178 = {
  sources: {
    avif: "/_app/immutable/assets/76af109ba3.C-HhvI1z.avif 300w, /_app/immutable/assets/76af109ba3.CL28PntY.avif 600w",
    webp: "/_app/immutable/assets/76af109ba3.Dp_k3wJW.webp 300w, /_app/immutable/assets/76af109ba3.BuCsHZVC.webp 600w",
    jpeg: "/_app/immutable/assets/76af109ba3.BhIrBeTv.jpeg 300w, /_app/immutable/assets/76af109ba3.Cw3YFqJ2.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/76af109ba3.Cw3YFqJ2.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_179 = {
  sources: {
    avif: "/_app/immutable/assets/79b78ee6ac.Xq9OFnlV.avif 300w, /_app/immutable/assets/79b78ee6ac.CgOo-UB_.avif 600w",
    webp: "/_app/immutable/assets/79b78ee6ac.bq1kd1eA.webp 300w, /_app/immutable/assets/79b78ee6ac.DoxqCYU_.webp 600w",
    jpeg: "/_app/immutable/assets/79b78ee6ac.DbEH3CyG.jpeg 300w, /_app/immutable/assets/79b78ee6ac.KgWC7CWu.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/79b78ee6ac.KgWC7CWu.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_180 = {
  sources: {
    avif: "/_app/immutable/assets/7Hmph.DoX2qYUE.avif 1200w, /_app/immutable/assets/7Hmph.WugvKZ6o.avif 2400w",
    webp: "/_app/immutable/assets/7Hmph.ChXzbqUu.webp 1200w, /_app/immutable/assets/7Hmph.BREJyJVf.webp 2400w",
    jpeg: "/_app/immutable/assets/7Hmph.Jrtwmp5a.jpeg 1200w, /_app/immutable/assets/7Hmph.AnbUv6CP.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/7Hmph.AnbUv6CP.jpeg",
    w: 2400,
    h: 3255
  }
};
const __vite_glob_0_181 = {
  sources: {
    avif: "/_app/immutable/assets/80Squareeyed8.PcvQKdEy.avif 400w, /_app/immutable/assets/80Squareeyed8.BWqnDusJ.avif 800w",
    webp: "/_app/immutable/assets/80Squareeyed8.D4b6UZER.webp 400w, /_app/immutable/assets/80Squareeyed8.CN3ijiS_.webp 800w",
    jpeg: "/_app/immutable/assets/80Squareeyed8.t3blP9Iw.jpeg 400w, /_app/immutable/assets/80Squareeyed8.B-8box-b.jpeg 800w"
  },
  img: {
    src: "/_app/immutable/assets/80Squareeyed8.B-8box-b.jpeg",
    w: 800,
    h: 1133
  }
};
const __vite_glob_0_182 = {
  sources: {
    avif: "/_app/immutable/assets/81Ihopeitwilllast8.CZfaD7nl.avif 400w, /_app/immutable/assets/81Ihopeitwilllast8.DyHLsQW2.avif 800w",
    webp: "/_app/immutable/assets/81Ihopeitwilllast8.CofUaA9F.webp 400w, /_app/immutable/assets/81Ihopeitwilllast8.C2-5-_my.webp 800w",
    jpeg: "/_app/immutable/assets/81Ihopeitwilllast8.VzB8LMMo.jpeg 400w, /_app/immutable/assets/81Ihopeitwilllast8.BD1hN7vZ.jpeg 800w"
  },
  img: {
    src: "/_app/immutable/assets/81Ihopeitwilllast8.BD1hN7vZ.jpeg",
    w: 800,
    h: 1089
  }
};
const __vite_glob_0_183 = {
  sources: {
    avif: "/_app/immutable/assets/82BeenwatchingafairbitofDisney5.Cs8grCuM.avif 1200w, /_app/immutable/assets/82BeenwatchingafairbitofDisney5.Ck-AsZ0S.avif 2400w",
    webp: "/_app/immutable/assets/82BeenwatchingafairbitofDisney5.Cs_oMb1Z.webp 1200w, /_app/immutable/assets/82BeenwatchingafairbitofDisney5.DDy4axsm.webp 2400w",
    jpeg: "/_app/immutable/assets/82BeenwatchingafairbitofDisney5.DGPF6nB6.jpeg 1200w, /_app/immutable/assets/82BeenwatchingafairbitofDisney5.CTFRW-ak.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/82BeenwatchingafairbitofDisney5.CTFRW-ak.jpeg",
    w: 2400,
    h: 3513
  }
};
const __vite_glob_0_184 = {
  sources: {
    avif: "/_app/immutable/assets/83Schucks2.nt-9-61S.avif 1200w, /_app/immutable/assets/83Schucks2.DasJCCj7.avif 2400w",
    webp: "/_app/immutable/assets/83Schucks2.Cs0kKjzn.webp 1200w, /_app/immutable/assets/83Schucks2.DSnTA0Wy.webp 2400w",
    jpeg: "/_app/immutable/assets/83Schucks2.8JcI1lUc.jpeg 1200w, /_app/immutable/assets/83Schucks2.6Q1MQSnA.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/83Schucks2.6Q1MQSnA.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_185 = {
  sources: {
    avif: "/_app/immutable/assets/84Hatman3.Dkn9HOSo.avif 1200w, /_app/immutable/assets/84Hatman3.CecaLKrd.avif 2400w",
    webp: "/_app/immutable/assets/84Hatman3.DdEjFsMT.webp 1200w, /_app/immutable/assets/84Hatman3.CjtDpTX5.webp 2400w",
    jpeg: "/_app/immutable/assets/84Hatman3.Mwbl8n8b.jpeg 1200w, /_app/immutable/assets/84Hatman3.BcjcmsD7.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/84Hatman3.BcjcmsD7.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_186 = {
  sources: {
    avif: "/_app/immutable/assets/85Atthelibrary6.v9hR1Z6Z.avif 1200w, /_app/immutable/assets/85Atthelibrary6.BDDer1om.avif 2400w",
    webp: "/_app/immutable/assets/85Atthelibrary6.Bld7fqoy.webp 1200w, /_app/immutable/assets/85Atthelibrary6.CYO1h564.webp 2400w",
    jpeg: "/_app/immutable/assets/85Atthelibrary6.CcTWYL1s.jpeg 1200w, /_app/immutable/assets/85Atthelibrary6.CQPW2lbu.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/85Atthelibrary6.CQPW2lbu.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_187 = {
  sources: {
    avif: "/_app/immutable/assets/86Flatness3.fFmh8H8R.avif 400w, /_app/immutable/assets/86Flatness3.DC3R4Ygt.avif 800w",
    webp: "/_app/immutable/assets/86Flatness3.CK31x9uW.webp 400w, /_app/immutable/assets/86Flatness3.BbPAUbMv.webp 800w",
    jpeg: "/_app/immutable/assets/86Flatness3.BYMTendO.jpeg 400w, /_app/immutable/assets/86Flatness3.BFpBU9i3.jpeg 800w"
  },
  img: {
    src: "/_app/immutable/assets/86Flatness3.BFpBU9i3.jpeg",
    w: 800,
    h: 1110
  }
};
const __vite_glob_0_188 = {
  sources: {
    avif: "/_app/immutable/assets/879fb0c471.CXWSNa9Q.avif 300w, /_app/immutable/assets/879fb0c471.CxqbxcBC.avif 600w",
    webp: "/_app/immutable/assets/879fb0c471.Cl0NZ8CS.webp 300w, /_app/immutable/assets/879fb0c471.m3RIDkml.webp 600w",
    jpeg: "/_app/immutable/assets/879fb0c471.C2WdOQL4.jpeg 300w, /_app/immutable/assets/879fb0c471.De5fyP7o.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/879fb0c471.De5fyP7o.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_189 = {
  sources: {
    avif: "/_app/immutable/assets/87c3ebf03a.Dao8Lczi.avif 300w, /_app/immutable/assets/87c3ebf03a.C3zjoXDK.avif 600w",
    webp: "/_app/immutable/assets/87c3ebf03a.Chioiz69.webp 300w, /_app/immutable/assets/87c3ebf03a.UsU16NpS.webp 600w",
    jpeg: "/_app/immutable/assets/87c3ebf03a.6S760Rc2.jpeg 300w, /_app/immutable/assets/87c3ebf03a.Cow8zG5O.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/87c3ebf03a.Cow8zG5O.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_190 = {
  sources: {
    avif: "/_app/immutable/assets/88Omah8.Cp4dlAQx.avif 400w, /_app/immutable/assets/88Omah8.BVmjuxGM.avif 800w",
    webp: "/_app/immutable/assets/88Omah8.BrMUcwlb.webp 400w, /_app/immutable/assets/88Omah8.BeB9rwcB.webp 800w",
    jpeg: "/_app/immutable/assets/88Omah8.B8pMr_-h.jpeg 400w, /_app/immutable/assets/88Omah8.B62Acvsd.jpeg 800w"
  },
  img: {
    src: "/_app/immutable/assets/88Omah8.B62Acvsd.jpeg",
    w: 800,
    h: 1066
  }
};
const __vite_glob_0_191 = {
  sources: {
    avif: "/_app/immutable/assets/89941ee665.DEwL_y2T.avif 300w, /_app/immutable/assets/89941ee665.kMncaTTQ.avif 600w",
    webp: "/_app/immutable/assets/89941ee665.Dl8WJo_1.webp 300w, /_app/immutable/assets/89941ee665.CwdZ34Dc.webp 600w",
    jpeg: "/_app/immutable/assets/89941ee665.DZhBmE89.jpeg 300w, /_app/immutable/assets/89941ee665.C7B0aEiH.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/89941ee665.C7B0aEiH.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_192 = {
  sources: {
    avif: "/_app/immutable/assets/89Lipsss6.Bj41GtOn.avif 1200w, /_app/immutable/assets/89Lipsss6.bxm8PXgT.avif 2400w",
    webp: "/_app/immutable/assets/89Lipsss6.BemEGn5F.webp 1200w, /_app/immutable/assets/89Lipsss6.zdYvVrSb.webp 2400w",
    jpeg: "/_app/immutable/assets/89Lipsss6.Ctmypqtc.jpeg 1200w, /_app/immutable/assets/89Lipsss6.BrzQ2yea.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/89Lipsss6.BrzQ2yea.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_193 = {
  sources: {
    avif: "/_app/immutable/assets/8Selfie-6.oyA5HEWq.avif 1000w, /_app/immutable/assets/8Selfie-6.BX_YsIcE.avif 2000w",
    webp: "/_app/immutable/assets/8Selfie-6.CynZqE1-.webp 1000w, /_app/immutable/assets/8Selfie-6.2-rVgMEY.webp 2000w",
    jpeg: "/_app/immutable/assets/8Selfie-6.C6HdnxQh.jpeg 1000w, /_app/immutable/assets/8Selfie-6.Dr1AhLbl.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/8Selfie-6.Dr1AhLbl.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_194 = {
  sources: {
    avif: "/_app/immutable/assets/8ca8d8832a.FXyGrjQf.avif 300w, /_app/immutable/assets/8ca8d8832a.DZ4E2gR0.avif 600w",
    webp: "/_app/immutable/assets/8ca8d8832a.qtf7w8Fe.webp 300w, /_app/immutable/assets/8ca8d8832a.C7UNUJj2.webp 600w",
    jpeg: "/_app/immutable/assets/8ca8d8832a.D5r0stxF.jpeg 300w, /_app/immutable/assets/8ca8d8832a.DoV9p_v3.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/8ca8d8832a.DoV9p_v3.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_195 = {
  sources: {
    avif: "/_app/immutable/assets/8cff78b343.BwUSdpHA.avif 300w, /_app/immutable/assets/8cff78b343.BpIWgBVw.avif 600w",
    webp: "/_app/immutable/assets/8cff78b343.BjevCaBJ.webp 300w, /_app/immutable/assets/8cff78b343.D9lbpCJo.webp 600w",
    jpeg: "/_app/immutable/assets/8cff78b343.DGh3McY5.jpeg 300w, /_app/immutable/assets/8cff78b343.q2guBvXo.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/8cff78b343.q2guBvXo.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_196 = {
  sources: {
    avif: "/_app/immutable/assets/8f66ee0fc9.BABEKmbt.avif 300w, /_app/immutable/assets/8f66ee0fc9.DKrN8xFF.avif 600w",
    webp: "/_app/immutable/assets/8f66ee0fc9.BSdyDSrm.webp 300w, /_app/immutable/assets/8f66ee0fc9.BU0ALFUP.webp 600w",
    jpeg: "/_app/immutable/assets/8f66ee0fc9.Banev_Vd.jpeg 300w, /_app/immutable/assets/8f66ee0fc9.CxklfEEX.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/8f66ee0fc9.CxklfEEX.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_197 = {
  sources: {
    avif: "/_app/immutable/assets/90Gotsomenewcolours9.BaX4gwLf.avif 400w, /_app/immutable/assets/90Gotsomenewcolours9.Ch-WOVi6.avif 800w",
    webp: "/_app/immutable/assets/90Gotsomenewcolours9.D6rDQOb9.webp 400w, /_app/immutable/assets/90Gotsomenewcolours9.DkaslVUm.webp 800w",
    jpeg: "/_app/immutable/assets/90Gotsomenewcolours9.BjOOEMLp.jpeg 400w, /_app/immutable/assets/90Gotsomenewcolours9.CbzniwnW.jpeg 800w"
  },
  img: {
    src: "/_app/immutable/assets/90Gotsomenewcolours9.CbzniwnW.jpeg",
    w: 800,
    h: 1066
  }
};
const __vite_glob_0_198 = {
  sources: {
    avif: "/_app/immutable/assets/93Fortrailwaybuses1.C8U8GS3s.avif 1200w, /_app/immutable/assets/93Fortrailwaybuses1.BPVCpk0m.avif 2400w",
    webp: "/_app/immutable/assets/93Fortrailwaybuses1.M9WxKIRk.webp 1200w, /_app/immutable/assets/93Fortrailwaybuses1.BjmoeaHj.webp 2400w",
    jpeg: "/_app/immutable/assets/93Fortrailwaybuses1.C5SAJvV3.jpeg 1200w, /_app/immutable/assets/93Fortrailwaybuses1.s60w6wAQ.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/93Fortrailwaybuses1.s60w6wAQ.jpeg",
    w: 2400,
    h: 1800
  }
};
const __vite_glob_0_199 = {
  sources: {
    avif: "/_app/immutable/assets/94Atthebar9.B1B7qWNi.avif 1200w, /_app/immutable/assets/94Atthebar9.BSNAfrKG.avif 2400w",
    webp: "/_app/immutable/assets/94Atthebar9.CZIC3nyG.webp 1200w, /_app/immutable/assets/94Atthebar9.B3wdbgj2.webp 2400w",
    jpeg: "/_app/immutable/assets/94Atthebar9.C1QXGKFR.jpeg 1200w, /_app/immutable/assets/94Atthebar9.BuBCsAhh.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/94Atthebar9.BuBCsAhh.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_200 = {
  sources: {
    avif: "/_app/immutable/assets/95Scribblingaprofileishard4.CrsqncC5.avif 1200w, /_app/immutable/assets/95Scribblingaprofileishard4.4CQftMJv.avif 2400w",
    webp: "/_app/immutable/assets/95Scribblingaprofileishard4.Cf9VKG4o.webp 1200w, /_app/immutable/assets/95Scribblingaprofileishard4.ByvMe873.webp 2400w",
    jpeg: "/_app/immutable/assets/95Scribblingaprofileishard4.Br-buErh.jpeg 1200w, /_app/immutable/assets/95Scribblingaprofileishard4.CVxT_noO.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/95Scribblingaprofileishard4.CVxT_noO.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_201 = {
  sources: {
    avif: "/_app/immutable/assets/96Mouseinthehouse9.DbB9AB3-.avif 1200w, /_app/immutable/assets/96Mouseinthehouse9.C21C-PpA.avif 2400w",
    webp: "/_app/immutable/assets/96Mouseinthehouse9.DE0WBKt9.webp 1200w, /_app/immutable/assets/96Mouseinthehouse9.DUptsGqD.webp 2400w",
    jpeg: "/_app/immutable/assets/96Mouseinthehouse9.CrZqSvoK.jpeg 1200w, /_app/immutable/assets/96Mouseinthehouse9.OjBUA0tU.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/96Mouseinthehouse9.OjBUA0tU.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_202 = {
  sources: {
    avif: "/_app/immutable/assets/97Morningcoffee5.BwH-Eqyh.avif 1200w, /_app/immutable/assets/97Morningcoffee5.BETl4Q0b.avif 2400w",
    webp: "/_app/immutable/assets/97Morningcoffee5.BiaDmwOQ.webp 1200w, /_app/immutable/assets/97Morningcoffee5.D6khmi7Z.webp 2400w",
    jpeg: "/_app/immutable/assets/97Morningcoffee5.MNCBMO-I.jpeg 1200w, /_app/immutable/assets/97Morningcoffee5.xGSxa1IP.jpeg 2400w"
  },
  img: {
    src: "/_app/immutable/assets/97Morningcoffee5.xGSxa1IP.jpeg",
    w: 2400,
    h: 3200
  }
};
const __vite_glob_0_203 = {
  sources: {
    avif: "/_app/immutable/assets/98Coolglassesbro------3.DTPj8prz.avif 900w, /_app/immutable/assets/98Coolglassesbro------3.B8-wuyB2.avif 1800w",
    webp: "/_app/immutable/assets/98Coolglassesbro------3.BwE-TOYO.webp 900w, /_app/immutable/assets/98Coolglassesbro------3.Bu3zq9lT.webp 1800w",
    jpeg: "/_app/immutable/assets/98Coolglassesbro------3.C_uf7h_5.jpeg 900w, /_app/immutable/assets/98Coolglassesbro------3.Cwmt2GCk.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/98Coolglassesbro------3.Cwmt2GCk.jpeg",
    w: 1800,
    h: 2543
  }
};
const __vite_glob_0_204 = {
  sources: {
    avif: "/_app/immutable/assets/98abf826f2.CBpQTGTn.avif 300w, /_app/immutable/assets/98abf826f2.DrTACH23.avif 600w",
    webp: "/_app/immutable/assets/98abf826f2.BicsMnCs.webp 300w, /_app/immutable/assets/98abf826f2.CEfuf-Kt.webp 600w",
    jpeg: "/_app/immutable/assets/98abf826f2.DTkugzdm.jpeg 300w, /_app/immutable/assets/98abf826f2.CdBuMqCg.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/98abf826f2.CdBuMqCg.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_205 = {
  sources: {
    avif: "/_app/immutable/assets/99GalleFacewiththeportinthebackground------1.COs6QQIf.avif 900w, /_app/immutable/assets/99GalleFacewiththeportinthebackground------1.CThiTTR-.avif 1800w",
    webp: "/_app/immutable/assets/99GalleFacewiththeportinthebackground------1.CJS090R-.webp 900w, /_app/immutable/assets/99GalleFacewiththeportinthebackground------1.Dj0QjgAq.webp 1800w",
    jpeg: "/_app/immutable/assets/99GalleFacewiththeportinthebackground------1.HxlyPDiM.jpeg 900w, /_app/immutable/assets/99GalleFacewiththeportinthebackground------1.BBX9GunR.jpeg 1800w"
  },
  img: {
    src: "/_app/immutable/assets/99GalleFacewiththeportinthebackground------1.BBX9GunR.jpeg",
    w: 1800,
    h: 1350
  }
};
const __vite_glob_0_206 = {
  sources: {
    avif: "/_app/immutable/assets/9d82fa35ac.CLpg0rOh.avif 300w, /_app/immutable/assets/9d82fa35ac.CshA960T.avif 600w",
    webp: "/_app/immutable/assets/9d82fa35ac.BufqvLfz.webp 300w, /_app/immutable/assets/9d82fa35ac.dR-wtIL1.webp 600w",
    jpeg: "/_app/immutable/assets/9d82fa35ac.P6TI_0R7.jpeg 300w, /_app/immutable/assets/9d82fa35ac.Ba3sMKud.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/9d82fa35ac.Ba3sMKud.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_207 = {
  sources: {
    avif: "/_app/immutable/assets/9f975ce5b9.DTvh-26e.avif 300w, /_app/immutable/assets/9f975ce5b9.TkXpu85I.avif 600w",
    webp: "/_app/immutable/assets/9f975ce5b9.Cwq68lp8.webp 300w, /_app/immutable/assets/9f975ce5b9.CG67RGQj.webp 600w",
    jpeg: "/_app/immutable/assets/9f975ce5b9.BL635Cep.jpeg 300w, /_app/immutable/assets/9f975ce5b9.v7HBcAWm.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/9f975ce5b9.v7HBcAWm.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_208 = {
  sources: {
    avif: "/_app/immutable/assets/9f99c14dbf.DWrHSaUJ.avif 300w, /_app/immutable/assets/9f99c14dbf.CcQ1zHMK.avif 600w",
    webp: "/_app/immutable/assets/9f99c14dbf.DU18jrC-.webp 300w, /_app/immutable/assets/9f99c14dbf.BCB4blVZ.webp 600w",
    jpeg: "/_app/immutable/assets/9f99c14dbf.CY3JGy9g.jpeg 300w, /_app/immutable/assets/9f99c14dbf.BraGea3z.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/9f99c14dbf.BraGea3z.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_209 = {
  sources: {
    avif: "/_app/immutable/assets/Abdulrahmansroom.BKYs27m7.avif 1000w, /_app/immutable/assets/Abdulrahmansroom.CmYAl2Yq.avif 2000w",
    webp: "/_app/immutable/assets/Abdulrahmansroom.C4w5XR_H.webp 1000w, /_app/immutable/assets/Abdulrahmansroom.PoLQMfH6.webp 2000w",
    jpeg: "/_app/immutable/assets/Abdulrahmansroom.CnCUVNxa.jpeg 1000w, /_app/immutable/assets/Abdulrahmansroom.Df1XEC8j.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Abdulrahmansroom.Df1XEC8j.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_210 = {
  sources: {
    avif: "/_app/immutable/assets/Annaswindow-2.vAVhZs4n.avif 1000w, /_app/immutable/assets/Annaswindow-2.BSW3Zp1o.avif 2000w",
    webp: "/_app/immutable/assets/Annaswindow-2.B0atYUOi.webp 1000w, /_app/immutable/assets/Annaswindow-2.8AdkY2sX.webp 2000w",
    jpeg: "/_app/immutable/assets/Annaswindow-2.BIx0nqi2.jpeg 1000w, /_app/immutable/assets/Annaswindow-2.B570aE3S.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Annaswindow-2.B570aE3S.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_211 = {
  sources: {
    avif: "/_app/immutable/assets/Arteest.ENFKnMp8.avif 1000w, /_app/immutable/assets/Arteest.C0O_ras-.avif 2000w",
    webp: "/_app/immutable/assets/Arteest.CmsOFcZw.webp 1000w, /_app/immutable/assets/Arteest.CUYHDDfi.webp 2000w",
    jpeg: "/_app/immutable/assets/Arteest.B6GXAuLh.jpeg 1000w, /_app/immutable/assets/Arteest.L6wy69ha.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Arteest.L6wy69ha.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_212 = {
  sources: {
    avif: "/_app/immutable/assets/Broadwaterboat.EcrnKKf5.avif 1000w, /_app/immutable/assets/Broadwaterboat.-bCLIJh3.avif 2000w",
    webp: "/_app/immutable/assets/Broadwaterboat.NJO7pef0.webp 1000w, /_app/immutable/assets/Broadwaterboat.B9EOlmA4.webp 2000w",
    jpeg: "/_app/immutable/assets/Broadwaterboat.CnbwoIOH.jpeg 1000w, /_app/immutable/assets/Broadwaterboat.Ufha0jNT.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Broadwaterboat.Ufha0jNT.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_213 = {
  sources: {
    avif: "/_app/immutable/assets/Cafeman.LDPlL9UD.avif 1000w, /_app/immutable/assets/Cafeman.guXnDlLH.avif 2000w",
    webp: "/_app/immutable/assets/Cafeman.DNDoJbN2.webp 1000w, /_app/immutable/assets/Cafeman.DZ7-8GkW.webp 2000w",
    jpeg: "/_app/immutable/assets/Cafeman.DnvCSn3N.jpeg 1000w, /_app/immutable/assets/Cafeman.CTvCS8ki.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Cafeman.CTvCS8ki.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_214 = {
  sources: {
    avif: "/_app/immutable/assets/Cap.bWMwnwd_.avif 1000w, /_app/immutable/assets/Cap.DIZQ_F50.avif 2000w",
    webp: "/_app/immutable/assets/Cap.rA1fiXLy.webp 1000w, /_app/immutable/assets/Cap.DFJ9GK83.webp 2000w",
    jpeg: "/_app/immutable/assets/Cap.CfiS8dSv.jpeg 1000w, /_app/immutable/assets/Cap.CLkGJSfB.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Cap.CLkGJSfB.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_215 = {
  sources: {
    avif: "/_app/immutable/assets/Chinbutt.DH6Vc-hz.avif 1000w, /_app/immutable/assets/Chinbutt.CQGCzS-5.avif 2000w",
    webp: "/_app/immutable/assets/Chinbutt.TEAKq5FH.webp 1000w, /_app/immutable/assets/Chinbutt.DeL7Dyq4.webp 2000w",
    jpeg: "/_app/immutable/assets/Chinbutt.Oo3_IxZp.jpeg 1000w, /_app/immutable/assets/Chinbutt.DIdjnpM-.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Chinbutt.DIdjnpM-.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_216 = {
  sources: {
    avif: "/_app/immutable/assets/Coffeewaiting.f2egg6WL.avif 1000w, /_app/immutable/assets/Coffeewaiting.DtP1Qrld.avif 2000w",
    webp: "/_app/immutable/assets/Coffeewaiting.Dv11EgQX.webp 1000w, /_app/immutable/assets/Coffeewaiting.CAPkv7ar.webp 2000w",
    jpeg: "/_app/immutable/assets/Coffeewaiting.Bl6g1AlO.jpeg 1000w, /_app/immutable/assets/Coffeewaiting.BIuKl2Q2.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Coffeewaiting.BIuKl2Q2.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_217 = {
  sources: {
    avif: "/_app/immutable/assets/Coldbrew.B8szIuuk.avif 1000w, /_app/immutable/assets/Coldbrew.DJBFW6fy.avif 2000w",
    webp: "/_app/immutable/assets/Coldbrew.B6faa2bw.webp 1000w, /_app/immutable/assets/Coldbrew.n7Z7IU1X.webp 2000w",
    jpeg: "/_app/immutable/assets/Coldbrew.CoA83Ydy.jpeg 1000w, /_app/immutable/assets/Coldbrew.PQg3S4Cw.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Coldbrew.PQg3S4Cw.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_218 = {
  sources: {
    avif: "/_app/immutable/assets/Couple.BFo4weHN.avif 1000w, /_app/immutable/assets/Couple.CesgpOY_.avif 2000w",
    webp: "/_app/immutable/assets/Couple.B0lzf3NS.webp 1000w, /_app/immutable/assets/Couple.Pxict_td.webp 2000w",
    jpeg: "/_app/immutable/assets/Couple.Ctl38hWf.jpeg 1000w, /_app/immutable/assets/Couple.CanB7XWu.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Couple.CanB7XWu.jpeg",
    w: 2e3,
    h: 1412
  }
};
const __vite_glob_0_219 = {
  sources: {
    avif: "/_app/immutable/assets/Covidtests.DVwGBTlt.avif 1000w, /_app/immutable/assets/Covidtests.D8N9QiJd.avif 2000w",
    webp: "/_app/immutable/assets/Covidtests.Gab435Xq.webp 1000w, /_app/immutable/assets/Covidtests.THp1UDHd.webp 2000w",
    jpeg: "/_app/immutable/assets/Covidtests.Bee-YftJ.jpeg 1000w, /_app/immutable/assets/Covidtests.Dcn74jfD.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Covidtests.Dcn74jfD.jpeg",
    w: 2e3,
    h: 1502
  }
};
const __vite_glob_0_220 = {
  sources: {
    avif: "/_app/immutable/assets/Cue.DnYbq4CR.avif 1000w, /_app/immutable/assets/Cue.DDvgVxSz.avif 2000w",
    webp: "/_app/immutable/assets/Cue.Cm8m-eZE.webp 1000w, /_app/immutable/assets/Cue.D489qedc.webp 2000w",
    jpeg: "/_app/immutable/assets/Cue.BrVmXRiR.jpeg 1000w, /_app/immutable/assets/Cue.Cper8d7K.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Cue.Cper8d7K.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_221 = {
  sources: {
    avif: "/_app/immutable/assets/Desk.hBOx3MXk.avif 1000w, /_app/immutable/assets/Desk.DtMjniNN.avif 2000w",
    webp: "/_app/immutable/assets/Desk.D-ZEgP1A.webp 1000w, /_app/immutable/assets/Desk.DwmkWbjt.webp 2000w",
    jpeg: "/_app/immutable/assets/Desk.CkO4P0yP.jpeg 1000w, /_app/immutable/assets/Desk.BixUNMoe.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Desk.BixUNMoe.jpeg",
    w: 2e3,
    h: 1440
  }
};
const __vite_glob_0_222 = {
  sources: {
    avif: "/_app/immutable/assets/Dickinson.CRrwlfqu.avif 1000w, /_app/immutable/assets/Dickinson.CoxCzTed.avif 2000w",
    webp: "/_app/immutable/assets/Dickinson.BmD_e0Ne.webp 1000w, /_app/immutable/assets/Dickinson.DzMbMsB1.webp 2000w",
    jpeg: "/_app/immutable/assets/Dickinson.DYD2Vs-k.jpeg 1000w, /_app/immutable/assets/Dickinson.BatchWAe.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Dickinson.BatchWAe.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_223 = {
  sources: {
    avif: "/_app/immutable/assets/Face-2.C8F5D5fp.avif 1000w, /_app/immutable/assets/Face-2.B25zU147.avif 2000w",
    webp: "/_app/immutable/assets/Face-2.91dsPoyM.webp 1000w, /_app/immutable/assets/Face-2.FMyt-GX1.webp 2000w",
    jpeg: "/_app/immutable/assets/Face-2.NysyYECg.jpeg 1000w, /_app/immutable/assets/Face-2.CLeHOGjN.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Face-2.CLeHOGjN.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_224 = {
  sources: {
    avif: "/_app/immutable/assets/Fancy.6EJUkh1G.avif 1000w, /_app/immutable/assets/Fancy.gOOQT3pb.avif 2000w",
    webp: "/_app/immutable/assets/Fancy.BkWS7Scn.webp 1000w, /_app/immutable/assets/Fancy.8BmxSXSh.webp 2000w",
    jpeg: "/_app/immutable/assets/Fancy.Dgc_CTEc.jpeg 1000w, /_app/immutable/assets/Fancy.lXe-tNe7.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Fancy.lXe-tNe7.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_225 = {
  sources: {
    avif: "/_app/immutable/assets/Ferry.CWZ4mTqq.avif 1000w, /_app/immutable/assets/Ferry.CZZCYLZl.avif 2000w",
    webp: "/_app/immutable/assets/Ferry.DaAotzgM.webp 1000w, /_app/immutable/assets/Ferry.MASuZG61.webp 2000w",
    jpeg: "/_app/immutable/assets/Ferry.CCbxigZI.jpeg 1000w, /_app/immutable/assets/Ferry.K0cr9xbw.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Ferry.K0cr9xbw.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_226 = {
  sources: {
    avif: "/_app/immutable/assets/Flowerpot-2.fqUQwNXD.avif 1000w, /_app/immutable/assets/Flowerpot-2.uyUlRj1C.avif 2000w",
    webp: "/_app/immutable/assets/Flowerpot-2.DLRJbrNL.webp 1000w, /_app/immutable/assets/Flowerpot-2.D_AqtG2f.webp 2000w",
    jpeg: "/_app/immutable/assets/Flowerpot-2.Jio5FzQa.jpeg 1000w, /_app/immutable/assets/Flowerpot-2.DQI19PLr.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Flowerpot-2.DQI19PLr.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_227 = {
  sources: {
    avif: "/_app/immutable/assets/Flowerpot.RzmjNFrc.avif 1000w, /_app/immutable/assets/Flowerpot.Dopyy8fI.avif 2000w",
    webp: "/_app/immutable/assets/Flowerpot.DDqE-ce6.webp 1000w, /_app/immutable/assets/Flowerpot.r0Gy5H_v.webp 2000w",
    jpeg: "/_app/immutable/assets/Flowerpot.ByDCYdyb.jpeg 1000w, /_app/immutable/assets/Flowerpot.L3qqi5KD.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Flowerpot.L3qqi5KD.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_228 = {
  sources: {
    avif: "/_app/immutable/assets/Gogh2.C2fZ5AEx.avif 1000w, /_app/immutable/assets/Gogh2.C2YscurA.avif 2000w",
    webp: "/_app/immutable/assets/Gogh2.DUqDWE8F.webp 1000w, /_app/immutable/assets/Gogh2.DBHTz1Qq.webp 2000w",
    jpeg: "/_app/immutable/assets/Gogh2.CMHSXHA3.jpeg 1000w, /_app/immutable/assets/Gogh2.Ch6TnP97.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Gogh2.Ch6TnP97.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_229 = {
  sources: {
    avif: "/_app/immutable/assets/Gradients_face.WgzDI0Gz.avif 1000w, /_app/immutable/assets/Gradients_face.HIcS9sY5.avif 2000w",
    webp: "/_app/immutable/assets/Gradients_face.CJFUm7dM.webp 1000w, /_app/immutable/assets/Gradients_face.DD7l1K1g.webp 2000w",
    jpeg: "/_app/immutable/assets/Gradients_face.C4xE-qt3.jpeg 1000w, /_app/immutable/assets/Gradients_face.CJwUjTS2.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Gradients_face.CJwUjTS2.jpeg",
    w: 2e3,
    h: 2672
  }
};
const __vite_glob_0_230 = {
  sources: {
    avif: "/_app/immutable/assets/Grandma.BWlPeCpe.avif 1000w, /_app/immutable/assets/Grandma.DMcquY-g.avif 2000w",
    webp: "/_app/immutable/assets/Grandma.B-CsmfX_.webp 1000w, /_app/immutable/assets/Grandma.BogX8-1h.webp 2000w",
    jpeg: "/_app/immutable/assets/Grandma.ClHX0SE0.jpeg 1000w, /_app/immutable/assets/Grandma.N8FV0zv4.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Grandma.N8FV0zv4.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_231 = {
  sources: {
    avif: "/_app/immutable/assets/Graphfish.BKgG2Wbd.avif 1000w, /_app/immutable/assets/Graphfish.CL4SjJZ9.avif 2000w",
    webp: "/_app/immutable/assets/Graphfish.CUG5kCPr.webp 1000w, /_app/immutable/assets/Graphfish.akBPSdA4.webp 2000w",
    jpeg: "/_app/immutable/assets/Graphfish.BLenPqHu.jpeg 1000w, /_app/immutable/assets/Graphfish.C1RkCb1R.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Graphfish.C1RkCb1R.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_232 = {
  sources: {
    avif: "/_app/immutable/assets/Grocery.DF4-1YzS.avif 1000w, /_app/immutable/assets/Grocery.7bC0rBlj.avif 2000w",
    webp: "/_app/immutable/assets/Grocery.0CWNkcIW.webp 1000w, /_app/immutable/assets/Grocery.BcPux7eo.webp 2000w",
    jpeg: "/_app/immutable/assets/Grocery.C02xmG0T.jpeg 1000w, /_app/immutable/assets/Grocery.Bo4sKfEI.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Grocery.Bo4sKfEI.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_233 = {
  sources: {
    avif: "/_app/immutable/assets/Hatchingmarket.BcvWqb2C.avif 1000w, /_app/immutable/assets/Hatchingmarket.oO5tiMe4.avif 2000w",
    webp: "/_app/immutable/assets/Hatchingmarket.BzTt26bs.webp 1000w, /_app/immutable/assets/Hatchingmarket.DnhSTfzi.webp 2000w",
    jpeg: "/_app/immutable/assets/Hatchingmarket.DC-sYlAj.jpeg 1000w, /_app/immutable/assets/Hatchingmarket.DdJap5v6.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Hatchingmarket.DdJap5v6.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_234 = {
  sources: {
    avif: "/_app/immutable/assets/Head3.jKybcNGo.avif 1000w, /_app/immutable/assets/Head3.BJV8Zhlt.avif 2000w",
    webp: "/_app/immutable/assets/Head3.DN7Cx_v8.webp 1000w, /_app/immutable/assets/Head3.wmt_Wv09.webp 2000w",
    jpeg: "/_app/immutable/assets/Head3.HHUOA6ao.jpeg 1000w, /_app/immutable/assets/Head3.Dy7QmsAM.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Head3.Dy7QmsAM.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_235 = {
  sources: {
    avif: "/_app/immutable/assets/Indoor-palm.DULvcVwQ.avif 1000w, /_app/immutable/assets/Indoor-palm.BFsWXfvr.avif 2000w",
    webp: "/_app/immutable/assets/Indoor-palm.DX2DnMrs.webp 1000w, /_app/immutable/assets/Indoor-palm.C5z1xkiP.webp 2000w",
    jpeg: "/_app/immutable/assets/Indoor-palm.CIA4rPjc.jpeg 1000w, /_app/immutable/assets/Indoor-palm.CLAZmJPt.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Indoor-palm.CLAZmJPt.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_236 = {
  sources: {
    avif: "/_app/immutable/assets/Inlila.D_-CHmC2.avif 333w, /_app/immutable/assets/Inlila.BuncNJ30.avif 666w",
    webp: "/_app/immutable/assets/Inlila.DbLGt107.webp 333w, /_app/immutable/assets/Inlila.H5YQqJy8.webp 666w",
    jpeg: "/_app/immutable/assets/Inlila.BPEtNXkZ.jpeg 333w, /_app/immutable/assets/Inlila.q87ajwcJ.jpeg 666w"
  },
  img: {
    src: "/_app/immutable/assets/Inlila.q87ajwcJ.jpeg",
    w: 666,
    h: 889
  }
};
const __vite_glob_0_237 = {
  sources: {
    avif: "/_app/immutable/assets/Light.C5jEZ0WL.avif 1000w, /_app/immutable/assets/Light.C0E84A-f.avif 2000w",
    webp: "/_app/immutable/assets/Light.BSAXAJts.webp 1000w, /_app/immutable/assets/Light.BQtT7v_N.webp 2000w",
    jpeg: "/_app/immutable/assets/Light.CHnDyB3c.jpeg 1000w, /_app/immutable/assets/Light.fzSYsHOm.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Light.fzSYsHOm.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_238 = {
  sources: {
    avif: "/_app/immutable/assets/Midtone-portrait.CskEcUNV.avif 1000w, /_app/immutable/assets/Midtone-portrait.CoJqxcK_.avif 2000w",
    webp: "/_app/immutable/assets/Midtone-portrait.B0fmo4HH.webp 1000w, /_app/immutable/assets/Midtone-portrait.DkAD4Ta8.webp 2000w",
    jpeg: "/_app/immutable/assets/Midtone-portrait.OJGXFYsV.jpeg 1000w, /_app/immutable/assets/Midtone-portrait.Nb4NTWXE.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Midtone-portrait.Nb4NTWXE.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_239 = {
  sources: {
    avif: "/_app/immutable/assets/Monk.6g5pK8aE.avif 1000w, /_app/immutable/assets/Monk.Cd8tSe1L.avif 2000w",
    webp: "/_app/immutable/assets/Monk.BAkzbVUj.webp 1000w, /_app/immutable/assets/Monk.C-AFUY82.webp 2000w",
    jpeg: "/_app/immutable/assets/Monk.DAEiNHbP.jpeg 1000w, /_app/immutable/assets/Monk.BMT2VKcx.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Monk.BMT2VKcx.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_240 = {
  sources: {
    avif: "/_app/immutable/assets/Mouse-again.DgWDyx-2.avif 1000w, /_app/immutable/assets/Mouse-again.BhlXSkRt.avif 2000w",
    webp: "/_app/immutable/assets/Mouse-again.CWiKXkFg.webp 1000w, /_app/immutable/assets/Mouse-again.BdP0CK1B.webp 2000w",
    jpeg: "/_app/immutable/assets/Mouse-again.3IiRrC9N.jpeg 1000w, /_app/immutable/assets/Mouse-again.miEu2BKe.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Mouse-again.miEu2BKe.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_241 = {
  sources: {
    avif: "/_app/immutable/assets/Mushy3.BNRtE4eh.avif 333w, /_app/immutable/assets/Mushy3.CmQhj-3S.avif 666w",
    webp: "/_app/immutable/assets/Mushy3.uKWD1ah6.webp 333w, /_app/immutable/assets/Mushy3.8LNRxt3M.webp 666w",
    jpeg: "/_app/immutable/assets/Mushy3.BxgqwVPI.jpeg 333w, /_app/immutable/assets/Mushy3.k3N_pinZ.jpeg 666w"
  },
  img: {
    src: "/_app/immutable/assets/Mushy3.k3N_pinZ.jpeg",
    w: 666,
    h: 889
  }
};
const __vite_glob_0_242 = {
  sources: {
    avif: "/_app/immutable/assets/Notmoving.C7VnuWiE.avif 1000w, /_app/immutable/assets/Notmoving.CcZufkJd.avif 2000w",
    webp: "/_app/immutable/assets/Notmoving.ozogrP5x.webp 1000w, /_app/immutable/assets/Notmoving.BTaRrzsi.webp 2000w",
    jpeg: "/_app/immutable/assets/Notmoving.DLfL_aCC.jpeg 1000w, /_app/immutable/assets/Notmoving.CiW4kv7M.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Notmoving.CiW4kv7M.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_243 = {
  sources: {
    avif: "/_app/immutable/assets/Omabreakfasting.D_e4Km--.avif 1000w, /_app/immutable/assets/Omabreakfasting.DAyZqqgu.avif 2000w",
    webp: "/_app/immutable/assets/Omabreakfasting.D89pVfVf.webp 1000w, /_app/immutable/assets/Omabreakfasting.Bp065mby.webp 2000w",
    jpeg: "/_app/immutable/assets/Omabreakfasting.DOfhVpgM.jpeg 1000w, /_app/immutable/assets/Omabreakfasting.CXW55Jxg.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Omabreakfasting.CXW55Jxg.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_244 = {
  sources: {
    avif: "/_app/immutable/assets/Phnompenh.DZA_Aojg.avif 1000w, /_app/immutable/assets/Phnompenh.DAKlzetW.avif 2000w",
    webp: "/_app/immutable/assets/Phnompenh.pQbFDlwN.webp 1000w, /_app/immutable/assets/Phnompenh.CNd2dj5x.webp 2000w",
    jpeg: "/_app/immutable/assets/Phnompenh.F-539B2m.jpeg 1000w, /_app/immutable/assets/Phnompenh.CxtQS2Pg.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Phnompenh.CxtQS2Pg.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_245 = {
  sources: {
    avif: "/_app/immutable/assets/Pidegons.C9I67lMm.avif 1000w, /_app/immutable/assets/Pidegons.DjXINWdv.avif 2000w",
    webp: "/_app/immutable/assets/Pidegons.DBeVOtKC.webp 1000w, /_app/immutable/assets/Pidegons.DLzELotJ.webp 2000w",
    jpeg: "/_app/immutable/assets/Pidegons.Bm56cARa.jpeg 1000w, /_app/immutable/assets/Pidegons.DDw3Sy6p.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Pidegons.DDw3Sy6p.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_246 = {
  sources: {
    avif: "/_app/immutable/assets/Pipedin.DIhGzq4p.avif 1000w, /_app/immutable/assets/Pipedin.CuQPgUOf.avif 2000w",
    webp: "/_app/immutable/assets/Pipedin.COs3enEh.webp 1000w, /_app/immutable/assets/Pipedin.Cneegm5m.webp 2000w",
    jpeg: "/_app/immutable/assets/Pipedin.vtVYGZCk.jpeg 1000w, /_app/immutable/assets/Pipedin.Ck0V9A1S.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Pipedin.Ck0V9A1S.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_247 = {
  sources: {
    avif: "/_app/immutable/assets/Romewindowsketch.DGFAm6XC.avif 1000w, /_app/immutable/assets/Romewindowsketch.WBBHI7XB.avif 2000w",
    webp: "/_app/immutable/assets/Romewindowsketch.Chadnr7K.webp 1000w, /_app/immutable/assets/Romewindowsketch.B_F64bds.webp 2000w",
    jpeg: "/_app/immutable/assets/Romewindowsketch.yEOi8jkP.jpeg 1000w, /_app/immutable/assets/Romewindowsketch.DAiCD4wY.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Romewindowsketch.DAiCD4wY.jpeg",
    w: 2e3,
    h: 1414
  }
};
const __vite_glob_0_248 = {
  sources: {
    avif: "/_app/immutable/assets/Selfie7.By1J7QBz.avif 1000w, /_app/immutable/assets/Selfie7.C7SjAd-G.avif 2000w",
    webp: "/_app/immutable/assets/Selfie7.DP9yE6Ua.webp 1000w, /_app/immutable/assets/Selfie7.DQTM2ySS.webp 2000w",
    jpeg: "/_app/immutable/assets/Selfie7.BiusToiY.jpeg 1000w, /_app/immutable/assets/Selfie7.DUQsqGze.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Selfie7.DUQsqGze.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_249 = {
  sources: {
    avif: "/_app/immutable/assets/Singing.BhtmlVmY.avif 1000w, /_app/immutable/assets/Singing.Ca0WP6Ys.avif 2000w",
    webp: "/_app/immutable/assets/Singing.B-W2_W7U.webp 1000w, /_app/immutable/assets/Singing.B_FwVVP2.webp 2000w",
    jpeg: "/_app/immutable/assets/Singing.BKTMFcTd.jpeg 1000w, /_app/immutable/assets/Singing.DLd2aL71.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Singing.DLd2aL71.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_250 = {
  sources: {
    avif: "/_app/immutable/assets/Sleepingbenny.aODh4HGU.avif 1000w, /_app/immutable/assets/Sleepingbenny.M_0yfRe0.avif 2000w",
    webp: "/_app/immutable/assets/Sleepingbenny.CCktx9uk.webp 1000w, /_app/immutable/assets/Sleepingbenny.CtFBhik2.webp 2000w",
    jpeg: "/_app/immutable/assets/Sleepingbenny.C0BOCaf7.jpeg 1000w, /_app/immutable/assets/Sleepingbenny.DrI4JplS.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Sleepingbenny.DrI4JplS.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_251 = {
  sources: {
    avif: "/_app/immutable/assets/Sower2.C1RRenFu.avif 1000w, /_app/immutable/assets/Sower2.BMXxG9Pk.avif 2000w",
    webp: "/_app/immutable/assets/Sower2.CoTW4XdJ.webp 1000w, /_app/immutable/assets/Sower2.C894LRUT.webp 2000w",
    jpeg: "/_app/immutable/assets/Sower2.PegCSJwQ.jpeg 1000w, /_app/immutable/assets/Sower2.Ddd2kAsA.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Sower2.Ddd2kAsA.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_252 = {
  sources: {
    avif: "/_app/immutable/assets/Sowerred.B7Gr-8Ji.avif 1000w, /_app/immutable/assets/Sowerred.CQsgwE4L.avif 2000w",
    webp: "/_app/immutable/assets/Sowerred.CGIiHJ8N.webp 1000w, /_app/immutable/assets/Sowerred.D7C8tGK-.webp 2000w",
    jpeg: "/_app/immutable/assets/Sowerred.CZMDs3_B.jpeg 1000w, /_app/immutable/assets/Sowerred.DqkjrNgP.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Sowerred.DqkjrNgP.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_253 = {
  sources: {
    avif: "/_app/immutable/assets/Streetcornercafe.KcDB6iRQ.avif 1000w, /_app/immutable/assets/Streetcornercafe.Bg7KwfHw.avif 2000w",
    webp: "/_app/immutable/assets/Streetcornercafe.GrvJqWxi.webp 1000w, /_app/immutable/assets/Streetcornercafe.CpGrz0mL.webp 2000w",
    jpeg: "/_app/immutable/assets/Streetcornercafe.YQLnlp2S.jpeg 1000w, /_app/immutable/assets/Streetcornercafe.BqMJ33NI.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Streetcornercafe.BqMJ33NI.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_254 = {
  sources: {
    avif: "/_app/immutable/assets/Study1.BwmqNt9z.avif 1000w, /_app/immutable/assets/Study1.kUjntPJq.avif 2000w",
    webp: "/_app/immutable/assets/Study1.B3yUMC3b.webp 1000w, /_app/immutable/assets/Study1.Cq-lFkQe.webp 2000w",
    jpeg: "/_app/immutable/assets/Study1.CaMKh98a.jpeg 1000w, /_app/immutable/assets/Study1.mZIYMZOx.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Study1.mZIYMZOx.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_255 = {
  sources: {
    avif: "/_app/immutable/assets/Study2.DagARxZo.avif 1000w, /_app/immutable/assets/Study2.Ca3TJF0k.avif 2000w",
    webp: "/_app/immutable/assets/Study2.CDsZlaaz.webp 1000w, /_app/immutable/assets/Study2.DBcHD7HK.webp 2000w",
    jpeg: "/_app/immutable/assets/Study2.aS_qMhNw.jpeg 1000w, /_app/immutable/assets/Study2.BmA2hux7.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Study2.BmA2hux7.jpeg",
    w: 2e3,
    h: 2667
  }
};
const __vite_glob_0_256 = {
  sources: {
    avif: "/_app/immutable/assets/Tonedmouse.CURaXedN.avif 333w, /_app/immutable/assets/Tonedmouse.CerNsZ5O.avif 666w",
    webp: "/_app/immutable/assets/Tonedmouse.BB8s1yf8.webp 333w, /_app/immutable/assets/Tonedmouse.BBHVIXfM.webp 666w",
    jpeg: "/_app/immutable/assets/Tonedmouse.BuI7vDDC.jpeg 333w, /_app/immutable/assets/Tonedmouse.CsX-pqGk.jpeg 666w"
  },
  img: {
    src: "/_app/immutable/assets/Tonedmouse.CsX-pqGk.jpeg",
    w: 666,
    h: 889
  }
};
const __vite_glob_0_257 = {
  sources: {
    avif: "/_app/immutable/assets/Untitled.Ca3BIKvl.avif 1000w, /_app/immutable/assets/Untitled.BVxxNg-O.avif 2000w",
    webp: "/_app/immutable/assets/Untitled.YbXbdiUB.webp 1000w, /_app/immutable/assets/Untitled.ASsyTNTS.webp 2000w",
    jpeg: "/_app/immutable/assets/Untitled.C50AtYnK.jpeg 1000w, /_app/immutable/assets/Untitled.Db-p_aBI.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Untitled.Db-p_aBI.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_258 = {
  sources: {
    avif: "/_app/immutable/assets/Windowchallenge1.DB3-OH2w.avif 1000w, /_app/immutable/assets/Windowchallenge1.W0LaMUQn.avif 2000w",
    webp: "/_app/immutable/assets/Windowchallenge1.CckY9xJl.webp 1000w, /_app/immutable/assets/Windowchallenge1.Bwrz9llB.webp 2000w",
    jpeg: "/_app/immutable/assets/Windowchallenge1.yVNmi_aQ.jpeg 1000w, /_app/immutable/assets/Windowchallenge1.KhiyfgPP.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Windowchallenge1.KhiyfgPP.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_259 = {
  sources: {
    avif: "/_app/immutable/assets/Windowswap2.OJS1_viX.avif 1000w, /_app/immutable/assets/Windowswap2.CDa4N2wX.avif 2000w",
    webp: "/_app/immutable/assets/Windowswap2.BQzVWPJn.webp 1000w, /_app/immutable/assets/Windowswap2.ChAuOjQj.webp 2000w",
    jpeg: "/_app/immutable/assets/Windowswap2.CzxLN7cG.jpeg 1000w, /_app/immutable/assets/Windowswap2.nwqBGFPJ.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/Windowswap2.nwqBGFPJ.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_260 = {
  sources: {
    avif: "/_app/immutable/assets/a1a332fc74.CaSfYGRK.avif 300w, /_app/immutable/assets/a1a332fc74.yhRI9Gbl.avif 600w",
    webp: "/_app/immutable/assets/a1a332fc74.DVJPahLE.webp 300w, /_app/immutable/assets/a1a332fc74.Zr1GrNZZ.webp 600w",
    jpeg: "/_app/immutable/assets/a1a332fc74.CNujlyyO.jpeg 300w, /_app/immutable/assets/a1a332fc74.C-xw-raZ.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/a1a332fc74.C-xw-raZ.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_261 = {
  sources: {
    avif: "/_app/immutable/assets/ab65b14961.CG46ZIbc.avif 300w, /_app/immutable/assets/ab65b14961.CyeVuw82.avif 599w",
    webp: "/_app/immutable/assets/ab65b14961.zGYZDLH1.webp 300w, /_app/immutable/assets/ab65b14961.C75u0pel.webp 599w",
    jpeg: "/_app/immutable/assets/ab65b14961.CW7mnWoz.jpeg 300w, /_app/immutable/assets/ab65b14961.CyGGJHMS.jpeg 599w"
  },
  img: {
    src: "/_app/immutable/assets/ab65b14961.CyGGJHMS.jpeg",
    w: 599,
    h: 810
  }
};
const __vite_glob_0_262 = {
  sources: {
    avif: "/_app/immutable/assets/ad8002b7da.DgbQXnFP.avif 300w, /_app/immutable/assets/ad8002b7da.DU86iPjs.avif 600w",
    webp: "/_app/immutable/assets/ad8002b7da.UKKRBlul.webp 300w, /_app/immutable/assets/ad8002b7da.cKedK6mO.webp 600w",
    jpeg: "/_app/immutable/assets/ad8002b7da.BGwzH1aL.jpeg 300w, /_app/immutable/assets/ad8002b7da.BHCIMUKj.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/ad8002b7da.BHCIMUKj.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_263 = {
  sources: {
    avif: "/_app/immutable/assets/ae4a2986aa.D2jgIepA.avif 300w, /_app/immutable/assets/ae4a2986aa.R_G4UACP.avif 599w",
    webp: "/_app/immutable/assets/ae4a2986aa.Cu__kxdE.webp 300w, /_app/immutable/assets/ae4a2986aa.E5zS8WyR.webp 599w",
    jpeg: "/_app/immutable/assets/ae4a2986aa.CKlsltPp.jpeg 300w, /_app/immutable/assets/ae4a2986aa.D-OJJ8Qa.jpeg 599w"
  },
  img: {
    src: "/_app/immutable/assets/ae4a2986aa.D-OJJ8Qa.jpeg",
    w: 599,
    h: 449
  }
};
const __vite_glob_0_264 = {
  sources: {
    avif: "/_app/immutable/assets/against-the-window.MluE3DqL.avif 1512w, /_app/immutable/assets/against-the-window.c3t8enGu.avif 3024w",
    webp: "/_app/immutable/assets/against-the-window.DiwqnLCD.webp 1512w, /_app/immutable/assets/against-the-window.Dplbvqvo.webp 3024w",
    jpeg: "/_app/immutable/assets/against-the-window.DQ5z38sa.jpeg 1512w, /_app/immutable/assets/against-the-window.BYBCVP0v.jpeg 3024w"
  },
  img: {
    src: "/_app/immutable/assets/against-the-window.BYBCVP0v.jpeg",
    w: 3024,
    h: 4032
  }
};
const __vite_glob_0_265 = {
  sources: {
    avif: "/_app/immutable/assets/atasting.BlkKfUB2.avif 225w, /_app/immutable/assets/atasting.D5tO8aDz.avif 450w",
    webp: "/_app/immutable/assets/atasting.B0aOotqy.webp 225w, /_app/immutable/assets/atasting.CJkJ6eKF.webp 450w",
    jpeg: "/_app/immutable/assets/atasting.umJMc1EH.jpeg 225w, /_app/immutable/assets/atasting.C0Kb-6HO.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/atasting.C0Kb-6HO.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_266 = {
  sources: {
    avif: "/_app/immutable/assets/b0ee13ae4c.C5r9J_l3.avif 300w, /_app/immutable/assets/b0ee13ae4c.WsuX8yfU.avif 600w",
    webp: "/_app/immutable/assets/b0ee13ae4c.C9iCmbJt.webp 300w, /_app/immutable/assets/b0ee13ae4c.CpVUPTSH.webp 600w",
    jpeg: "/_app/immutable/assets/b0ee13ae4c.D181gdIc.jpeg 300w, /_app/immutable/assets/b0ee13ae4c.DcfF1FmC.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/b0ee13ae4c.DcfF1FmC.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_267 = {
  sources: {
    avif: "/_app/immutable/assets/b35c6645f6.BQANpyKL.avif 300w, /_app/immutable/assets/b35c6645f6.BhYT76bV.avif 600w",
    webp: "/_app/immutable/assets/b35c6645f6.DXLuf1rq.webp 300w, /_app/immutable/assets/b35c6645f6.dF508oQb.webp 600w",
    jpeg: "/_app/immutable/assets/b35c6645f6.BrGKgdF7.jpeg 300w, /_app/immutable/assets/b35c6645f6.BfZd4u0u.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/b35c6645f6.BfZd4u0u.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_268 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreia4ssm6lbrlpxoedsh5hmbyqkvbv66wbgptj2r4ymh3itvhkoxf6y.BiuQzlcg.avif 750w, /_app/immutable/assets/bafkreia4ssm6lbrlpxoedsh5hmbyqkvbv66wbgptj2r4ymh3itvhkoxf6y.rvE7AUSt.avif 1500w",
    webp: "/_app/immutable/assets/bafkreia4ssm6lbrlpxoedsh5hmbyqkvbv66wbgptj2r4ymh3itvhkoxf6y.Bz24u6wy.webp 750w, /_app/immutable/assets/bafkreia4ssm6lbrlpxoedsh5hmbyqkvbv66wbgptj2r4ymh3itvhkoxf6y.CrqH6NzP.webp 1500w",
    jpeg: "/_app/immutable/assets/bafkreia4ssm6lbrlpxoedsh5hmbyqkvbv66wbgptj2r4ymh3itvhkoxf6y.CtmGniME.jpeg 750w, /_app/immutable/assets/bafkreia4ssm6lbrlpxoedsh5hmbyqkvbv66wbgptj2r4ymh3itvhkoxf6y.qJb3BWph.jpeg 1500w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreia4ssm6lbrlpxoedsh5hmbyqkvbv66wbgptj2r4ymh3itvhkoxf6y.qJb3BWph.jpeg",
    w: 1500,
    h: 2e3
  }
};
const __vite_glob_0_269 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreiahg6cum5xsy4qti3ezkwkhgdheyihf5puvgopougel25rugnkjta.OlS-5d3M.avif 1000w, /_app/immutable/assets/bafkreiahg6cum5xsy4qti3ezkwkhgdheyihf5puvgopougel25rugnkjta.DQrhfkEH.avif 2000w",
    webp: "/_app/immutable/assets/bafkreiahg6cum5xsy4qti3ezkwkhgdheyihf5puvgopougel25rugnkjta.CtnCTCMt.webp 1000w, /_app/immutable/assets/bafkreiahg6cum5xsy4qti3ezkwkhgdheyihf5puvgopougel25rugnkjta.BeDzPGd7.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreiahg6cum5xsy4qti3ezkwkhgdheyihf5puvgopougel25rugnkjta.Bd40qj-D.jpeg 1000w, /_app/immutable/assets/bafkreiahg6cum5xsy4qti3ezkwkhgdheyihf5puvgopougel25rugnkjta.CvP8Gcm3.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreiahg6cum5xsy4qti3ezkwkhgdheyihf5puvgopougel25rugnkjta.CvP8Gcm3.jpeg",
    w: 2e3,
    h: 1389
  }
};
const __vite_glob_0_270 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreiaist7i2on52yxk7ib74gdi4rter4mwhvgckt7rudxclgxagndlcu.B6CCD3iV.avif 1000w, /_app/immutable/assets/bafkreiaist7i2on52yxk7ib74gdi4rter4mwhvgckt7rudxclgxagndlcu.CdAAVIBi.avif 2000w",
    webp: "/_app/immutable/assets/bafkreiaist7i2on52yxk7ib74gdi4rter4mwhvgckt7rudxclgxagndlcu.CeQiMrRC.webp 1000w, /_app/immutable/assets/bafkreiaist7i2on52yxk7ib74gdi4rter4mwhvgckt7rudxclgxagndlcu.CZVDJdkP.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreiaist7i2on52yxk7ib74gdi4rter4mwhvgckt7rudxclgxagndlcu.DHOYZqq5.jpeg 1000w, /_app/immutable/assets/bafkreiaist7i2on52yxk7ib74gdi4rter4mwhvgckt7rudxclgxagndlcu.DqOBGDNm.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreiaist7i2on52yxk7ib74gdi4rter4mwhvgckt7rudxclgxagndlcu.DqOBGDNm.jpeg",
    w: 2e3,
    h: 1389
  }
};
const __vite_glob_0_271 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreiarifdfezdzscs465pttrxcp6hxfbmxzc3qsoacvoj2ui7szkhanu.qTCREApj.avif 1000w, /_app/immutable/assets/bafkreiarifdfezdzscs465pttrxcp6hxfbmxzc3qsoacvoj2ui7szkhanu.7bubshFh.avif 2000w",
    webp: "/_app/immutable/assets/bafkreiarifdfezdzscs465pttrxcp6hxfbmxzc3qsoacvoj2ui7szkhanu.Btvv1THF.webp 1000w, /_app/immutable/assets/bafkreiarifdfezdzscs465pttrxcp6hxfbmxzc3qsoacvoj2ui7szkhanu.Dyl67_XL.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreiarifdfezdzscs465pttrxcp6hxfbmxzc3qsoacvoj2ui7szkhanu.EwryJfXp.jpeg 1000w, /_app/immutable/assets/bafkreiarifdfezdzscs465pttrxcp6hxfbmxzc3qsoacvoj2ui7szkhanu.leG_GlRD.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreiarifdfezdzscs465pttrxcp6hxfbmxzc3qsoacvoj2ui7szkhanu.leG_GlRD.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_272 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreiasucistwpt5erdxie6pb6x24nzzaonqi3wkcg5ljofhjrj4qzr24.OM1XQUql.avif 1000w, /_app/immutable/assets/bafkreiasucistwpt5erdxie6pb6x24nzzaonqi3wkcg5ljofhjrj4qzr24.C7CR4zoL.avif 2000w",
    webp: "/_app/immutable/assets/bafkreiasucistwpt5erdxie6pb6x24nzzaonqi3wkcg5ljofhjrj4qzr24.BWqYqMyy.webp 1000w, /_app/immutable/assets/bafkreiasucistwpt5erdxie6pb6x24nzzaonqi3wkcg5ljofhjrj4qzr24.Cj8LRDzh.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreiasucistwpt5erdxie6pb6x24nzzaonqi3wkcg5ljofhjrj4qzr24.BIkln3hS.jpeg 1000w, /_app/immutable/assets/bafkreiasucistwpt5erdxie6pb6x24nzzaonqi3wkcg5ljofhjrj4qzr24.Diw2Rlz1.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreiasucistwpt5erdxie6pb6x24nzzaonqi3wkcg5ljofhjrj4qzr24.Diw2Rlz1.jpeg",
    w: 2e3,
    h: 1544
  }
};
const __vite_glob_0_273 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreiavkzuadkjsizjnqzonvtrukoumpicikhobq35ccy2r46rurkmury.b6lYqGs0.avif 1000w, /_app/immutable/assets/bafkreiavkzuadkjsizjnqzonvtrukoumpicikhobq35ccy2r46rurkmury.BfaUbT3r.avif 2000w",
    webp: "/_app/immutable/assets/bafkreiavkzuadkjsizjnqzonvtrukoumpicikhobq35ccy2r46rurkmury.BpgZ0ZSf.webp 1000w, /_app/immutable/assets/bafkreiavkzuadkjsizjnqzonvtrukoumpicikhobq35ccy2r46rurkmury.DhXokGmB.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreiavkzuadkjsizjnqzonvtrukoumpicikhobq35ccy2r46rurkmury.HYqWRQUf.jpeg 1000w, /_app/immutable/assets/bafkreiavkzuadkjsizjnqzonvtrukoumpicikhobq35ccy2r46rurkmury.Buj7HPje.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreiavkzuadkjsizjnqzonvtrukoumpicikhobq35ccy2r46rurkmury.Buj7HPje.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_274 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreiawirpmqbgahp6ws3zp3zmadhfuchzyj2iejkxeyy7y2jnmyrrkdq.CG6lhRbI.avif 1000w, /_app/immutable/assets/bafkreiawirpmqbgahp6ws3zp3zmadhfuchzyj2iejkxeyy7y2jnmyrrkdq.C7g_Kc4D.avif 2000w",
    webp: "/_app/immutable/assets/bafkreiawirpmqbgahp6ws3zp3zmadhfuchzyj2iejkxeyy7y2jnmyrrkdq.CG8S31F9.webp 1000w, /_app/immutable/assets/bafkreiawirpmqbgahp6ws3zp3zmadhfuchzyj2iejkxeyy7y2jnmyrrkdq.Y17b5qt_.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreiawirpmqbgahp6ws3zp3zmadhfuchzyj2iejkxeyy7y2jnmyrrkdq.8UVfpBpL.jpeg 1000w, /_app/immutable/assets/bafkreiawirpmqbgahp6ws3zp3zmadhfuchzyj2iejkxeyy7y2jnmyrrkdq.CaWn5wx4.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreiawirpmqbgahp6ws3zp3zmadhfuchzyj2iejkxeyy7y2jnmyrrkdq.CaWn5wx4.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_275 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreibj7u4rxw6lb2axwlb7yjb3xdhlmkwcdrzzmdobolwur3s4j4u75u.DvRg39aH.avif 1000w, /_app/immutable/assets/bafkreibj7u4rxw6lb2axwlb7yjb3xdhlmkwcdrzzmdobolwur3s4j4u75u.CtlgWzwI.avif 2000w",
    webp: "/_app/immutable/assets/bafkreibj7u4rxw6lb2axwlb7yjb3xdhlmkwcdrzzmdobolwur3s4j4u75u.l6AMLB7D.webp 1000w, /_app/immutable/assets/bafkreibj7u4rxw6lb2axwlb7yjb3xdhlmkwcdrzzmdobolwur3s4j4u75u.DCSIVVyR.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreibj7u4rxw6lb2axwlb7yjb3xdhlmkwcdrzzmdobolwur3s4j4u75u.CNQdGhe2.jpeg 1000w, /_app/immutable/assets/bafkreibj7u4rxw6lb2axwlb7yjb3xdhlmkwcdrzzmdobolwur3s4j4u75u.BlMmg6C7.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreibj7u4rxw6lb2axwlb7yjb3xdhlmkwcdrzzmdobolwur3s4j4u75u.BlMmg6C7.jpeg",
    w: 2e3,
    h: 1389
  }
};
const __vite_glob_0_276 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreibjtz2fmhrr5u2vx74wdrlwhttosouhne4h55mvj4jwsgmjxznxzm.C3DQt1qr.avif 675w, /_app/immutable/assets/bafkreibjtz2fmhrr5u2vx74wdrlwhttosouhne4h55mvj4jwsgmjxznxzm.CuKu_Z4b.avif 1350w",
    webp: "/_app/immutable/assets/bafkreibjtz2fmhrr5u2vx74wdrlwhttosouhne4h55mvj4jwsgmjxznxzm.Df0GJDal.webp 675w, /_app/immutable/assets/bafkreibjtz2fmhrr5u2vx74wdrlwhttosouhne4h55mvj4jwsgmjxznxzm.eg5zWjwq.webp 1350w",
    jpeg: "/_app/immutable/assets/bafkreibjtz2fmhrr5u2vx74wdrlwhttosouhne4h55mvj4jwsgmjxznxzm.Ba4WWoi4.jpeg 675w, /_app/immutable/assets/bafkreibjtz2fmhrr5u2vx74wdrlwhttosouhne4h55mvj4jwsgmjxznxzm.CvJndZpP.jpeg 1350w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreibjtz2fmhrr5u2vx74wdrlwhttosouhne4h55mvj4jwsgmjxznxzm.CvJndZpP.jpeg",
    w: 1350,
    h: 1350
  }
};
const __vite_glob_0_277 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreibtxtcpmufmbutpcj45swuxciuxjm4jk6xkz227hrxjwvlpj567zm.DPqaBd9S.avif 1000w, /_app/immutable/assets/bafkreibtxtcpmufmbutpcj45swuxciuxjm4jk6xkz227hrxjwvlpj567zm.BcKRDavV.avif 2000w",
    webp: "/_app/immutable/assets/bafkreibtxtcpmufmbutpcj45swuxciuxjm4jk6xkz227hrxjwvlpj567zm.DAB4GfiH.webp 1000w, /_app/immutable/assets/bafkreibtxtcpmufmbutpcj45swuxciuxjm4jk6xkz227hrxjwvlpj567zm.Db9iq8eo.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreibtxtcpmufmbutpcj45swuxciuxjm4jk6xkz227hrxjwvlpj567zm._P68jjwM.jpeg 1000w, /_app/immutable/assets/bafkreibtxtcpmufmbutpcj45swuxciuxjm4jk6xkz227hrxjwvlpj567zm.2ttm8Vu7.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreibtxtcpmufmbutpcj45swuxciuxjm4jk6xkz227hrxjwvlpj567zm.2ttm8Vu7.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_278 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreibv5an37ukpotsuk6ozwz5bnqy36zpv5drj36iqpjyfhgpz5xgedy.Bfaz5Yeh.avif 1000w, /_app/immutable/assets/bafkreibv5an37ukpotsuk6ozwz5bnqy36zpv5drj36iqpjyfhgpz5xgedy.BERrfszI.avif 2000w",
    webp: "/_app/immutable/assets/bafkreibv5an37ukpotsuk6ozwz5bnqy36zpv5drj36iqpjyfhgpz5xgedy.BIIfbPtU.webp 1000w, /_app/immutable/assets/bafkreibv5an37ukpotsuk6ozwz5bnqy36zpv5drj36iqpjyfhgpz5xgedy.--Uv8hQb.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreibv5an37ukpotsuk6ozwz5bnqy36zpv5drj36iqpjyfhgpz5xgedy.BxjyyUkO.jpeg 1000w, /_app/immutable/assets/bafkreibv5an37ukpotsuk6ozwz5bnqy36zpv5drj36iqpjyfhgpz5xgedy.DTYjoPFM.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreibv5an37ukpotsuk6ozwz5bnqy36zpv5drj36iqpjyfhgpz5xgedy.DTYjoPFM.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_279 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreic275kgovi3vqn3c7xp6kqxv5rrxxncdje7nvoynlqlxe6f73qnmy.NafZ0rSv.avif 250w, /_app/immutable/assets/bafkreic275kgovi3vqn3c7xp6kqxv5rrxxncdje7nvoynlqlxe6f73qnmy.Bc7AdH2D.avif 500w",
    webp: "/_app/immutable/assets/bafkreic275kgovi3vqn3c7xp6kqxv5rrxxncdje7nvoynlqlxe6f73qnmy.Bdxy-zNC.webp 250w, /_app/immutable/assets/bafkreic275kgovi3vqn3c7xp6kqxv5rrxxncdje7nvoynlqlxe6f73qnmy.Diq-rOI8.webp 500w",
    jpeg: "/_app/immutable/assets/bafkreic275kgovi3vqn3c7xp6kqxv5rrxxncdje7nvoynlqlxe6f73qnmy.mOwxdp-q.jpeg 250w, /_app/immutable/assets/bafkreic275kgovi3vqn3c7xp6kqxv5rrxxncdje7nvoynlqlxe6f73qnmy.BQiGOCLO.jpeg 500w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreic275kgovi3vqn3c7xp6kqxv5rrxxncdje7nvoynlqlxe6f73qnmy.BQiGOCLO.jpeg",
    w: 500,
    h: 666
  }
};
const __vite_glob_0_280 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreic6qlpz5nkur2g7cagtpirx47ewqmxgesx2yzfurficd47ngynhm4._bd9cSN4.avif 756w, /_app/immutable/assets/bafkreic6qlpz5nkur2g7cagtpirx47ewqmxgesx2yzfurficd47ngynhm4.CS47kDZH.avif 1511w",
    webp: "/_app/immutable/assets/bafkreic6qlpz5nkur2g7cagtpirx47ewqmxgesx2yzfurficd47ngynhm4.D0Uawz3n.webp 756w, /_app/immutable/assets/bafkreic6qlpz5nkur2g7cagtpirx47ewqmxgesx2yzfurficd47ngynhm4.R4_KPueA.webp 1511w",
    jpeg: "/_app/immutable/assets/bafkreic6qlpz5nkur2g7cagtpirx47ewqmxgesx2yzfurficd47ngynhm4.DQiEjPZ4.jpeg 756w, /_app/immutable/assets/bafkreic6qlpz5nkur2g7cagtpirx47ewqmxgesx2yzfurficd47ngynhm4.VFXkmXjw.jpeg 1511w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreic6qlpz5nkur2g7cagtpirx47ewqmxgesx2yzfurficd47ngynhm4.VFXkmXjw.jpeg",
    w: 1511,
    h: 1282
  }
};
const __vite_glob_0_281 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreic72di6pzk7p3krkcuf42b6wdaf6xmdxdymsy57hnpsnjrye74fxy.9Bqrky4i.avif 750w, /_app/immutable/assets/bafkreic72di6pzk7p3krkcuf42b6wdaf6xmdxdymsy57hnpsnjrye74fxy.CYD-iTXk.avif 1500w",
    webp: "/_app/immutable/assets/bafkreic72di6pzk7p3krkcuf42b6wdaf6xmdxdymsy57hnpsnjrye74fxy.DL9L3wBH.webp 750w, /_app/immutable/assets/bafkreic72di6pzk7p3krkcuf42b6wdaf6xmdxdymsy57hnpsnjrye74fxy.CKsN3-_L.webp 1500w",
    jpeg: "/_app/immutable/assets/bafkreic72di6pzk7p3krkcuf42b6wdaf6xmdxdymsy57hnpsnjrye74fxy.Cv-rmU16.jpeg 750w, /_app/immutable/assets/bafkreic72di6pzk7p3krkcuf42b6wdaf6xmdxdymsy57hnpsnjrye74fxy.CczRM41r.jpeg 1500w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreic72di6pzk7p3krkcuf42b6wdaf6xmdxdymsy57hnpsnjrye74fxy.CczRM41r.jpeg",
    w: 1500,
    h: 2e3
  }
};
const __vite_glob_0_282 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreicaxng7rciambfh73mnrvjg66jp7wxw2ra55qnkpsgavtcqjtcgay.d6I56gFf.avif 724w, /_app/immutable/assets/bafkreicaxng7rciambfh73mnrvjg66jp7wxw2ra55qnkpsgavtcqjtcgay.B55V_OY0.avif 1447w",
    webp: "/_app/immutable/assets/bafkreicaxng7rciambfh73mnrvjg66jp7wxw2ra55qnkpsgavtcqjtcgay.D6DIJK-d.webp 724w, /_app/immutable/assets/bafkreicaxng7rciambfh73mnrvjg66jp7wxw2ra55qnkpsgavtcqjtcgay.B1PzAhVh.webp 1447w",
    jpeg: "/_app/immutable/assets/bafkreicaxng7rciambfh73mnrvjg66jp7wxw2ra55qnkpsgavtcqjtcgay.CqVnKflP.jpeg 724w, /_app/immutable/assets/bafkreicaxng7rciambfh73mnrvjg66jp7wxw2ra55qnkpsgavtcqjtcgay.BNdfqfZR.jpeg 1447w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreicaxng7rciambfh73mnrvjg66jp7wxw2ra55qnkpsgavtcqjtcgay.BNdfqfZR.jpeg",
    w: 1447,
    h: 2e3
  }
};
const __vite_glob_0_283 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreickplyzs7xo4bm7sqeaes2jgyxyfhdurrvtvbiffnxfxxkwdzjbdu.D9gb-0lA.avif 1000w, /_app/immutable/assets/bafkreickplyzs7xo4bm7sqeaes2jgyxyfhdurrvtvbiffnxfxxkwdzjbdu.BkVjTQJg.avif 2000w",
    webp: "/_app/immutable/assets/bafkreickplyzs7xo4bm7sqeaes2jgyxyfhdurrvtvbiffnxfxxkwdzjbdu.CZBFcG4b.webp 1000w, /_app/immutable/assets/bafkreickplyzs7xo4bm7sqeaes2jgyxyfhdurrvtvbiffnxfxxkwdzjbdu.Cj3bpcZL.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreickplyzs7xo4bm7sqeaes2jgyxyfhdurrvtvbiffnxfxxkwdzjbdu.SF7WEjxn.jpeg 1000w, /_app/immutable/assets/bafkreickplyzs7xo4bm7sqeaes2jgyxyfhdurrvtvbiffnxfxxkwdzjbdu.DMjWq1W9.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreickplyzs7xo4bm7sqeaes2jgyxyfhdurrvtvbiffnxfxxkwdzjbdu.DMjWq1W9.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_284 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreicr5unhvjhowwbgslkcfbxfaycndnoun5mzsifvbxuzkw7waq4pxe.D7mHKQvT.avif 1000w, /_app/immutable/assets/bafkreicr5unhvjhowwbgslkcfbxfaycndnoun5mzsifvbxuzkw7waq4pxe.W58g9xOP.avif 1999w",
    webp: "/_app/immutable/assets/bafkreicr5unhvjhowwbgslkcfbxfaycndnoun5mzsifvbxuzkw7waq4pxe.DGJgrx-D.webp 1000w, /_app/immutable/assets/bafkreicr5unhvjhowwbgslkcfbxfaycndnoun5mzsifvbxuzkw7waq4pxe.BtN9cikv.webp 1999w",
    jpeg: "/_app/immutable/assets/bafkreicr5unhvjhowwbgslkcfbxfaycndnoun5mzsifvbxuzkw7waq4pxe.BAOq1hDW.jpeg 1000w, /_app/immutable/assets/bafkreicr5unhvjhowwbgslkcfbxfaycndnoun5mzsifvbxuzkw7waq4pxe.BjqG8_Wp.jpeg 1999w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreicr5unhvjhowwbgslkcfbxfaycndnoun5mzsifvbxuzkw7waq4pxe.BjqG8_Wp.jpeg",
    w: 1999,
    h: 1534
  }
};
const __vite_glob_0_285 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreicvajiu2xpie757fg73ryly6pscw5fydnmvjvo3f7mydth5v23xo4.DzrhGc-U.avif 750w, /_app/immutable/assets/bafkreicvajiu2xpie757fg73ryly6pscw5fydnmvjvo3f7mydth5v23xo4.BM4iH0hz.avif 1500w",
    webp: "/_app/immutable/assets/bafkreicvajiu2xpie757fg73ryly6pscw5fydnmvjvo3f7mydth5v23xo4.DP7XWcsh.webp 750w, /_app/immutable/assets/bafkreicvajiu2xpie757fg73ryly6pscw5fydnmvjvo3f7mydth5v23xo4.BjKs6Dxl.webp 1500w",
    jpeg: "/_app/immutable/assets/bafkreicvajiu2xpie757fg73ryly6pscw5fydnmvjvo3f7mydth5v23xo4.D66zRtpa.jpeg 750w, /_app/immutable/assets/bafkreicvajiu2xpie757fg73ryly6pscw5fydnmvjvo3f7mydth5v23xo4.BSP-bJrl.jpeg 1500w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreicvajiu2xpie757fg73ryly6pscw5fydnmvjvo3f7mydth5v23xo4.BSP-bJrl.jpeg",
    w: 1500,
    h: 2e3
  }
};
const __vite_glob_0_286 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreid5a5reckocx2qcniwerhdp4dwydfjpxt7t3ffautvykcvtl6yzzy.eQbMWMaz.avif 750w, /_app/immutable/assets/bafkreid5a5reckocx2qcniwerhdp4dwydfjpxt7t3ffautvykcvtl6yzzy.XLN-o4-U.avif 1500w",
    webp: "/_app/immutable/assets/bafkreid5a5reckocx2qcniwerhdp4dwydfjpxt7t3ffautvykcvtl6yzzy.Ow3H6TNV.webp 750w, /_app/immutable/assets/bafkreid5a5reckocx2qcniwerhdp4dwydfjpxt7t3ffautvykcvtl6yzzy.B2C-oXEU.webp 1500w",
    jpeg: "/_app/immutable/assets/bafkreid5a5reckocx2qcniwerhdp4dwydfjpxt7t3ffautvykcvtl6yzzy.CEszjGrV.jpeg 750w, /_app/immutable/assets/bafkreid5a5reckocx2qcniwerhdp4dwydfjpxt7t3ffautvykcvtl6yzzy.DjXYZyUv.jpeg 1500w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreid5a5reckocx2qcniwerhdp4dwydfjpxt7t3ffautvykcvtl6yzzy.DjXYZyUv.jpeg",
    w: 1500,
    h: 2e3
  }
};
const __vite_glob_0_287 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreidcm6czys6c2te4ij3beqgzl2uxpvrgzxvsalr2t63syhdxeoocoa.Bf50YFcf.avif 750w, /_app/immutable/assets/bafkreidcm6czys6c2te4ij3beqgzl2uxpvrgzxvsalr2t63syhdxeoocoa.2vsh76Tv.avif 1500w",
    webp: "/_app/immutable/assets/bafkreidcm6czys6c2te4ij3beqgzl2uxpvrgzxvsalr2t63syhdxeoocoa.DSy5C6hS.webp 750w, /_app/immutable/assets/bafkreidcm6czys6c2te4ij3beqgzl2uxpvrgzxvsalr2t63syhdxeoocoa.HHBSAQfF.webp 1500w",
    jpeg: "/_app/immutable/assets/bafkreidcm6czys6c2te4ij3beqgzl2uxpvrgzxvsalr2t63syhdxeoocoa.IroBjocS.jpeg 750w, /_app/immutable/assets/bafkreidcm6czys6c2te4ij3beqgzl2uxpvrgzxvsalr2t63syhdxeoocoa.BmuUYSl2.jpeg 1500w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreidcm6czys6c2te4ij3beqgzl2uxpvrgzxvsalr2t63syhdxeoocoa.BmuUYSl2.jpeg",
    w: 1500,
    h: 2e3
  }
};
const __vite_glob_0_288 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreidigdrapkcxz625lixzsyiolf2slfo757t4h5bhnlauaa2z4mqdou.uMKgfosE.avif 1000w, /_app/immutable/assets/bafkreidigdrapkcxz625lixzsyiolf2slfo757t4h5bhnlauaa2z4mqdou.xAnuLUEJ.avif 2000w",
    webp: "/_app/immutable/assets/bafkreidigdrapkcxz625lixzsyiolf2slfo757t4h5bhnlauaa2z4mqdou.DJrH-vIl.webp 1000w, /_app/immutable/assets/bafkreidigdrapkcxz625lixzsyiolf2slfo757t4h5bhnlauaa2z4mqdou.DqctiDtY.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreidigdrapkcxz625lixzsyiolf2slfo757t4h5bhnlauaa2z4mqdou.BstjDHFt.jpeg 1000w, /_app/immutable/assets/bafkreidigdrapkcxz625lixzsyiolf2slfo757t4h5bhnlauaa2z4mqdou.DN_fWRpz.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreidigdrapkcxz625lixzsyiolf2slfo757t4h5bhnlauaa2z4mqdou.DN_fWRpz.jpeg",
    w: 2e3,
    h: 1389
  }
};
const __vite_glob_0_289 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreidmbjltf2nxbsgigcchdlezt7mlmk27cexlxkgbrewgqeoiuisgoq.0VXptnjz.avif 1000w, /_app/immutable/assets/bafkreidmbjltf2nxbsgigcchdlezt7mlmk27cexlxkgbrewgqeoiuisgoq.GgsryVE8.avif 2000w",
    webp: "/_app/immutable/assets/bafkreidmbjltf2nxbsgigcchdlezt7mlmk27cexlxkgbrewgqeoiuisgoq.D8u3FG_s.webp 1000w, /_app/immutable/assets/bafkreidmbjltf2nxbsgigcchdlezt7mlmk27cexlxkgbrewgqeoiuisgoq.Arw2YQKK.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreidmbjltf2nxbsgigcchdlezt7mlmk27cexlxkgbrewgqeoiuisgoq.CPzlyrKY.jpeg 1000w, /_app/immutable/assets/bafkreidmbjltf2nxbsgigcchdlezt7mlmk27cexlxkgbrewgqeoiuisgoq.DUVgYWrs.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreidmbjltf2nxbsgigcchdlezt7mlmk27cexlxkgbrewgqeoiuisgoq.DUVgYWrs.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_290 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreidom5jvw4ypacxefa2aewm6y5p6bslim76cvylm7cd554lxt6whta.BfaaLJfR.avif 1000w, /_app/immutable/assets/bafkreidom5jvw4ypacxefa2aewm6y5p6bslim76cvylm7cd554lxt6whta.BJr5gpIN.avif 2000w",
    webp: "/_app/immutable/assets/bafkreidom5jvw4ypacxefa2aewm6y5p6bslim76cvylm7cd554lxt6whta.DfCzvX7e.webp 1000w, /_app/immutable/assets/bafkreidom5jvw4ypacxefa2aewm6y5p6bslim76cvylm7cd554lxt6whta.Db55LdUN.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreidom5jvw4ypacxefa2aewm6y5p6bslim76cvylm7cd554lxt6whta.CwbJaF5Z.jpeg 1000w, /_app/immutable/assets/bafkreidom5jvw4ypacxefa2aewm6y5p6bslim76cvylm7cd554lxt6whta.C48fyeSl.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreidom5jvw4ypacxefa2aewm6y5p6bslim76cvylm7cd554lxt6whta.C48fyeSl.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_291 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreidt47phj6q3vqo7ip3jmcatdpzn3jxa2bsun27mwe6hv6g4jhlogu.BIG1oRMf.avif 1000w, /_app/immutable/assets/bafkreidt47phj6q3vqo7ip3jmcatdpzn3jxa2bsun27mwe6hv6g4jhlogu.Dck-3iau.avif 2000w",
    webp: "/_app/immutable/assets/bafkreidt47phj6q3vqo7ip3jmcatdpzn3jxa2bsun27mwe6hv6g4jhlogu.BoZuwNV-.webp 1000w, /_app/immutable/assets/bafkreidt47phj6q3vqo7ip3jmcatdpzn3jxa2bsun27mwe6hv6g4jhlogu.CgQQaome.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreidt47phj6q3vqo7ip3jmcatdpzn3jxa2bsun27mwe6hv6g4jhlogu.B0ACbWCM.jpeg 1000w, /_app/immutable/assets/bafkreidt47phj6q3vqo7ip3jmcatdpzn3jxa2bsun27mwe6hv6g4jhlogu.Br7-WvEX.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreidt47phj6q3vqo7ip3jmcatdpzn3jxa2bsun27mwe6hv6g4jhlogu.Br7-WvEX.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_292 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreiduwnov34bdc3xg52wcjzdn2ooqkh4mkeace7putoxomvdobz4rpi.ClI-Xm4K.avif 1000w, /_app/immutable/assets/bafkreiduwnov34bdc3xg52wcjzdn2ooqkh4mkeace7putoxomvdobz4rpi.LiAfdcLx.avif 2000w",
    webp: "/_app/immutable/assets/bafkreiduwnov34bdc3xg52wcjzdn2ooqkh4mkeace7putoxomvdobz4rpi.BBrYxtbM.webp 1000w, /_app/immutable/assets/bafkreiduwnov34bdc3xg52wcjzdn2ooqkh4mkeace7putoxomvdobz4rpi.vCXjQMfc.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreiduwnov34bdc3xg52wcjzdn2ooqkh4mkeace7putoxomvdobz4rpi.CAVZtuG1.jpeg 1000w, /_app/immutable/assets/bafkreiduwnov34bdc3xg52wcjzdn2ooqkh4mkeace7putoxomvdobz4rpi.DQyrR7mv.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreiduwnov34bdc3xg52wcjzdn2ooqkh4mkeace7putoxomvdobz4rpi.DQyrR7mv.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_293 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreie4agxnzoys3cwrfbgwnhefes2oe4fw3j6y6r3ppatkmnwfvx7mii.ievo4ao6.avif 1000w, /_app/immutable/assets/bafkreie4agxnzoys3cwrfbgwnhefes2oe4fw3j6y6r3ppatkmnwfvx7mii.BSWzDXl7.avif 2000w",
    webp: "/_app/immutable/assets/bafkreie4agxnzoys3cwrfbgwnhefes2oe4fw3j6y6r3ppatkmnwfvx7mii.M26Q00_Y.webp 1000w, /_app/immutable/assets/bafkreie4agxnzoys3cwrfbgwnhefes2oe4fw3j6y6r3ppatkmnwfvx7mii.DImhgMjm.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreie4agxnzoys3cwrfbgwnhefes2oe4fw3j6y6r3ppatkmnwfvx7mii.BjUYSY3v.jpeg 1000w, /_app/immutable/assets/bafkreie4agxnzoys3cwrfbgwnhefes2oe4fw3j6y6r3ppatkmnwfvx7mii.Cn4tqQcw.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreie4agxnzoys3cwrfbgwnhefes2oe4fw3j6y6r3ppatkmnwfvx7mii.Cn4tqQcw.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_294 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreiej2fcddcozpjn76gq6c4vjkoi77yekzulaacpngbkilpntffk4ri.BIPx6v6K.avif 1000w, /_app/immutable/assets/bafkreiej2fcddcozpjn76gq6c4vjkoi77yekzulaacpngbkilpntffk4ri.V4xaP_Vl.avif 2000w",
    webp: "/_app/immutable/assets/bafkreiej2fcddcozpjn76gq6c4vjkoi77yekzulaacpngbkilpntffk4ri.Bz55VnDJ.webp 1000w, /_app/immutable/assets/bafkreiej2fcddcozpjn76gq6c4vjkoi77yekzulaacpngbkilpntffk4ri.CdtH-wno.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreiej2fcddcozpjn76gq6c4vjkoi77yekzulaacpngbkilpntffk4ri.DAJkR2dO.jpeg 1000w, /_app/immutable/assets/bafkreiej2fcddcozpjn76gq6c4vjkoi77yekzulaacpngbkilpntffk4ri.mZ67Q0BY.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreiej2fcddcozpjn76gq6c4vjkoi77yekzulaacpngbkilpntffk4ri.mZ67Q0BY.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_295 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreielepiii3lhuzunv6bhhrgc3kstq2ta7azgks7bywkf3w27gu7ine.BZg0zjuX.avif 1000w, /_app/immutable/assets/bafkreielepiii3lhuzunv6bhhrgc3kstq2ta7azgks7bywkf3w27gu7ine.Cgj7sfXe.avif 2000w",
    webp: "/_app/immutable/assets/bafkreielepiii3lhuzunv6bhhrgc3kstq2ta7azgks7bywkf3w27gu7ine.BJ0ISNQL.webp 1000w, /_app/immutable/assets/bafkreielepiii3lhuzunv6bhhrgc3kstq2ta7azgks7bywkf3w27gu7ine.my1XsZ_T.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreielepiii3lhuzunv6bhhrgc3kstq2ta7azgks7bywkf3w27gu7ine.DD77On8P.jpeg 1000w, /_app/immutable/assets/bafkreielepiii3lhuzunv6bhhrgc3kstq2ta7azgks7bywkf3w27gu7ine.CXdgNRjj.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreielepiii3lhuzunv6bhhrgc3kstq2ta7azgks7bywkf3w27gu7ine.CXdgNRjj.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_296 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreiemva6yjipucqyw6mmmhfmn4kayggsk4q3lflic3ebawsb4onneii.BGdiew-_.avif 750w, /_app/immutable/assets/bafkreiemva6yjipucqyw6mmmhfmn4kayggsk4q3lflic3ebawsb4onneii.CJZKJ967.avif 1500w",
    webp: "/_app/immutable/assets/bafkreiemva6yjipucqyw6mmmhfmn4kayggsk4q3lflic3ebawsb4onneii.liWVlUAg.webp 750w, /_app/immutable/assets/bafkreiemva6yjipucqyw6mmmhfmn4kayggsk4q3lflic3ebawsb4onneii.CU5Gw_TW.webp 1500w",
    jpeg: "/_app/immutable/assets/bafkreiemva6yjipucqyw6mmmhfmn4kayggsk4q3lflic3ebawsb4onneii.gTW_bbU_.jpeg 750w, /_app/immutable/assets/bafkreiemva6yjipucqyw6mmmhfmn4kayggsk4q3lflic3ebawsb4onneii.qSaamejV.jpeg 1500w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreiemva6yjipucqyw6mmmhfmn4kayggsk4q3lflic3ebawsb4onneii.qSaamejV.jpeg",
    w: 1500,
    h: 2e3
  }
};
const __vite_glob_0_297 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreieyj3wi5k5lzrjdo6wjq52crjdklhvjwypffpblyvon5teuawl37e.m6yeI_Bo.avif 1000w, /_app/immutable/assets/bafkreieyj3wi5k5lzrjdo6wjq52crjdklhvjwypffpblyvon5teuawl37e.DC3-HBo0.avif 2000w",
    webp: "/_app/immutable/assets/bafkreieyj3wi5k5lzrjdo6wjq52crjdklhvjwypffpblyvon5teuawl37e.D8gZMJMw.webp 1000w, /_app/immutable/assets/bafkreieyj3wi5k5lzrjdo6wjq52crjdklhvjwypffpblyvon5teuawl37e.C29y3CX7.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreieyj3wi5k5lzrjdo6wjq52crjdklhvjwypffpblyvon5teuawl37e.C3BN-uJt.jpeg 1000w, /_app/immutable/assets/bafkreieyj3wi5k5lzrjdo6wjq52crjdklhvjwypffpblyvon5teuawl37e.DB5HH91F.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreieyj3wi5k5lzrjdo6wjq52crjdklhvjwypffpblyvon5teuawl37e.DB5HH91F.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_298 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreifeodtx7x4rdggzyuuqknmbsenqugdvugz57laiq2yv3xuoxttbym.BL59CkyA.avif 750w, /_app/immutable/assets/bafkreifeodtx7x4rdggzyuuqknmbsenqugdvugz57laiq2yv3xuoxttbym.6eCjU8Zp.avif 1500w",
    webp: "/_app/immutable/assets/bafkreifeodtx7x4rdggzyuuqknmbsenqugdvugz57laiq2yv3xuoxttbym.Btomf7Ma.webp 750w, /_app/immutable/assets/bafkreifeodtx7x4rdggzyuuqknmbsenqugdvugz57laiq2yv3xuoxttbym.CML0Bhg9.webp 1500w",
    jpeg: "/_app/immutable/assets/bafkreifeodtx7x4rdggzyuuqknmbsenqugdvugz57laiq2yv3xuoxttbym.BROlpFjc.jpeg 750w, /_app/immutable/assets/bafkreifeodtx7x4rdggzyuuqknmbsenqugdvugz57laiq2yv3xuoxttbym.CPdFCWCF.jpeg 1500w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreifeodtx7x4rdggzyuuqknmbsenqugdvugz57laiq2yv3xuoxttbym.CPdFCWCF.jpeg",
    w: 1500,
    h: 2e3
  }
};
const __vite_glob_0_299 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreifjwfiknztnsemjjcyjr7axqxffhh3tsu4asw7x6odc4nbu22nq24.Bl1nAvq5.avif 1000w, /_app/immutable/assets/bafkreifjwfiknztnsemjjcyjr7axqxffhh3tsu4asw7x6odc4nbu22nq24.v-msmh58.avif 2000w",
    webp: "/_app/immutable/assets/bafkreifjwfiknztnsemjjcyjr7axqxffhh3tsu4asw7x6odc4nbu22nq24.B3QFalOG.webp 1000w, /_app/immutable/assets/bafkreifjwfiknztnsemjjcyjr7axqxffhh3tsu4asw7x6odc4nbu22nq24.BtUkwyBG.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreifjwfiknztnsemjjcyjr7axqxffhh3tsu4asw7x6odc4nbu22nq24.CQ6CcNJP.jpeg 1000w, /_app/immutable/assets/bafkreifjwfiknztnsemjjcyjr7axqxffhh3tsu4asw7x6odc4nbu22nq24.DuXVvMzz.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreifjwfiknztnsemjjcyjr7axqxffhh3tsu4asw7x6odc4nbu22nq24.DuXVvMzz.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_300 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreifp6vs6vhbyhgehxt4sl6lkphcgaapqkbfchk64mhtavwvmpfh2cu._1a8g_rU.avif 750w, /_app/immutable/assets/bafkreifp6vs6vhbyhgehxt4sl6lkphcgaapqkbfchk64mhtavwvmpfh2cu._8Kx9kua.avif 1500w",
    webp: "/_app/immutable/assets/bafkreifp6vs6vhbyhgehxt4sl6lkphcgaapqkbfchk64mhtavwvmpfh2cu.CkUeFJoo.webp 750w, /_app/immutable/assets/bafkreifp6vs6vhbyhgehxt4sl6lkphcgaapqkbfchk64mhtavwvmpfh2cu.CynBzuyJ.webp 1500w",
    jpeg: "/_app/immutable/assets/bafkreifp6vs6vhbyhgehxt4sl6lkphcgaapqkbfchk64mhtavwvmpfh2cu.BOQeRNzQ.jpeg 750w, /_app/immutable/assets/bafkreifp6vs6vhbyhgehxt4sl6lkphcgaapqkbfchk64mhtavwvmpfh2cu.BBbpmM7w.jpeg 1500w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreifp6vs6vhbyhgehxt4sl6lkphcgaapqkbfchk64mhtavwvmpfh2cu.BBbpmM7w.jpeg",
    w: 1500,
    h: 2e3
  }
};
const __vite_glob_0_301 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreifsetrlsr2lamr4joyktj5dffdpkje6hqfp7duxa2gbn3z4xrckey.DZM9Iy-9.avif 1000w, /_app/immutable/assets/bafkreifsetrlsr2lamr4joyktj5dffdpkje6hqfp7duxa2gbn3z4xrckey.CJ3HQFZc.avif 2000w",
    webp: "/_app/immutable/assets/bafkreifsetrlsr2lamr4joyktj5dffdpkje6hqfp7duxa2gbn3z4xrckey.DgDA-kG2.webp 1000w, /_app/immutable/assets/bafkreifsetrlsr2lamr4joyktj5dffdpkje6hqfp7duxa2gbn3z4xrckey.DtZAxbZ9.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreifsetrlsr2lamr4joyktj5dffdpkje6hqfp7duxa2gbn3z4xrckey.Df5tz2Hn.jpeg 1000w, /_app/immutable/assets/bafkreifsetrlsr2lamr4joyktj5dffdpkje6hqfp7duxa2gbn3z4xrckey.CKLBdq2h.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreifsetrlsr2lamr4joyktj5dffdpkje6hqfp7duxa2gbn3z4xrckey.CKLBdq2h.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_302 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreifzv2lszrui2n4u7276dwojmd4ntagvlpmk35qml3h5f2pbp34mje.CFgm4UIO.avif 750w, /_app/immutable/assets/bafkreifzv2lszrui2n4u7276dwojmd4ntagvlpmk35qml3h5f2pbp34mje.DqPy_u_8.avif 1500w",
    webp: "/_app/immutable/assets/bafkreifzv2lszrui2n4u7276dwojmd4ntagvlpmk35qml3h5f2pbp34mje.xsoY0bc1.webp 750w, /_app/immutable/assets/bafkreifzv2lszrui2n4u7276dwojmd4ntagvlpmk35qml3h5f2pbp34mje.CL4SHBpy.webp 1500w",
    jpeg: "/_app/immutable/assets/bafkreifzv2lszrui2n4u7276dwojmd4ntagvlpmk35qml3h5f2pbp34mje.DR-KW2jS.jpeg 750w, /_app/immutable/assets/bafkreifzv2lszrui2n4u7276dwojmd4ntagvlpmk35qml3h5f2pbp34mje.Bc4M4L2K.jpeg 1500w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreifzv2lszrui2n4u7276dwojmd4ntagvlpmk35qml3h5f2pbp34mje.Bc4M4L2K.jpeg",
    w: 1500,
    h: 2e3
  }
};
const __vite_glob_0_303 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreig5j2vebtrqlkqrdlzsefmjkmlpbnuh62ya5wctgbyzfdq2sw4lwi.Bm-B9B1B.avif 1000w, /_app/immutable/assets/bafkreig5j2vebtrqlkqrdlzsefmjkmlpbnuh62ya5wctgbyzfdq2sw4lwi.DIcZD0h0.avif 2000w",
    webp: "/_app/immutable/assets/bafkreig5j2vebtrqlkqrdlzsefmjkmlpbnuh62ya5wctgbyzfdq2sw4lwi.BIsa1p7u.webp 1000w, /_app/immutable/assets/bafkreig5j2vebtrqlkqrdlzsefmjkmlpbnuh62ya5wctgbyzfdq2sw4lwi.Wg6HSrAl.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreig5j2vebtrqlkqrdlzsefmjkmlpbnuh62ya5wctgbyzfdq2sw4lwi.PTd6WEml.jpeg 1000w, /_app/immutable/assets/bafkreig5j2vebtrqlkqrdlzsefmjkmlpbnuh62ya5wctgbyzfdq2sw4lwi.B_3KAjZ9.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreig5j2vebtrqlkqrdlzsefmjkmlpbnuh62ya5wctgbyzfdq2sw4lwi.B_3KAjZ9.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_304 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreigkrz3hy7tg2q2sqpw5mvcycerdgzyqndn4niv35ixjr72akhwk6u.BTEB2ZKL.avif 1000w, /_app/immutable/assets/bafkreigkrz3hy7tg2q2sqpw5mvcycerdgzyqndn4niv35ixjr72akhwk6u.BAdIsjYX.avif 2000w",
    webp: "/_app/immutable/assets/bafkreigkrz3hy7tg2q2sqpw5mvcycerdgzyqndn4niv35ixjr72akhwk6u.BCiHRaQL.webp 1000w, /_app/immutable/assets/bafkreigkrz3hy7tg2q2sqpw5mvcycerdgzyqndn4niv35ixjr72akhwk6u.BOlYjqG0.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreigkrz3hy7tg2q2sqpw5mvcycerdgzyqndn4niv35ixjr72akhwk6u.BAKeRROC.jpeg 1000w, /_app/immutable/assets/bafkreigkrz3hy7tg2q2sqpw5mvcycerdgzyqndn4niv35ixjr72akhwk6u.RVbmB9HA.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreigkrz3hy7tg2q2sqpw5mvcycerdgzyqndn4niv35ixjr72akhwk6u.RVbmB9HA.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_305 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreihqf3xp5tnmxmb3m27n4qsupj7jcpkhcodia47k42nf2qc76mlmcq.DRVwQRWA.avif 1000w, /_app/immutable/assets/bafkreihqf3xp5tnmxmb3m27n4qsupj7jcpkhcodia47k42nf2qc76mlmcq.cqxrJGkZ.avif 2000w",
    webp: "/_app/immutable/assets/bafkreihqf3xp5tnmxmb3m27n4qsupj7jcpkhcodia47k42nf2qc76mlmcq.CdYow0rg.webp 1000w, /_app/immutable/assets/bafkreihqf3xp5tnmxmb3m27n4qsupj7jcpkhcodia47k42nf2qc76mlmcq._rVfp9SJ.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreihqf3xp5tnmxmb3m27n4qsupj7jcpkhcodia47k42nf2qc76mlmcq.C8KtAJxl.jpeg 1000w, /_app/immutable/assets/bafkreihqf3xp5tnmxmb3m27n4qsupj7jcpkhcodia47k42nf2qc76mlmcq.BsPlHHvF.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreihqf3xp5tnmxmb3m27n4qsupj7jcpkhcodia47k42nf2qc76mlmcq.BsPlHHvF.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_306 = {
  sources: {
    avif: "/_app/immutable/assets/bafkreihv22yuyc3hvtid4mhrsqzxuluptakbibhysyhccyjahcc2eroane.D9EGqAqC.avif 1000w, /_app/immutable/assets/bafkreihv22yuyc3hvtid4mhrsqzxuluptakbibhysyhccyjahcc2eroane.Dw3x7XF5.avif 2000w",
    webp: "/_app/immutable/assets/bafkreihv22yuyc3hvtid4mhrsqzxuluptakbibhysyhccyjahcc2eroane.DgteML3u.webp 1000w, /_app/immutable/assets/bafkreihv22yuyc3hvtid4mhrsqzxuluptakbibhysyhccyjahcc2eroane.BpDOIVY0.webp 2000w",
    jpeg: "/_app/immutable/assets/bafkreihv22yuyc3hvtid4mhrsqzxuluptakbibhysyhccyjahcc2eroane.nk5ll_PG.jpeg 1000w, /_app/immutable/assets/bafkreihv22yuyc3hvtid4mhrsqzxuluptakbibhysyhccyjahcc2eroane.0UE59R7W.jpeg 2000w"
  },
  img: {
    src: "/_app/immutable/assets/bafkreihv22yuyc3hvtid4mhrsqzxuluptakbibhysyhccyjahcc2eroane.0UE59R7W.jpeg",
    w: 2e3,
    h: 1500
  }
};
const __vite_glob_0_307 = {
  sources: {
    avif: "/_app/immutable/assets/bendigotown.B2cMbQAF.avif 225w, /_app/immutable/assets/bendigotown.Cgu8h_-k.avif 450w",
    webp: "/_app/immutable/assets/bendigotown.B9hL85sj.webp 225w, /_app/immutable/assets/bendigotown.zrsvfFGo.webp 450w",
    jpeg: "/_app/immutable/assets/bendigotown.DrJRPJYK.jpeg 225w, /_app/immutable/assets/bendigotown.CijO5-ti.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/bendigotown.CijO5-ti.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_308 = {
  sources: {
    avif: "/_app/immutable/assets/bluemouse.BUYVlUgk.avif 225w, /_app/immutable/assets/bluemouse.b0BImk7i.avif 450w",
    webp: "/_app/immutable/assets/bluemouse.CRCsYOqT.webp 225w, /_app/immutable/assets/bluemouse.0Geb9sPR.webp 450w",
    jpeg: "/_app/immutable/assets/bluemouse.DKcEeoUz.jpeg 225w, /_app/immutable/assets/bluemouse.Dt2N5mA5.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/bluemouse.Dt2N5mA5.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_309 = {
  sources: {
    avif: "/_app/immutable/assets/c6f5344e76.B2R_n-Xa.avif 300w, /_app/immutable/assets/c6f5344e76.CnMUKJJ1.avif 600w",
    webp: "/_app/immutable/assets/c6f5344e76.DTAh8it0.webp 300w, /_app/immutable/assets/c6f5344e76.C7u7N31V.webp 600w",
    jpeg: "/_app/immutable/assets/c6f5344e76.BUCIJKWw.jpeg 300w, /_app/immutable/assets/c6f5344e76.BS-l2nBX.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/c6f5344e76.BS-l2nBX.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_310 = {
  sources: {
    avif: "/_app/immutable/assets/c6fd065784.DOGWs3Id.avif 300w, /_app/immutable/assets/c6fd065784.T61B-gty.avif 600w",
    webp: "/_app/immutable/assets/c6fd065784.BLPIfxmw.webp 300w, /_app/immutable/assets/c6fd065784.DH0mqnxp.webp 600w",
    jpeg: "/_app/immutable/assets/c6fd065784.D6gy19Rw.jpeg 300w, /_app/immutable/assets/c6fd065784.BTi1ONh2.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/c6fd065784.BTi1ONh2.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_311 = {
  sources: {
    avif: "/_app/immutable/assets/c7b08bd764.DnZhqI4F.avif 300w, /_app/immutable/assets/c7b08bd764.CiIYg-Hd.avif 600w",
    webp: "/_app/immutable/assets/c7b08bd764.BASmzL6V.webp 300w, /_app/immutable/assets/c7b08bd764.BZNbjTM6.webp 600w",
    jpeg: "/_app/immutable/assets/c7b08bd764.Du7AAo7g.jpeg 300w, /_app/immutable/assets/c7b08bd764.DBzVJlwR.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/c7b08bd764.DBzVJlwR.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_312 = {
  sources: {
    avif: "/_app/immutable/assets/couplemoreinktobers.Cfoy4xB0.avif 300w, /_app/immutable/assets/couplemoreinktobers.B97SqFFj.avif 600w",
    webp: "/_app/immutable/assets/couplemoreinktobers.D94EHrM0.webp 300w, /_app/immutable/assets/couplemoreinktobers.B02rMhzY.webp 600w",
    jpeg: "/_app/immutable/assets/couplemoreinktobers.orSO79Db.jpeg 300w, /_app/immutable/assets/couplemoreinktobers.C2sG42t9.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/couplemoreinktobers.C2sG42t9.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_313 = {
  sources: {
    avif: "/_app/immutable/assets/d3aa0b0ca4.DP0c5dcL.avif 300w, /_app/immutable/assets/d3aa0b0ca4.CcAwGcAs.avif 600w",
    webp: "/_app/immutable/assets/d3aa0b0ca4.v3YY8bta.webp 300w, /_app/immutable/assets/d3aa0b0ca4.gd5ZBYpf.webp 600w",
    jpeg: "/_app/immutable/assets/d3aa0b0ca4.Ck2HUFvm.jpeg 300w, /_app/immutable/assets/d3aa0b0ca4.7sts1IQF.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/d3aa0b0ca4.7sts1IQF.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_314 = {
  sources: {
    avif: "/_app/immutable/assets/d3b8f0afb1.OctE2Rm_.avif 256w, /_app/immutable/assets/d3b8f0afb1.JqgSKe81.avif 512w",
    webp: "/_app/immutable/assets/d3b8f0afb1.D4E8gL0N.webp 256w, /_app/immutable/assets/d3b8f0afb1.Cj5vQitA.webp 512w",
    jpeg: "/_app/immutable/assets/d3b8f0afb1.MJLlxD7j.jpeg 256w, /_app/immutable/assets/d3b8f0afb1.DoVRWj3a.jpeg 512w"
  },
  img: {
    src: "/_app/immutable/assets/d3b8f0afb1.DoVRWj3a.jpeg",
    w: 512,
    h: 682
  }
};
const __vite_glob_0_315 = {
  sources: {
    avif: "/_app/immutable/assets/d818fe14b0.Bb9ybC3h.avif 300w, /_app/immutable/assets/d818fe14b0.JZcXNd2J.avif 600w",
    webp: "/_app/immutable/assets/d818fe14b0.BG5__Gtz.webp 300w, /_app/immutable/assets/d818fe14b0.eT76ICw8.webp 600w",
    jpeg: "/_app/immutable/assets/d818fe14b0.tIItM9CZ.jpeg 300w, /_app/immutable/assets/d818fe14b0.BWY3eV7Q.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/d818fe14b0.BWY3eV7Q.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_316 = {
  sources: {
    avif: "/_app/immutable/assets/dagger.D0hQI5Ow.avif 300w, /_app/immutable/assets/dagger.kpYRpR89.avif 599w",
    webp: "/_app/immutable/assets/dagger.DfcFoe4B.webp 300w, /_app/immutable/assets/dagger.CChsIpGS.webp 599w",
    jpeg: "/_app/immutable/assets/dagger.C9qxdxQt.jpeg 300w, /_app/immutable/assets/dagger.66_kA5_i.jpeg 599w"
  },
  img: {
    src: "/_app/immutable/assets/dagger.66_kA5_i.jpeg",
    w: 599,
    h: 426
  }
};
const __vite_glob_0_317 = {
  sources: {
    avif: "/_app/immutable/assets/de86768dcc.D28SN821.avif 300w, /_app/immutable/assets/de86768dcc.DJ7zH7Gt.avif 600w",
    webp: "/_app/immutable/assets/de86768dcc.BgnqAIZJ.webp 300w, /_app/immutable/assets/de86768dcc.pg0FecMn.webp 600w",
    jpeg: "/_app/immutable/assets/de86768dcc.CPrs4pPg.jpeg 300w, /_app/immutable/assets/de86768dcc.C-eq-Yun.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/de86768dcc.C-eq-Yun.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_318 = {
  sources: {
    avif: "/_app/immutable/assets/dodge.MZMEP1xq.avif 225w, /_app/immutable/assets/dodge.DJoWPcEU.avif 450w",
    webp: "/_app/immutable/assets/dodge.BwE3eZ2E.webp 225w, /_app/immutable/assets/dodge.gwZWaAvg.webp 450w",
    jpeg: "/_app/immutable/assets/dodge.BBo1hUqW.jpeg 225w, /_app/immutable/assets/dodge.PhlxbAWm.jpeg 450w"
  },
  img: {
    src: "/_app/immutable/assets/dodge.PhlxbAWm.jpeg",
    w: 450,
    h: 600
  }
};
const __vite_glob_0_319 = {
  sources: {
    avif: "/_app/immutable/assets/ec522f97ed.BQqTA8se.avif 300w, /_app/immutable/assets/ec522f97ed.Bxq1ST9-.avif 600w",
    webp: "/_app/immutable/assets/ec522f97ed.D79CMULf.webp 300w, /_app/immutable/assets/ec522f97ed.CQCTqtXL.webp 600w",
    jpeg: "/_app/immutable/assets/ec522f97ed.CU-Nzxa4.jpeg 300w, /_app/immutable/assets/ec522f97ed.OxI5JlQ3.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/ec522f97ed.OxI5JlQ3.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_320 = {
  sources: {
    avif: "/_app/immutable/assets/eeb8306561.Bvm8sl8x.avif 300w, /_app/immutable/assets/eeb8306561.BcIRz98B.avif 600w",
    webp: "/_app/immutable/assets/eeb8306561.D8XyKTBY.webp 300w, /_app/immutable/assets/eeb8306561.DVVhRS3-.webp 600w",
    jpeg: "/_app/immutable/assets/eeb8306561.BQxa4Cbv.jpeg 300w, /_app/immutable/assets/eeb8306561.DLwzcao1.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/eeb8306561.DLwzcao1.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_321 = {
  sources: {
    avif: "/_app/immutable/assets/f6da0a760a.CQaj7N-K.avif 300w, /_app/immutable/assets/f6da0a760a.BgXlcD_W.avif 600w",
    webp: "/_app/immutable/assets/f6da0a760a.CKr9K_fr.webp 300w, /_app/immutable/assets/f6da0a760a.Du9kbf_k.webp 600w",
    jpeg: "/_app/immutable/assets/f6da0a760a.Dkl1ZQhS.jpeg 300w, /_app/immutable/assets/f6da0a760a.C13F9tqS.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/f6da0a760a.C13F9tqS.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_322 = {
  sources: {
    avif: "/_app/immutable/assets/fba62392a3.BgV8Wijy.avif 300w, /_app/immutable/assets/fba62392a3.BK8n26L5.avif 600w",
    webp: "/_app/immutable/assets/fba62392a3.C5U1KZwo.webp 300w, /_app/immutable/assets/fba62392a3.D8p2pubA.webp 600w",
    jpeg: "/_app/immutable/assets/fba62392a3.DqJyvRta.jpeg 300w, /_app/immutable/assets/fba62392a3.DIrqx493.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/fba62392a3.DIrqx493.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_323 = {
  sources: {
    avif: "/_app/immutable/assets/fed_sq_ice_cream.DBtbfKUQ.avif 2016w, /_app/immutable/assets/fed_sq_ice_cream.BGFiCTlO.avif 4032w",
    webp: "/_app/immutable/assets/fed_sq_ice_cream.CuZW7uUc.webp 2016w, /_app/immutable/assets/fed_sq_ice_cream.xvurR-2t.webp 4032w",
    jpeg: "/_app/immutable/assets/fed_sq_ice_cream.BqP8KiyE.jpeg 2016w, /_app/immutable/assets/fed_sq_ice_cream.Cdvv39Cb.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/fed_sq_ice_cream.Cdvv39Cb.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_324 = {
  sources: {
    avif: "/_app/immutable/assets/ff74067ebb.Chr-RUVs.avif 300w, /_app/immutable/assets/ff74067ebb.C38HBBSS.avif 600w",
    webp: "/_app/immutable/assets/ff74067ebb.B5mLCWzE.webp 300w, /_app/immutable/assets/ff74067ebb.zPw-oDdl.webp 600w",
    jpeg: "/_app/immutable/assets/ff74067ebb.BPUVptr0.jpeg 300w, /_app/immutable/assets/ff74067ebb.DQhMNZnj.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/ff74067ebb.DQhMNZnj.jpeg",
    w: 600,
    h: 800
  }
};
const __vite_glob_0_325 = {
  sources: {
    avif: "/_app/immutable/assets/finallysunny.DpYT38Zh.avif 300w, /_app/immutable/assets/finallysunny.Bx4JjYQC.avif 600w",
    webp: "/_app/immutable/assets/finallysunny.ntwr4Es4.webp 300w, /_app/immutable/assets/finallysunny.DtVx_gUR.webp 600w",
    jpeg: "/_app/immutable/assets/finallysunny.D2erZe0X.jpeg 300w, /_app/immutable/assets/finallysunny.Ck19A2ob.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/finallysunny.Ck19A2ob.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_326 = {
  sources: {
    avif: "/_app/immutable/assets/geelong_pier.f01Wd6BB.avif 601w, /_app/immutable/assets/geelong_pier.D6v3tPYH.avif 1201w",
    webp: "/_app/immutable/assets/geelong_pier.DaaFS7by.webp 601w, /_app/immutable/assets/geelong_pier.ByuKzOgY.webp 1201w",
    jpeg: "/_app/immutable/assets/geelong_pier.DVFRqd9q.jpeg 601w, /_app/immutable/assets/geelong_pier.BukfZEws.jpeg 1201w"
  },
  img: {
    src: "/_app/immutable/assets/geelong_pier.BukfZEws.jpeg",
    w: 1201,
    h: 843
  }
};
const __vite_glob_0_327 = {
  sources: {
    avif: "/_app/immutable/assets/keels.B149PnX2.avif 672w, /_app/immutable/assets/keels.B6vKUBxC.avif 1344w",
    webp: "/_app/immutable/assets/keels.ZCxEbs9t.webp 672w, /_app/immutable/assets/keels.B4Q-zMM1.webp 1344w",
    jpeg: "/_app/immutable/assets/keels.D3AkyFUb.jpeg 672w, /_app/immutable/assets/keels.DWYzB02e.jpeg 1344w"
  },
  img: {
    src: "/_app/immutable/assets/keels.DWYzB02e.jpeg",
    w: 1344,
    h: 1008
  }
};
const __vite_glob_0_328 = {
  sources: {
    avif: "/_app/immutable/assets/marketsagain.J5V-j5DM.avif 300w, /_app/immutable/assets/marketsagain.DRDsSOwt.avif 600w",
    webp: "/_app/immutable/assets/marketsagain.DJf1dIDl.webp 300w, /_app/immutable/assets/marketsagain.C4dfUQql.webp 600w",
    jpeg: "/_app/immutable/assets/marketsagain.DOk2rHzH.jpeg 300w, /_app/immutable/assets/marketsagain.BTLzT4wK.jpeg 600w"
  },
  img: {
    src: "/_app/immutable/assets/marketsagain.BTLzT4wK.jpeg",
    w: 600,
    h: 450
  }
};
const __vite_glob_0_329 = {
  sources: {
    avif: "/_app/immutable/assets/office-still-life-12.Q7yq5-BY.avif 2016w, /_app/immutable/assets/office-still-life-12.-d43hnom.avif 4032w",
    webp: "/_app/immutable/assets/office-still-life-12.D7At5eCy.webp 2016w, /_app/immutable/assets/office-still-life-12.CHmz35-q.webp 4032w",
    jpeg: "/_app/immutable/assets/office-still-life-12.D-LDZ4KL.jpeg 2016w, /_app/immutable/assets/office-still-life-12.Cf_QbdM9.jpeg 4032w"
  },
  img: {
    src: "/_app/immutable/assets/office-still-life-12.Cf_QbdM9.jpeg",
    w: 4032,
    h: 3024
  }
};
const __vite_glob_0_330 = {
  sources: {
    avif: "/_app/immutable/assets/purple_head.CKMzISen.avif 500w, /_app/immutable/assets/purple_head.D-2pHLG1.avif 1000w",
    webp: "/_app/immutable/assets/purple_head.Bu71SEOV.webp 500w, /_app/immutable/assets/purple_head.UoDTe6Jl.webp 1000w",
    jpeg: "/_app/immutable/assets/purple_head.bvhXoJSL.jpeg 500w, /_app/immutable/assets/purple_head.DBOf-EPx.jpeg 1000w"
  },
  img: {
    src: "/_app/immutable/assets/purple_head.DBOf-EPx.jpeg",
    w: 1e3,
    h: 1333
  }
};
const __vite_glob_0_331 = {
  sources: {
    avif: "/_app/immutable/assets/sunny-vic-gardens.CjxMfCke.avif 1932w, /_app/immutable/assets/sunny-vic-gardens.N2xp8oOW.avif 3864w",
    webp: "/_app/immutable/assets/sunny-vic-gardens.W4FRVxvw.webp 1932w, /_app/immutable/assets/sunny-vic-gardens.eLLir3n_.webp 3864w",
    jpeg: "/_app/immutable/assets/sunny-vic-gardens.KEb9Gorq.jpeg 1932w, /_app/immutable/assets/sunny-vic-gardens.CmdGFZ6w.jpeg 3864w"
  },
  img: {
    src: "/_app/immutable/assets/sunny-vic-gardens.CmdGFZ6w.jpeg",
    w: 3864,
    h: 2833
  }
};
const __vite_glob_0_332 = {
  sources: {
    avif: "/_app/immutable/assets/uncle_e.DSBlXjAe.avif 500w, /_app/immutable/assets/uncle_e.C2jgqT44.avif 1000w",
    webp: "/_app/immutable/assets/uncle_e.D8WaNsOY.webp 500w, /_app/immutable/assets/uncle_e.bv4ylT2I.webp 1000w",
    jpeg: "/_app/immutable/assets/uncle_e.DZ46sC0P.jpeg 500w, /_app/immutable/assets/uncle_e.BQNcg73b.jpeg 1000w"
  },
  img: {
    src: "/_app/immutable/assets/uncle_e.BQNcg73b.jpeg",
    w: 1e3,
    h: 1333
  }
};
function Card($$payload, $$props) {
  push();
  let row = $$props["row"];
  let modalOpen = $$props["modalOpen"];
  let imagePathos = $$props["imagePathos"];
  let index = $$props["index"];
  let colours = ["#DC5F00", "#B1C29E", "#789DBC", "#8967B3"];
  let i = Math.floor(Math.random() * colours.length);
  let dateParse = timeParse("%Y-%m-%d");
  let dateFormat = timeFormat("%d %b %Y");
  let images = /* @__PURE__ */ Object.assign({
    "/src/lib/images/03598547cb.jpg": __vite_glob_0_0,
    "/src/lib/images/047539495b.jpg": __vite_glob_0_1,
    "/src/lib/images/0633ff9c88.jpg": __vite_glob_0_2,
    "/src/lib/images/0866e14f37.jpg": __vite_glob_0_3,
    "/src/lib/images/0Yorkedagain1.jpg": __vite_glob_0_4,
    "/src/lib/images/0c85263293.jpg": __vite_glob_0_5,
    "/src/lib/images/0d78144ebd.jpg": __vite_glob_0_6,
    "/src/lib/images/100Cat-------1.jpg": __vite_glob_0_7,
    "/src/lib/images/101Scream------1.jpg": __vite_glob_0_8,
    "/src/lib/images/102I-llsingyouasongasongofthesea--------1.jpg": __vite_glob_0_9,
    "/src/lib/images/103BackinLondonforafewdays------1.jpg": __vite_glob_0_10,
    "/src/lib/images/104--------1.jpg": __vite_glob_0_11,
    "/src/lib/images/105TryingsomenewcolourcombinationsinBudapest------1.jpg": __vite_glob_0_12,
    "/src/lib/images/106Boughtsomeorangecrayons--------4.jpg": __vite_glob_0_13,
    "/src/lib/images/107LovingthesetreesliningthestreetsinBudapest------0.jpg": __vite_glob_0_14,
    "/src/lib/images/108AnotherviewoftheTempleofStNicholas-yup-------1.jpg": __vite_glob_0_15,
    "/src/lib/images/109TheclocktowerinBratislava------1.jpg": __vite_glob_0_16,
    "/src/lib/images/110TFWyouforgettoleaveenoughroomonthepageforthesteepleofthechurch------1.jpg": __vite_glob_0_17,
    "/src/lib/images/111MorningfromBratislavaCastle--------1.jpg": __vite_glob_0_18,
    "/src/lib/images/112BeersbytheriverinBratislava------5.jpg": __vite_glob_0_19,
    "/src/lib/images/113MesittinginthesuninBratislava------c.jpg": __vite_glob_0_20,
    "/src/lib/images/114LastonefromVienna-BelvederePalace------4.jpg": __vite_glob_0_21,
    "/src/lib/images/115Waitingfortheartgallerytoopen--------9.jpg": __vite_glob_0_22,
    "/src/lib/images/116DaybythecanalsinVienna------9.jpg": __vite_glob_0_23,
    "/src/lib/images/117SomekindofministrybuildinginPrague--------7.jpg": __vite_glob_0_24,
    "/src/lib/images/118TheOverlookHotelPraguepalace------5.jpg": __vite_glob_0_25,
    "/src/lib/images/11Shannon.jpeg": __vite_glob_0_26,
    "/src/lib/images/122AcoupleofdaysbytheVltavariverinPrague------c.jpg": __vite_glob_0_27,
    "/src/lib/images/123Toooooorists------8.jpg": __vite_glob_0_28,
    "/src/lib/images/126CouplemorefromKrakow--e.jpg": __vite_glob_0_29,
    "/src/lib/images/127KrakowKathedral--therearetoomanybuildingstodrawinthiscity------5.jpg": __vite_glob_0_30,
    "/src/lib/images/129Beforeandafter--------b.jpg": __vite_glob_0_31,
    "/src/lib/images/12Selfie-5.jpeg": __vite_glob_0_32,
    "/src/lib/images/131Warsawisdamnprettytbh------0.jpg": __vite_glob_0_33,
    "/src/lib/images/132Sawaguywithpigtailsinhisbeardf.jpg": __vite_glob_0_34,
    "/src/lib/images/134ScribblingfromDublincastle--------3.jpg": __vite_glob_0_35,
    "/src/lib/images/13Sittingbythedockofthebay.jpeg": __vite_glob_0_36,
    "/src/lib/images/14Selfie-4.jpeg": __vite_glob_0_37,
    "/src/lib/images/15Selfie-3.jpeg": __vite_glob_0_38,
    "/src/lib/images/16Selfie-2.jpeg": __vite_glob_0_39,
    "/src/lib/images/18Selfie-1.jpeg": __vite_glob_0_40,
    "/src/lib/images/19Whiterabbits7.jpg": __vite_glob_0_41,
    "/src/lib/images/1Straussindahausss.png": __vite_glob_0_42,
    "/src/lib/images/1f4ba01297.jpg": __vite_glob_0_43,
    "/src/lib/images/2020-07-08-14.26.59.jpg": __vite_glob_0_44,
    "/src/lib/images/2020-09-30-13.56.03.jpg": __vite_glob_0_45,
    "/src/lib/images/2020-10-25-08.17.46.jpg": __vite_glob_0_46,
    "/src/lib/images/20Inamood2.jpg": __vite_glob_0_47,
    "/src/lib/images/20b80c15d7.jpg": __vite_glob_0_48,
    "/src/lib/images/21Gotanewbrushpen2.jpg": __vite_glob_0_49,
    "/src/lib/images/2202morningpracticeface.jpeg": __vite_glob_0_50,
    "/src/lib/images/221224-lifeguard-tower.jpg": __vite_glob_0_51,
    "/src/lib/images/221225-christmas-at-the-beach.jpg": __vite_glob_0_52,
    "/src/lib/images/221225-surfers-paradise-cityscape.jpg": __vite_glob_0_53,
    "/src/lib/images/221227-queen-st-mall.jpg": __vite_glob_0_54,
    "/src/lib/images/22333f115f.jpg": __vite_glob_0_55,
    "/src/lib/images/22S-rennotS-ren9.jpg": __vite_glob_0_56,
    "/src/lib/images/22ed8a7c65.jpg": __vite_glob_0_57,
    "/src/lib/images/230106-victoria-st-melbourne-cityscape.jpg": __vite_glob_0_58,
    "/src/lib/images/230110-queen-vic-markets-again.jpg": __vite_glob_0_59,
    "/src/lib/images/2301_hobart_gpo.jpg": __vite_glob_0_60,
    "/src/lib/images/2301_quick_twelve_apostles.jpg": __vite_glob_0_61,
    "/src/lib/images/2302_hobart_boats.jpg": __vite_glob_0_62,
    "/src/lib/images/2302_hobart_harbour.jpg": __vite_glob_0_63,
    "/src/lib/images/2302_hobart_markets.jpg": __vite_glob_0_64,
    "/src/lib/images/2302_lolli_shop.jpg": __vite_glob_0_65,
    "/src/lib/images/2302_port_arthur.jpg": __vite_glob_0_66,
    "/src/lib/images/2302_salamanca_strip.jpg": __vite_glob_0_67,
    "/src/lib/images/2302_spirit_of_tasmania.jpg": __vite_glob_0_68,
    "/src/lib/images/2302_waiting_for_mona.jpg": __vite_glob_0_69,
    "/src/lib/images/230317_yellow_and_blue.jpg": __vite_glob_0_70,
    "/src/lib/images/230320mouse-in-a-hat.jpg": __vite_glob_0_71,
    "/src/lib/images/230610-petronas.jpeg": __vite_glob_0_72,
    "/src/lib/images/230611-ipoh_coffee.jpeg": __vite_glob_0_73,
    "/src/lib/images/230612-ipoh-shopping.jpeg": __vite_glob_0_74,
    "/src/lib/images/230613-ipoh-french-patisserie.jpeg": __vite_glob_0_75,
    "/src/lib/images/230613-ipoh-train-station.jpeg": __vite_glob_0_76,
    "/src/lib/images/230614-the-alley.jpeg": __vite_glob_0_77,
    "/src/lib/images/230619-penang-breakfast.jpeg": __vite_glob_0_78,
    "/src/lib/images/230620-escaping-the-heat.jpeg": __vite_glob_0_79,
    "/src/lib/images/230621-penang-town-hall.jpeg": __vite_glob_0_80,
    "/src/lib/images/230622-langkawi-umbrella.jpeg": __vite_glob_0_81,
    "/src/lib/images/230623-the-hotel.jpeg": __vite_glob_0_82,
    "/src/lib/images/230624-langkawi-bay.jpeg": __vite_glob_0_83,
    "/src/lib/images/230701-kuala-lumpur-last-day.jpeg": __vite_glob_0_84,
    "/src/lib/images/231006-mcdonalds-flinders.jpeg": __vite_glob_0_85,
    "/src/lib/images/231008_streetball.jpeg": __vite_glob_0_86,
    "/src/lib/images/231109_scratchy_beard.jpeg": __vite_glob_0_87,
    "/src/lib/images/231220-melbourne-trams.jpeg": __vite_glob_0_88,
    "/src/lib/images/23DefinitelynotKierkegaard7.jpg": __vite_glob_0_89,
    "/src/lib/images/240114-sydney-opera-house.jpg": __vite_glob_0_90,
    "/src/lib/images/240117-misty-sydney-cbd.jpg": __vite_glob_0_91,
    "/src/lib/images/240124-sydney-ferry.jpg": __vite_glob_0_92,
    "/src/lib/images/240125-melbourne-trams.jpg": __vite_glob_0_93,
    "/src/lib/images/240129-the-knitter.jpeg": __vite_glob_0_94,
    "/src/lib/images/240204-blue-earrings.jpeg": __vite_glob_0_95,
    "/src/lib/images/240402_decided-to-challenge_counter.jpg": __vite_glob_0_96,
    "/src/lib/images/240413_yet-more-phones_counter.jpg": __vite_glob_0_97,
    "/src/lib/images/240415_morning-coffee_counter.jpg": __vite_glob_0_98,
    "/src/lib/images/240417_morning-coffee_counter.jpg": __vite_glob_0_99,
    "/src/lib/images/240418_red-and-yellow_counter.jpg": __vite_glob_0_100,
    "/src/lib/images/240422_i-scribbled-a_0.jpg": __vite_glob_0_101,
    "/src/lib/images/240425_its-getting-cold_0.jpg": __vite_glob_0_102,
    "/src/lib/images/240425_its-getting-cold_1.jpg": __vite_glob_0_103,
    "/src/lib/images/240427_maybe-i-should_0.jpg": __vite_glob_0_104,
    "/src/lib/images/240507_i-got-a_0.jpg": __vite_glob_0_105,
    "/src/lib/images/240508_even-more-uggs_0.jpg": __vite_glob_0_106,
    "/src/lib/images/240709_beating-the-heat_0.jpg": __vite_glob_0_107,
    "/src/lib/images/240710_had-another-crack_0.jpg": __vite_glob_0_108,
    "/src/lib/images/240711_last-full-day_0.jpg": __vite_glob_0_109,
    "/src/lib/images/240714_130013_0.jpg": __vite_glob_0_110,
    "/src/lib/images/240714_escaping-the-hu_0.jpg": __vite_glob_0_111,
    "/src/lib/images/240718_sitting-in-a_0.jpg": __vite_glob_0_112,
    "/src/lib/images/240719_pretty-sparkling-day_0.jpg": __vite_glob_0_113,
    "/src/lib/images/240725_sending-a-whoooooole_0.jpg": __vite_glob_0_114,
    "/src/lib/images/240726_food-here-has_0.jpg": __vite_glob_0_115,
    "/src/lib/images/240726_some-very-serious_0.jpg": __vite_glob_0_116,
    "/src/lib/images/240727_we-went-on_0.jpg": __vite_glob_0_117,
    "/src/lib/images/240803_flicking-through-my_0.jpg": __vite_glob_0_118,
    "/src/lib/images/24GnT0.jpg": __vite_glob_0_119,
    "/src/lib/images/25OhDahvid8.jpg": __vite_glob_0_120,
    "/src/lib/images/26Thespace5.jpg": __vite_glob_0_121,
    "/src/lib/images/27Keepsgoing6.jpg": __vite_glob_0_122,
    "/src/lib/images/28Lockdowndaywhatever5.png": __vite_glob_0_123,
    "/src/lib/images/29Subjectsstartingtorundry2.jpg": __vite_glob_0_124,
    "/src/lib/images/2Yorkedd-1.jpg": __vite_glob_0_125,
    "/src/lib/images/2c0c21041c.jpg": __vite_glob_0_126,
    "/src/lib/images/2f484d4367.jpg": __vite_glob_0_127,
    "/src/lib/images/2f5ec9184a.jpg": __vite_glob_0_128,
    "/src/lib/images/30Painpoint4.png": __vite_glob_0_129,
    "/src/lib/images/31Scribblingtomediocrity3.png": __vite_glob_0_130,
    "/src/lib/images/32Elementary0.jpg": __vite_glob_0_131,
    "/src/lib/images/33AtticusPunding5.png": __vite_glob_0_132,
    "/src/lib/images/34Purpleperiod8.png": __vite_glob_0_133,
    "/src/lib/images/35Attheembassy3.jpg": __vite_glob_0_134,
    "/src/lib/images/36Financier2.jpg": __vite_glob_0_135,
    "/src/lib/images/38Britishcarday0.jpg": __vite_glob_0_136,
    "/src/lib/images/39Doesn-tlikegreentea6.jpg": __vite_glob_0_137,
    "/src/lib/images/3Bitexxyd.jpg": __vite_glob_0_138,
    "/src/lib/images/40Whyarehandssohard-6.jpg": __vite_glob_0_139,
    "/src/lib/images/41Mouseinprofile2.jpg": __vite_glob_0_140,
    "/src/lib/images/42Cafecat1.jpg": __vite_glob_0_141,
    "/src/lib/images/43Liltree6.jpg": __vite_glob_0_142,
    "/src/lib/images/449685c884.jpg": __vite_glob_0_143,
    "/src/lib/images/44ArrivedinBangkok1.jpg": __vite_glob_0_144,
    "/src/lib/images/4561_2023_7e4c61a426.jpg": __vite_glob_0_145,
    "/src/lib/images/45IwenttoafarminSiemReap-3.jpg": __vite_glob_0_146,
    "/src/lib/images/48887f9617.jpg": __vite_glob_0_147,
    "/src/lib/images/48Reallylovingtheremorque-sinCambodia1.jpg": __vite_glob_0_148,
    "/src/lib/images/4ahoandmaho1.jpg": __vite_glob_0_149,
    "/src/lib/images/4c11f1c672.jpg": __vite_glob_0_150,
    "/src/lib/images/51SomemorefromAngkorThom8.jpg": __vite_glob_0_151,
    "/src/lib/images/524827789a.jpg": __vite_glob_0_152,
    "/src/lib/images/53973A7F-F147-46CB-ADEC-4D01A774C743_1_105_c.jpeg": __vite_glob_0_153,
    "/src/lib/images/53AngkorThomtoday3.jpg": __vite_glob_0_154,
    "/src/lib/images/53DAF7A4-8DEB-403E-B082-51E949B9EB8A_1_105_c.jpeg": __vite_glob_0_155,
    "/src/lib/images/54b6324344.jpg": __vite_glob_0_156,
    "/src/lib/images/55More-from-around-Angkor-Wat1.jpg": __vite_glob_0_157,
    "/src/lib/images/56FinallymadeittoAngkorWat3.jpg": __vite_glob_0_158,
    "/src/lib/images/58Reflections-on-a-thousand-Buddhas9.jpg": __vite_glob_0_159,
    "/src/lib/images/58f2b47be4.jpg": __vite_glob_0_160,
    "/src/lib/images/59Thinkthere-samonasteryattheendofmystreet0.jpg": __vite_glob_0_161,
    "/src/lib/images/5Ku-rvi-Tasch.jpeg": __vite_glob_0_162,
    "/src/lib/images/60ReallygettingintoKhmerarchitecture3.jpg": __vite_glob_0_163,
    "/src/lib/images/61WalkingalongtheMekong2.jpg": __vite_glob_0_164,
    "/src/lib/images/62Mmmmmboats1.jpg": __vite_glob_0_165,
    "/src/lib/images/63Quicklines9.jpg": __vite_glob_0_166,
    "/src/lib/images/64InKualaLumpurafteralongtime7.jpg": __vite_glob_0_167,
    "/src/lib/images/68Needascarf5.jpg": __vite_glob_0_168,
    "/src/lib/images/69041e4d81.jpg": __vite_glob_0_169,
    "/src/lib/images/69Christmasmarkets2.jpg": __vite_glob_0_170,
    "/src/lib/images/6Laksaman.jpeg": __vite_glob_0_171,
    "/src/lib/images/70E4BA8B-6459-44BC-874D-7C866B83F903_1_105_c.jpeg": __vite_glob_0_172,
    "/src/lib/images/70Ghost6.jpg": __vite_glob_0_173,
    "/src/lib/images/719b1a493e.jpg": __vite_glob_0_174,
    "/src/lib/images/72Wrinkly3.png": __vite_glob_0_175,
    "/src/lib/images/74Morepotplants8.jpg": __vite_glob_0_176,
    "/src/lib/images/75Playingwithstylii3.jpg": __vite_glob_0_177,
    "/src/lib/images/76af109ba3.jpg": __vite_glob_0_178,
    "/src/lib/images/79b78ee6ac.jpg": __vite_glob_0_179,
    "/src/lib/images/7Hmph.jpeg": __vite_glob_0_180,
    "/src/lib/images/80Squareeyed8.jpg": __vite_glob_0_181,
    "/src/lib/images/81Ihopeitwilllast8.jpg": __vite_glob_0_182,
    "/src/lib/images/82BeenwatchingafairbitofDisney5.jpg": __vite_glob_0_183,
    "/src/lib/images/83Schucks2.jpg": __vite_glob_0_184,
    "/src/lib/images/84Hatman3.jpg": __vite_glob_0_185,
    "/src/lib/images/85Atthelibrary6.jpg": __vite_glob_0_186,
    "/src/lib/images/86Flatness3.jpg": __vite_glob_0_187,
    "/src/lib/images/879fb0c471.jpg": __vite_glob_0_188,
    "/src/lib/images/87c3ebf03a.jpg": __vite_glob_0_189,
    "/src/lib/images/88Omah8.jpg": __vite_glob_0_190,
    "/src/lib/images/89941ee665.jpg": __vite_glob_0_191,
    "/src/lib/images/89Lipsss6.jpg": __vite_glob_0_192,
    "/src/lib/images/8Selfie-6.jpeg": __vite_glob_0_193,
    "/src/lib/images/8ca8d8832a.jpg": __vite_glob_0_194,
    "/src/lib/images/8cff78b343.jpg": __vite_glob_0_195,
    "/src/lib/images/8f66ee0fc9.jpg": __vite_glob_0_196,
    "/src/lib/images/90Gotsomenewcolours9.jpg": __vite_glob_0_197,
    "/src/lib/images/93Fortrailwaybuses1.jpg": __vite_glob_0_198,
    "/src/lib/images/94Atthebar9.jpg": __vite_glob_0_199,
    "/src/lib/images/95Scribblingaprofileishard4.jpg": __vite_glob_0_200,
    "/src/lib/images/96Mouseinthehouse9.jpg": __vite_glob_0_201,
    "/src/lib/images/97Morningcoffee5.jpg": __vite_glob_0_202,
    "/src/lib/images/98Coolglassesbro------3.jpg": __vite_glob_0_203,
    "/src/lib/images/98abf826f2.jpg": __vite_glob_0_204,
    "/src/lib/images/99GalleFacewiththeportinthebackground------1.jpg": __vite_glob_0_205,
    "/src/lib/images/9d82fa35ac.jpg": __vite_glob_0_206,
    "/src/lib/images/9f975ce5b9.jpg": __vite_glob_0_207,
    "/src/lib/images/9f99c14dbf.jpg": __vite_glob_0_208,
    "/src/lib/images/Abdulrahmansroom.jpeg": __vite_glob_0_209,
    "/src/lib/images/Annaswindow-2.jpeg": __vite_glob_0_210,
    "/src/lib/images/Arteest.jpeg": __vite_glob_0_211,
    "/src/lib/images/Broadwaterboat.jpeg": __vite_glob_0_212,
    "/src/lib/images/Cafeman.jpeg": __vite_glob_0_213,
    "/src/lib/images/Cap.jpeg": __vite_glob_0_214,
    "/src/lib/images/Chinbutt.jpeg": __vite_glob_0_215,
    "/src/lib/images/Coffeewaiting.jpeg": __vite_glob_0_216,
    "/src/lib/images/Coldbrew.jpeg": __vite_glob_0_217,
    "/src/lib/images/Couple.jpeg": __vite_glob_0_218,
    "/src/lib/images/Covidtests.jpeg": __vite_glob_0_219,
    "/src/lib/images/Cue.jpeg": __vite_glob_0_220,
    "/src/lib/images/Desk.jpeg": __vite_glob_0_221,
    "/src/lib/images/Dickinson.jpeg": __vite_glob_0_222,
    "/src/lib/images/Face-2.jpeg": __vite_glob_0_223,
    "/src/lib/images/Fancy.jpeg": __vite_glob_0_224,
    "/src/lib/images/Ferry.jpeg": __vite_glob_0_225,
    "/src/lib/images/Flowerpot-2.jpeg": __vite_glob_0_226,
    "/src/lib/images/Flowerpot.jpeg": __vite_glob_0_227,
    "/src/lib/images/Gogh2.jpeg": __vite_glob_0_228,
    "/src/lib/images/Gradients_face.jpeg": __vite_glob_0_229,
    "/src/lib/images/Grandma.jpeg": __vite_glob_0_230,
    "/src/lib/images/Graphfish.jpeg": __vite_glob_0_231,
    "/src/lib/images/Grocery.jpeg": __vite_glob_0_232,
    "/src/lib/images/Hatchingmarket.jpeg": __vite_glob_0_233,
    "/src/lib/images/Head3.jpeg": __vite_glob_0_234,
    "/src/lib/images/Indoor-palm.jpeg": __vite_glob_0_235,
    "/src/lib/images/Inlila.jpeg": __vite_glob_0_236,
    "/src/lib/images/Light.jpeg": __vite_glob_0_237,
    "/src/lib/images/Midtone-portrait.jpeg": __vite_glob_0_238,
    "/src/lib/images/Monk.jpeg": __vite_glob_0_239,
    "/src/lib/images/Mouse-again.jpeg": __vite_glob_0_240,
    "/src/lib/images/Mushy3.jpeg": __vite_glob_0_241,
    "/src/lib/images/Notmoving.jpeg": __vite_glob_0_242,
    "/src/lib/images/Omabreakfasting.jpeg": __vite_glob_0_243,
    "/src/lib/images/Phnompenh.jpeg": __vite_glob_0_244,
    "/src/lib/images/Pidegons.jpeg": __vite_glob_0_245,
    "/src/lib/images/Pipedin.jpeg": __vite_glob_0_246,
    "/src/lib/images/Romewindowsketch.jpeg": __vite_glob_0_247,
    "/src/lib/images/Selfie7.jpeg": __vite_glob_0_248,
    "/src/lib/images/Singing.jpeg": __vite_glob_0_249,
    "/src/lib/images/Sleepingbenny.jpeg": __vite_glob_0_250,
    "/src/lib/images/Sower2.jpeg": __vite_glob_0_251,
    "/src/lib/images/Sowerred.jpeg": __vite_glob_0_252,
    "/src/lib/images/Streetcornercafe.jpeg": __vite_glob_0_253,
    "/src/lib/images/Study1.jpeg": __vite_glob_0_254,
    "/src/lib/images/Study2.jpeg": __vite_glob_0_255,
    "/src/lib/images/Tonedmouse.jpeg": __vite_glob_0_256,
    "/src/lib/images/Untitled.jpeg": __vite_glob_0_257,
    "/src/lib/images/Windowchallenge1.jpeg": __vite_glob_0_258,
    "/src/lib/images/Windowswap2.jpeg": __vite_glob_0_259,
    "/src/lib/images/a1a332fc74.jpg": __vite_glob_0_260,
    "/src/lib/images/ab65b14961.jpg": __vite_glob_0_261,
    "/src/lib/images/ad8002b7da.jpg": __vite_glob_0_262,
    "/src/lib/images/ae4a2986aa.jpg": __vite_glob_0_263,
    "/src/lib/images/against-the-window.jpg": __vite_glob_0_264,
    "/src/lib/images/atasting.jpeg": __vite_glob_0_265,
    "/src/lib/images/b0ee13ae4c.jpg": __vite_glob_0_266,
    "/src/lib/images/b35c6645f6.jpg": __vite_glob_0_267,
    "/src/lib/images/bafkreia4ssm6lbrlpxoedsh5hmbyqkvbv66wbgptj2r4ymh3itvhkoxf6y.jpg": __vite_glob_0_268,
    "/src/lib/images/bafkreiahg6cum5xsy4qti3ezkwkhgdheyihf5puvgopougel25rugnkjta.jpg": __vite_glob_0_269,
    "/src/lib/images/bafkreiaist7i2on52yxk7ib74gdi4rter4mwhvgckt7rudxclgxagndlcu.jpg": __vite_glob_0_270,
    "/src/lib/images/bafkreiarifdfezdzscs465pttrxcp6hxfbmxzc3qsoacvoj2ui7szkhanu.jpg": __vite_glob_0_271,
    "/src/lib/images/bafkreiasucistwpt5erdxie6pb6x24nzzaonqi3wkcg5ljofhjrj4qzr24.jpg": __vite_glob_0_272,
    "/src/lib/images/bafkreiavkzuadkjsizjnqzonvtrukoumpicikhobq35ccy2r46rurkmury.jpg": __vite_glob_0_273,
    "/src/lib/images/bafkreiawirpmqbgahp6ws3zp3zmadhfuchzyj2iejkxeyy7y2jnmyrrkdq.jpg": __vite_glob_0_274,
    "/src/lib/images/bafkreibj7u4rxw6lb2axwlb7yjb3xdhlmkwcdrzzmdobolwur3s4j4u75u.jpg": __vite_glob_0_275,
    "/src/lib/images/bafkreibjtz2fmhrr5u2vx74wdrlwhttosouhne4h55mvj4jwsgmjxznxzm.jpg": __vite_glob_0_276,
    "/src/lib/images/bafkreibtxtcpmufmbutpcj45swuxciuxjm4jk6xkz227hrxjwvlpj567zm.jpg": __vite_glob_0_277,
    "/src/lib/images/bafkreibv5an37ukpotsuk6ozwz5bnqy36zpv5drj36iqpjyfhgpz5xgedy.jpg": __vite_glob_0_278,
    "/src/lib/images/bafkreic275kgovi3vqn3c7xp6kqxv5rrxxncdje7nvoynlqlxe6f73qnmy.jpg": __vite_glob_0_279,
    "/src/lib/images/bafkreic6qlpz5nkur2g7cagtpirx47ewqmxgesx2yzfurficd47ngynhm4.jpg": __vite_glob_0_280,
    "/src/lib/images/bafkreic72di6pzk7p3krkcuf42b6wdaf6xmdxdymsy57hnpsnjrye74fxy.jpg": __vite_glob_0_281,
    "/src/lib/images/bafkreicaxng7rciambfh73mnrvjg66jp7wxw2ra55qnkpsgavtcqjtcgay.jpg": __vite_glob_0_282,
    "/src/lib/images/bafkreickplyzs7xo4bm7sqeaes2jgyxyfhdurrvtvbiffnxfxxkwdzjbdu.jpg": __vite_glob_0_283,
    "/src/lib/images/bafkreicr5unhvjhowwbgslkcfbxfaycndnoun5mzsifvbxuzkw7waq4pxe.jpg": __vite_glob_0_284,
    "/src/lib/images/bafkreicvajiu2xpie757fg73ryly6pscw5fydnmvjvo3f7mydth5v23xo4.jpg": __vite_glob_0_285,
    "/src/lib/images/bafkreid5a5reckocx2qcniwerhdp4dwydfjpxt7t3ffautvykcvtl6yzzy.jpg": __vite_glob_0_286,
    "/src/lib/images/bafkreidcm6czys6c2te4ij3beqgzl2uxpvrgzxvsalr2t63syhdxeoocoa.jpg": __vite_glob_0_287,
    "/src/lib/images/bafkreidigdrapkcxz625lixzsyiolf2slfo757t4h5bhnlauaa2z4mqdou.jpg": __vite_glob_0_288,
    "/src/lib/images/bafkreidmbjltf2nxbsgigcchdlezt7mlmk27cexlxkgbrewgqeoiuisgoq.jpg": __vite_glob_0_289,
    "/src/lib/images/bafkreidom5jvw4ypacxefa2aewm6y5p6bslim76cvylm7cd554lxt6whta.jpg": __vite_glob_0_290,
    "/src/lib/images/bafkreidt47phj6q3vqo7ip3jmcatdpzn3jxa2bsun27mwe6hv6g4jhlogu.jpg": __vite_glob_0_291,
    "/src/lib/images/bafkreiduwnov34bdc3xg52wcjzdn2ooqkh4mkeace7putoxomvdobz4rpi.jpg": __vite_glob_0_292,
    "/src/lib/images/bafkreie4agxnzoys3cwrfbgwnhefes2oe4fw3j6y6r3ppatkmnwfvx7mii.jpg": __vite_glob_0_293,
    "/src/lib/images/bafkreiej2fcddcozpjn76gq6c4vjkoi77yekzulaacpngbkilpntffk4ri.jpg": __vite_glob_0_294,
    "/src/lib/images/bafkreielepiii3lhuzunv6bhhrgc3kstq2ta7azgks7bywkf3w27gu7ine.jpg": __vite_glob_0_295,
    "/src/lib/images/bafkreiemva6yjipucqyw6mmmhfmn4kayggsk4q3lflic3ebawsb4onneii.jpg": __vite_glob_0_296,
    "/src/lib/images/bafkreieyj3wi5k5lzrjdo6wjq52crjdklhvjwypffpblyvon5teuawl37e.jpg": __vite_glob_0_297,
    "/src/lib/images/bafkreifeodtx7x4rdggzyuuqknmbsenqugdvugz57laiq2yv3xuoxttbym.jpg": __vite_glob_0_298,
    "/src/lib/images/bafkreifjwfiknztnsemjjcyjr7axqxffhh3tsu4asw7x6odc4nbu22nq24.jpg": __vite_glob_0_299,
    "/src/lib/images/bafkreifp6vs6vhbyhgehxt4sl6lkphcgaapqkbfchk64mhtavwvmpfh2cu.jpg": __vite_glob_0_300,
    "/src/lib/images/bafkreifsetrlsr2lamr4joyktj5dffdpkje6hqfp7duxa2gbn3z4xrckey.jpg": __vite_glob_0_301,
    "/src/lib/images/bafkreifzv2lszrui2n4u7276dwojmd4ntagvlpmk35qml3h5f2pbp34mje.jpg": __vite_glob_0_302,
    "/src/lib/images/bafkreig5j2vebtrqlkqrdlzsefmjkmlpbnuh62ya5wctgbyzfdq2sw4lwi.jpg": __vite_glob_0_303,
    "/src/lib/images/bafkreigkrz3hy7tg2q2sqpw5mvcycerdgzyqndn4niv35ixjr72akhwk6u.jpg": __vite_glob_0_304,
    "/src/lib/images/bafkreihqf3xp5tnmxmb3m27n4qsupj7jcpkhcodia47k42nf2qc76mlmcq.jpg": __vite_glob_0_305,
    "/src/lib/images/bafkreihv22yuyc3hvtid4mhrsqzxuluptakbibhysyhccyjahcc2eroane.jpg": __vite_glob_0_306,
    "/src/lib/images/bendigotown.jpeg": __vite_glob_0_307,
    "/src/lib/images/bluemouse.jpeg": __vite_glob_0_308,
    "/src/lib/images/c6f5344e76.jpg": __vite_glob_0_309,
    "/src/lib/images/c6fd065784.jpg": __vite_glob_0_310,
    "/src/lib/images/c7b08bd764.jpg": __vite_glob_0_311,
    "/src/lib/images/couplemoreinktobers.jpeg": __vite_glob_0_312,
    "/src/lib/images/d3aa0b0ca4.jpg": __vite_glob_0_313,
    "/src/lib/images/d3b8f0afb1.jpg": __vite_glob_0_314,
    "/src/lib/images/d818fe14b0.jpg": __vite_glob_0_315,
    "/src/lib/images/dagger.jpeg": __vite_glob_0_316,
    "/src/lib/images/de86768dcc.jpg": __vite_glob_0_317,
    "/src/lib/images/dodge.jpeg": __vite_glob_0_318,
    "/src/lib/images/ec522f97ed.jpg": __vite_glob_0_319,
    "/src/lib/images/eeb8306561.jpg": __vite_glob_0_320,
    "/src/lib/images/f6da0a760a.jpg": __vite_glob_0_321,
    "/src/lib/images/fba62392a3.jpg": __vite_glob_0_322,
    "/src/lib/images/fed_sq_ice_cream.jpg": __vite_glob_0_323,
    "/src/lib/images/ff74067ebb.jpg": __vite_glob_0_324,
    "/src/lib/images/finallysunny.jpeg": __vite_glob_0_325,
    "/src/lib/images/geelong_pier.jpg": __vite_glob_0_326,
    "/src/lib/images/keels.jpeg": __vite_glob_0_327,
    "/src/lib/images/marketsagain.jpeg": __vite_glob_0_328,
    "/src/lib/images/office-still-life-12.jpg": __vite_glob_0_329,
    "/src/lib/images/purple_head.jpg": __vite_glob_0_330,
    "/src/lib/images/sunny-vic-gardens.jpg": __vite_glob_0_331,
    "/src/lib/images/uncle_e.jpg": __vite_glob_0_332
  });
  $$payload.out += `<div><div${attr("style", `border-color:${stringify(colours[i])};border-width: 10px;`)}>`;
  if (typeof images[`/src/lib/images/${imagePathos}`] === "string") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img${attr("src", images[`/src/lib/images/${imagePathos}`].img.src)} alt="An alt text"${attr("width", images[`/src/lib/images/${imagePathos}`].img.w)}${attr("height", images[`/src/lib/images/${imagePathos}`].img.h)}>`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(Object.entries(images[`/src/lib/images/${imagePathos}`].sources));
    $$payload.out += `<picture><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [format, srcset] = each_array[$$index];
      $$payload.out += `<source${attr("srcset", srcset)}${attr("type", "image/" + format)}>`;
    }
    $$payload.out += `<!--]--> <img${attr("src", images[`/src/lib/images/${imagePathos}`].img.src)} alt="An alt text"${attr("width", images[`/src/lib/images/${imagePathos}`].img.w)}${attr("height", images[`/src/lib/images/${imagePathos}`].img.h)}></picture>`;
  }
  $$payload.out += `<!--]--></div> <span class="text-l">${escape_html(row["Title"])}</span><br> <span class="text-xs">${escape_html(dateFormat(dateParse(row["Date"])))}</span></div>`;
  bind_props($$props, { row, modalOpen, imagePathos, index });
  pop();
}
function ImageSet($$payload, $$props) {
  push();
  let isFirstPage, hasNextPage, showPrev, showNext;
  let datah = $$props["datah"];
  let pageLimit = $$props["pageLimit"];
  let containerWidth = $$props["containerWidth"];
  let firstImage = 0;
  let lastImage = firstImage + pageLimit;
  let modalOpen = false;
  let modalImage;
  let lenno;
  let rows;
  rows = datah.slice(firstImage, lastImage);
  isFirstPage = lastImage - pageLimit == 0 ? true : false;
  hasNextPage = lastImage >= lenno ? false : true;
  showPrev = isFirstPage ? "hidden" : "visible";
  showNext = !hasNextPage ? "hidden" : "visible";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(rows);
    $$payload2.out += `<div id="pagination" class="mx-auto flex items-center justify-between text-xl pb-5 pt-5"><div id="left"${attr("style", `visibility: ${stringify(showPrev)}`)}>Prev</div> <span class="text-xs font-semibold">${escape_html(lastImage)}/${escape_html(lenno)}</span> <div id="right"${attr("style", `visibility: ${stringify(showNext)}`)}>Next</div></div> <div class="container grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto items-center text-center"><!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let row = each_array[index];
      Card($$payload2, {
        index,
        imagePathos: row["img_path"],
        get row() {
          return row;
        },
        set row($$value) {
          row = $$value;
          $$settled = false;
        },
        get modalImage() {
          return modalImage;
        },
        set modalImage($$value) {
          modalImage = $$value;
          $$settled = false;
        },
        get modalOpen() {
          return modalOpen;
        },
        set modalOpen($$value) {
          modalOpen = $$value;
          $$settled = false;
        }
      });
    }
    $$payload2.out += `<!--]--></div> <div id="pagination" class="mx-auto flex items-center justify-between text-xl pt-10"><div id="left"${attr("style", `visibility: ${stringify(showPrev)}`)}>Prev</div> <span class="text-xs font-semibold">${escape_html(lastImage)}/${escape_html(lenno)}</span> <div id="right"${attr("style", `visibility: ${stringify(showNext)}`)}>Next</div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { datah, pageLimit, containerWidth });
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data, imageDataArray } = $$props;
  let dateparser = timeParse("%Y-%m-%d");
  let pageLimit = 4;
  let sortBy = void 0;
  sortBy = "Random";
  const options = ["Random", "Newest", "Oldest", "Favs"];
  let containerWidth = void 0;
  let feature = [
    "240711_last-full-day_0.jpg",
    "240714_escaping-the-hu_0.jpg",
    "240117-misty-sydney-cbd.jpg",
    "240719_pretty-sparkling-day_0.jpg",
    "uncle_e.jpg",
    "240425_its-getting-cold_0.jpg",
    "240725_sending-a-whoooooole_0.jpg",
    "240711_last-full-day_0.jpg",
    "40402_decided-to-challenge_counter.jpg",
    "230620-escaping-the-heat.jpeg",
    "231008_streetball.jpeg",
    "240124-sydney-ferry.jpg",
    "purple_head.jpg",
    "230613-ipoh-french-patisserie.jpeg",
    "230621-penang-town-hall.jpeg",
    "230623-the-hotel.jpeg",
    "240726_food-here-has_0.jpg",
    "240710_had-another-crack_0.jpg"
  ];
  function sorter(array, how) {
    if (how.toLowerCase() == "random") {
      return shuffle(array);
    } else if (how.toLowerCase() == "oldest") {
      let outty = array.sort(function(a, b) {
        return ascending(dateparser(a["Date"]), dateparser(b["Date"]));
      });
      return outty;
    } else if (how.toLowerCase() == "newest") {
      let outty = array.sort(function(a, b) {
        return descending(dateparser(a["Date"]), dateparser(b["Date"]));
      });
      return outty;
    } else if (how.toLowerCase() == "favs") {
      let keep = [...new Set(feature.map((d) => d))];
      return shuffle(array.filter((row) => keep.includes(row["img_path"])));
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div id="Biggest">`;
    Radio($$payload2, {
      options,
      get sortBy() {
        return sortBy;
      },
      set sortBy($$value) {
        sortBy = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <!---->`;
    {
      ImageSet($$payload2, {
        pageLimit,
        datah: sorter(data.data, sortBy),
        containerWidth
      });
    }
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
