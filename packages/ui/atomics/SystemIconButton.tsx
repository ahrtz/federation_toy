import { IconButton as MuiIconButton, styled } from '@mui/material';

const SystemIconButton = styled(MuiIconButton, {
    name: 'SystemIconButton',
    slot: 'Root',
})({});

SystemIconButton.defaultProps = {
    ...SystemIconButton.defaultProps,
};

export default SystemIconButton;
