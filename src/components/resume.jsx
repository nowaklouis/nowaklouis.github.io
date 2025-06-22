import Button from "@mui/material/Button";

export default function Resume() {
  return (
    <Button
      variant="outlined"
      component="a"
      href="/Nowak Louis CV_.pdf"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ color: "info.main", marginTop: "1.5rem" }}
    >
      voici mon CV
    </Button>
  );
}
