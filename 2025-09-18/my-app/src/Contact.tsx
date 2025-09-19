import DrawerAppBar from "./DrawerAppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Contact() {
  return (
    <>
      <DrawerAppBar />
      <Typography variant="h2" paragraph color="primary">
        Contact me:
      </Typography>
      <Box component="section" sx={{ p: 6, border: "1px  gray" }}>
        <Typography variant="h4" paragraph color="gray">
          Karl Luberg <br />
          luberg@tlu.ee
        </Typography>
      </Box>
      <TextField
        label="Tell me something"
        placeholder="Type your message here..."
        multiline
        rows={4}
        fullWidth
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        label="Your email address"
        placeholder=""
        multiline
        rows={1}
        fullWidth
        variant="outlined"
      />
      <br />
      <br />
      <Button variant="contained" size="large">
        Fire away!
      </Button>
    </>
  );
}
