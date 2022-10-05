import * as React from 'react';
import PropTypes from 'prop-types';
import * as Material from '@mui/material';

export const AlertTrigger = ({ severity, message }) => {
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
        color={severity}
        onClick={toggleOpen}
      >
        {open ? 'hide' : 'show'} {severity}
      </Material.Button>
      {
        open && (
          <Material.Alert severity={severity}>
            {message}
          </Material.Alert>
        )}
    </Material.Stack>
  );
};

AlertTrigger.propTypes = {
  severity: PropTypes.oneOf(['info', 'warning', 'error', 'success']).isRequired,
  message: PropTypes.string.isRequired
};

/**
 * NOTE: Export a direct replica of the AlertTrigger implementation above as string.
 */
export const alertTriggerComponentString = `// Render button that triggers MaterialUI alerts
const AlertTrigger = ({ severity, message }) => {
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
        color={severity}
        onClick={toggleOpen}
      >
        {open ? 'hide' : 'show'} {severity}
      </Material.Button>
      {
        open &&
        <Material.Alert severity={severity}>
          {message}
        </Material.Alert>
      }
    </Material.Stack>
  );
};
`;
