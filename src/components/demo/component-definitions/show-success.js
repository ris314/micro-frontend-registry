import { AlertTrigger } from './alert-trigger';

export const ShowSuccess = () => (
  <AlertTrigger severity="success" message="We are on our way!" />
);

/**
 * NOTE: Export a direct replica of the ShowSuccess implementation above as string.
 */
export const showSuccessComponentString = `// Invoke AlertTrigger as success
const ShowSuccess = () => (
  <AlertTrigger severity="success" message="We are on our way!" />
);
`;
