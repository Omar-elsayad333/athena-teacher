import { IStyle } from "styles/IStyle";

// MUI
import { Typography, Box } from "@mui/material";

const TeachersTable: React.FC = () => {

    const style: IStyle = {
        container: {
            width: '100%',
            minHeight: '65vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '67px',
            background: '#E8F3FF',
        },
    }

    return (
        <Box sx={style.container}>
            <Typography variant="h2" color={'#3F72A4'} fontWeight={700}>
                Teachers Table
            </Typography>
        </Box>
    );
}
 
export default TeachersTable;