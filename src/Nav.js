import React, { Component } from "react";
import { findDOMNode } from "react-dom";

import "./Nav.css";

import "bootstrap";
import $ from "jquery";

import docId from "./docId";
import Clipboard from "clipboard";

const urlPrefix = "http://codeedit.live/";
const url = `${urlPrefix}${docId}`;

class Nav extends Component {
  copyButton = null;
  copyText = null;
  copyLinkWrap = null;

  selectText(element) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  componentDidMount() {
    // const copyLinkTT = new Tooltip(findDOMNode(this.tooltipHost));
    $(findDOMNode(this.copyButton)).tooltip({ trigger: "manual" });
    $(findDOMNode(this.copyLinkWrap)).tooltip({
      html: true,
      trigger: "manual"
    });

    new Clipboard(".copylink button", {
      text: trigger => {
        setTimeout(() => this.selectText(findDOMNode(this.copyText)));
        return trigger.getAttribute("aria-label");
      }
    });
  }

  onClickCopy(e) {
    $(e.currentTarget).tooltip("hide");
    $(findDOMNode(this.copyLinkWrap)).tooltip("show");
  }
  mouseEnterCopyButton(e) {
    $(e.target).tooltip("show");
  }
  mouseLeaveCopyButton(e) {
    $(e.target).tooltip("hide");
  }
  mouseLeaveWrap(e) {
    //$(e.target).tooltip("hide");
    console.log("mouseLeaveWrap");
    $(findDOMNode(this.copyLinkWrap)).tooltip("hide");
  }

  render() {
    return (
      <nav className="Nav bg-light text-dark d-flex align-items-center">
        <a className="d-flex flex-column" href="/">
          <img className="logo mb-1" alt="logo" src="/logo.png" />
          <span className="catch-phrase text-muted text-center font-weight-bold">
            simple collaborative code editing
          </span>
        </a>
        <label className="ml-auto mb-0">
          <span>Session Link:</span>
        </label>
        <div
          className="copylink input-group ml-2"
          data-toggle="tooltip"
          data-placement="bottom"
          title="<span>Copy Successful</span><span class='ml-2'>✅</span>"
          ref={ref => (this.copyLinkWrap = ref)}
          onMouseLeave={e => this.mouseLeaveWrap(e)}
        >
          <div className="form-control" ref={ref => (this.copyText = ref)}>
            <span>{urlPrefix}</span>
            <span>{docId}</span>
          </div>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary d-flex align-items-center"
              type="button"
              aria-label={url}
              data-toggle="tooltip"
              data-placement="bottom"
              title="Copy link"
              ref={ref => (this.copyButton = ref)}
              onClick={e => this.onClickCopy(e)}
              onMouseEnter={this.mouseEnterCopyButton}
              onMouseLeave={this.mouseLeaveCopyButton}
            >
              <svg
                aria-hidden="true"
                data-fa-processed=""
                data-prefix="fal"
                data-icon="copy"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM352 32.491a15.88 15.88 0 0 1 7.431 4.195l51.882 51.883A15.885 15.885 0 0 1 415.508 96H352V32.491zM288 464c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V144c0-8.822 7.178-16 16-16h80v240c0 26.51 21.49 48 48 48h112v48zm128-96c0 8.822-7.178 16-16 16H176c-8.822 0-16-7.178-16-16V48c0-8.822 7.178-16 16-16h144v72c0 13.2 10.8 24 24 24h72v240z"
                  className=""
                />
              </svg>
            </button>
          </div>
        </div>
        <a className="btn btn-outline-secondary ml-4" href="/">
          New Session
        </a>
      </nav>
    );
  }
}

export default Nav;
