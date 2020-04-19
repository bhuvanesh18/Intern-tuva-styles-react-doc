import React from "react";
import { Heading, CodeBlocks, Paragraph } from "./../../mini_components";

function Blankslate() {
  return (
    <React.Fragment>
      <Heading heading="Blankslate" id="blankslate" />
      <Paragraph paragraph='Sometimes a select menu needs to communicate a "blank slate" where there is no content in the menus list. Usually these include a clear call to action to add said content to the list. Swap out the contents of a .SelectMenu-list with a .SelectMenu-blankslate and customize its contents as needed.' />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../../output/component/selectmenu/Blankslate_output.html"
              frameBorder="0"
              style={{
                border: "0",
                width: "100" + "%",
                height: "280" + "px",
              }}
            ></iframe>
          </div>,
        ]}
        codeline={[
          `
        <details class="details-reset details-overlay" open>
          <summary class="btn" aria-haspopup="true">
            Choose an item
          </summary>
          <div class="SelectMenu">
            <div class="SelectMenu-modal">
              <header class="SelectMenu-header">
                <h3 class="SelectMenu-title">Title</h3>
                <button class="SelectMenu-closeButton" type="button">
                  <!-- <%= octicon "x" %> -->
                  <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                    />
                  </svg>
                </button>
              </header>
              <div class="SelectMenu-list">
                <div class="SelectMenu-blankslate">
                  <!-- <%= octicon "repo", class: "color-gray-3", width: 24 %> -->
                  <svg width="24 " height="32" viewBox="0 0 12 16" class="octicon octicon-repo color-gray-3" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                    />
                  </svg>
                  <h4 class="my-2">No repositories</h4>
                  <p class="mb-3 text-gray">We didn’t find any matching repositories that you can commit to.</p>
                  <button type="button" class="btn btn-sm btn-primary">Create a repository</button>
                </div>
              </div>
            </div>
          </div>
        </details>

        <div class="d-sm-none" style="height: 600px"><!-- min height for < sm --></div>
        <div class="d-none d-sm-block" style="height: 260px"><!-- min height for > sm --></div>
        `,
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Blankslate;
