import { IStyle } from 'styles/IStyle'
import MyInput from 'components/MyInput'
import { useTheme } from 'context/ThemeContext'
import MyInputSmall from 'components/MyInputSmall'
import MyButton from 'components/Buttons/MyButton'
import WarningDialog from 'components/Dialogs/WarningDialog'
import MyButtonError from 'components/Buttons/MyButtonError'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
    states: any
    actions: any
    dialogs: any
}

const AddHeadquarterC: React.FC<Props> = ({ states, actions, dialogs }) => {
    const { mainColors } = useTheme()
    const style: IStyle = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
        },
        inputContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: '13px',
        },
        title: {
            flex: '100%',
        },
        addPhoneBut: {
            width: '255px',
            height: '46px',
            paddingX: '11px',
            alignSelf: 'end',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            borderRadius: '5px',
            background: mainColors.chips.main,
            border: `1.5px solid ${mainColors.chips.border}`,
        },
        thirdPhoneContainer: {
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '20px',
        },
        buttonsContainer: {
            marginTop: '30px',
            flex: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '35px',
        },
        submitButton: {
            width: '170px',
            height: '40px',
        },
    }

    return (
        <Box sx={style.container}>
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات المقر:-
            </Typography>
            <MyInput
                placeholder="أسم المقر"
                value={states.name.value}
                error={states.name.error}
                onChange={actions.nameHandle}
                helperText={states.name.helperText}
            />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                عنوان المقر:-
            </Typography>
            <MyInputSmall
                placeholder="المدينة"
                value={states.city.value}
                error={states.city.error}
                onChange={actions.cityHandle}
                helperText={states.city.helperText}
            />
            <MyInputSmall
                placeholder="أسم المنطقة"
                value={states.region.value}
                error={states.region.error}
                onChange={actions.regionHandle}
                helperText={states.region.helperText}
            />
            <MyInputSmall
                placeholder="أسم الشارع"
                value={states.street.value}
                error={states.street.error}
                onChange={actions.streetHandle}
                helperText={states.street.helperText}
            />
            <MyInputSmall
                placeholder="رقم المبنى"
                value={states.building.value}
                error={states.building.error}
                onChange={actions.buildingHandle}
                helperText={states.building.helperText}
            />
            <Typography sx={style.title} variant="h3" color={mainColors.title.main}>
                بيانات الاتصال:-
            </Typography>
            <Box sx={style.inputContainer}>
                <Typography variant="h5" color={mainColors.primary.dark}>
                    رقم الهاتف الأول
                </Typography>
                <MyInput
                    type="number"
                    placeholder="رقم الهاتف"
                    value={states.firstPhone.value}
                    error={states.firstPhone.error}
                    onChange={actions.firstPhoneHandle}
                    helperText={states.firstPhone.helperText}
                />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant="h5" color={mainColors.primary.dark}>
                    رقم الهاتف الثاني
                </Typography>
                <MyInput
                    type="number"
                    placeholder="رقم الهاتف"
                    value={states.secondPhone.value}
                    error={states.secondPhone.error}
                    onChange={actions.secondPhoneHandle}
                    helperText={states.secondPhone.helperText}
                />
            </Box>
            <Box sx={style.inputContainer}>
                <Typography variant="h5" color={mainColors.primary.dark}>
                    رقم الهاتف الثالث
                </Typography>
                {states.thirdPhoneState ? (
                    <Box sx={style.thirdPhoneContainer}>
                        <MyInput
                            type="number"
                            placeholder="رقم الهاتف"
                            value={states.thirdPhone.value}
                            error={states.thirdPhone.error}
                            onChange={actions.thirdPhoneHandle}
                            helperText={states.thirdPhone.helperText}
                        />
                        <svg
                            onClick={() => actions.hideThirdPhone()}
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            stroke={mainColors.primary.main}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.28 2L2 17.28"
                                stroke="inherit"
                                strokeWidth="2.38"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M2 2L17.28 17.28"
                                stroke="inherit"
                                strokeWidth="2.38"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </Box>
                ) : (
                    <Box sx={style.addPhoneBut} onClick={() => actions.showThirdPhone()}>
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            stroke={mainColors.primary.main}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.52 20.04C15.7778 20.04 20.04 15.7778 20.04 10.52C20.04 5.26225 15.7778 1 10.52 1C5.26225 1 1 5.26225 1 10.52C1 15.7778 5.26225 20.04 10.52 20.04Z"
                                stroke="inherit"
                                strokeWidth="1.7"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M10.52 6.71045V14.3264"
                                stroke="inherit"
                                strokeWidth="1.7"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M6.71231 10.52H14.3283"
                                stroke="inherit"
                                strokeWidth="1.7"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <Typography variant="h5" color={'primary'} fontWeight={700}>
                            اضافة رقم هاتف آخر
                        </Typography>
                    </Box>
                )}
            </Box>
            <Box sx={style.buttonsContainer}>
                <Box sx={style.submitButton}>
                    <MyButton
                        content="تأكيد واضافة"
                        loading={states.loading}
                        onClick={actions.submit}
                    />
                </Box>
                <Box sx={style.submitButton}>
                    <MyButtonError
                        content="إلغاء العملية"
                        loading={states.loading}
                        onClick={actions.openWarningDialogState}
                    />
                </Box>
            </Box>
            <WarningDialog
                state={dialogs.warningDialog.state}
                content={dialogs.warningDialog.content}
                close={dialogs.warningDialog.close}
                submit={dialogs.warningDialog.submit}
            />
        </Box>
    )
}

export default AddHeadquarterC
