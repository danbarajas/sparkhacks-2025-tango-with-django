import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Column, Row } from "@components";

export default function CreateTask() {
  const navigate = useNavigate();

  return (
    <>
      <Container sx={{ padding: 4 }}>
        <Column gap={2}>
          <Row gap={2}>
            <IconButton
              onClick={() => { navigate("/tasks"); }}
              size="large"
              sx={{
                color: "#0C3C26",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h3">Create new Task</Typography>
            <IconButton
              size="large"
              sx={{
                opacity: 0,
                pointerEvents: "none",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Row>
          
        </Column>
      </Container>
    </>
  );
}