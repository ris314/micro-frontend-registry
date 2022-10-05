import { AlertTrigger } from './alert-trigger';

export const ShowError = () => (
  <AlertTrigger severity="error" message="Yikes! Something is not right." />
);

/**
 * NOTE: Export a direct replica of the ShowError implementation above as string.
 */
export const showErrorComponentString = `// Invoke AlertTrigger as error
const ShowError = () => (
  <AlertTrigger severity="error" message="Yikes! Something is not right." />
);
`;
