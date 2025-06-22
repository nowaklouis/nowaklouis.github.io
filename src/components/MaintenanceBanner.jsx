import React from "react";
import { Alert, AlertTitle, IconButton, Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function MaintenanceBanner() {
  const [open, setOpen] = React.useState(true);

  return (
    <Collapse in={open}>
      <Alert
        severity="warning"
        icon={false}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => setOpen(false)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ borderRadius: 0, justifyContent: "center", textAlign: "center" }}
      >
        <AlertTitle>
          <strong>⚠️ Site en cours de mise à jour</strong>
        </AlertTitle>
        Certaines sections peuvent ne pas être finalisées ou accessibles.
      </Alert>
    </Collapse>
  );
}
