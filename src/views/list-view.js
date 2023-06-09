import CardView from './card-view.js';
import EditorView from './editor-view.js';
import View from './view.js';
import './list-view.css';

class ListView extends View {
  constructor() {
    super();

    this.classList.add('trip-list');
    this.setAttribute('role', 'list');
  }

  /**
   * @override
   */

  render() {
    const views = new Array(4).fill().map(this.createItemView);

    this.replaceChildren(...views);
  }

  createItemView(none, index) {
    const view = (index === 0) ? new EditorView : new CardView;

    view.classList.add('trip-list__item');
    view.setAttribute('role', 'listItem');
    view.render();

    return view;
  }

}

customElements.define('list-view', ListView);

export default ListView;
