import { setLanguageSelection } from "./Language.state";
import { updateContentValue } from "./CodeEditor.state";

import { encode, decode } from "./parseUrl";

class URLAdapter {
  languageSelection = "";
  contentValue = "";

  constructor(store) {
    this.store = store;
    setTimeout(() => {
      const { languageSelection, contentValue } = decode(
        document.location.search || "?"
      );
      this.processIncomingLanguageSelectionUpdate(languageSelection);
      this.processIncomingContentValueUpdate(contentValue);
      this.store.subscribe(() => this.onStoreUpdate());
    });
  }

  onStoreUpdate() {
    const { languageSelection, contentValue } = this.store.getState();
    this.processOutgoingLanguageSelectionUpdate(languageSelection);
    this.processOutgoingContentValueUpdate(contentValue);
  }

  processOutgoingLanguageSelectionUpdate(languageSelection) {
    if (this.languageSelection === languageSelection) {
      return;
    }
    this.languageSelection = languageSelection;
    const newSearch = encode(this);
    this.updateUrl(newSearch);
  }

  processIncomingLanguageSelectionUpdate(languageSelection) {
    console.log("dd", this.languageSelection, languageSelection);
    if (this.languageSelection === languageSelection) {
      return;
    }
    this.languageSelection = languageSelection;
    this.store.dispatch(setLanguageSelection(languageSelection));
  }

  processOutgoingContentValueUpdate(contentValue) {
    console.log("yy", this.contentValue, contentValue);
    if (this.contentValue === contentValue) {
      return;
    }
    this.contentValue = contentValue;
    const newSearch = encode(this);
    this.updateUrl(newSearch);
  }

  processIncomingContentValueUpdate(contentValue) {
    if (this.contentValue === contentValue) {
      return;
    }
    this.contentValue = contentValue;
    this.store.dispatch(updateContentValue(contentValue));
  }

  updateUrl(newSearch) {
    if (window.location.search !== newSearch) {
      window.history.replaceState(
        {},
        document.title,
        `${window.location.pathname}${newSearch}`
      );
    }
  }
}

export default URLAdapter;
