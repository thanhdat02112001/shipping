import { useState } from "react";

import { Button, Card, Container, FormControl, InputLabel, MenuItem, Select, Stack, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";

import { HTTP } from "src/helper/http-common";
import { useNavigate } from "react-router-dom";

export default function UserNew() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] =  useState('')
  const [role, setRole] = useState(2)
  const navigate = useNavigate()

  const handleCreateUser = async () => {
    await HTTP.post('user/create', {
      name,
    email,
      password,
      role
    })
    .then(response => {
      const {data} = response
      if (data.status === "200") {
        navigate('/user')
      } else {
        alert(data.message)
      }
    })
  }
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">New Users</Typography>
      </Stack>

      <Card>
        <TableContainer sx={{ overflow: 'unset' }}>
          <Table sx={{minWidth: 800,"& td": { border: 0 }  }}>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField required label="Name" margin="normal" value={name} onChange={e => setName(e.target.value)}/>
                </TableCell>
                <TableCell>
                <TextField required label="Email" margin="normal" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField required label="Password" margin="normal" value={password} onChange={e => setPassword(e.target.value)}/>
                </TableCell>
                <TableCell>
                  <FormControl margin="normal">
                    <InputLabel id="user-role">Role</InputLabel>
                    <Select
                      labelId="user-role"
                      id="demo-simple-select"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <MenuItem value={2}>Admin</MenuItem>
                      <MenuItem value={3}>Staff</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                <Button variant="contained" onClick={handleCreateUser}>Save</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  )
}