import rehypeShiki from "@shikijs/rehype";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";

const THEMES = { light: "min-light", dark: "night-owl" };

const PRELOADED_LANGS = [
  "bash",
  "css",
  "html",
  "javascript",
  "json",
  "jsx",
  "tsx",
  "typescript",
];

const transformerCodeBlock = () => ({
  name: "blog:code-block",
  pre(node) {
    this.addClassToHast(node, "code-block");

    const fileName = this.options.meta?.__raw?.match(
      /(?:^|\s)file=["']?([^"'\s]+)["']?/,
    )?.[1];

    if (!fileName) {
      return;
    }

    node.children.unshift({
      type: "element",
      tagName: "span",
      properties: { className: ["code-file-name"] },
      children: [{ type: "text", value: fileName }],
    });
  },
});

export default function rehypeShikiCodeBlocks() {
  return rehypeShiki({
    themes: THEMES,
    defaultColor: false,
    langs: PRELOADED_LANGS,
    lazy: true,
    defaultLanguage: "text",
    fallbackLanguage: "text",
    transformers: [
      transformerCodeBlock(),
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
      transformerNotationDiff({ matchAlgorithm: "v3" }),
    ],
  });
}
