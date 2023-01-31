import style from './style';
import Link from 'next/link';
import SButton from './Inputs/SButton';
import StudentSignUpLayer from 'components/BigImages/StudentSignUpLayer';

// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const scroll = () => {
    const layerSection: HTMLElement = document.getElementById('layerSection')!;
    window.scrollTo({
        top: layerSection.scrollHeight,
        behavior: 'smooth',
    });
};

const LayerSection: React.FC = () => {    
    return (
        <Container id='layerSection' sx={style.layerSec}>
            <Box sx={style.layerSec.logo}>
                <svg width="199" height="37" max-width='90%' viewBox="0 0 199 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath ="url(#clip0_328_1171)">
                        <path d="M74.0197 36.1935V36.7439H64.8696V36.1935H68.3158L67.8029 34.9427C65.3012 29.6078 58.2964 29.3138 55.6445 29.3638C55.5722 29.3673 55.5025 29.3915 55.4437 29.4337C55.3849 29.4759 55.3395 29.5342 55.3131 29.6015L52.6737 35.6494C52.6478 35.7095 52.6372 35.775 52.6429 35.8402C52.6486 35.9053 52.6704 35.968 52.7064 36.0226C52.7424 36.0772 52.7914 36.122 52.849 36.1529C52.9067 36.1839 52.9711 36.2 53.0365 36.1998H56.1636V36.7502H48.4146V36.1998H50.5598C50.636 36.1996 50.7104 36.1769 50.7738 36.1347C50.8372 36.0924 50.8868 36.0324 50.9163 35.9621L60.0413 14.8976L61.0983 12.4647H62.7244L71.8557 35.9434C71.8836 36.017 71.9333 36.0803 71.9981 36.125C72.0629 36.1697 72.1397 36.1936 72.2185 36.1935H74.0197ZM65.6076 29.4764L61.017 18.0873C60.9881 18.0156 60.9384 17.9542 60.8743 17.911C60.8102 17.8677 60.7347 17.8446 60.6574 17.8446C60.5801 17.8446 60.5045 17.8677 60.4404 17.911C60.3763 17.9542 60.3267 18.0156 60.2977 18.0873L56.2887 27.3375C56.2627 27.3966 56.2518 27.4613 56.2571 27.5258C56.2624 27.5902 56.2838 27.6523 56.3192 27.7063C56.3546 27.7604 56.403 27.8047 56.46 27.8354C56.5169 27.866 56.5806 27.8819 56.6452 27.8816C58.8155 27.9129 62.2053 28.2756 65.0635 29.9518C65.1325 29.9917 65.2122 30.0091 65.2916 30.0014C65.3709 29.9938 65.4458 29.9615 65.5059 29.909C65.5659 29.8566 65.608 29.7867 65.6262 29.7091C65.6445 29.6315 65.638 29.5501 65.6076 29.4764Z" fill="#2A394F"/>
                        <path d="M92.564 12.8462V17.9496H92.0137C92.0137 16.9544 91.6183 15.9999 90.9146 15.2962C90.2108 14.5925 89.2563 14.1971 88.2611 14.1971H84.8149C84.7104 14.1971 84.6102 14.2386 84.5363 14.3125C84.4624 14.3864 84.4209 14.4866 84.4209 14.5911V35.7555C84.4209 35.86 84.4624 35.9602 84.5363 36.0341C84.6102 36.108 84.7104 36.1495 84.8149 36.1495H87.3167V36.6999H78.1415V36.1495H80.6433C80.7478 36.1495 80.848 36.108 80.9219 36.0341C80.9958 35.9602 81.0373 35.86 81.0373 35.7555V14.5974C81.0373 14.4929 80.9958 14.3927 80.9219 14.3188C80.848 14.2449 80.7478 14.2034 80.6433 14.2034H77.2034C76.2081 14.2034 75.2536 14.5987 74.5499 15.3025C73.8461 16.0062 73.4508 16.9607 73.4508 17.9559H72.9004V12.8462H92.564Z" fill="#2A394F"/>
                        <path d="M118.725 13.7595V35.7556C118.725 35.859 118.766 35.9583 118.839 36.032C118.911 36.1058 119.01 36.148 119.113 36.1496H121.615V36.7H112.452V36.1496H114.954C115.057 36.148 115.156 36.1058 115.229 36.032C115.301 35.9583 115.342 35.859 115.342 35.7556V27.3437C115.342 27.2408 115.301 27.1422 115.228 27.0695C115.156 26.9968 115.057 26.9559 114.954 26.9559H101.945C101.842 26.9559 101.744 26.9968 101.671 27.0695C101.598 27.1422 101.557 27.2408 101.557 27.3437V35.7556C101.557 35.859 101.598 35.9583 101.67 36.032C101.743 36.1058 101.842 36.148 101.945 36.1496H104.447V36.7H95.2529V36.1496H97.7547C97.8581 36.148 97.9567 36.1058 98.0292 36.032C98.1018 35.9583 98.1424 35.859 98.1424 35.7556V13.7595C98.1424 13.656 98.1018 13.5567 98.0292 13.483C97.9567 13.4093 97.8581 13.3671 97.7547 13.3654H95.2529V12.8151H104.409V13.3654H101.908C101.804 13.3671 101.706 13.4093 101.633 13.483C101.56 13.5567 101.52 13.656 101.52 13.7595V25.0859C101.52 25.1893 101.56 25.2886 101.633 25.3623C101.706 25.436 101.804 25.4783 101.908 25.4799H114.942C115.045 25.4783 115.144 25.436 115.216 25.3623C115.289 25.2886 115.329 25.1893 115.329 25.0859V13.7595C115.329 13.656 115.289 13.5567 115.216 13.483C115.144 13.4093 115.045 13.3671 114.942 13.3654H112.44V12.8151H121.596V13.3654H119.094C118.994 13.3718 118.9 13.4161 118.832 13.4893C118.763 13.5625 118.725 13.6591 118.725 13.7595Z" fill="#2A394F"/>
                        <path d="M142.18 30.4769L142.943 30.7208L141.586 36.3871C141.565 36.4742 141.515 36.5518 141.445 36.6073C141.374 36.6629 141.287 36.6933 141.198 36.6936H124.58V36.1432H127.082C127.186 36.1432 127.287 36.1017 127.36 36.0278C127.434 35.9539 127.476 35.8537 127.476 35.7492V13.8031C127.476 13.6986 127.434 13.5984 127.36 13.5245C127.287 13.4506 127.186 13.4091 127.082 13.4091H124.58V12.8212H133.736V12.8587H141.198C141.287 12.859 141.374 12.8894 141.445 12.9449C141.515 13.0005 141.565 13.078 141.586 13.1651L142.943 18.8252L142.18 19.0754C140.585 14.2784 139.321 13.4091 131.241 13.4091C131.188 13.4082 131.136 13.4178 131.087 13.4371C131.038 13.4565 130.994 13.4853 130.956 13.5219C130.918 13.5585 130.888 13.6021 130.867 13.6504C130.846 13.6986 130.835 13.7505 130.834 13.8031V24.2789C130.836 24.3823 130.878 24.481 130.952 24.5535C131.026 24.626 131.125 24.6667 131.228 24.6667H134.356C135.284 24.6667 136.175 24.2977 136.832 23.6409C137.489 22.984 137.858 22.0932 137.858 21.1643H138.408V28.7257H137.858C137.858 27.7968 137.489 26.906 136.832 26.2491C136.175 25.5923 135.284 25.2233 134.356 25.2233H131.228C131.125 25.2233 131.026 25.2639 130.952 25.3365C130.878 25.409 130.836 25.5077 130.834 25.6111V35.7492C130.835 35.8017 130.846 35.8536 130.867 35.9019C130.888 35.9501 130.918 35.9938 130.956 36.0304C130.994 36.067 131.038 36.0958 131.087 36.1151C131.136 36.1345 131.188 36.144 131.241 36.1432C139.321 36.1432 140.585 35.2739 142.18 30.4769Z" fill="#2A394F"/>
                        <path d="M170.348 12.8461V13.3965H169.298C169.194 13.3981 169.096 13.4404 169.023 13.5141C168.951 13.5878 168.91 13.6871 168.91 13.7905V36.3059C168.91 36.4088 168.869 36.5074 168.796 36.5801C168.724 36.6528 168.625 36.6937 168.522 36.6937H166.364C166.305 36.6937 166.247 36.6802 166.194 36.6542C166.141 36.6282 166.094 36.5903 166.058 36.5436L150.51 16.3423C150.461 16.2757 150.392 16.2265 150.314 16.2016C150.235 16.1768 150.15 16.1777 150.072 16.2042C149.994 16.2307 149.927 16.2814 149.879 16.349C149.832 16.4166 149.807 16.4975 149.809 16.5799V35.7556C149.809 35.8601 149.851 35.9603 149.925 36.0342C149.999 36.1081 150.099 36.1496 150.203 36.1496H151.248V36.7H147.007V36.1496H148.058C148.163 36.1496 148.263 36.1081 148.337 36.0342C148.411 35.9603 148.452 35.8601 148.452 35.7556V13.7905C148.452 13.686 148.411 13.5858 148.337 13.5119C148.263 13.438 148.163 13.3965 148.058 13.3965H147.007V12.8336H151.892C151.953 12.8334 152.013 12.8474 152.067 12.8746C152.121 12.9017 152.168 12.9412 152.205 12.99L166.852 32.078C166.901 32.1446 166.97 32.1938 167.048 32.2187C167.127 32.2435 167.212 32.2426 167.29 32.2161C167.368 32.1896 167.435 32.1389 167.483 32.0713C167.53 32.0037 167.555 31.9228 167.553 31.8404V13.7905C167.553 13.6871 167.512 13.5878 167.44 13.5141C167.367 13.4404 167.268 13.3981 167.165 13.3965H166.108V12.8461H170.348Z" fill="#2A394F"/>
                        <path d="M173.095 36.1932V36.7436H182.245V36.1932H178.799L179.312 34.9424C181.813 29.6075 188.818 29.3136 191.464 29.3636C191.537 29.3667 191.608 29.3907 191.667 29.4328C191.727 29.475 191.774 29.5334 191.801 29.6013L194.428 35.6616C194.454 35.7212 194.465 35.7862 194.459 35.8508C194.454 35.9155 194.433 35.9778 194.397 36.0322C194.362 36.0867 194.314 36.1316 194.257 36.1629C194.2 36.1943 194.137 36.2112 194.072 36.212H190.945V36.7624H198.7V36.212H196.555C196.478 36.2114 196.403 36.1887 196.338 36.1466C196.274 36.1044 196.223 36.0446 196.192 35.9743L187.067 14.8976L186.01 12.4647H184.39L175.259 35.9431C175.231 36.0167 175.181 36.08 175.116 36.1247C175.052 36.1694 174.975 36.1933 174.896 36.1932H173.095ZM181.507 29.4762L186.097 18.0873C186.126 18.0156 186.176 17.9541 186.24 17.9109C186.304 17.8676 186.38 17.8445 186.457 17.8445C186.534 17.8445 186.61 17.8676 186.674 17.9109C186.738 17.9541 186.788 18.0156 186.817 18.0873L190.832 27.3498C190.858 27.4089 190.869 27.4736 190.864 27.5381C190.858 27.6025 190.837 27.6646 190.801 27.7186C190.766 27.7727 190.718 27.8171 190.661 27.8477C190.604 27.8783 190.54 27.8942 190.475 27.8939C188.305 27.9252 184.915 28.2879 182.057 29.964C181.987 30.0095 181.904 30.0307 181.821 30.0245C181.738 30.0183 181.659 29.9849 181.596 29.9296C181.534 29.8742 181.491 29.7999 181.475 29.718C181.459 29.6361 181.47 29.5512 181.507 29.4762Z" fill="#2A394F"/>
                        <path d="M40.9534 10.5635L40.6532 11.0763H2.43293L2.12646 10.5635H40.9534Z" fill="#2A394F"/>
                        <path d="M40.9534 36.7437H2.12646L2.58303 35.9681H40.5031L40.9534 36.7437Z" fill="#2A394F"/>
                        <path d="M10.4883 12.0582L10.2444 12.5773H3.73366L3.48975 12.0582H10.4883Z" fill="#2A394F"/>
                        <path d="M10.1196 12.8462L9.75056 13.6217H4.22799L3.86523 12.8462H10.1196Z" fill="#2A394F"/>
                        <path d="M4.37793 14.0408H5.6288V33.3352H4.37793V14.0408Z" fill="#2A394F"/>
                        <path d="M6.37939 14.0408H7.59274V33.3352H6.37939V14.0408Z" fill="#2A394F"/>
                        <path d="M8.37451 14.0408H9.58785V33.3352H8.37451V14.0408Z" fill="#2A394F"/>
                        <path d="M14.0908 14.0408H15.3042V33.3352H14.0908V14.0408Z" fill="#2A394F"/>
                        <path d="M16.0859 14.0408H17.2993V33.3352H16.0859V14.0408Z" fill="#2A394F"/>
                        <path d="M18.0811 14.0408H19.2944V33.3352H18.0811V14.0408Z" fill="#2A394F"/>
                        <path d="M23.7666 14.0408H25.0175V33.3352H23.7666V14.0408Z" fill="#2A394F"/>
                        <path d="M25.7866 14.0408H27V33.3352H25.7866V14.0408Z" fill="#2A394F"/>
                        <path d="M27.7817 14.0408H28.9951V33.3352H27.7817V14.0408Z" fill="#2A394F"/>
                        <path d="M33.498 14.0408H34.7114V33.3352H33.498V14.0408Z" fill="#2A394F"/>
                        <path d="M35.4932 14.0408H36.7065V33.3352H35.4932V14.0408Z" fill="#2A394F"/>
                        <path d="M37.4824 14.0408H38.6958V33.3352H37.4824V14.0408Z" fill="#2A394F"/>
                        <path d="M21.5399 0L0 9.76286H43.0861L21.5399 0ZM21.5399 7.65519C21.2307 7.65519 20.9284 7.56348 20.6712 7.39168C20.4141 7.21987 20.2137 6.97568 20.0954 6.68997C19.977 6.40427 19.946 6.08989 20.0064 5.78659C20.0667 5.48329 20.2156 5.20469 20.4343 4.98602C20.653 4.76736 20.9316 4.61844 21.2349 4.55811C21.5382 4.49778 21.8526 4.52874 22.1383 4.64709C22.424 4.76543 22.6682 4.96583 22.84 5.22296C23.0118 5.48009 23.1035 5.78238 23.1035 6.09163C23.1035 6.29696 23.0631 6.50028 22.9845 6.68997C22.9059 6.87967 22.7907 7.05204 22.6455 7.19723C22.5003 7.34242 22.328 7.45759 22.1383 7.53617C21.9486 7.61474 21.7452 7.65519 21.5399 7.65519Z" fill="#2A394F"/>
                        <path d="M10.4883 35.3177L10.2444 34.7986H3.73366L3.48975 35.3177H10.4883Z" fill="#2A394F"/>
                        <path d="M10.1196 34.5297L9.75056 33.7542H4.22799L3.86523 34.5297H10.1196Z" fill="#2A394F"/>
                        <path d="M20.1953 12.0582L19.9513 12.5773H13.4406L13.1904 12.0582H20.1953Z" fill="#2A394F"/>
                        <path d="M19.8198 12.8462L19.457 13.6155H13.9344L13.5654 12.8462H19.8198Z" fill="#2A394F"/>
                        <path d="M14.0908 14.0408H15.3042V33.3352H14.0908V14.0408Z" fill="#2A394F"/>
                        <path d="M16.0859 14.0408H17.2993V33.3352H16.0859V14.0408Z" fill="#2A394F"/>
                        <path d="M18.0752 14.0408H19.2885V33.3352H18.0752V14.0408Z" fill="#2A394F"/>
                        <path d="M20.1953 35.3177L19.9513 34.7986H13.4406L13.1904 35.3177H20.1953Z" fill="#2A394F"/>
                        <path d="M19.8198 34.5297L19.457 33.7542H13.9344L13.5654 34.5297H19.8198Z" fill="#2A394F"/>
                        <path d="M29.8955 12.0582L29.6515 12.5773H23.1408L22.8906 12.0582H29.8955Z" fill="#2A394F"/>
                        <path d="M29.5204 12.8462L29.1577 13.6155H23.6351L23.2661 12.8462H29.5204Z" fill="#2A394F"/>
                        <path d="M23.7666 14.0408H25.0175V33.3352H23.7666V14.0408Z" fill="#2A394F"/>
                        <path d="M25.7866 14.0408H27V33.3352H25.7866V14.0408Z" fill="#2A394F"/>
                        <path d="M27.7754 14.0408H28.9887V33.3352H27.7754V14.0408Z" fill="#2A394F"/>
                        <path d="M29.8955 35.3177L29.6515 34.7986H23.1408L22.8906 35.3177H29.8955Z" fill="#2A394F"/>
                        <path d="M29.5204 34.5297L29.1577 33.7542H23.6351L23.2661 34.5297H29.5204Z" fill="#2A394F"/>
                        <path d="M39.6026 12.0582L39.3587 12.5773H32.8479L32.604 12.0582H39.6026Z" fill="#2A394F"/>
                        <path d="M39.227 12.8462L38.8642 13.6155H33.3417L32.9727 12.8462H39.227Z" fill="#2A394F"/>
                        <path d="M33.498 14.0408H34.7114V33.3352H33.498V14.0408Z" fill="#2A394F"/>
                        <path d="M35.4932 14.0408H36.7065V33.3352H35.4932V14.0408Z" fill="#2A394F"/>
                        <path d="M37.4888 14.0408H38.6959V33.3352H37.4888V14.0408Z" fill="#2A394F"/>
                        <path d="M39.6026 35.3177L39.3587 34.7986H32.8479L32.604 35.3177H39.6026Z" fill="#2A394F"/>
                        <path d="M39.227 34.5297L38.8642 33.7542H33.3417L32.9727 34.5297H39.227Z" fill="#2A394F"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_328_1171">
                            <rect width="198.7" height="36.7438" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </Box>
            <Box sx={style.layerSec.layer}>
                <Typography variant='h1' color={'#1C364F'}>
                    اهلا بك في بوابة الطلاب     
                </Typography>
                <StudentSignUpLayer />
                <Typography fontSize={14} fontWeight={300} color='#3F72A4' sx={style.layerSec.layer.privacy}>
                    تسجيلك في منصة أثينا كطالب جديد يعني ذلك انك توافق على استخدام جميع بياناتك 
                    <br/>
                    من قبل المدرسين المشتركين بالمنصة و على 
                    <u style={style.layerSec.layer.link}>
                        &nbsp; سياسة الخصوصية 
                    </u> 
                    &nbsp;و&nbsp;
                    <u style={style.layerSec.layer.link}>
                        شروط الخدمة 
                    </u>
                </Typography>
            </Box>
            <Box sx={style.layerSec.scrollBut}>
                <SButton content='انشاء الحساب' onClick={scroll}/>
                <Typography variant='h6' color={'#1C364F'}>
                    لدي حساب بالفعل 
                    <Link href='/studentLogin' style={style.layerSec.scrollBut.link}>
                        <a className='dark-link'>
                            &nbsp;تسجيل الدخول
                        </a>
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
}

export default LayerSection;