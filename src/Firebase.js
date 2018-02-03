import * as firebase from 'firebase';
import swal from 'sweetalert';
import docId from './docId';

import { setLanguageSelection } from './Language.state';
import { updateContentValue } from './CodeEditor.state';
import { updateCollaborators, updateUsers } from './Collaborators.state';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID
};

class Firebase {
  get userId() {
    return this.fb.auth().currentUser.uid.slice(0, 6);
  }

  get docDataRef() {
    return this.fb.database().ref(`${docId}/data`);
  }

  get collaboratorsRef() {
    return this.fb.database().ref(`${docId}/collaborators`);
  }

  get collaboratorRef() {
    return this.fb.database().ref(`${docId}/collaborators/${this.userId}`);
  }

  get usersRef() {
    return this.fb.database().ref(`${docId}/users`);
  }

  get userRef() {
    return this.fb.database().ref(`${docId}/users/${this.userId}`);
  }

  languageSelection = '';
  contentValue = '';

  oldStateValues = {};

  constructor(store) {
    this.store = store;
    this.languageSelection = this.store.getState().languageSelection;
    this.contentValue = this.store.getState().contentValue;
    this.oldStateValues = this.stateValues;
    this.fb = firebase.initializeApp(config);
    this.fb
      .auth()
      .signInAnonymously()
      .then(() => this.onSignedIn());
  }

  onSignedIn() {
    this.store.subscribe(() => this.onStoreUpdate());

    this.docDataRef.on('value', snapshot => {
      const { languageSelection = '', contentValue = '' } =
        snapshot.val() || {};
      this.processIncomingLanguageSelectionUpdate(languageSelection);
      this.processIncomingContentValueUpdate(contentValue);
    });

    this.collaboratorsRef.on('value', snapshot => {
      const colaborators = Object.keys(snapshot.val() || {});
      this.store.dispatch(updateCollaborators(colaborators));
    });

    this.userRef
      .once('value')
      .then(snapshot =>
        this.getName(snapshot.val() || {}).then(name =>
          this.userRef.update({ name })
        )
      );

    this.usersRef.on('value', snapshot => {
      const users = snapshot.val() || {};
      this.store.dispatch(updateUsers(users));
    });

    this.collaboratorRef.onDisconnect().remove();
    this.collaboratorRef.set(true);
  }

  async getName({ name = '' }) {
    if (name) {
      return name;
    }
    return swal('Enter a name:', {
      content: 'input'
    }).then(name => this.getName({ name }));
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
    if (!contentValue && contentValue !== '') {
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

  processIncomingPreseceUpdate(languageSelection) {
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
}

export default Firebase;
