 import React, { useEffect, useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import Button from "@mui/material/Button";
// import FormControl from "@mui/material/FormControl";
// import Container from "@mui/material/Container";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import Snackbar from "@mui/material/Snackbar";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import MuiAlert, { AlertProps } from "@mui/material/Alert";
// import TextField from "@mui/material/TextField";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// import { AdminsInterface } from "../interfaces/iAdmins";
// import { StatusInterface } from "../interfaces/iStatus";
// import { TypesInterface } from "../interfaces/iTypes";
// import { ScholarshipInterface  } from "../interfaces/iScholarship";
// import {
//     GetAdmins,
//     GetStatus,
//     GetTypes,
//     GetScholarship,
//     Scholarship,
//   } from "../services/HttpClientService"; 

 
//   import AppBar from '@mui/material/AppBar';
 
//   import Toolbar from '@mui/material/Toolbar';

//   import IconButton from '@mui/material/IconButton';
//   import MenuIcon from '@mui/icons-material/Menu';
//   import CssBaseline from '@mui/material/CssBaseline';

//   import { styled } from '@mui/material/styles';
 
//   import Autocomplete from '@mui/material/Autocomplete';

//   import Avatar from '@mui/material/Avatar';
 

  
  

//   const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
//     props,
//     ref
//   ) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//   });
  



//  function ScholarshipCreate() {
//     // const [scholarship_name, setscholarship_name] = React.useState<String>("");
//     const [admins, setadmins] = useState<AdminsInterface[]>([]);
//     const [status, setstatus] = useState<StatusInterface[]>([]);
//     const [types, settypes] = useState<TypesInterface[]>([]);
//     // const [scholarship_detail, setscholarship_detail] = React.useState<String>("");
    
//     const [scholarship, setscholarship] = useState<ScholarshipInterface>({
//         Name: "", Details: '',
//       });
    
    
    
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState(false);


  
//     const handleClose = (
//       event?: React.SyntheticEvent | Event,
//       reason?: string
//     ) => {
//       if (reason === "clickaway") {
//         return;
//       }
//       setSuccess(false);
//       setError(false);
//     };

//     const handleChange = (event: SelectChangeEvent) => {
//         const name = event.target.name as keyof typeof scholarship;
//         setscholarship({
//           ...scholarship,
//           [name]: event.target.value,
//         });
//       };

//       const getAdmins = async () => {
//         let res = await GetAdmins();
//         if (res) {
//         setadmins(res);
//         }
//       };
//       const getStatus = async () => {
//         let res = await GetStatus();
//         if (res) {
//             setstatus(res);
//         }
//       };
//       const getTypes = async () => {
//         let res = await GetTypes();
//         if (res) {
//             settypes(res);
//         }
//       };
    
//       useEffect(() => {
//         getAdmins();
//         getStatus();
//         getTypes();
//       }, []);
    
//       const convertType = (data: string | number | undefined) => {
//         let val = typeof data === "string" ? parseInt(data) : data;
//         return val;
//       };

     

//   async function submit() {
//     let data = {
        
//         Scholarship_Name:   scholarship.Name,
//         AdminID: convertType(scholarship.AdminID),
//         StatusID: convertType(scholarship.StatusID),
//         TypeID: convertType(scholarship.TypeID),
//         Details:   scholarship.Details,
     
//     };
      
// let res = await Scholarship(data);
// if (res) {
//   setSuccess(true);
// } else {
//   setError(true);
// }
// }


// const [Scholarship_Name, setScholarship_Name] = useState<String>("");
 
//   const [Scholarship_status, setScholarship_status] = React.useState('');

 
//   const update = () => {
//   console.log(Scholarship_Name,Scholarship_status);
//   };
//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     marginTop: 5,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
//   return (
//     <div>
//     <Box sx={{ flexGrow: 1 }}>
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton
//           size="large"
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           sx={{ mr: 2 }}
//         >
//           <MenuIcon />
        
//         </IconButton>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           ระบบจัดการทุน
//         </Typography>
//             <p>admin@gmail.com</p>
//         <Avatar
//   alt="Remy Sharp"
//   src="/static/images/avatar/1.jpg" 
//   sx={{float: "right", width: 76, height: 76 }}
// />
//       </Toolbar>
//     </AppBar>
    
 
//   </Box>
//   <Container maxWidth = "lg">
//         {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', width: '190vh' }} /> */}
//         <Paper >
//         <Box
//         display = {"flex"}
//       sx={{
//           marginTop: 2,
//           paddingX:  2,
//           paddingY:  4,
//       }}
//       >
//      <h2>Manage Scholarship</h2>    
//     </Box>
//     <hr />
//     <Grid container spacing={0}>
//         <Grid xs={3}>
//         <TextField fullWidth id="Scholarship_Name" type = "string" label="Scholarship Name" variant="outlined"  
//         onChange ={(event) => setScholarship_Name(event.target.value)}
//         />
//           {/* <Item>xs=3</Item> */}
//         </Grid>
//         <Grid xs={3}>
//         <Autocomplete
//       onChange = {(event , value) => console.log(value)}
//       disablePortal
//       fullWidth
//       id="Type"
//       options={Types}
//       renderInput={(params) => <TextField {...params} label="Scholarship Type" />}
//     />
//           {/* <Item>xs=3</Item> */}
//         </Grid>
//         <Grid xs={3}>
        

//         </Grid>
//         <Grid xs={3}>
//         <Button sx={{paddingY: 1.7,}} fullWidth variant="outlined" size="large"
//          onClick={update}
//         >
//           Update
//         </Button>
//           {/* <Item>xs=3</Item> */}
//         </Grid>
//         <Grid xs={12} sx ={{height: 200,}}>
//         <TextField
//           fullWidth
//           id="details"
//           type = "string"
//           label="Details"
//           multiline
//           rows={7}
//           variant="outlined"
        
//         />
//         {/* <TextField  fullWidth  id="details" label="Details" multiline maxRows={7} variant="outlined" /> */}
//           {/* <Item>xs=12</Item> */}
//         </Grid>
//         <Grid xs={12}>
        
//           {/* <Item>xs=12</Item> */}
//         </Grid>
    
//         <Grid xs={9}>
        
//         </Grid>
//         <Grid xs={3}>
//         <Button sx={{paddingY: 1.7,}} fullWidth  variant="outlined" size="large">
//           บันทึกข้อมูล
//         </Button>
//         </Grid>
//       </Grid>
      
//       </Paper >
     
//       <Grid xs = {12}>
   
//     </Grid>

//       </Container>
    
//  </div>
   
//   );
// }
 

// const Types = [{ label: 'ทุนต่อเนื่อง', id: 1},{ label: 'ทุนไม่ต่อเนื่อง', id: 2},{ label: 'ทุนต่างประเทศ', id: 3},{ label: 'ทุนภายในประเทศ', id: 4}];
// const status = [{ label: 'ยังเปิดรับอยู่', id: 1},{ label: 'ปิดรับสมัคร', id: 2},{ label: 'อยู่ระหว่างอัพเดตข้อมูล', id: 3}];




  

//   export default ScholarshipCreate;