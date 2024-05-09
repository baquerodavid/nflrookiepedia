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
    border: '1px solid #D0D5DD',
    borderRadius: "8px",
    lineHeight: 1.5,
    color: "#344054",
    fontFamily: [
        'Roboto',
    ].join(','),
    '&:hover': {
        backgroundColor: "#F8F8F8",
        borderColor: '#D0D5DD',
        boxShadow: '0px 1px 2px 0px rgb(16, 24, 40, 0.05)',
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

function ModalCardConcept({ cardTitle, description }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ButtonReadMore id="btn-readmore" size="small" onClick={handleClickOpen}
                sx={{
                position: "absolute",
                left: 16,
                bottom: 12,
                '&:active': {
                    bgcolor: 'text.secondary',
                    color: 'background.paper',
                    boxShadow: '0px 0px 0px 3px #F2F4F7, 0px 1px 2px 0px rgb(16, 24, 40, 0.05)',
                },
                }}>
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

export default ModalCardConcept;
