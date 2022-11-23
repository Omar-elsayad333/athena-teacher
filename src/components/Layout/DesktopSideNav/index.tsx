import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

// MUI
import Box from '@mui/material/Box';

type Props = {
    controleSideNav: Function;
    sideNavState: Boolean;
}

const style: any = {
    container: {
        height: '100vh',
        transition: '.5s',
        '@media(max-width: 1200px)': {
            display: 'none'
        },
    },
}

const DesktopSideNav: React.FC<Props> = ({controleSideNav, sideNavState}) => {

    const classes: any = {
        container: {
            width: sideNavState ? '308px' : '76px',
        },
    }

    return (
        <Box sx={[style.container, classes.container]} className='omar'>
            <Header controleSideNav={controleSideNav} sideNavState={sideNavState} />
            <Menu sideNavState={sideNavState} />
            <Footer sideNavState={sideNavState}  />
        </Box>
    );
}

export default DesktopSideNav;