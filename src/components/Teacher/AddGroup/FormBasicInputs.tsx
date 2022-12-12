import { useContext } from 'react';
import { DarkThemeContext } from 'context/ThemeContext';
import MySelect from 'components/MySelect';
import MyInput from 'components/MyInput';

// MUI
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const style = {
    inputsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
    },
    title: {
        flex: '100%',
    },
}

const FormBasicInputs = () => {

    const {mainColors} = useContext(DarkThemeContext);

    return (
        <Box sx={style.inputsContainer}>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات المجموعة:-
            </Typography>
            <MyInput Placeholder='أسم المجموعة' />
            <MySelect placeholder='الصف الدراسي الخاص بالمجموعة' data={[]} />
            <MySelect placeholder='المقر الخاص بالمجموعة' data={[]} />
            <MyInput Placeholder='الحد الاقصى لعدد الطلاب' />
        </Box>
    );
}
 
export default FormBasicInputs;