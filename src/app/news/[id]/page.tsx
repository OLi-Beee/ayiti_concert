import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Divider from "@mui/material/Divider"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import PersonIcon from "@mui/icons-material/Person"
import ShareIcon from "@mui/icons-material/Share"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useMediaQuery } from "@mui/material"
import { is } from "date-fns/locale"


export default function NewsArticlePage({ params }: { params: { id: string } }) {
  // This would typically come from an API or database based on the ID
  const isMobile = useMediaQuery("(max-width:600px)")
  const article = {
    id: Number.parseInt(params.id),
    title: "Harmonik Announces North American Tour",
    content: `
      <p>The popular Haitian kompa band Harmonik has announced an extensive North American tour that will take them to major cities across the United States and Canada starting next month.</p>
      
      <p>The tour, which celebrates the release of their latest album "Kontinye," will kick off in Miami on July 15 and conclude in Montreal on September 30. The band will perform in over 20 cities, including New York, Boston, Chicago, Toronto, and Los Angeles.</p>
      
      <h2>Tour Highlights</h2>
      
      <p>"We're incredibly excited to bring our music to fans across North America," said band leader Nickenson Prud'homme in a press statement. "This tour is special because we'll be performing songs from our new album for the first time, along with all the classics our fans love."</p>
      
      <p>The tour will feature special production elements, including enhanced lighting and visual effects, as well as surprise guest appearances from other Haitian music stars at select venues.</p>
      
      <h2>New Album</h2>
      
      <p>Released last month, "Kontinye" has already become one of the most successful kompa albums of the year, with the lead single "Lanmou San Limit" topping charts in Haiti and among diaspora communities.</p>
      
      <p>The album features 12 tracks that blend traditional kompa rhythms with contemporary sounds, showcasing the band's evolution while staying true to their roots.</p>
      
      <h2>Ticket Information</h2>
      
      <p>Tickets for the North American tour will go on sale next Friday at 10 AM local time through the band's official website and major ticketing platforms. VIP packages will also be available, offering meet-and-greet opportunities with the band, exclusive merchandise, and premium seating.</p>
      
      <p>Fan club members will have access to a special pre-sale starting Wednesday.</p>
      
      <h2>Tour Dates</h2>
      
      <ul>
        <li>July 15 - Miami, FL - Little Haiti Cultural Center</li>
        <li>July 22 - Atlanta, GA - Center Stage</li>
        <li>July 29 - New York, NY - Sony Hall</li>
        <li>August 5 - Boston, MA - Royale</li>
        <li>August 12 - Philadelphia, PA - The Fillmore</li>
        <li>August 19 - Chicago, IL - House of Blues</li>
        <li>August 26 - Houston, TX - Warehouse Live</li>
        <li>September 2 - Los Angeles, CA - The Belasco</li>
        <li>September 9 - San Francisco, CA - The Regency Ballroom</li>
        <li>September 16 - Seattle, WA - The Showbox</li>
        <li>September 23 - Toronto, ON - Danforth Music Hall</li>
        <li>September 30 - Montreal, QC - MTELUS</li>
      </ul>
      
      <p>For fans unable to attend the live shows, the band has announced that select performances will be livestreamed, with details to be announced closer to the tour dates.</p>
    `,
    date: "May 18, 2025",
    author: "Jean Baptiste",
    category: "Tours",
    image: "/placeholder.svg?height=500&width=1000",
    relatedArticles: [
      {
        id: 2,
        title: "New Haitian Music Festival Coming to Miami",
        excerpt: "A new three-day festival celebrating Haitian music and culture will debut in Miami this summer.",
        date: "May 15, 2025",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 6,
        title: "New Album Release: Klass Returns with 'Kontinye'",
        excerpt: "Popular kompa band Klass has released their highly anticipated new album to critical acclaim.",
        date: "April 25, 2025",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 3,
        title: "Tabou Combo Celebrates 50 Years of Music",
        excerpt:
          "The legendary Haitian band marks five decades of bringing kompa music to the world with a special anniversary concert.",
        date: "May 10, 2025",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

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
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Box maxWidth="md" mx="auto">
            <Link 
              href="/news"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                startIcon={<ArrowBackIcon />}
                sx={{ mb: 2 }}
                color="inherit"
              >
                Back to News
              </Button>
            </Link>

            <Chip 
              label={article.category} 
              color="primary" 
              sx={{ mb: 2 }}
            />

            <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
              {article.title}
            </Typography>

            <Stack 
              direction="row" 
              spacing={3} 
              sx={{ mb: 4, color: "text.secondary" }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <CalendarTodayIcon fontSize="small" />
                <Typography variant="body2">{article.date}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PersonIcon fontSize="small" />
                <Typography variant="body2">{article.author}</Typography>
              </Stack>
            </Stack>

            <Box 
              component="img"
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              sx={{
                width: "100%",
                height: "auto",
                aspectRatio: "2/1",
                objectFit: "cover",
                borderRadius: 1,
                mb: 4
              }}
            />

            <Box 
              dangerouslySetInnerHTML={{ __html: article.content }}
              sx={{
                '& h2': {
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  mt: 4,
                  mb: 2
                },
                '& p': {
                  mb: 2,
                  color: "text.secondary",
                  lineHeight: 1.7
                },
                '& ul': {
                  pl: 3,
                  mb: 2
                },
                '& li': {
                  mb: 1,
                  color: "text.secondary"
                }
              }}
            />

            <Stack 
              direction="row" 
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: 4 }}
            >
              <Button
                variant="outlined"
                startIcon={<ShareIcon />}
                size="small"
              >
                Share Article
              </Button>
              <Link href="/concerts" style={{ textDecoration: "none" }}>
                <Button variant="contained">Browse Concerts</Button>
              </Link>
            </Stack>

            <Divider sx={{ my: 6 }} />

            <Typography variant="h4" gutterBottom>
              Related Articles
            </Typography>

            <Stack 
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
            >
              {article.relatedArticles.map((relatedArticle) => (
                <Card 
                  key={relatedArticle.id}
                  sx={{ 
                    flex: 1,
                    '&:hover img': {
                      transform: 'scale(1.05)',
                      transition: 'transform .3s ease-in-out'
                    }
                  }}
                >
                  <Box sx={{ overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={relatedArticle.image || "/placeholder.svg"}
                      alt={relatedArticle.title}
                    />
                  </Box>
                  <CardContent>
                    <Link 
                      href={`/news/${relatedArticle.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography variant="h6" gutterBottom>
                        {relatedArticle.title}
                      </Typography>
                    </Link>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        mb: 2
                      }}
                    >
                      {relatedArticle.excerpt}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {relatedArticle.date}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Stack>
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
