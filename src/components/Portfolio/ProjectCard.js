import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import { ProjectCardFront, ProjectCardModalDetails } from './ProjectCardComponents.utlis';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const ProjectCard = ({ projectData }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid item md={12} xs={12} sm={12} sx={{marginTop: {xs:"8%",sm:"2%"}}}>
          <ProjectCardFront
            title={projectData.title}
            about={projectData.about}
            project_link={projectData.link}
            handleClickOpen={handleClickOpen}
          />

          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <ProjectCardModalDetails
              handleClose={handleClose}
              title={projectData.title}
              description={projectData.description}
              techStack={projectData.techStack}
              keyContributions={projectData.keyContributions}
            />
          </BootstrapDialog>
      </Grid>
    </>
  );
}

export default ProjectCard;