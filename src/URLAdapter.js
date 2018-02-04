import { setLanguageSelection } from "./Language.state";
import { updateContentValue } from "./CodeEditor.state";

class URLAdapter {
  languageSelection = "";
  contentValue = "";

  constructor(store) {
    this.store = store;
    this.languageSelection = this.store.getState().languageSelection;
    this.contentValue = this.store.getState().contentValue;
    this.store.subscribe(() => this.onStoreUpdate());
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
    this.docDataRef.update({ languageSelection });
  }

  processIncomingLanguageSelectionUpdate(languageSelection) {
    if (!languageSelection) {
      this.docDataRef.update({ languageSelection: this.languageSelection });
      return;
    }
    if (this.languageSelection === languageSelection) {
      return;
    }
    this.languageSelection = languageSelection;
    this.store.dispatch(setLanguageSelection(languageSelection));
  }

  processOutgoingContentValueUpdate(contentValue) {
    if (this.contentValue === contentValue) {
      return;
    }
    this.contentValue = contentValue;
    this.docDataRef.update({ contentValue });
  }

  processIncomingContentValueUpdate(contentValue) {
    if (!contentValue && contentValue !== "") {
      if (this.contentValue) {
        this.docDataRef.update({ contentValue: this.contentValue });
      }
      return;
    }
    if (this.contentValue === contentValue) {
      return;
    }
    this.contentValue = contentValue;
    this.store.dispatch(updateContentValue(contentValue));
  }
}

export default URLAdapter;
