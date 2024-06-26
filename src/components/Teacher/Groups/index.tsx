import Link from 'next/link'
import { Routes } from 'routes/Routes'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    states: any
}

const GroupsC: React.FC<Props> = ({ data, states }) => {
    const { mainColors } = useTheme()
    const style = {
        container: {
            display: 'flex',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '55px',
        },
        card: {
            width: '370px',
            maxWidth: '100%',
            height: '243px',
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
            '@media screen and (max-width: 400px)': {
                gap: '25px',
                padding: '40px 20px',
            },
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        span: {
            fontWeight: '700',
        },
    }

    return (
        <Box sx={style.container}>
            {!states.isPreopen ? (
                data.openGroupsData.length > 0 ? (
                    data.openGroupsData.map((item: any) => (
                        <Link key={item.id} href={`${Routes.teacherGroup}${item.id}`}>
                            <Box sx={style.card}>
                                <Box sx={style.content}>
                                    <Typography color="primary" variant="h1">
                                        {item.name}
                                    </Typography>
                                    <Typography color="primary" variant="h5">
                                        <span style={style.span}>الصف الدراسي :</span>
                                        {` ${item.level}`}
                                    </Typography>
                                </Box>
                                <Box sx={style.content}>
                                    <Typography color="primary" variant="h5">
                                        <span style={style.span}>عدد الطلاب :</span>
                                        {` ${item.studentsCount}`}
                                    </Typography>
                                    <Typography color="primary" variant="h5">
                                        <span style={style.span}>المقر :</span>
                                        {` ${item.headQuarter}`}
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    ))
                ) : (
                    <Typography variant="h3" color={'primary'} fontWeight={700}>
                        لا يوجد مجموعات
                    </Typography>
                )
            ) : data.preOpenGroupsData.length > 0 ? (
                data.preOpenGroupsData.map((item: any) => (
                    <Link key={item.id} href={`${Routes.teacherGroup}${item.id}`}>
                        <Box sx={style.card}>
                            <Box sx={style.content}>
                                <Typography color="primary" variant="h1">
                                    {item.name}
                                </Typography>
                                <Typography color="primary" variant="h5">
                                    <span style={style.span}>الصف الدراسي :</span>
                                    {` ${item.level}`}
                                </Typography>
                            </Box>
                            <Box sx={style.content}>
                                <Typography color="primary" variant="h5">
                                    <span style={style.span}>عدد الطلاب :</span>
                                    {` ${item.studentsCount}`}
                                </Typography>
                                <Typography color="primary" variant="h5">
                                    <span style={style.span}>المقر :</span>
                                    {` ${item.headQuarter}`}
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                ))
            ) : (
                <Typography variant="h3" color={'primary'} fontWeight={700}>
                    لا يوجد مجموعات
                </Typography>
            )}
        </Box>
    )
}

export default GroupsC
