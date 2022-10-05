import { AlertTrigger } from './alert-trigger';

export const ShowWarning = () => (
  <AlertTrigger severity="warning" message="Beware! Styles from stylesheets must be provided in the <style> tag to surface in web components. "/>
);

/**
 * NOTE: Export a direct replica of the ShowWarning implementation above as string.
 */
export const showWarningComponentString = `// Invoke AlertTrigger as warning
const ShowWarning = () => (
  <AlertTrigger severity="warning" message="Beware! Styles from stylesheets must be provided in the <style> tag to surface in web components. "/>
);
`;
