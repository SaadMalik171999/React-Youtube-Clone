import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos  from "./Videos";
import Sidebar from "./Sidebar";
import CloseIcon from '@mui/icons-material/Close';

const Feed = () => { 
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const [isToggle, setisToggle] = useState(true);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    const animatedfunction = () => {
      setisToggle(false);


    }
    const animatedfunction2 = () => {
      setisToggle(true);
    }
  return (
    <>
    <div className="sideBar"  >
    { isToggle?
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } , width: '300px'}}>
      <div className="check" onClick={()=>animatedfunction()}><MenuIcon /></div>
        <Sidebar sx={{width: '200px'}} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} smallsize={true}
         />
        {/* <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 Saad Malik
        </Typography> */}
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", width: '600px' ,flex : 1 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
    :
    <>
    <div className="check" onClick={()=>animatedfunction2()}><CloseIcon /></div>
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box className="sideBar" id="menu2" sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
    
    </>
    }
    </div>
    </>
  );
};

export default Feed;