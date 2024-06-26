import useStyle from './styles'
import { IStyle } from 'styles/IStyle'
import { useTheme } from 'context/ThemeContext'
import { convertDateToShortDate } from 'utils/converters'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    states: any
    actions: any
}

const YearC: React.FC<Props> = ({ data, actions }) => {
    const styles = useStyle()
    const { mainColors } = useTheme()

    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            columnGap: '104px',
        },
        periodContainer: {
            width: 'fit-content',
            padding: '22px 35px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '43px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        period: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '13px',
        },
        periodBreak: {
            width: '2px',
            height: '100%',
            background: mainColors.paper.border,
            '@media screen and  (max-width: 500px)': {
                height: '2px',
                width: '100%',
            },
        },
        backPaper: {
            padding: '26px 42px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '29px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        classesLabel: {
            width: '154px',
            height: '41px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: '700',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '5px',
            border: `1px solid ${mainColors.chips.border}`,
            color: mainColors.secondary.contrastText,
            background: mainColors.chips.main,
        },
        semestersBackPaper: {
            width: 'fit-content',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: '60px',
            borderRadius: '12px',
            background: mainColors.paper.main,
            border: `2px solid ${mainColors.paper.border}`,
        },
        semeterContainer: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            columnGap: '80px',
            rowGap: '30px',
        },
        semestersBox: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '29px',
        },
        semesterChip: {
            width: '154px',
            height: '41px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: '700',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '5px',
            border: `solid 1px ${mainColors.chips.border}`,
            color: mainColors.secondary.contrastText,
            background: mainColors.linerGradient.primary,
        },
        title: {
            flex: '100%',
        },
    }

    return (
        <Box sx={style.container}>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الفترة الزمنية:-
            </Typography>
            <Box sx={style.periodContainer}>
                <Box sx={style.period}>
                    <Typography variant="h5" fontWeight={700} color={mainColors.title.main}>
                        بداية العام الدراسي
                    </Typography>
                    <Typography variant="h3" fontWeight={700} color={'primary'}>
                        {data.yearData.start}
                    </Typography>
                </Box>
                <Box sx={style.periodBreak} />
                <Box sx={style.period}>
                    <Typography variant="h5" fontWeight={700} color={mainColors.title.main}>
                        نهاية العام الدراسي
                    </Typography>
                    <Typography variant="h3" fontWeight={700} color={'primary'}>
                        {data.yearData.end}
                    </Typography>
                </Box>
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                الصفوف الدراسية:-
            </Typography>
            <Box sx={style.backPaper}>
                {data.yearData &&
                    data.yearData.levels.map((item: any) => {
                        return (
                            <Box key={item.id} sx={style.classesLabel}>
                                {item.levelName}
                            </Box>
                        )
                    })}
            </Box>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات العام الدراسي:-
            </Typography>
            {data.levelsData.length > 0 && (
                <Box sx={styles.levelsContianer} className="levels-contianer">
                    {data.levelsData.map((item: any) => (
                        <Box sx={styles.levelContainer} key={item.id}>
                            <Box
                                key={item.id}
                                sx={[
                                    styles.levelCard,
                                    { borderColor: item.error && mainColors.error.main },
                                ]}
                                className="level-card"
                            >
                                <Typography variant="h1" color={item.error ? 'error' : 'primary'}>
                                    {item.name}
                                </Typography>
                                <Box
                                    sx={[
                                        styles.cardController,
                                        { borderColor: item.error && mainColors.error.main },
                                    ]}
                                >
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill={
                                            item.error
                                                ? mainColors.error.main
                                                : mainColors.primary.main
                                        }
                                        xmlns="http://www.w3.org/2000/svg"
                                        onClick={(e) => {
                                            actions.openAndCloseCard(item.id)
                                            e.currentTarget.style.rotate == '0deg' ||
                                            e.currentTarget.style.rotate == ''
                                                ? (e.currentTarget.style.rotate = '180deg')
                                                : (e.currentTarget.style.rotate = '0deg')
                                        }}
                                    >
                                        <path
                                            d="M19.5446 26.0586C19.1641 26.0593 18.7953 25.9268 18.5022 25.684L8.72975 17.5402C8.39713 17.2637 8.18796 16.8665 8.14825 16.4358C8.10854 16.0051 8.24155 15.5763 8.51801 15.2437C8.79447 14.911 9.19174 14.7019 9.62243 14.6622C10.0531 14.6225 10.4819 14.7555 10.8145 15.0319L19.5446 22.3287L28.2747 15.2925C28.4413 15.1572 28.633 15.0562 28.8388 14.9952C29.0446 14.9343 29.2604 14.9146 29.4738 14.9373C29.6872 14.96 29.894 15.0246 30.0824 15.1275C30.2707 15.2304 30.4369 15.3695 30.5713 15.5368C30.7204 15.7043 30.8334 15.9008 30.9031 16.1139C30.9728 16.3271 30.9977 16.5524 30.9763 16.7756C30.9549 16.9988 30.8876 17.2153 30.7787 17.4113C30.6698 17.6073 30.5215 17.7787 30.3433 17.9148L20.5708 25.7817C20.2693 25.9861 19.908 26.0836 19.5446 26.0586Z"
                                            fill="inherit"
                                        />
                                    </svg>
                                </Box>
                            </Box>
                            {item.open && (
                                <Box sx={styles.cardDetails}>
                                    <Box sx={styles.semestersContainer}>
                                        <Typography
                                            variant="h5"
                                            fontWeight={700}
                                            color={mainColors.title.main}
                                        >
                                            الفصول الدراسية الخاصة بالصف:-
                                        </Typography>
                                        <Box sx={styles.semesterChips}>
                                            {item.semsters.map((semster: any) => (
                                                <Box sx={styles.semesterBox} key={semster.id}>
                                                    <Box key={semster.id} sx={style.classesLabel}>
                                                        {semster.semster}
                                                    </Box>
                                                    <Box sx={styles.semesterDetials}>
                                                        <Box>
                                                            <Typography
                                                                variant="h5"
                                                                color={mainColors.title.main}
                                                                fontWeight={700}
                                                                mb={2}
                                                            >
                                                                بداية الفصل الدراسي
                                                            </Typography>
                                                            <Typography
                                                                variant="h3"
                                                                color={'primary'}
                                                            >
                                                                {convertDateToShortDate(
                                                                    semster.startDate,
                                                                )}
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <Typography
                                                                variant="h5"
                                                                color={mainColors.title.main}
                                                                fontWeight={700}
                                                                mb={2}
                                                            >
                                                                نهاية الفصل الدراسي
                                                            </Typography>
                                                            <Typography
                                                                variant="h3"
                                                                color={'primary'}
                                                            >
                                                                {convertDateToShortDate(
                                                                    semster.endDate,
                                                                )}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                    <Box sx={styles.semestersContainer}>
                                        <Typography
                                            variant="h5"
                                            fontWeight={700}
                                            color={mainColors.title.main}
                                        >
                                            المصروفات الدراسية الخاصة بالصف:-
                                        </Typography>
                                        <Box sx={styles.semesterDetials}>
                                            <Box sx={styles.inputContaienr}>
                                                <Typography
                                                    variant="h5"
                                                    color={mainColors.title.main}
                                                >
                                                    المقدم
                                                </Typography>
                                                <Typography variant="h1" color={'primary'}>
                                                    {`${item.introFee} ج.م`}
                                                </Typography>
                                            </Box>
                                            <Box sx={styles.inputContaienr}>
                                                <Typography
                                                    variant="h5"
                                                    color={mainColors.title.main}
                                                >
                                                    المصروفات الشهرية
                                                </Typography>
                                                <Typography variant="h1" color={'primary'}>
                                                    {`${item.monthFee} ج.م`}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box></Box>
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    )
}

export default YearC
