import React from "react";
import { Wrapper } from "../components/Wrapper";
import {Section} from "../components/Components";
import Buttons from "../sections/Buttons";

export default function Components() {
  return (
    <div class="row">
      <div class="col-lg-3">
        <Wrapper>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Section href="#a">Button</Section>
            </li>
            <li>
            <Section href="#a">Input</Section>
            </li>
          </ul>
        </Wrapper>
      </div>
      <div class="col-lg-9">
        <Buttons id="a">

        </Buttons>
        <p id="b">
  
        </p>

      </div>
    </div>
  );
}
