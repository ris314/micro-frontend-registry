import { getTitle } from 'stories/utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/overview#default-export
export default {
  title: getTitle({ group: 'registry', story: 'studyAdminDataElement' }),
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

export const Sandbox = (
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/overview#using-args
  () => <study-admin-data-element/>
).bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sandbox.args = {
};
