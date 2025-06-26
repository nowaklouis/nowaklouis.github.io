export default function LineLeft() {
  return (
    <Box sx={{ position: "fixed", top: "75%" }}>
      <Stack>
        <Box
          className="icon1"
          sx={{ position: "fixed", top: "70%", left: "0.5%" }}
        >
          <a href="https://github.com/nowaklouis">
            <GitHubIcon color="info" />
          </a>
        </Box>
        <Box
          className="icon2"
          sx={{ position: "fixed", top: "65%", left: "0.5%" }}
        >
          <a href="https://www.linkedin.com/in/louis-nowak/">
            <LinkedInIcon color="info" />
          </a>
        </Box>
        <div className="line3">
          <img
            src="/line.png"
            alt="logo"
            style={{
              clipPath: "polygon(0 0, 1% 0, 1% 100%, 0 100%)",
            }}
          />
        </div>
      </Stack>
    </Box>
  );
}
