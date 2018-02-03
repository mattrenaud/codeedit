import React, { Component } from "react";

import PropTypes from "prop-types";

import "./CodeEditor.styles.css";

import CodeMirror from "codemirror";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/sass/sass";
import "codemirror/mode/clike/clike";
import "codemirror/mode/php/php";
import "codemirror/mode/swift/swift";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";

import throttle from "lodash.throttle";

class CodeEditor extends Component {
  textArea = null;
  codeMirror = null;

  componentDidMount() {
    const { languageSelection: mode, onContentUpdate } = this.props;
    this.codeMirror = CodeMirror.fromTextArea(this.textArea, {
      theme: "xq-light",
      lineNumbers: true,
      mode
    });

    const changesListener = throttle(
      ({ doc }) => onContentUpdate(doc.getValue()),
      300,
      { trailing: true }
    );

    this.codeMirror.on("changes", changesListener);
  }

  render() {
    const { languageSelection: mode, contentValue } = this.props;
    if (this.codeMirror && this.codeMirror.getOption("mode") !== mode) {
      this.codeMirror.setOption("mode", mode);
    }
    if (this.codeMirror && this.codeMirror.doc.getValue() !== contentValue) {
      this.codeMirror.doc.setValue(contentValue);
    }
    return (
      <div className="CodeEditor w-100">
        <textarea ref={ref => (this.textArea = ref)} />
      </div>
    );
  }
}

CodeEditor.propTypes = {
  languageSelection: PropTypes.string.isRequired,
  contentValue: PropTypes.string.isRequired,
  onContentUpdate: PropTypes.func.isRequired
};

export default CodeEditor;
