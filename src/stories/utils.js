import { kebabCase } from 'lodash';
import { Group, Story, orderedStorybookStories } from './config';
import { isNil } from 'lodash';

/**
 * Purpose: Return title of the story, allowing for relying on keys in files instead of titles
*/
export const getTitle = ({ group, story }) => {
  const result = [];

  group && result.push(Group[group]);
  story && result.push(Story[story]);

  return result.join('/');
};

/**
 * Purpose: Return story's link
*/
export const getRegistrySandboxLink = storyKey =>
  `?path=/story/${kebabCase(getTitle({ group: 'registry', story: storyKey }))}--sandbox`;

/**
 * Purpose: Return story's navigation metadata using the ordered stories config
*/
export const getGuidesNavigationMeta = storyKey => {
  const orderedStories = orderedStorybookStories[
    orderedStorybookStories.indexOf(Group.guides) + 1
  ];

  const storyIndex = orderedStories.indexOf(Story[storyKey]);
  const previousStoryIndex = storyIndex > 0 ? storyIndex - 1 : null;
  const nextStoryIndex = storyIndex < orderedStories.length - 1 ? storyIndex + 1 : null;

  const getMetadatum = storyTitle => ({
    label: storyTitle,
    linkToParts: [Group.guides, storyTitle]
  });

  return {
    previous: isNil(previousStoryIndex) ? null : getMetadatum(orderedStories[previousStoryIndex]),
    next: isNil(nextStoryIndex) ? null : getMetadatum(orderedStories[nextStoryIndex])
  };
};
