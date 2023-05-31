import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { marked } from 'marked';


const ButtonReadMore = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  padding: '4px 8px',
  border: '1px solid',
  lineHeight: 1.5,
  borderColor: '#394867',
  color: "#394867",
  fontFamily: [
    'Roboto',
  ].join(','),
  '&:hover': {
    backgroundColor: "rgb(155, 164, 181, .10)",
    borderColor: '#9BA4B5',
    boxShadow: '0 0 0 0.1rem rgba(33,42,62,.5)',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#212A3E',
    borderColor: '#212A3E',
  },
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function ModalRookiepedia({ cardTitle, description }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonReadMore variant="outlined" size="small" onClick={handleClickOpen}
        sx={{
          position: "absolute",
          left: 16,
          bottom: 12}}>
        Leer más
      </ButtonReadMore>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" variant="h5" onClose={handleClose}>
            {cardTitle}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div className="cardtextnfl" dangerouslySetInnerHTML={{ __html: marked(description) }}></div>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

export default ModalRookiepedia;