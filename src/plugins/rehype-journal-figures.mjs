// Turn a standalone markdown image into a captioned <figure>.
//
// Any paragraph whose only meaningful child is an <img> with alt text becomes:
//   <figure class="entry-fig"><img …><figcaption>…alt…</figcaption></figure>
// The <img> node is left untouched, so Astro's image optimization still applies.
// Write inline figures in markdown as:  ![caption text](../../assets/foo.jpg)

export default function rehypeJournalFigures() {
  return (tree) => walk(tree);
}

function walk(node) {
  if (!node || !Array.isArray(node.children)) return;

  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];

    if (child.type === 'element' && child.tagName === 'p') {
      const meaningful = child.children.filter(
        (c) => !(c.type === 'text' && c.value.trim() === ''),
      );

      // A paragraph whose only content is one or more images becomes a figure.
      // The caption is the first non-empty alt; several images share one caption.
      const allImages =
        meaningful.length >= 1 &&
        meaningful.every((c) => c.type === 'element' && c.tagName === 'img');
      const captioned = allImages
        ? meaningful.find(
            (img) =>
              img.properties &&
              typeof img.properties.alt === 'string' &&
              img.properties.alt.trim() !== '',
          )
        : undefined;

      if (captioned) {
        const className =
          meaningful.length > 1 ? ['entry-fig', 'entry-fig--multi'] : ['entry-fig'];
        node.children[i] = {
          type: 'element',
          tagName: 'figure',
          properties: { className },
          children: [
            ...meaningful,
            {
              type: 'element',
              tagName: 'figcaption',
              properties: { className: ['entry-fig-cap', 'label'] },
              children: [{ type: 'text', value: captioned.properties.alt }],
            },
          ],
        };
        continue;
      }
    }

    walk(child);
  }
}
