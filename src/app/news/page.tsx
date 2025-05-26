"use client"
import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Chip from "@mui/material/Chip"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import PersonIcon from "@mui/icons-material/Person"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { useMediaQuery } from "@mui/material"
import musicFestival from "../../../public/images/images.jpg";

export default function NewsPage() {
  const isMobile = useMediaQuery("(max-width:600px)")
  // This would typically come from an API or database
  const newsArticles = [
    {
      id: 1,
      title: "Harmonik Announces North American Tour",
      excerpt: "The popular Haitian kompa band will be touring major cities in the US and Canada starting next month.",
      date: "May 18, 2025",
      author: "Jean Baptiste",
      category: "Tours",
      image: musicFestival.src,
      featured: true,
    },
    {
      id: 2,
      title: "New Haitian Music Festival Coming to Miami",
      excerpt: "A new three-day festival celebrating Haitian music and culture will debut in Miami this summer.",
      date: "May 15, 2025",
      author: "Marie Durand",
      category: "Festivals",
      image: musicFestival.src,
      featured: true,
    },
    {
      id: 3,
      title: "Tabou Combo Celebrates 50 Years of Music",
      excerpt:
        "The legendary Haitian band marks five decades of bringing kompa music to the world with a special anniversary concert.",
      date: "May 10, 2025",
      author: "Pierre Richard",
      category: "Artists",
      image: musicFestival.src,
      featured: false,
    },
    {
      id: 4,
      title: "Rising Star J Perry Collaborates with International Artists",
      excerpt: "Haitian artist J Perry announces exciting new collaborations with international music stars.",
      date: "May 5, 2025",
      author: "Sophie Martin",
      category: "Artists",
      image: musicFestival.src,
      featured: false,
    },
    {
      id: 5,
      title: "Haiti's Carnival 2025 Dates Announced",
      excerpt:
        "The dates for Haiti's national carnival have been announced, with preparations already underway for the celebration.",
      date: "April 30, 2025",
      author: "Marc Antoine",
      category: "Events",
      image: musicFestival.src,
      featured: false,
    },
    {
      id: 6,
      title: "New Album Release: Klass Returns with 'Kontinye'",
      excerpt: "Popular kompa band Klass has released their highly anticipated new album to critical acclaim.",
      date: "April 25, 2025",
      author: "Claudette Dumas",
      category: "Releases",
      image: musicFestival.src,
      featured: false,
    },
    {
      id: 7,
      title: "Historic Haitian Venue Reopens After Renovation",
      excerpt: "A historic concert venue in Port-au-Prince reopens its doors after extensive renovations.",
      date: "April 20, 2025",
      author: "Robert Louis",
      category: "Venues",
      image: musicFestival.src,
      featured: false,
    },
    {
      id: 8,
      title: "Documentary on Haitian Music History Premieres Next Month",
      excerpt:
        "A new documentary exploring the rich history of Haitian music will premiere at film festivals next month.",
      date: "April 15, 2025",
      author: "Yvonne Celestin",
      category: "Culture",
      image: musicFestival.src,
      featured: false,
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
                  <Typography variant="subtitle2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
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
        <Box sx={{ 
          py: { xs: 6, md: 12 },
          background: "linear-gradient(180deg, #DC2626 0%, #991B1B 100%)",
          color: "white"
        }}>
          <Container>
            <Stack alignItems="center" spacing={2} textAlign="center">
              <Typography variant="h3" fontWeight="bold">
                Haitian Music News
              </Typography>
              <Typography variant="h6" sx={{ maxWidth: 700, color: "white.90" }}>
                Stay updated with the latest news, events, and stories from the Haitian music scene.
              </Typography>
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: { xs: 6, md: 12 } }}>
          <Stack 
            direction={{ xs: "column", md: "row" }} 
            justifyContent="space-between" 
            alignItems={{ xs: "start", md: "center" }}
            spacing={3}
            mb={6}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Latest News
              </Typography>
              <Typography color="text.secondary">
                The most recent updates from the Haitian music world.
              </Typography>
            </Box>

            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={2}
              width={{ xs: "100%", md: "auto" }}
            >
              <TextField
                placeholder="Search news..."
                size="small"
                sx={{ width: { xs: "100%", md: 200 } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              
              <FormControl size="small" sx={{ width: { xs: "100%", md: 150 } }}>
                <InputLabel>Category</InputLabel>
                <Select label="Category" defaultValue="all">
                  <MenuItem value="all">All Categories</MenuItem>
                  <MenuItem value="tours">Tours</MenuItem>
                  <MenuItem value="festivals">Festivals</MenuItem>
                  <MenuItem value="artists">Artists</MenuItem>
                  <MenuItem value="releases">Releases</MenuItem>
                  <MenuItem value="events">Events</MenuItem>
                  <MenuItem value="venues">Venues</MenuItem>
                  <MenuItem value="culture">Culture</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Stack>

          <Stack spacing={6}>
            {newsArticles.slice(0, 2).map((article) => (
              <Card key={article.id} sx={{ display: { md: "flex" }, height: "100%" }}>
                <CardMedia
                  component="img"
                  sx={{ 
                    width: { xs: "100%", md: "50%" },
                    aspectRatio: "16/9",
                    objectFit: "cover"
                  }}
                  image={article.image}
                  alt={article.title}
                />
                <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <Chip 
                    label={article.category} 
                    color="primary" 
                    size="small"
                    sx={{ alignSelf: "flex-start", mb: 1 }}
                  />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {article.excerpt}
                  </Typography>
                  <Stack 
                    direction="row" 
                    spacing={3}
                    sx={{ mt: "auto", mb: 2 }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CalendarTodayIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {article.date}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <PersonIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {article.author}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Link 
                    href={`/news/${article.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="contained">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </Stack>

          <Box 
            sx={{ 
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)"
              },
              gap: 3,
              mt: 6
            }}
          >
            {newsArticles.slice(2).map((article) => (
              <Card key={article.id}>
                <CardMedia
                  component="img"
                  height="200"
                  image={article.image}
                  alt={article.title}
                  sx={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)"
                    }
                  }}
                />
                <CardContent>
                  <Chip 
                    label={article.category} 
                    size="small"
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      mb: 2
                    }}
                  >
                    {article.excerpt}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <CalendarTodayIcon fontSize="small" color="action" />
                      <Typography variant="caption" color="text.secondary">
                        {article.date}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <PersonIcon fontSize="small" color="action" />
                      <Typography variant="caption" color="text.secondary">
                        {article.author}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Button variant="outlined">
              Load More News
            </Button>
          </Box>
        </Container>
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
