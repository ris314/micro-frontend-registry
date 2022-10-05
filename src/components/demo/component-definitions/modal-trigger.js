import * as React from 'react';
import * as Material from '@mui/material';

export const ModalTrigger = () => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = React.useCallback(
    () => setOpen(previous => !previous),
    []
  );

  return (
    <Material.Stack direction="row" spacing={2} alignItems="center">
      <Material.Button
        size="large"
        variant="outlined"
        color='secondary'
        onClick={toggleOpen}
      >
        Open modal
      </Material.Button>
      {
        open && (
          <Material.Modal open={open} onClose={toggleOpen}>
            <Material.Box
              component={Material.Paper}
              sx={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '64px'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Material.Box>
          </Material.Modal>
        )}
    </Material.Stack>
  );
};

/**
 * NOTE: Export a direct replica of the ModalTrigger implementation above as string.
 */
export const modalTriggerComponentString = `// Render button that triggers MaterialUI modal
const ModalTrigger = () => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = React.useCallback(
    () => setOpen(previous => !previous),
    []
  );

  return (
    <Material.Stack direction="row" spacing={2} alignItems="center">
      <Material.Button
        size="large"
        variant="outlined"
        color='secondary'
        onClick={toggleOpen}
      >
        Open modal
      </Material.Button>
      {
        open && (
          <Material.Modal open={open} onClose={toggleOpen}>
            <Material.Box
              component={Material.Paper}
              sx={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '64px'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Material.Box>
          </Material.Modal>
        )}
    </Material.Stack>
  );
};
`;
