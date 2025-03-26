import { marked, MarkedOptions, Renderer, Tokenizer } from 'marked';

// Create a custom renderer instance
const renderer = new Renderer();

// Override the listitem method to inject a custom CSS class for spacing.
// The default renderer outputs: `<li>${text}</li>\n`
// Here, we add the class "spaced-list-item" so that you can style it in CSS.
renderer.listitem = (item: any): string => {
  let checkbox = '';
  if (item.task) {
    checkbox = `<input type="checkbox" disabled ${item.checked ? 'checked' : ''}> `;
  }
  return `<li class="spaced-list-item list-none">${checkbox}${item.text}</li>\n`;
};

// Define marked options using only the valid options.
const options: MarkedOptions = {
  async: false,
  breaks: true,
  gfm: true,
  pedantic: false,
  renderer,
  silent: false,
  tokenizer: new Tokenizer(),
  walkTokens: undefined,
};

// Apply these options to marked.
marked.setOptions(options);

export default marked;
export { options };
