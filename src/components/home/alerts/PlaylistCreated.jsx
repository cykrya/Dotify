import { Alert, Box, Collapse } from "@mui/material";

const PlaylistCreated = ({Open}) => {
return(
    <Box sx={{width:'93%'}}>
      <Collapse in={Open}>
        <Alert sx= {{mb:2}}>
            Playlist Created!
        </Alert>
      </Collapse>
    </Box>
  )
};

export default PlaylistCreated;