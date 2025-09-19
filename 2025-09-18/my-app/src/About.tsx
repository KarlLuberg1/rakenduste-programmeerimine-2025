import DrawerAppBar from "./DrawerAppBar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { ListItem, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";

export default function About() {
  return (
    <>
      <DrawerAppBar />
      <Typography variant="h2" paragraph color="primary">
        About me:
      </Typography>
      <Typography variant="h5" paragraph color="gray">
        My hobbies include: <br />
      </Typography>
      <Box
        component="section"
        sx={{ border: 1, borderRadius: "0.5rem", color: "gray" }}
      >
        <List>
          {[
            "- Programming",
            "- Computer games",
            "- Paddle tennis",
            "- Music (Guitar)",
          ].map((text) => (
            <ListItem key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
