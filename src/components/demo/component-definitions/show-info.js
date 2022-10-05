import { AlertTrigger } from './alert-trigger';

export const ShowInfo = () => (
  <AlertTrigger severity="info" message="Web components are awesome!" />
);

/**
 * NOTE: Export a direct replica of the ShowInfo implementation above as string.
 */
export const showInfoComponentString = `// Invoke AlertTrigger as info
const ShowInfo = () => (
  <AlertTrigger severity="info" message="Web components are awesome!" />
);
`;
