import MyBigInput from "components/MyBigInput";
import { useTheme } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    data: any;
    actions: any;
    grandParentIndex: number;
    parentIndex: number;
}

const Written: React.FC<Props> = ({ data, actions, grandParentIndex, parentIndex }) => {

    const { mainColors } = useTheme()
    const style = {
        flexColumn: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '34px'
        }
    }

    return (
        <Box sx={style.flexColumn}>
            <Typography 
                variant='h4' 
                fontWeight={700} 
                color={mainColors.title.main}
            >
                الاجابة الصحيحة (التقريبية):-
            </Typography> 
            <MyBigInput
                value={data}
                onChange={actions.questionAnswerHandler}
                placeholder=''
                helperText=""
                indexes={
                    {
                        grandParent: grandParentIndex,
                        parent: parentIndex
                    }
                }
            />
        </Box>
    );
}
 
export default Written;