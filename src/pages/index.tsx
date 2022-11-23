import type { NextPage } from 'next';
import { lightColors, darkColors } from 'styles/colors';
import logo from '../../public/images/Logo(4).svg';
import LoginButDark from '../components/LoginButDark';
import LoginButLight from '../components/LoginButLight';
import { DarkThemeContext } from 'context/ThemeContext';
import { useContext } from 'react';

// MUI
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

const Home: NextPage = () => {

  const {handelDarkTheme, darkMode} = useContext(DarkThemeContext);

  return (
    <Container maxWidth="xl" sx={{background: darkMode ? darkColors.backgroundColor.main : lightColors.backgroundColor.main}}>
      <Box sx={{width: '100%', padding: '50px', display: 'flex', flexDirection: 'column', gap: '50px', alignItems: 'center'}}>
        <Box >
          <Image alt='athena' layout='intrinsic' src={logo} />
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
          <Typography variant='h3' color='primary'>
            انا مدرس
          </Typography>
          <Link href='/teacherLogin'>
            <a>
              <LoginButDark content='تسجيل الدخول' />
            </a>
          </Link>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
          <Typography variant='h3' color='primary'>
            انا طالب
          </Typography>
          <Link href='/studentLogin' style={{paddingLeft: '20px'}}>
            <a>
              <LoginButDark content='تسجيل الدخول' />
            </a>
          </Link>
          <Link href='/studentSignUp'>
            <a>
              <LoginButLight content='انشاء حساب' />
            </a>
          </Link>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
          <Typography variant='h3' color='primary'>
            teacher pages
          </Typography>
          <Link href='/teacher/home' style={{paddingLeft: '20px'}}>
            <a>
              <LoginButDark content='قسم المدرس' />
            </a>
          </Link>
        </Box>
        <button onClick={() => handelDarkTheme()}>change theme</button>
      </Box>
    </Container>
  )
} 

export default Home