import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import {Typography } from "@mui/material";


const Navbar = () => (
<Stack direction="row" alignItems="center" p={2} 
sx={{position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>
<Link to="/" style={{display: 'flex', alignItems: 'center'}}>
  <img src='https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg' alt="logo" height={50} />
  <Typography variant="h5" fontWeight="bold" sx={{ color: "white" }}>
    Youtube New
        </Typography>
</Link>
<SearchBar />
</Stack>
)

export default Navbar