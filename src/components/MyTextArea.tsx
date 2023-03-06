import InputError from './Shared/InputError';
import { useTheme } from 'context/ThemeContext';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';

type Props = {
    value: string;
    onChange: Function;
    helperText: string;
    placeholder: string;
    name?: string | number;
    indexes?: any;
    error?: boolean;
}

const MyTextArea: React.FC<Props> = ({helperText, value, onChange, name, placeholder, indexes }) => {

    const { mainColors, darkMode } = useTheme()
    const style = {
        root: {
            padding: '20px',
            width: '580px',
            maxWidth: '100%',
            minWidth: '200px',
            height: '250px',
            minHeight: '250px',
            maxHeight: '1000px',
            border: darkMode ? '1px solid #3F72A4' : 'none',
            borderRadius: '10px',
            background: mainColors.paper.main,
            boxShadow: darkMode ? 'none' : '0px 0px 10px 1px #B6D5F0',
            color: mainColors.primary.main,
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '25px',
            transition: '.2s ease-out'
        },
        icon: {
            position: 'absolute',
            zIndex: '5',
            bottom: '20px',
            left: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
        }
    }

    return (
        <FormControl sx={{maxWidth: '100%'}}>
            <textarea
                value={value}
                style={style.root}
                name={name?.toString()}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value, indexes)}
                className={darkMode ? 'darkTextArea' : 'lightTextarea'}
            />
            <Box sx={style.icon} component="label">
                <Typography variant='h6' color={'primary'} fontWeight={700}>
                    {`5000 / ${value.length}`}
                </Typography>
            </Box>
            <InputError content={helperText} type='error' />
        </FormControl>
    );
}
 
export default MyTextArea;