import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Button from '../components/buttons/MyButton';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Container maxWidth="xl">
      <div>
        <Image alt='athena' layout='fill' src='/images/Logo(1).svg' />
        <div style={{'display': 'flex'}}>
          <h1>
            انا مدرس
          </h1>
          <Link href='/login'>
            <a>
              <Button content='تسجيل الدخول' />
            </a>
          </Link>
        </div>
        <div>
          <h1>
            انا طالب
          </h1>
          <Link href='/studentLogin' style={{paddingLeft: '20px'}}>
            <a>
              <Button content='تسجيل الدخول' />
            </a>
          </Link>
          <Link href='/studentSignUp'>
            <a>
              <Button content='انشاء حساب' />
            </a>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Home