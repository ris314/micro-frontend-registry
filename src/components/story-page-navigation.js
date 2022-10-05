import PropTypes from 'prop-types';
import { Button, Box, Stack } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { linkTo } from '@storybook/addon-links';

export const StoryPageNavigation = ({ previous, next }) => {
  return (
    <Stack mt={12} direction="row" spacing={2} justifyContent="center" alignItems="center">
      {
        previous && (
          <Box>
            <Button
              startIcon={<NavigateBefore/>}
              variant="outlined"
              onClick={linkTo(...previous.linkToParts)}
            >
              {previous.label}
            </Button>
          </Box>
        )}
      {
        next && (
          <Box>
            <Button
              endIcon={<NavigateNext/>}
              variant="outlined"
              onClick={linkTo(...next.linkToParts)}
            >
              {next.label}
            </Button>
          </Box>
        )}
    </Stack>
  );
};

StoryPageNavigation.propTypes = {
  previous: PropTypes.shape({
    label: PropTypes.string.isRequired,
    linkToParts: PropTypes.array.isRequired
  }),
  next: PropTypes.shape({
    label: PropTypes.string.isRequired,
    linkToParts: PropTypes.array.isRequired
  })
};
