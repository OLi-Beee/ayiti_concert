"use client"
import Link from "next/link"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search"
import FeaturedConcerts from "@/components/featured-concerts"
import UpcomingConcerts from "@/components/upcoming-concerts"
import { Chip, useMediaQuery } from "@mui/material"
import { is } from "date-fns/locale"
import musicFestival from "../../public/images/images.jpg"


export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6" component="span" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box component="span" color="primary.main">Ayiti</Box>
                Concerts
              </Typography>
            </Link>
            
            <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
              {["All Concerts", "News", "Book an Artist", "About"].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      '&:hover': { 
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px'
                      }
                    }}
                  >
                    {item}
                  </Typography>
                </Link>
              ))}
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <TextField
                size="small"
                placeholder="Search concerts..."
                sx={{ 
                  display: { xs: "none", md: "flex" },
                  width: 250,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '9999px'
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
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
        <Box
          sx={{
            py: { xs: 6, md: 12, lg: 16 },
            background: "linear-gradient(180deg, #DC2626 0%, #991B1B 100%)",
            color: "white"
          }}
        >
          <Container>
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Experience Haitian Culture Through Music
                  </h1>
                  <p className="max-w-[600px] text-white/90 md:text-xl">
                    Find and book tickets to the best Haitian concerts and cultural events. Secure your spot today!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/concerts">
                    <Button className="bg-white text-red-800 hover:bg-white/90">
                      Browse Concerts
                    </Button>
                  </Link>
                  <Link href="/featured">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Featured Events
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={musicFestival.src}
                  alt="Haitian concert"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  width="auto"
                  height="auto"
                />
              </div>
            </div>
          </Container>
        </Box>

        <FeaturedConcerts />

        <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "grey.100" }}>
          <Container>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Latest News</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest from the Haitian music scene.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="group overflow-hidden rounded-lg border bg-background">
                <Link href="/news/1" className="block overflow-hidden">
                  <img
                    src={musicFestival.src}
                    alt="Harmonik Announces North American Tour"
                    width={300}
                    height={200}
                    className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                  />
                </Link>
                <div className="p-4">
                  <Link href="/news/1">
                    <h3 className="font-bold">Harmonik Announces North American Tour</h3>
                  </Link>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    The popular Haitian kompa band will be touring major cities in the US and Canada starting next
                    month.
                  </p>
                  <div className="mt-4 text-xs text-muted-foreground">
                    <span>May 18, 2025</span>
                  </div>
                </div>
              </div>
              <div className="group overflow-hidden rounded-lg border bg-background">
                <Link href="/news/2" className="block overflow-hidden">
                  <img
                    src={musicFestival.src}
                    alt="New Haitian Music Festival Coming to Miami"
                    width={300}
                    height={200}
                    className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                  />
                </Link>
                <div className="p-4">
                  <Link href="/news/2">
                    <h3 className="font-bold">New Haitian Music Festival Coming to Miami</h3>
                  </Link>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    A new three-day festival celebrating Haitian music and culture will debut in Miami this summer.
                  </p>
                  <div className="mt-4 text-xs text-muted-foreground">
                    <span>May 15, 2025</span>
                  </div>
                </div>
              </div>
              <div className="group overflow-hidden rounded-lg border bg-background">
                <Link href="/news/3" className="block overflow-hidden">
                  <img
                    src={musicFestival.src}
                    alt="Tabou Combo Celebrates 50 Years of Music"
                    width={300}
                    height={200}
                    className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                  />
                </Link>
                <div className="p-4">
                  <Link href="/news/3">
                    <h3 className="font-bold">Tabou Combo Celebrates 50 Years of Music</h3>
                  </Link>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    The legendary Haitian band marks five decades of bringing kompa music to the world with a special
                    anniversary concert.
                  </p>
                  <div className="mt-4 text-xs text-muted-foreground">
                    <span>May 10, 2025</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/news">
                <Button variant="outline" size="lg">
                  View All News
                </Button>
              </Link>
            </div>
          </Container>
        </Box>

        <UpcomingConcerts />

        <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: "grey.100" }}>
          <Container>
            <Stack alignItems="center" spacing={4} textAlign="center">
              <Stack spacing={2}>
                <Chip 
                  label="Join Our Community" 
                  color="primary" 
                  sx={{ alignSelf: "center" }}
                />
                <Typography variant="h3" fontWeight="bold">
                  Never Miss a Beat
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    maxWidth: 900,
                    fontSize: { md: '1.25rem' }
                  }}
                >
                  Subscribe to our newsletter for exclusive updates on new concerts, 
                  special offers, and Haitian cultural events.
                </Typography>
              </Stack>
              <Box component="form" sx={{ width: "100%", maxWidth: "md" }}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2}>
                    <TextField
                      fullWidth
                      placeholder="Enter your email"
                      type="email"
                      size="medium"
                      variant="outlined"
                    />
                    <Button variant="contained" type="submit">
                      Subscribe
                    </Button>
                  </Stack>
                  <Typography variant="caption" color="text.secondary">
                    By subscribing, you agree to our terms and privacy policy.
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Box component="footer" sx={{ py: { xs: 3, md: 4 }, borderTop: 1, borderColor: "divider" }}>
        <Container>
          <Stack 
            direction={{ xs: "column", md: "row" }} 
            justifyContent="space-between" 
            alignItems={{ xs: "center", md: "flex-start" }}
            spacing={2}
          >
            <div className="flex flex-col items-center gap-2 md:items-start">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <span className="text-primary">Ayiti</span>Concerts
              </Link>
              <p className="text-sm text-muted-foreground md:text-left">
                Connecting Haitian culture with music lovers since 2023.
              </p>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:underline underline-offset-4">
                Terms
              </Link>
              <Link href="/privacy" className="hover:underline underline-offset-4">
                Privacy
              </Link>
              <Link href="/contact" className="hover:underline underline-offset-4">
                Contact
              </Link>
            </div>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
