import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import SimpleResponsiveExample from "./SimpleResponsiveExample";

const stories = storiesOf("load-src", module);

stories.addDecorator(withKnobs);

stories.add("Simple responsive example", () => <SimpleResponsiveExample />);
