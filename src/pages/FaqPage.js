import React from 'react';
import SideNavbar from "../components/SideNavbar";
import { Box } from '@mui/system';
import FAQ from '../components/FAQ';

function FaqPage() {
  return (
    <div>
      <SideNavbar>
        <Box sx={{ml:"15px"}}>
        <FAQ />
        </Box>
            
        </SideNavbar>
    </div>
  )
}

export default FaqPage
