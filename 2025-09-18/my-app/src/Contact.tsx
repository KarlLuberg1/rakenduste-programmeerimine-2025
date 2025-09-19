import DrawerAppBar from "./DrawerAppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useLocalStorage from "./useLocalStorage";

export default function Contact() {
  const [message, setMessage] = useLocalStorage<string>("contactMessage", "");

  const [email, setEmail] = useLocalStorage<string>("contactEmail", "");

  const Submit = () => {
    console.log("messaeg:", message);
    console.log("email:", email);
  };

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
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" size="large" onClick={Submit}>
        Fire away!
      </Button>
    </>
  );
}
