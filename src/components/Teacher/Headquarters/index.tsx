import Link from 'next/link'
import { Routes } from 'routes/Routes'
import { useTheme } from 'context/ThemeContext'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
}

const HeadquartersC: React.FC<Props> = ({ data }) => {
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
            {data.headquartersData.length > 0 ? (
                data.headquartersData.map((item: any) => {
                    return (
                        <Link key={item.id} href={`${Routes.teacherHeadquarter}${item.id}`}>
                            <Box sx={style.card}>
                                <Box sx={style.content}>
                                    <Typography color="primary" variant="h1">
                                        {item.name}
                                    </Typography>
                                </Box>
                                <Box sx={style.content}>
                                    <Typography color="primary" variant="h5">
                                        <span style={style.span}>العنوان :</span>
                                        {` ${item.city} - ${item.region} - ${item.street} - ${item.building}`}
                                    </Typography>
                                    <Typography color="primary" variant="h5">
                                        <span style={style.span}>رقم التليفون :</span>
                                        {` ${item.phones[0].phone}`}
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    )
                })
            ) : (
                <Typography variant="h3" color={'primary'} fontWeight={700}>
                    لا يوجد مقرات
                </Typography>
            )}
        </Box>
    )
}

export default HeadquartersC
