import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AdbIcon from '@mui/icons-material/Adb';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { getValue } from '@mui/system';
import { Label } from '@mui/icons-material';
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import ReceiptIcon from '@mui/icons-material/Receipt';

import {StatusInterface} from "../interfaces/iStatus";
import {ScholarshipInterface} from "../interfaces/iScholarship";
import {TypesInterface} from "../interfaces/iTypes";

import {
  GetStatus, Scholarship,GetTypes,GetScholarship
  
} from "../services/HttpClientService";
// function createData(
//   id: number,
//   Scholarship_Name: string,
//   Type: number,
//   status: number,
//   details: string,
// ) {
//   return { id,Scholarship_Name, Type, status, details };
// }



// const rows = [
//   createData(1,'ทุนเรียนดี', 1, 2,'เป็นทุนที่มอบค่าใช้จ่ายและค่าเล่าเรียนเผื่อช่วยเด็กที่เรียนดีแต่ทุนทรัพย์น้อย โดยจะมอบค่าใช้จ่ายให้สูงสุดถึง15,000'),
//   createData(2,'ทุนการเป็นผู้ประกอบการ', 2, 1,'เป็นทุ่นที่มอบให้กับกลุ่มเด็กโดยที่ให้ลองทำธุรกิจขนาดเล็กเพื่อฝึกการเป็นผู้ประกอบการ โดยมีงบสูงถึง20,000'),
//   createData(3,'ทุนการเป็นผู้ประกอบการ', 2, 1,'เป็นทุ่นที่มอบให้กับกลุ่มเด็กโดยที่ให้ลองทำธุรกิจขนาดเล็กเพื่อฝึกการเป็นผู้ประกอบการ โดยมีงบสูงถึง20,000'),
//   createData(4,'ทุนการเป็นผู้ประกอบการ', 2, 1,'เป็นทุ่นที่มอบให้กับกลุ่มเด็กโดยที่ให้ลองทำธุรกิจขนาดเล็กเพื่อฝึกการเป็นผู้ประกอบการ โดยมีงบสูงถึง20,000'),
// ];

function Appss() {
  const [scholarshipstatuses,  setScholarshipstatus] = useState<StatusInterface[]>([]);
  const [Scholarship_Name, setScholarship_Name] = useState<String>("");
  const [scholarshipstypees, setScholarshipstype] = useState<TypesInterface[]>([]);
  // const handleChange = (event: SelectChangeEvent) => {
  //   setScholarshipstatus(event.target.value as string);
  // };
  const [scholarships, setScholarships] = useState<ScholarshipInterface>({
    Name: "", Details: ""
  });

  const update = () => {
  console.log(Scholarship_Name,setScholarshipstatus);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    marginTop: 5,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const getScholarshipStatus = async () => {
    let res = await GetStatus();
    scholarships.StatusID = res.ID;
    if (res) {
      setScholarshipstatus(res);
    }
  };

  const getScholarshipsTypes = async () => {
    let res = await GetTypes();
    scholarships.TypeID = res.ID;
    if (res) {
      setScholarshipstatus(res);
    }
  };
  const  getScholarship = async () => {
    let res = await GetScholarship();
    if (res) {
      setScholarships(res);
    } 
  };

  useEffect(() => {
      getScholarshipStatus();
      getScholarshipsTypes();
      getScholarship();
    }, []);
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ระบบจัดการทุน
        </Typography>
            <p>admin@gmail.com</p>
        <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg" 
  sx={{float: "right", width: 76, height: 76 }}
/>
      </Toolbar>
    </AppBar>
    
 
  </Box>
  <Container maxWidth = "lg">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width: '190vh' }} /> */}
        <Paper >
        <Box
        display = {"flex"}
      sx={{
          marginTop: 2,
          paddingX:  2,
          paddingY:  4,
      }}
      >
     <h2>Manage Scholarship</h2>    
    </Box>
    <hr />
    <Grid container spacing={0}>
        <Grid xs={3}>
        <TextField fullWidth id="Scholarship_Name" type = "string" label="Scholarship Name" variant="outlined"  
        onChange ={(event) => setScholarship_Name(event.target.value)}
        />
          {/* <Item>xs=3</Item> */}
        </Grid>
        <Grid xs={3}>
        <FormControl fullWidth variant="outlined">
        <Select
                native
                value={scholarships.TypeID +""}
                // onChange={handleChange}
                inputProps={{
                  name: "TypesID",
                }}
              >
                <option aria-label="None" value="">
                  กรุณาเลือกประเภททุน
                </option>
                {scholarshipstypees.map((item:TypesInterface) => (
                  <option value={item.ID} key={item.ID}>
                    {item.ID}
                  
                  
                  </option>
                ))}
              </Select>
            </FormControl>
          {/* <Item>xs=3</Item> */}
        </Grid>
        <Grid xs={3}>
        <FormControl fullWidth variant="outlined">
        <Select
                native
                value={scholarships.StatusID +""}
                // onChange={handleChange}
                inputProps={{
                  name: "StatusID",
                }}
              >
                <option aria-label="None" value="">
                  กรุณาเลือกสถานะ
                </option>
                {scholarshipstatuses.map((item:StatusInterface) => (
                  <option value={item.ID} key={item.ID}>
                    {item.ID}
                  
                  
                  </option>
                ))}
              </Select>
            </FormControl>

        </Grid>
        <Grid xs={3}>
        <Button sx={{paddingY: 1.7,}} fullWidth variant="outlined" size="large"
         onClick={update}
        >
          Update
        </Button>
          {/* <Item>xs=3</Item> */}
        </Grid>
        <Grid xs={12} sx ={{height: 200,}}>
        <TextField
          fullWidth
          id="details"
          type = "string"
          label="Details"
          multiline
          rows={7}
          variant="outlined"
        
        />
        {/* <TextField  fullWidth  id="details" label="Details" multiline maxRows={7} variant="outlined" /> */}
          {/* <Item>xs=12</Item> */}
        </Grid>
        <Grid xs={12}>
        
          {/* <Item>xs=12</Item> */}
        </Grid>
    
        <Grid xs={9}>
       
        </Grid>
        <Grid xs={3}>
        <Button sx={{paddingY: 1.7,}} fullWidth  variant="outlined" size="large">
          บันทึกข้อมูล
        </Button>
        </Grid>
      </Grid>
      
      </Paper >
     
      <Grid xs = {12}>
     
    </Grid>
    
      </Container>
    
 </div>
   
  );
                }
 

const Types = [{ label: 'ทุนต่อเนื่อง', id: 1},{ label: 'ทุนไม่ต่อเนื่อง', id: 2},{ label: 'ทุนต่างประเทศ', id: 3},{ label: 'ทุนภายในประเทศ', id: 4}];
const status = [{ label: 'ยังเปิดรับอยู่', id: 1},{ label: 'ปิดรับสมัคร', id: 2},{ label: 'อยู่ระหว่างอัพเดตข้อมูล', id: 3}];



export default Appss;