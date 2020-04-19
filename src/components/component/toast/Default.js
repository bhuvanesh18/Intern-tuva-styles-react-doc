import React from "react";
import { Heading, Paragraph, CodeBlocks } from "./../../mini_components";

function Default() {
  return (
    <React.Fragment>
      <Heading heading="Default" id="default" />
      <Paragraph paragraph="To create a default toast, use .Toast. Always use the info icon for default messages." />
      <CodeBlocks
        htmlcoderender={[
          <div className="p-1">
            <div className="Toast">
              <span className="Toast-icon">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  className="octicon octicon-info"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                  />
                </svg>
              </span>
              <span className="Toast-content">Toast message goes here</span>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="p-1">
          <div class="Toast">
            <span class="Toast-icon">
              <!-- <%= octicon "info" %>-->
              <svg width="14" height="16" viewBox="0 0 14 16" class="octicon octicon-info" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                />
              </svg>
            </span>
            <span class="Toast-content">Toast message goes here</span>
          </div>
        </div>`
        ]}
        lang="html"
      />
      <Paragraph paragraph="The Toast content is formattable. We recommend keeping your message under 140 characters." />
      <CodeBlocks
        htmlcoderender={[
          <div className="p-1">
            <div className="Toast">
              <span className="Toast-icon">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  className="octicon octicon-info"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                  />
                </svg>
              </span>
              <span className="Toast-content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                <strong>Aenean commodo ligula eget dolor.</strong> Aenean massa.
                Cum sociis <em>natoque</em> penatibus et ma
              </span>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="p-1">
          <div class="Toast">
            <span class="Toast-icon">
              <!-- <%= octicon "info" %> -->
              <svg width="14" height="16" viewBox="0 0 14 16" class="octicon octicon-info" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                />
              </svg>
            </span>
            <span class="Toast-content">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              <strong>Aenean commodo ligula eget dolor.</strong> Aenean massa. Cum sociis <em>natoque</em> penatibus et ma
            </span>
          </div>
        </div>`
        ]}
        lang="html"
      />
    </React.Fragment>
  );
}

export default Default;
