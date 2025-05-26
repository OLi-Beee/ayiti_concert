"use client"
import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Chip from "@mui/material/Chip"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import FilterListIcon from "@mui/icons-material/FilterList"
import { useMediaQuery } from "@mui/material"
import { is } from "date-fns/locale"

export default function ConcertsPage() {
  const isMobile  = useMediaQuery('(max-width:600px)');
  const concerts = [
    {
      id: 1,
      title: "Kompa Night with Harmonik",
      date: "June 15, 2025",
      time: "8:00 PM",
      location: "Little Haiti Cultural Center, Miami",
      image: "/placeholder.svg?height=200&width=300",
      price: "$45",
      genre: "Kompa",
      featured: true,
      almostSoldOut: true,
    },
    {
      id: 2,
      title: "Tabou Combo Live",
      date: "July 10, 2025",
      time: "9:00 PM",
      location: "Zenith Hall, Port-au-Prince",
      image: "/placeholder.svg?height=200&width=300",
      price: "$35",
      genre: "Kompa",
      featured: true,
      almostSoldOut: false,
    },
    {
      id: 3,
      title: "Haitian Jazz Festival",
      date: "August 5, 2025",
      time: "7:00 PM",
      location: "Parc Historique, Cap-Haïtien",
      image: "/placeholder.svg?height=200&width=300",
      price: "$50",
      genre: "Jazz",
      featured: true,
      almostSoldOut: false,
    },
    {
      id: 4,
      title: "Mizik Rasin Festival",
      date: "September 12, 2025",
      time: "6:00 PM",
      location: "Champ de Mars, Port-au-Prince",
      image: "/placeholder.svg?height=200&width=300",
      price: "$30",
      genre: "Rasin",
      new: true,
    },
    {
      id: 5,
      title: "Klass Live in Concert",
      date: "October 8, 2025",
      time: "9:00 PM",
      location: "Marriott Hotel, Port-au-Prince",
      image: "/placeholder.svg?height=200&width=300",
      price: "$55",
      genre: "Kompa",
      new: false,
    },
    {
      id: 6,
      title: "T-Vice Summer Party",
      date: "July 25, 2025",
      time: "10:00 PM",
      location: "Decameron Resort, Montrouis",
      image: "/placeholder.svg?height=200&width=300",
      price: "$40",
      genre: "Kompa",
      new: true,
    },
    {
      id: 7,
      title: "RAM Thursday Night",
      date: "Every Thursday",
      time: "9:00 PM",
      location: "Hotel Oloffson, Port-au-Prince",
      image: "/placeholder.svg?height=200&width=300",
      price: "$25",
      genre: "Rasin",
      new: false,
    },
    {
      id: 8,
      title: "Boukman Eksperyans",
      date: "November 20, 2025",
      time: "8:00 PM",
      location: "Yanvalou Club, Petionville",
      image: "/placeholder.svg?height=200&width=300",
      price: "$35",
      genre: "Rasin",
      new: false,
    },
  ]

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

            <Stack direction="row" spacing={2}>
              <Link href="/account/login" style={{ textDecoration: "none" }}>
                <Button variant="outlined" size="small">Log in</Button>
              </Link>
              <Link href="/account/register" style={{ textDecoration: "none", display: isMobile ? "none" : "block" }}>
                <Button variant="contained" size="small">Sign up</Button>
              </Link>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flex: 1 }}>
        <Box sx={{ py: 6 }}>
          <Container>
            <Stack 
              direction={{ xs: "column", md: "row" }} 
              justifyContent="space-between" 
              alignItems={{ xs: "stretch", md: "center" }}
              spacing={3}
              mb={6}
            >
              <Box>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  All Concerts
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Find and book tickets to Haitian concerts and events.
                </Typography>
              </Box>

              <Stack 
                direction={{ xs: "column", sm: "row" }} 
                spacing={2} 
                sx={{ width: { xs: "100%", md: "auto" } }}
              >
                <TextField
                  placeholder="Search concerts..."
                  size="small"
                  sx={{ width: { xs: "100%", md: 200 } }}
                />
                
                <FormControl size="small" sx={{ width: { xs: "100%", md: 150 } }}>
                  <InputLabel>Genre</InputLabel>
                  <Select label="Genre" defaultValue="all">
                    <MenuItem value="all">All Genres</MenuItem>
                    <MenuItem value="kompa">Kompa</MenuItem>
                    <MenuItem value="rasin">Rasin</MenuItem>
                    <MenuItem value="jazz">Jazz</MenuItem>
                    <MenuItem value="rap">Rap Kreyòl</MenuItem>
                  </Select>
                </FormControl>

                <FormControl size="small" sx={{ width: { xs: "100%", md: 150 } }}>
                  <InputLabel>Location</InputLabel>
                  <Select label="Location" defaultValue="all">
                    <MenuItem value="all">All Locations</MenuItem>
                    <MenuItem value="port-au-prince">Port-au-Prince</MenuItem>
                    <MenuItem value="cap-haitien">Cap-Haïtien</MenuItem>
                    <MenuItem value="miami">Miami</MenuItem>
                    <MenuItem value="new-york">New York</MenuItem>
                  </Select>
                </FormControl>

                <Button 
                  variant="outlined" 
                  sx={{ 
                    minWidth: { xs: "100%", md: "auto" },
                    width: { md: 40 }, 
                    height: 40,
                    p: 0
                  }}
                >
                  <FilterListIcon />
                </Button>
              </Stack>
            </Stack>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                  xl: "repeat(4, 1fr)"
                },
                gap: 3
              }}
            >
              {concerts.map((concert) => (
                <Card key={concert.id}>
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={concert.image || "/placeholder.svg"}
                      alt={concert.title}
                      sx={{
                        aspectRatio: "16/9",
                        objectFit: "cover"
                      }}
                    />
                    {concert.almostSoldOut && (
                      <Chip
                        label="Almost Sold Out"
                        color="error"
                        size="small"
                        sx={{ position: "absolute", top: 8, right: 8 }}
                      />
                    )}
                    {concert.new && (
                      <Chip
                        label="New"
                        color="success"
                        size="small"
                        sx={{ position: "absolute", top: 8, right: 8 }}
                      />
                    )}
                  </Box>
                  <CardContent>
                    <Chip
                      label={concert.genre}
                      variant="outlined"
                      size="small"
                      sx={{ mb: 1 }}
                    />
                    <Typography variant="h6" gutterBottom>
                      {concert.title}
                    </Typography>
                    <Stack spacing={1} sx={{ mb: 2 }}>
                      <Box display="flex" alignItems="center" gap={1}>
                        <CalendarTodayIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {concert.date}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" gap={1}>
                        <AccessTimeIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {concert.time}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" gap={1}>
                        <LocationOnIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {concert.location}
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack 
                      direction="row" 
                      justifyContent="space-between" 
                      alignItems="center"
                    >
                      <Typography variant="h6">
                        {concert.price}
                      </Typography>
                      <Link 
                        href={`/concerts/${concert.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant="contained" size="small">
                          Buy Tickets
                        </Button>
                      </Link>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>

      <Box 
        component="footer" 
        sx={{ 
          py: { xs: 3, md: 4 }, 
          borderTop: 1, 
          borderColor: "divider" 
        }}
      >
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