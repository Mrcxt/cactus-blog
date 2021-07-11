import marked from "marked";
import hljs from "@/util/highlight";
import arraytotree from "array-to-tree";
import { reactive, ref, computed } from "vue";

const renderer = new marked.Renderer();
// a
renderer.link = (href, title, text) => {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
};

// code
renderer.code = (code, language) => {
  language = language || "bash";
  return `<pre class="hljs" data-lang="${language}"><code>${
    hljs.highlight(code, { language }).value
  }</code></pre>`;
};

// toc
const _toc = ref([]);
const levels = Array.from(Array(6), () => 1);
const createToc = (text, level) => {
  const pid = levels.slice(0, level - 1).join("-");
  levels[level - 1] += 1;
  for (let i = level; i < levels.length; i++) {
    levels[i] = 0;
  }
  const id = levels.slice(0, level).join("-");
  _toc.value.push({ text, level, id, anchor: `#${text}`, pid });
};

export const toc = computed(() =>
  arraytotree(_toc.value, {
    parentProperty: "pid",
    customID: "id",
  })
);

// heading
renderer.heading = (text, level) => {
  createToc(text, level);
  return `<h${level} id="${text}"><span class="prefix"></span><span class="title">${text}</span><span class="suffix"></span></h${level}>`;
};

// table
renderer.table = (thead, tbody) => {
  // debugger;
  return `<div class="table-container">
    <table>
      <thead>${thead}</thead>
      <tbody>${tbody}</tbody>
    </table>
  </div>`;
};

marked.setOptions({
  renderer,
  breaks: true, // md中的空行识别为分段，默认为false
});

export { marked };

export default (md) => {
  _toc.value = [];
  return marked(md);
};
