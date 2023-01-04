import { forwardRef, useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MyCss from './MyDialog.module.css';

// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,) {
        return <Slide direction="up" ref={ref} {...props} />;
    }
);

type Props = {
    open: boolean;
    handleClose: Function;
    getSelectedClasses: Function;
}

const ClassesDialog: React.FC<Props> = ({open, handleClose, getSelectedClasses}) => {

    const { mainColors, darkMode } = useContext(DarkThemeContext);

    const style = {
        root: {
            '.MuiDialog-paper': {
                maxWidth: '90%',
                width: 'fit-content',
                borderRadius: '17px', 
                background: mainColors.dialog.background,
            },
            '.MuiDialogTitle-root': {
                width: '100%',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                borderBottom: '2px solid #3F72A4',
                boxShadow: mainColors.dialog.titleShadow,
                '@media(max-width: 400px)': {
                    '.MuiTypography-root': {
                        fontSize: '25px',
                    },
                }
            },
            '.MuiDialogContent-root': {
                width: 'fit-content',
                padding: '35px 80px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '40px',
                boxShadow: 'inset 0px -20px 57px 4px rgb(63 114 164 / 25%)',
                '@media(max-width: 400px)': {
                    padding: '35px 20px',
                    gap: '20px'
                }
            },
            '.MuiDialogActions-root': {
                padding: '0px',
            },
        },
        boxContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '28px',
        },
        box: {
            width: '95px',
            height: '95px',
            padding: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '20px',
            textAlign: 'center',
            borderRadius: '50%',
            color: mainColors.secondary.contrastText,
            background: mainColors.chips.main,
            cursor: 'pointer',
        },
        exitBut: {
            minWidth: 'fit-content',
            borderRadius: '5px',
            position: 'absolute',
            top: '12px',
            right: '10px',
            '.MuiSvgIcon-root': {
                width: '40px',
                height: '40px'
            },
            '@media(max-width: 400px)': {
                position: 'static',
                '.MuiSvgIcon-root': {
                    width: '30px',
                    height: '30px'
                },
            }
        },
        addBut: {
            width: '109px',
            height: '41px',
            fontSize: '19px',
            fontWeight: '700',
            borderRadius: '5px',
            boxShadow: 'none',
        },
    }

    const selectHandle = (e: any) => {
        e.preventDefault();
        e.target.classList.contains( MyCss.selected ) ||  e.target.classList.contains( MyCss.darkSelected ) ?
        e.target.classList.remove(MyCss.selected, MyCss.darkSelected) :
        e.target.classList.add(darkMode ? MyCss.darkSelected : MyCss.selected);
    };

    const submitData = () => {
        const selected = [];

        const classes = document.getElementsByClassName('classes');

        // get selected days then remove the selected class
        for (let i = 0; i < classes.length; i++) {
            if (classes[i]?.classList.contains(`${MyCss.selected}`) || classes[i]?.classList.contains(`${MyCss.darkSelected}`) ) {
                const selectedData: any = {
                    name: '',
                    content: '',
                };
                selectedData['name'] = (classes[i]?.getAttribute("data-day"));
                selectedData['content'] = (classes[i]?.innerHTML);
                selected.push(selectedData);
            } else {
                continue;
            }
        };

        getSelectedClasses(selected);
        handleClose();
    }       

    return (
        <Dialog
            sx={style.root}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => handleClose()}
        >
            <DialogTitle> 
                <Typography variant='h1' color='primary'>
                    الصفوف الدراسية
                </Typography>  
                <Button sx={style.exitBut} onClick={() => handleClose()}>
                    <CloseIcon />
                </Button>
            </DialogTitle>
            <DialogContent>
                <Typography variant='h4' color='primary' textAlign={'center'}>
                    حدد الصفوف الدراسية المناسبة لك
                </Typography>
                <Box sx={style.boxContainer}>
                    <Box sx={style.box} data-day='أولى إعدادي' className='classes' onClick={(e) => selectHandle(e)}>
                        أولى إعدادي
                    </Box>
                    <Box sx={style.box} data-day='ثانية إعدادي' className='classes' onClick={(e) => selectHandle(e)}>
                        ثانية إعدادي   
                    </Box>
                    <Box sx={style.box} data-day='ثالثة إعدادي' className='classes' onClick={(e) => selectHandle(e)}>
                        ثالثة إعدادي
                    </Box>
                    <Box sx={style.box} data-day='أولى ثانوي' className='classes' onClick={(e) => selectHandle(e)}>
                        أولى ثانوي
                    </Box>
                    <Box sx={style.box} data-day='ثانية ثانوي' className='classes' onClick={(e) => selectHandle(e)}>
                        ثانية ثانوي
                    </Box>
                    <Box sx={style.box} data-day='ثالثة ثانوي' className='classes' onClick={(e) => selectHandle(e)}>
                        ثالثة ثانوي  
                    </Box>
                </Box>
                <DialogActions>
                    <Button variant='contained' color='primary' sx={style.addBut} onClick={() => submitData()}>تأكيد</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}

export default ClassesDialog;