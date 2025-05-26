import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import Stack from "@mui/material/Stack"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"

export default function RegisterPage() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box component="span" color="primary.main">Ayiti</Box>
                Concerts
              </Typography>
            </Link>
            
            <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
              {["All Concerts", "News", "Book an Artist", "About"].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography 
                    variant="subtitle2" 
                    sx={{ '&:hover': { textDecoration: 'underline', textUnderlineOffset: '4px' } }}
                  >
                    {item}
                  </Typography>
                </Link>
              ))}
            </Stack>

            <Link href="/account/login" style={{ textDecoration: "none" }}>
              <Button variant="outlined" size="small">Log in</Button>
            </Link>
          </Container>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flex: 1 }}>
        <Container maxWidth="sm" sx={{ py: 12 }}>
          <Stack spacing={6}>
            <Stack spacing={2} textAlign="center">
              <Typography variant="h4" fontWeight="bold">
                Create an Account
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Enter your information to create an account
              </Typography>
            </Stack>

            <Stack component="form" spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  id="first-name"
                  label="First name"
                  fullWidth
                  required
                  placeholder="John"
                />
                <TextField
                  id="last-name"
                  label="Last name"
                  fullWidth
                  required
                  placeholder="Doe"
                />
              </Stack>

              <TextField
                id="email"
                label="Email"
                type="email"
                fullWidth
                required
                placeholder="m@example.com"
              />
              
              <TextField
                id="password"
                label="Password"
                type="password"
                fullWidth
                required
              />

              <TextField
                id="confirm-password"
                label="Confirm Password"
                type="password"
                fullWidth
                required
              />

              <FormControlLabel
                control={<Checkbox id="terms" required />}
                label={
                  <Typography variant="body2">
                    I agree to the{" "}
                    <Link href="/terms" style={{ color: "primary", textDecoration: "none" }}>
                      <Typography component="span" color="primary" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                        Terms of Service
                      </Typography>
                    </Link>
                    {" "}and{" "}
                    <Link href="/privacy" style={{ color: "primary", textDecoration: "none" }}>
                      <Typography component="span" color="primary" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                        Privacy Policy
                      </Typography>
                    </Link>
                  </Typography>
                }
              />

              <Button variant="contained" fullWidth type="submit" size="large">
                Create Account
              </Button>

              <Typography variant="body2" textAlign="center">
                Already have an account?{" "}
                <Link href="/account/login" style={{ textDecoration: "none" }}>
                  <Typography 
                    component="span" 
                    color="primary" 
                    sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                  >
                    Log in
                  </Typography>
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box component="footer" sx={{ py: { xs: 3, md: 4 }, borderTop: 1, borderColor: "divider" }}>
        <Container>
          <Stack 
            direction={{ xs: "column", md: "row" }} 
            justifyContent="space-between" 
            alignItems={{ xs: "center", md: "flex-start" }}
            spacing={2}
          >
            <Stack alignItems={{ xs: "center", md: "flex-start" }} spacing={1}>
              <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box component="span" color="primary.main">Ayiti</Box>
                  Concerts
                </Typography>
              </Link>
              <Typography variant="body2" color="text.secondary">
                Connecting Haitian culture with music lovers since 2023.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              {["Terms", "Privacy", "Contact"].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ '&:hover': { textDecoration: 'underline' } }}
                  >
                    {item}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
