import { Container, Typography } from "@mui/material";
import { Column, DemoAppBar } from "@components";

import "@styles/index.css";

export default function Tasks() {
  return (
    <>
      <DemoAppBar/>
      <Container sx={{ padding: 4 }}>
        <Column gap={3}>
          <Typography variant="h2">
            Tasks
          </Typography>
        </Column>
      </Container>
    </>
  );
}