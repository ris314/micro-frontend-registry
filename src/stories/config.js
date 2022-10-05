export const Group = Object.freeze({
  guides: 'Micro-frontend Guides',
  registry: 'Micro-frontend Registry'
});

export const Story = Object.freeze({
  overview: 'Overview',
  promotion: 'Promotion',
  ownership: 'Ownership',
  service: 'Service',
  usage: 'Usage',
  development: 'Development',
  registry: 'Registry',

  createStudyElement: 'Create Study Element',
  studyAdminDataElement: 'Study Admin Data Element'
});

// More on sorting stories: https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
export const orderedStorybookStories = Object.freeze([
  Group.guides,
  [
    Story.overview,
    Story.promotion,
    Story.ownership,
    Story.service,
    Story.usage,
    Story.development,
    Story.registry
  ],
  Group.registry,
  [
    Story.createStudyElement,
    Story.studyAdminDataElement
  ]
]);
