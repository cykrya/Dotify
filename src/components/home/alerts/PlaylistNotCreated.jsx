import { Alert, Box, Collapse } from "@mui/material";

const PlaylistNotCreated = ({PlaylistsStatus}) => {
return(
    <Box sx={{width:'93%'}}>
      <Collapse in={PlaylistsStatus}>
        <Alert  severity="error" sx= {{mb:2}}>
            Create a Playlist! (Name min 10 characters)
        </Alert>
      </Collapse>
    </Box>
  )
};

export default PlaylistNotCreated;