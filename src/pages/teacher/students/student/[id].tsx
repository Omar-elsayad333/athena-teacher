import { NextPage } from 'next'
import { useTheme } from 'context/ThemeContext'
import { withAuth } from 'routes/withRoute'
import Loading from 'components/Loading/Loading'
import PageHead from 'components/Shared/PageHead'
import PageTitle from 'components/Shared/PageTitle'
import ThemeSwitcher from 'components/ThemeSwitcher'
import PageFooter from 'components/Shared/PageFooter'
import useStudent from 'container/students/useStudent'
import StudentC from 'components/Teacher/Students/Student'
import DesktopNavbar from 'components/Layout/DesktopNavbar'

// MUI
import Box from '@mui/material/Box'

const Student: NextPage = () => {
    const { mainColors } = useTheme()
    const { data, states, actions } = useStudent()

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
            '@media(max-width: 450px)': {
                padding: '40px',
            },
            '@media(max-width: 350px)': {
                padding: '20px',
            },
        },
        footerContainer: {
            marginTop: 'auto',
        },
    }

    return (
        <Box sx={style.root}>
            <PageHead
                title={`
                    ${data.studentData.gender == 'male' ? 'الطالب' : 'الطالبه'} / 
                    ${data.studentData.firstName} 
                    ${data.studentData.middleName}
                    ${data.studentData.lastName}
                `}
            />
            <DesktopNavbar
                firstPath="/teacher/students"
                firstContent="جميع الطلاب"
                secondPath="/teacher/students/add-student"
                secondContent={'أضافة طالب'}
            />
            {states.loading ? (
                <Loading />
            ) : (
                <Box sx={style.container}>
                    <PageTitle content="البطاقة التعريفية للطالب">
                        <svg
                            width="28"
                            height="35"
                            viewBox="0 0 28 35"
                            fill={mainColors.primary.main}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 30.2915V34.3636H28V30.2915C27.99 29.1782 27.7585 28.0778 27.3186 27.053C26.8787 26.0283 26.2392 25.0993 25.4364 24.3191C24.6337 23.539 23.6834 22.9229 22.64 22.506C21.5966 22.0892 20.4804 21.8798 19.3552 21.8898H18.8809C20.0017 21.2913 20.9914 20.4787 21.7924 19.4991C22.5935 18.5194 23.1901 17.3922 23.5475 16.1827H23.6852C23.9992 16.1907 24.3117 16.137 24.6045 16.0246C24.8974 15.9122 25.1647 15.7433 25.391 15.5278C25.6174 15.3124 25.7982 15.0545 25.923 14.7694C26.0478 14.4842 26.1141 14.1773 26.118 13.8666V13.1248C26.1143 12.5841 25.9219 12.0613 25.5734 11.6447C25.2249 11.2282 24.7417 10.9436 24.2055 10.8389C24.2287 10.5063 24.2287 10.1724 24.2055 9.83981V9.77925C24.2201 9.52716 24.2201 9.27444 24.2055 9.02235C23.9965 6.80947 22.9748 4.74919 21.3338 3.23154C19.6927 1.71389 17.5462 0.844226 15.3005 0.787184H15.1934C15.1588 0.74887 15.1163 0.718266 15.0689 0.697389C15.0214 0.676513 14.97 0.66584 14.918 0.666079C14.8442 0.671746 14.7722 0.692097 14.7065 0.725911C14.6408 0.759725 14.5826 0.806309 14.5355 0.862875C14 0.317901 13.6022 0 13.2503 0C12.4081 0.181591 11.6018 0.498658 10.8634 0.938566L10.4962 1.24133C8.59498 1.79706 6.92669 2.94674 5.74076 4.51847C4.55483 6.0902 3.915 7.99952 3.91694 9.96091V10.1426C3.91694 10.4302 3.91694 10.7027 3.91694 10.96C3.36926 11.0424 2.86883 11.3142 2.50463 11.7272C2.14043 12.1402 1.93607 12.6676 1.92787 13.2156V13.8666C1.93384 14.1747 2.00111 14.4787 2.12584 14.7611C2.25057 15.0435 2.43032 15.2989 2.65482 15.5126C2.87932 15.7262 3.14416 15.8941 3.43423 16.0064C3.7243 16.1188 4.0339 16.1736 4.34536 16.1676H4.49836C4.85347 17.3822 5.45065 18.5142 6.25474 19.4969C7.05882 20.4796 8.05355 21.2932 9.18033 21.8898H8.70601C7.57622 21.8738 6.45436 22.0786 5.40477 22.4926C4.35518 22.9065 3.39852 23.5214 2.58966 24.302C1.78081 25.0826 1.13568 26.0135 0.691287 27.0413C0.24689 28.0691 0.0119687 29.1736 0 30.2915ZM23.9454 12.2316C24.1547 12.2788 24.3422 12.3938 24.478 12.5583C24.6138 12.7228 24.6902 12.9275 24.6951 13.1399V13.8666C24.6896 14.0986 24.6001 14.321 24.4428 14.4932C24.2856 14.6655 24.071 14.7762 23.8383 14.8051C23.8871 14.4336 23.9126 14.0595 23.9148 13.6849C23.907 13.3251 23.8763 12.9661 23.823 12.6101C23.8721 12.4867 23.913 12.3603 23.9454 12.2316ZM3.35082 13.8666V13.1248C3.35628 12.8967 3.44418 12.6782 3.59858 12.5087C3.75298 12.3393 3.96364 12.2303 4.19235 12.2014V12.7312C4.19235 13.0491 4.19235 13.367 4.19235 13.6849C4.19448 14.0595 4.22003 14.4336 4.26885 14.8051C4.02386 14.7936 3.79253 14.6901 3.62196 14.5157C3.4514 14.3413 3.35444 14.1092 3.35082 13.8666ZM14.0612 26.6583C12.8438 26.6583 11.6763 26.1798 10.8155 25.3281C9.95464 24.4765 9.47104 23.3213 9.47104 22.1169V22.0109L10.0372 22.2834C11.3101 22.8181 12.6782 23.0961 14.0612 23.1008C15.4453 23.1066 16.8155 22.8283 18.0852 22.2834L18.6514 22.0109C18.6514 22.0109 18.6514 22.0109 18.6514 22.1169C18.6534 22.7184 18.5347 23.3143 18.302 23.87C18.0694 24.4257 17.7275 24.9302 17.2962 25.3541C16.8649 25.778 16.3528 26.113 15.7895 26.3395C15.2263 26.5659 14.6232 26.6795 14.0153 26.6734L14.0612 26.6583ZM5.95191 15.9708C5.80674 15.5073 5.70934 15.0306 5.6612 14.5478C5.63735 14.2606 5.63735 13.972 5.6612 13.6849C5.66584 13.2841 5.70165 12.8843 5.76831 12.489C5.76831 12.3073 5.84481 12.1257 5.87541 11.944C7.12772 11.1362 8.22156 10.1104 9.10383 8.91638C9.10383 8.91638 18.4984 11.0963 21.9104 11.3536H22.2011C22.3231 11.7408 22.4202 12.1351 22.4918 12.5344C22.5585 12.9297 22.5943 13.3295 22.5989 13.7303C22.6152 14.0177 22.6152 14.3058 22.5989 14.5932C22.5508 15.076 22.4534 15.5528 22.3082 16.0162C21.7342 17.6958 20.6424 19.1552 19.1864 20.1888C17.7303 21.2224 15.9833 21.7784 14.1913 21.7784C12.3992 21.7784 10.6522 21.2224 9.19616 20.1888C7.74012 19.1552 6.64829 17.6958 6.07432 16.0162L5.95191 15.9708Z"
                                fill="inherit"
                            />
                            <path
                                d="M12.7606 12.3547C12.7297 12.3159 12.6901 12.2848 12.645 12.2638C12.5998 12.2428 12.5504 12.2324 12.5005 12.2336H6.51797C6.46421 12.2317 6.41082 12.2432 6.3627 12.267C6.31458 12.2908 6.27327 12.3261 6.24256 12.3698C6.2043 12.462 6.2043 12.5653 6.24256 12.6575L7.03819 15.4278C7.05566 15.4984 7.09709 15.561 7.15556 15.6051C7.21404 15.6491 7.28602 15.6721 7.3595 15.67H11.9497C12.0253 15.6713 12.0989 15.6463 12.1577 15.5992C12.2165 15.5521 12.2566 15.4861 12.271 15.4126L12.5923 13.8685C12.7081 13.7279 12.862 13.6229 13.036 13.5658C13.3547 13.4515 13.6916 13.3951 14.0305 13.3992C14.3646 13.3938 14.6967 13.4503 15.0098 13.5658C15.1751 13.6238 15.3226 13.7228 15.4382 13.8534L15.7595 15.458C15.7771 15.5327 15.8202 15.5991 15.8815 15.646C15.9428 15.6929 16.0186 15.7174 16.0961 15.7154H20.6863C20.7598 15.7175 20.8317 15.6946 20.8902 15.6505C20.9487 15.6064 20.9901 15.5438 21.0076 15.4732L21.7879 12.7029C21.8108 12.6583 21.8227 12.609 21.8227 12.5591C21.8227 12.5091 21.8108 12.4598 21.7879 12.4153C21.7555 12.3734 21.7138 12.3394 21.6661 12.3158C21.6184 12.2922 21.5659 12.2796 21.5125 12.279H15.53C15.4469 12.2766 15.3655 12.3034 15.3005 12.3547C15.2776 12.3993 15.2657 12.4485 15.2657 12.4985C15.2657 12.5485 15.2776 12.5978 15.3005 12.6423V12.8845C14.9103 12.7358 14.4945 12.6638 14.0764 12.6726C13.6534 12.6641 13.2327 12.7361 12.8371 12.8845V12.6423C12.8477 12.5918 12.8464 12.5395 12.8331 12.4896C12.8198 12.4397 12.795 12.3935 12.7606 12.3547ZM11.965 13.5355C11.9621 13.5708 11.9621 13.6062 11.965 13.6415L11.6896 14.9888H7.55841L6.96169 12.8845H12.1027L11.965 13.5355ZM21.1453 12.8997L20.5486 15.0039H16.3715L16.0961 13.6566C16.104 13.6217 16.104 13.5855 16.0961 13.5506L15.9737 12.9148L21.1453 12.8997Z"
                                fill="inherit"
                            />
                            <path
                                d="M16.8304 17.9092C16.7437 18.5732 16.4155 19.1833 15.9073 19.6254C15.399 20.0675 14.7454 20.3113 14.0686 20.3113C13.3919 20.3113 12.7383 20.0675 12.23 19.6254C11.7218 19.1833 11.3936 18.5732 11.3069 17.9092H16.8304Z"
                                fill="inherit"
                            />
                        </svg>
                    </PageTitle>
                    <StudentC data={data} states={states} actions={actions} />
                </Box>
            )}
            <Box sx={style.footerContainer}>
                <PageFooter />
            </Box>
            <ThemeSwitcher />
        </Box>
    )
}

export default withAuth(Student)
