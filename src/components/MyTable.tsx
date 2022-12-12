import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

const header = [
    { 
        value: 'الاسم الاول', 
    },
    {
        value: 'الاسم الاخير',
    },
    {
        value: 'الاسم بالكامل',
    },
    {
        value: 'الصف الدراسي',
    },
];

const myData = [
    {
        firstName: 'مروان',
        lastName: 'عبد العزيز',
        fullName: 'مروان محمد عبد العزيز',
        year: 'الصف الثالث الثانوي'
    },
    {
        firstName: 'مروان',
        lastName: 'عبد العزيز',
        fullName: 'عباس ابو القاسم بن فرناس',
        year: 'الصف الثالث الثانوي'
    },
]

const MyTable = () => {
    
    const classes = {
        root: {
            width: 'fit-content',
            paddingX: '2px',
            paddingBottom: '1px',
            borderRadius: '12px',
            borderTop: '3px solid #3F72A4',
            background: '#B6D5F0',
            overflow: 'hidden',
            '.MuiTableHead-root': {
                display: 'block',
                overflowX: 'auto',
                borderRadius: '12px',
                '.MuiTableCell-root': {
                    width: '200px',
                    minWidth: '200px',
                    textOverflow: 'ellipsis',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#3F72A4',
                    background: '#B6D5F0',
                    borderBottom: 'none',
                    textAlign: 'right',
                },
            },
            '.MuiTableBody-root': {
                display: 'block',
                borderRadius: '12px',
                overflowX: 'auto',
                '.MuiTableRow-root': {
                    '.MuiTableCell-root': {
                        width: '200px',
                        maxWidth: '200px',
                        textOverflow: 'ellipsis',
                        paddingY: '27px',
                        color: '#3F72A4',
                        fontSize: '14px',
                        fontWeight: '400',
                        background: '#E8F3FF',
                        borderBottom: '1px solid #B6D5F0',
                        textAlign: 'right',
                    },
                },
            },
        }
    }

    const style = { 
        root: {
            width: '100%',
            overflowX: 'auto',
            display: 'grid',
            placeItems: 'center'
        }
    }

    return (
        <Box sx={style.root}>
            <Table stickyHeader sx={classes.root}>
                <TableHead>
                    <TableRow>
                        {header.map((item: any, index: number) => (
                            <TableCell
                                key={index}
                            >
                                {item.value}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        myData.map((item:any, index:any) => {
                            return (
                                <TableRow key={index}>
                                    {Object.keys(item).map((cell:any, index:any) => {
                                        return(
                                            <TableCell align='right' key={index}>
                                                {item[cell]}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </Box>
    );
}

export default MyTable;