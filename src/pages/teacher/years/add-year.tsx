import { NextPage } from 'next'
import { Routes } from 'routes/Routes'
import { withAuth } from 'routes/withRoute'
import { useTheme } from 'context/ThemeContext'
import { useAlert } from 'context/AlertContext'
import AlertNotify from 'components/AlertNotify'
import Loading from 'components/Loading/Loading'
import PageHead from 'components/Shared/PageHead'
import PageTitle from 'components/Shared/PageTitle'
import useAddYear from 'container/years/useAddYear'
import ThemeSwitcher from 'components/ThemeSwitcher'
import PageFooter from 'components/Shared/PageFooter'
import AddYearC from 'components/Teacher/Years/AddYear'
import DesktopNavbar from 'components/Layout/DesktopNavbar'

// MUI
import Box from '@mui/material/Box'

const AddYear: NextPage = () => {
    const { mainColors } = useTheme()
    const { data, states, actions, dialog } = useAddYear()
    const { msg, state, msgType, handleState } = useAlert()

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
            <PageHead title="Add New Year" />
            <DesktopNavbar
                firstPath={Routes.teacherYears}
                firstContent="الأعوام الدراسية"
                secondPath={Routes.teacherAddYear}
                secondContent="بداية عام جديد"
            />
            {states.loading ? (
                <Loading />
            ) : (
                <Box sx={style.container}>
                    <PageTitle content="اضافة عام الدراسي">
                        <svg
                            width="31"
                            height="32"
                            viewBox="0 0 31 32"
                            fill={mainColors.primary.main}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M26.7333 4.12248C26.7333 3.02042 25.8367 2.12386 24.7347 2.12386H23.5527V3.74177C23.5527 4.01734 23.3274 4.24264 23.0518 4.24264C22.7762 4.24264 22.5509 4.01734 22.5509 3.74177V0.500875C22.5509 0.2253 22.3256 0 22.0501 0C21.7745 0 21.5492 0.2253 21.5492 0.500875V2.11878H20.0816V3.73669C20.0816 4.01226 19.8563 4.23756 19.5808 4.23756C19.3052 4.23756 19.0799 4.01226 19.0799 3.73669L19.0797 2.11878V0.500875C19.0797 0.2253 18.8544 0 18.5788 0C18.3032 0 18.0779 0.2253 18.0779 0.500875V2.11878H16.6104V3.73669C16.6104 4.01226 16.3851 4.23756 16.1095 4.23756C15.8339 4.23756 15.6086 4.01226 15.6086 3.73669V0.500875C15.6086 0.2253 15.3833 0 15.1077 0C14.8322 0 14.6069 0.2253 14.6069 0.500875V2.11878H13.1393V3.73669C13.1393 4.01226 12.914 4.23756 12.6385 4.23756C12.3629 4.23756 12.1376 4.01226 12.1376 3.73669L12.1374 2.11878V0.500875C12.1374 0.2253 11.9121 0 11.6365 0C11.3609 0 11.1356 0.2253 11.1356 0.500875V2.11878H9.66806V3.73669C9.66806 4.01226 9.44276 4.23756 9.16719 4.23756C8.89162 4.23756 8.66632 4.01226 8.66632 3.73669L8.66609 2.11878V0.500875C8.66609 0.2253 8.44079 0 8.16521 0C7.88964 0 7.66434 0.2253 7.66434 0.500875V2.11878H6.1968V3.73669C6.1968 4.01226 5.9715 4.23756 5.69592 4.23756C5.42035 4.23756 5.19505 4.01226 5.19505 3.73669L5.19482 2.11878V0.500875C5.19482 0.2253 4.96952 0 4.69394 0C4.41837 0 4.19307 0.2253 4.19307 0.500875V2.11878H1.99911C0.897048 2.11878 0.000488281 3.0154 0.000488281 4.1174V6.11603H26.7385V4.12242L26.7333 4.12248Z"
                                fill="inherit"
                            />
                            <path
                                d="M14.2431 12.0221L21.2806 14.1861L28.3235 12.0221L21.2806 9.8584L14.2431 12.0221Z"
                                fill="inherit"
                            />
                            <path
                                d="M30.1785 29.9415H14.1146C13.183 29.9415 12.4466 29.0899 12.6471 28.1232C12.7923 27.4219 13.4435 26.9361 14.1598 26.9361H30.1836C30.6294 26.9361 30.99 26.5754 30.99 26.1297C30.99 25.6839 30.6294 25.3232 30.1836 25.3232H14.22C12.562 25.3232 11.1094 26.5706 10.9992 28.2284C10.879 30.0416 12.3214 31.5595 14.1098 31.5595H30.1737C30.6194 31.5595 30.9801 31.1988 30.9801 30.7531C30.9852 30.3073 30.6245 29.9416 30.1788 29.9416L30.1785 29.9415Z"
                                fill="inherit"
                            />
                            <path
                                d="M14.7317 18.0823C14.2859 18.0823 13.9253 18.4429 13.9253 18.8887C13.9253 19.3345 14.2859 19.6951 14.7317 19.6951H27.8704C28.8021 19.6951 29.5384 20.5467 29.338 21.5134C29.1927 22.2147 28.5415 22.7006 27.8252 22.7006H14.7319C14.2862 22.7006 13.9255 23.0612 13.9255 23.507C13.9255 23.9527 14.2862 24.3134 14.7319 24.3134H27.7603C29.4183 24.3134 30.8709 23.0661 30.9811 21.4082C31.1013 19.595 29.6589 18.0771 27.8706 18.0771L14.7318 18.0774L14.7317 18.0823Z"
                                fill="inherit"
                            />
                            <path
                                d="M27.8209 13.2206V14.2224C27.5705 14.3877 27.4001 14.6681 27.4001 14.9937C27.4001 15.4996 27.8108 15.9154 28.3218 15.9154C28.8277 15.9154 29.2435 15.5047 29.2435 14.9937C29.2435 14.6732 29.0781 14.3877 28.8226 14.2224V12.915L27.8209 13.2206Z"
                                fill="inherit"
                            />
                            <path
                                d="M14.1568 27.9365C13.9013 27.9365 13.6709 28.1019 13.626 28.3223C13.5858 28.5227 13.6559 28.668 13.726 28.7531C13.8213 28.8684 13.9615 28.9385 14.1118 28.9385H29.2489C29.1989 28.6078 29.1989 28.2723 29.2489 27.9416H14.1567L14.1568 27.9365Z"
                                fill="inherit"
                            />
                            <path
                                d="M21.2783 15.2351L16.5097 13.7676V17.0885H26.0521V13.7676L21.2783 15.2351Z"
                                fill="inherit"
                            />
                            <path
                                d="M13.1887 24.4464C13.0033 24.1408 12.8981 23.7801 12.9232 23.3895C12.9883 22.4177 13.865 21.7015 14.8368 21.7015H27.825C28.0805 21.7015 28.3109 21.5361 28.3558 21.3157C28.396 21.1153 28.3259 20.97 28.2558 20.8849C28.1605 20.7696 28.0203 20.6995 27.87 20.6995L14.7814 20.6997C13.9198 20.6997 13.1335 20.1138 12.958 19.272C12.7175 18.11 13.6092 17.0831 14.7311 17.0831H15.5126V13.4516L12.3921 12.4899C11.9212 12.3447 11.9212 11.6784 12.3921 11.5332L21.2833 8.7982L26.738 10.4763V7.11523H0V25.5536C0 26.6556 0.896618 27.5522 1.99862 27.5522H10.0929C10.4337 26.0293 11.6508 24.8271 13.1885 24.4464L13.1887 24.4464ZM8.74583 15.5858H12.2471V19.0871H8.74583V15.5858ZM6.49673 24.5567H3.00028V21.0555H6.50157V24.5567H6.49673ZM6.49673 19.0871H3.00028V15.5858H6.50157V19.0871H6.49673ZM6.49673 13.6171H3.00028V10.1158H6.50157V13.6171H6.49673ZM8.74583 24.5569V21.0556H12.2471V24.5569H8.74583Z"
                                fill="inherit"
                            />
                        </svg>
                    </PageTitle>
                    <AddYearC data={data} states={states} actions={actions} dialog={dialog} />
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

export default withAuth(AddYear)
