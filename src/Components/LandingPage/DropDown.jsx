import * as React from 'react';
import Popover from '@mui/material/Popover';

import Button from '@mui/material/Button';
import Img1 from "../../Images/Playboard/Img1.svg"
import Cross from "../../Images/Cross.svg"
export default function BasicPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
 
  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick} sx={{backgroundColor:"#7B36FF", boxShadow:"none", ":hover":{bgcolor: "#7B36FF", boxShadow:"none"}}} className='custom-button'>
        <img src={props.src} alt="" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='flex flex-col bg-white rounded-[40px] pt-5 pb-7 px-5 w-[320px]'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center'>
                <img src={props.src2} alt="" className="w-7 mr-2"/>
                <h1 className='text-sm font-Halenior-medium text-black mr-2'>{props.name}</h1>
                <h1 className='text-xs font-Halenior-medium text-black opacity-50'>just now</h1>
                </div>
                <img src={Cross} alt="" className='w-3'/>
            </div>
            <div className='mx-4 mt-4 text-sm font-Halenior-light text-black' dangerouslySetInnerHTML={{ __html: props.content }}/>
        </div>
      </Popover>
    </div>
  );
}