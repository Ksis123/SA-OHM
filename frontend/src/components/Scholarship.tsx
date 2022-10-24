import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ScholarshipInterface } from "../interfaces/iScholarship";
import { GetScholarship } from "../services/HttpClientService";

function Scholarship() {
  const [scholarship, setScholarship] = useState<ScholarshipInterface[]>([]);

  useEffect(() => {
    getScholarship();
  }, []);

  const  getScholarship = async () => {
    let res = await GetScholarship();
    if (res) {
      setScholarship(res);
    } 
  };

  const columns: GridColDef[] = [
    { field: "ID", headerName: "ลำดับ", width: 50 },
    {
      field: "Name",
      headerName: "รายชื่อทุน",
      width: 250,
      
    },
    {
      field: "Status",
      headerName: "สถานะ",
      width: 150,
      valueFormatter: (params) => params.value.Value,
    },
    {
      field: "Type",
      headerName: "ประเภท",
      width: 150,
      valueFormatter: (params) => params.value.Value,
    },
    {
      field: "Admin",
      headerName: "ผู้ดูแล",
      width: 150,
      valueFormatter: (params) => params.value.Title,
    },
    {
      field: "Details",
      headerName: "รายระเอียด",
      width: 150,
    },
    
  ];

  return (
    <div>
      <Container maxWidth="md">
        <Box
          display="flex"
          sx={{
            marginTop: 2,
          }}
        >
          <Box flexGrow={1}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              ข้อมูลการเข้าชมวีดีโอ
            </Typography>
          </Box>
          <Box>
            <Button
              component={RouterLink}
              to="/watch_video/create"
              variant="contained"
              color="primary"
            >
              สร้างข้อมูล
            </Button>
          </Box>
        </Box>
        <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
          <DataGrid
            rows={scholarship}
            getRowId={(row) => row.ID}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Container>
    </div>
  );
}

export default Scholarship;


// import React, { useState, useEffect } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import { ScholarshipInterface } from "../interfaces/iScholarship";
// import { GetScholarship } from "../services/HttpClientService";

// function Scholarship() {
//     const [scholarship, setscholarship] = useState<ScholarshipInterface[]>([]);

//     useEffect(() => {
//       GetScholarship();
//     }, []);
  
//     const getScholarship = async () => {
//       let res = await GetScholarship();
//       if (res) {
//         setscholarship(res);
//       } 
//     };
  
  

//       const columns: GridColDef[] = [
//         { field: "ID", headerName: "ลำดับ", width: 60 },
//         {
//           field: "Scholarship_Name",
//           headerName: "Scholarship Name",
//           width: 250,
//           valueFormatter: (params) => params.value.Name,
//         },
//         {
//           field: "AdminID",
//           headerName: "Admins",
//           width: 150,
//           valueFormatter: (params) => params.value.ID,
//         },
//         {
//           field: "StatusID",
//           headerName: "Scholarship Status",
//           width: 150,
//           valueFormatter: (params) => params.value.ID,
//         },
//         { field: "TypeID",
//           headerName: "Scholarship Type", 
//           valueFormatter: (params) => params.value.ID,
//           width: 200 
//         },
//         { field: "Scholarship_detail", 
//           headerName: "Scholarship Detail", 
//           width: 200 
//         },
//       ];
//       return (
//         <div>
//           <Container maxWidth="md">
//             <Box
//               display="flex"
//               sx={{
//                 marginTop: 2,
//               }}
//             >
//               <Box flexGrow={1}>
//                 <Typography
//                   component="h2"
//                   variant="h6"
//                   color="primary"
//                   gutterBottom
//                 >
//                   Scholarshiplisp Data
//                 </Typography>
//               </Box>
//               <Box>
//                 <Button
//                   component={RouterLink}
//                   to="/Scholarship/create"
//                   variant="contained"
//                   color="primary"
//                 >
//                   สร้างรายการธุรกรรม
//                 </Button>
//               </Box>
//             </Box>
//             <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
//               <DataGrid
//                 rows={scholarship}
//                 getRowId={(row) => row.ID}
//                 columns={columns}
//                 pageSize={5}
//                 rowsPerPageOptions={[5]}
//               />
//             </div>
//           </Container>
//         </div>
//       );
//     }
    
//     export default Scholarship;


