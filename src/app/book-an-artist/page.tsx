"use client"
import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Paper from "@mui/material/Paper"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import * as React from "react"

export default function BookArtistPage() {
  const [eventDate, setEventDate] = React.useState<Date | null>(null);

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
                  <Typography variant="body1" sx={{ fontWeight: 500, color: "text.primary", "&:hover": { textDecoration: "underline" } }}>
                    {item}
                  </Typography>
                </Link>
              ))}
            </Stack>

            <Stack direction="row" spacing={2}>
              <Link href="/account/login">
                <Button variant="outlined" size="small">
                  Log in
                </Button>
              </Link>
              <Link href="/account/register" style={{ display: "inline-block", textDecoration: "none" }}>
                <Button size="small">
                  Sign up
                </Button>
              </Link>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flex: 1 }}>
        <Box sx={{ py: 8, bgcolor: "background.paper" }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
                Book an Artist
              </Typography>
              <Typography variant="h6" sx={{ color: "text.secondary", mb: 4 }}>
                Contact artist management to book your favorite Haitian artists for your next event.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
              <Box sx={{ flex: 1, bgcolor: "grey.100", p: 2, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
                  How It Works
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
                  Fill out the form with your event details, and we'll connect you with the artist's management team.
                </Typography>

                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, mb: 4 }}>
                  {[
                    { step: 1, title: "Submit Your Request", description: "Fill out the booking form with all your event details and requirements." },
                    { step: 2, title: "Get a Response", description: "The artist's management team will review your request and contact you within 48 hours." },
                    { step: 3, title: "Finalize the Details", description: "Work directly with the management team to finalize the booking details and contract." }
                  ].map((item) => (
                    <Box key={item.step} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                      <Box>
                        <Box display="flex" gap={1}>
                          <Box sx={{ 
                            width: 30, 
                            height: 30, 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            borderRadius: "50%", 
                            bgcolor: "primary.main", 
                            color: "white",
                          }}>
                            {item.step}
                          </Box>
                          <Typography fontSize=".85em" sx={{ fontWeight: 500 }}>
                            {item.title}
                          </Typography>
                        </Box>
                        
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
                    Popular Artists Available for Booking
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    • Harmonik{" "}
                    • Tabou Combo{" "}
                    • Klass{" "}
                    • T-Vice{" "}
                    • Boukman Eksperyans{" "}
                    • RAM{" "}
                    • Nu Look{" "}
                    • Djakout #1{" "}
                    • Carimi{" "}
                    • Sweet Micky
                  </Typography>
                </Paper>
              </Box>

              <Box sx={{ flex: 1, p: 4, borderRadius: 2, bgcolor: "grey.50" }}>
                <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
                  Booking Request Form
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
                  Please provide as much detail as possible about your event.
                </Typography>

                <form>
                  <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
                    <TextField label="First name" variant="outlined" required />
                    <TextField label="Last name" variant="outlined" required />
                  </Box>
                  <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2, mb: 3 }}>
                    <TextField label="Email" variant="outlined" required type="email" />
                    <TextField label="Phone number" variant="outlined" required type="tel" />
                  </Box>

                  <FormControl variant="outlined" fullWidth sx={{ mb: 3 }}>
                    <InputLabel>Artist you want to book</InputLabel>
                    <Select label="Artist you want to book" required>
                      <MenuItem value="harmonik">Harmonik</MenuItem>
                      <MenuItem value="tabou-combo">Tabou Combo</MenuItem>
                      <MenuItem value="klass">Klass</MenuItem>
                      <MenuItem value="t-vice">T-Vice</MenuItem>
                      <MenuItem value="boukman">Boukman Eksperyans</MenuItem>
                      <MenuItem value="ram">RAM</MenuItem>
                      <MenuItem value="nu-look">Nu Look</MenuItem>
                      <MenuItem value="djakout">Djakout #1</MenuItem>
                      <MenuItem value="carimi">Carimi</MenuItem>
                      <MenuItem value="sweet-micky">Sweet Micky</MenuItem>
                      <MenuItem value="other">Other (specify in description)</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl variant="outlined" fullWidth sx={{ mb: 3 }}>
                    <InputLabel>Event type</InputLabel>
                    <Select label="Event type" required>
                      <MenuItem value="concert">Concert</MenuItem>
                      <MenuItem value="festival">Festival</MenuItem>
                      <MenuItem value="private">Private Event</MenuItem>
                      <MenuItem value="corporate">Corporate Event</MenuItem>
                      <MenuItem value="wedding">Wedding</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>

                  <Box sx={{ mb: 3 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Event date"
                        value={eventDate}
                        onChange={(newValue) => setEventDate(newValue)}
                        slotProps={{
                          textField: {
                            variant: "outlined",
                            fullWidth: true,
                            required: true
                          }
                        }}
                      />
                    </LocalizationProvider>
                  </Box>

                  <TextField label="Venue name and location" variant="outlined" fullWidth required sx={{ mb: 3 }} />
                  
                  <FormControl variant="outlined" fullWidth sx={{ mb: 3 }}>
                    <InputLabel>Expected audience size</InputLabel>
                    <Select label="Expected audience size" required>
                      <MenuItem value="small">Less than 100</MenuItem>
                      <MenuItem value="medium">100-500</MenuItem>
                      <MenuItem value="large">500-1,000</MenuItem>
                      <MenuItem value="xl">1,000-5,000</MenuItem>
                      <MenuItem value="xxl">More than 5,000</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl variant="outlined" fullWidth sx={{ mb: 3 }}>
                    <InputLabel>Budget range (USD)</InputLabel>
                    <Select label="Budget range" required>
                      <MenuItem value="budget1">$5,000 - $10,000</MenuItem>
                      <MenuItem value="budget2">$10,000 - $20,000</MenuItem>
                      <MenuItem value="budget3">$20,000 - $50,000</MenuItem>
                      <MenuItem value="budget4">$50,000 - $100,000</MenuItem>
                      <MenuItem value="budget5">$100,000+</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    label="Additional details"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{ mb: 3 }}
                  />

                  <Button variant="contained" size="large" sx={{ width: "100%" }}>
                    Submit Booking Request
                  </Button>
                </form>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      <Box component="footer" sx={{ py: 4, bgcolor: "background.default", borderTop: "1px solid", borderColor: "divider" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}>
              <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box component="span" color="primary.main">Ayiti</Box>
                  Concerts
                </Typography>
              </Link>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                Connecting Haitian culture with music lovers since 2023.
              </Typography>
            </Box>

            <Stack direction="row" spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
              {["Terms", "Privacy", "Contact"].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`} 
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography variant="body2" sx={{ color: "text.secondary", "&:hover": { textDecoration: "underline" } }}>
                    {item}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
