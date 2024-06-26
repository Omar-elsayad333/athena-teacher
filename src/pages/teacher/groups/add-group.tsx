import { NextPage } from 'next'
import { withAuth } from 'routes/withRoute'
import { useTheme } from 'context/ThemeContext'
import { useAlert } from 'context/AlertContext'
import Loading from 'components/Loading/Loading'
import AlertNotify from 'components/AlertNotify'
import PageHead from 'components/Shared/PageHead'
import PageTitle from 'components/Shared/PageTitle'
import ThemeSwitcher from 'components/ThemeSwitcher'
import PageFooter from 'components/Shared/PageFooter'
import useAddGroup from 'container/groups/useAddGroup'
import AddGroupC from 'components/Teacher/Groups/AddGroup'
import DesktopNavbar from 'components/Layout/DesktopNavbar'

// MUI
import Box from '@mui/material/Box'

const AddGroup: NextPage = () => {
    const { mainColors } = useTheme()
    const { msg, state, msgType, handleState } = useAlert()
    const { data, states, actions, dialogs } = useAddGroup()
    const style = {
        root: {
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: mainColors.backgroundColor.main,
            transition: '.2s',
        },
        container: {
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
            '@media screen and (max-width: 450px)': {
                padding: '40px',
            },
            '@media screen and (max-width: 350px)': {
                padding: '20px',
            },
        },
        footerContainer: {
            marginTop: 'auto',
        },
    }

    return (
        <Box sx={style.root}>
            <PageHead title="Add Groups" />
            <DesktopNavbar
                firstPath="/teacher/groups"
                firstContent="جميع المجموعات"
                secondPath="/teacher/groups/add-group"
                secondContent="اضافة مجموعة"
            />
            {states.loading ? (
                <Loading />
            ) : (
                <Box sx={style.container}>
                    <PageTitle content="اضافة مجموعة جديدة">
                        <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 20"
                            fill={mainColors.primary.main}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.04185 2.27904e-08H15.0666C15.16 2.27904e-08 15.2496 0.04109 15.3157 0.114229C15.3818 0.187368 15.4189 0.286566 15.4189 0.39V5.52C15.4189 5.62078 15.3827 5.71744 15.3184 5.7887C15.254 5.85997 15.1667 5.9 15.0756 5.9H9.04185C8.95081 5.9 8.86351 5.85997 8.79914 5.7887C8.73477 5.71744 8.69861 5.62078 8.69861 5.52V0.39C8.6974 0.339263 8.70539 0.288772 8.72209 0.241508C8.7388 0.194243 8.76389 0.151164 8.79589 0.114812C8.82788 0.0784597 8.86613 0.049571 8.90837 0.0298519C8.95062 0.0101329 8.996 -1.75548e-05 9.04185 2.27904e-08Z"
                                fill="inherit"
                            />
                            <path
                                d="M17.623 13.8501H23.6478C23.7412 13.8501 23.8308 13.8912 23.8969 13.9643C23.963 14.0375 24.0001 14.1367 24.0001 14.2401V19.3701C24.0001 19.4735 23.963 19.5727 23.8969 19.6459C23.8308 19.719 23.7412 19.7601 23.6478 19.7601H17.623C17.532 19.7601 17.4447 19.7201 17.3803 19.6488C17.3159 19.5775 17.2798 19.4809 17.2798 19.3801V14.2401C17.2798 14.1384 17.3156 14.0407 17.3797 13.9678C17.4439 13.8949 17.5312 13.8527 17.623 13.8501Z"
                                fill="inherit"
                            />
                            <path
                                d="M9.04173 13.8501H15.0665C15.1599 13.8501 15.2495 13.8912 15.3156 13.9643C15.3817 14.0375 15.4188 14.1367 15.4188 14.2401V19.3701C15.4188 19.4735 15.3817 19.5727 15.3156 19.6459C15.2495 19.719 15.1599 19.7601 15.0665 19.7601H9.04173C8.95069 19.7601 8.86339 19.7201 8.79902 19.6488C8.73465 19.5775 8.69849 19.4809 8.69849 19.3801V14.2401C8.69846 14.1384 8.73433 14.0407 8.79845 13.9678C8.86257 13.8949 8.94987 13.8527 9.04173 13.8501Z"
                                fill="inherit"
                            />
                            <path
                                d="M0.34324 13.8501H6.36801C6.45904 13.8501 6.54635 13.8901 6.61072 13.9614C6.67509 14.0327 6.71125 14.1293 6.71125 14.2301V19.3601C6.71125 19.4609 6.67509 19.5575 6.61072 19.6288C6.54635 19.7001 6.45904 19.7401 6.36801 19.7401H0.34324C0.252207 19.7401 0.164903 19.7001 0.100533 19.6288C0.0361628 19.5575 1.90661e-08 19.4609 1.90661e-08 19.3601V14.2401C-3.01911e-05 14.1384 0.0358414 14.0407 0.0999643 13.9678C0.164087 13.8949 0.251386 13.8527 0.34324 13.8501Z"
                                fill="inherit"
                            />
                            <path
                                d="M21.3621 9.43004C21.3598 9.32835 21.3216 9.2317 21.2558 9.16071C21.19 9.08972 21.1017 9.05001 21.0098 9.05004H12.754V6.93004C12.7517 6.8274 12.7139 6.72967 12.6483 6.65707C12.5827 6.58448 12.4944 6.54257 12.4017 6.54004H11.7062C11.6144 6.54265 11.5271 6.58489 11.463 6.65774C11.3988 6.7306 11.363 6.82831 11.363 6.93004V9.05004H3.08006C3.03423 9.0487 2.98862 9.05755 2.94593 9.07604C2.90324 9.09454 2.86432 9.12232 2.83149 9.15774C2.79865 9.19316 2.77256 9.2355 2.75475 9.28227C2.73694 9.32904 2.72777 9.37928 2.72778 9.43004V9.57004V12.66C2.72778 12.7635 2.7649 12.8627 2.83096 12.9358C2.89703 13.009 2.98663 13.05 3.08006 13.05H3.77557C3.86742 13.0474 3.95472 13.0052 4.01885 12.9323C4.08297 12.8595 4.11884 12.7618 4.11881 12.66V10.58H11.3449V12.7C11.3449 12.8018 11.3808 12.8995 11.4449 12.9723C11.509 13.0452 11.5963 13.0874 11.6882 13.09H12.3837C12.4764 13.0875 12.5647 13.0456 12.6302 12.973C12.6958 12.9004 12.7337 12.8027 12.7359 12.7V10.58H19.9621V12.77C19.9609 12.8208 19.9688 12.8713 19.9855 12.9185C20.0023 12.9658 20.0274 13.0089 20.0593 13.0452C20.0913 13.0816 20.1296 13.1105 20.1718 13.1302C20.2141 13.1499 20.2595 13.1601 20.3053 13.16H21.0008C21.0474 13.1614 21.0938 13.1523 21.1371 13.1332C21.1804 13.114 21.2197 13.0854 21.2527 13.0489C21.2856 13.0124 21.3115 12.9688 21.3288 12.9209C21.3461 12.873 21.3543 12.8216 21.3531 12.77V9.54004L21.3621 9.43004Z"
                                fill="inherit"
                            />
                        </svg>
                    </PageTitle>
                    <AddGroupC data={data} states={states} actions={actions} dialogs={dialogs} />
                </Box>
            )}
            <Box sx={style.footerContainer}>
                <PageFooter />
            </Box>
            <ThemeSwitcher />
            <AlertNotify msg={msg} state={state} handleState={handleState} msgType={msgType} />
        </Box>
    )
}

export default withAuth(AddGroup)
