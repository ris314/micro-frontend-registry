import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Medidata',
    brandUrl: 'https://www.medidata.com/en/',
    brandImage: 'https://techmonitor.ai/wp-content/uploads/sites/4/2021/04/Banner-image-2.png',
    brandTarget: '_self',
    appBg: '#002855',
    appContentBg: "#FFFFFF"
  })
});
