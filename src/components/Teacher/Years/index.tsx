import Link from "next/link";
import { useContext } from "react";
import useYears from "container/years/useYears";
import { useError } from "context/ErrorContext";
import AlertNotify from "components/AlertNotify";
import Loading from "components/Loading/Loading";
import { DarkThemeContext } from "context/ThemeContext";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IStyle } from "styles/IStyle";

const YearsC: React.FC = () => {

    const { 
        data,
        states
    } = useYears();
    const {
        msg,
        state,
        msgType,
        handleState
    } = useError();
    const {mainColors} = useContext(DarkThemeContext);

    const style: IStyle = {
        container: {
            position: 'relative',
            display: 'flex',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '55px',
        },
        card: {
            width: '335px',
            maxWidth: '100%',
            height: '149px',
            padding: '40px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '35px',
            border: '2px solid #3F72A4',
            background: mainColors.linerGradient.primary,
            borderRadius: '18px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: '.35s',
            ':hover': {
                boxShadow: '0px 0px 15px 0px rgba(63, 114, 164, .50)',
            },
            '@media(max-width: 400px)': {
                gap: '25px',
                padding: '40px 20px',
            },
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        spcialCard: {
            width: '335px',
            maxWidth: '100%',
            height: '149px',
            padding: '40px 30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid #3F72A4',
            background: mainColors.dialog.background,
            borderRadius: '18px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: '.2s',
            ':hover': {
                boxShadow: '0px 0px 15px 0px rgba(63, 114, 164, .50)',
            },
            '@media(max-width: 400px)': {
                gap: '25px',
                padding: '40px 20px',
            },
        },
        span: {
            fontWeight: '700',
        },
    }

    return (
        <Box sx={style.container}>
            {
                states.loading && <Loading />
            }
            {
                data.yearsData &&
                data.yearsData.map((item:any) => {
                    return (
                        <Link key={item.id} href={`/teacher/years/year/${item.id}`}>
                            <Box sx={style.card}>
                                <Box sx={style.content}>
                                    <Typography color='primary' variant="h4" fontWeight={700}> 
                                        العام الدراسي
                                    </Typography>
                                    <Typography color='primary' variant="h1">
                                        {`${item.end} / ${item.start}`}
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    )
                })
            }
            <Link href={`/teacher/years/add-year`}>
                <Box sx={style.spcialCard}>
                    <Typography color='primary' variant="h1" fontWeight={700}> 
                        بدأ عام جديد
                    </Typography>   
                </Box>
            </Link>
            <AlertNotify msg={msg} state={state} handleState={handleState} msgType={msgType} />
        </Box>        
    );
}
 
export default YearsC;