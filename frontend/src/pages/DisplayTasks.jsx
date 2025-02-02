import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Collapse, Container, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Tab, Typography } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import AddTaskIcon from '@mui/icons-material/AddTask';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DeleteIcon from "@mui/icons-material/Delete";
import { Column, ScreenMessage } from "@components";

import "@styles/index.css";

export default function ShowTasks() {
  const [tasksMap, setTasksMap] = useState({});
  
  const [status, setStatus] = useState("Server is dead...");

  const [currentTab, setCurrentTab] = useState(0);
  const [isExpandedMap, setIsExpandedMap] = useState({});

  const navigate = useNavigate();

  const fetchTasks = useCallback(() => {
    fetch(`http://localhost:8000/tasks/`)
      .then((response) => response.json())
      .then((data) => {
        setTasksMap({
          0: data.filter(task => !task.is_completed && !task.is_deleted),
          1: data.filter(task => task.is_completed && !task.is_deleted),
          2: data.filter(task => task.is_deleted),
        });

        setStatus(data.length > 0 ? "ok" : "No tasks yet...");
      })
      .catch((error) => console.error("Error fetching tasks: ", error))
  }, []);

  const changeCurrentTab = (e, newCurrentTab) => {
    setCurrentTab(newCurrentTab);
  };

  const toggleExpand = (id) => {
    setIsExpandedMap((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <>
      <Container sx={{ padding: 4 }}>
        {status !== "ok" ? (
          <ScreenMessage message={status}/>
        ) : (
          <Column gap={2}>            
            <TabContext value={currentTab}>
              <TabList 
                onChange={changeCurrentTab}
                sx={{
                  background: "#45B78B",
                  ".MuiTabs-indicator": {bgcolor: "transparent"},
                  ".Mui-selected": {bgcolor: "#A7DBC5"}
                }}
              >
                <Tab disableRipple
                  label="TODO"
                  sx={{
                    width: "150px", 
                    typography: "body1",
                    color: "#F1FFF8", 
                    "&.Mui-selected": {color: "#F1FFF8"}
                  }}
                />
                <Tab disableRipple
                  label="Completed"
                  sx={{
                    width: "150px", 
                    typography: "body1",
                    color: "#F1FFF8", 
                    "&.Mui-selected": {color: "#F1FFF8"}
                  }}
                />
                <Tab disableRipple
                  label="Deleted"
                  sx={{
                    width: "150px", 
                    typography: "body1",
                    color: "#F1FFF8", 
                    "&.Mui-selected": {color: "#F1FFF8"}
                  }}
                />
              </TabList>
            </TabContext>
            <Box sx={{
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              width: "725px"
            }}>
              <Typography variant="h4">
                Tasks
              </Typography>
              <IconButton disableRipple
                onClick={() => navigate("/tasks/create")}
                sx={{
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center",
                  m: 0,
                  bgcolor: "#45B78B",
                  color: "#092E20",
                  '&:hover': { 
                    bgcolor: "#092E20",
                    color: "#F1FFF8" 
                  }
                }}
              >
                <AddTaskIcon/>
              </IconButton>
            </Box>
            <List>
              {tasksMap[currentTab].map((task, index) => (
                <React.Fragment key={task.id}>
                  <ListItem disablePadding>
                    <ListItemButton disableRipple
                      onClick={() => toggleExpand(task.id)}
                      sx={{
                        width: "750px",
                        gap: 1,
                        borderRadius: 0,
                        backgroundColor: "#45B78B",
                        '&:hover': { backgroundColor: "rgba(69, 183, 139, 0.5)" },
                      }}
                    >
                      <IconButton disableRipple 
                        disabled={task.is_completed || task.is_deleted}
                        onClick={(e) => {
                          e.stopPropagation();

                          
                        }}
                        sx={{
                          color: "#092E20",
                          '&:hover': { color: "#F1FFF8" }
                        }}
                      >
                        {
                          !task.is_completed 
                          ? <RadioButtonUncheckedIcon /> 
                          : <RadioButtonCheckedIcon />
                        }
                      </IconButton>
                      <ListItemText primary={
                        <Typography variant="body1">
                          <strong>{task.title}</strong>
                        </Typography>
                      } />
                      <IconButton disableRipple sx={{color: "#092E20"}}
                      >
                        {isExpandedMap[task.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </IconButton>
                      <IconButton disableRipple
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        sx={{
                          color: "#092E20",
                          '&:hover': { color: "#F1FFF8" }
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={isExpandedMap[task.id]} timeout="auto" unmountOnExit>
                    <ListItem
                      sx={{
                        width: "750px",
                        backgroundColor: "rgba(69, 183, 139, 0.25)",
                      }}
                    >
                      <ListItemText 
                        primary={
                          <Typography variant="body2">
                            <strong>Notes:</strong>
                          </Typography>
                        } 
                        secondary={
                          <Typography variant="body2">
                            {task.notes ? task.notes : "None"}
                          </Typography>
                        }  
                      />
                    </ListItem>
                  </Collapse>
                  {index < tasksMap[currentTab].length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Column>
        )}
      </Container>
    </>
  );
}