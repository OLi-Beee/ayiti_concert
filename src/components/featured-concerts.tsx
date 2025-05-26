import Link from "next/link"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import PlaceIcon from "@mui/icons-material/Place"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import musicFestival from "../../public/images/images.jpg"

export default function FeaturedConcerts() {
  const featuredConcerts = [
    {
      id: 1,
      title: "Kompa Night with Harmonik",
      date: "June 15, 2025",
      time: "8:00 PM",
      location: "Little Haiti Cultural Center, Miami",
      image: musicFestival.src,
      price: "$45",
      featured: true,
      almostSoldOut: true,
    },
    {
      id: 2,
      title: "Tabou Combo Live",
      date: "July 10, 2025",
      time: "9:00 PM",
      location: "Zenith Hall, Port-au-Prince",
      image: musicFestival.src,
      price: "$35",
      featured: true,
      almostSoldOut: false,
    },
    {
      id: 3,
      title: "Haitian Jazz Festival",
      date: "August 5, 2025",
      time: "7:00 PM",
      location: "Parc Historique, Cap-Haïtien",
      image: musicFestival.src,
      price: "$50",
      featured: true,
      almostSoldOut: false,
    },
  ]

  return (
    <section style={{ width: "100%", padding: "48px 0" }}>
      <Box className="container" px={{ xs: 2, md: 6 }}>
        <Stack alignItems="center" textAlign="center" mb={4}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Featured Concerts
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" maxWidth={900}>
            Don't miss these incredible Haitian music events happening soon.
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          flexWrap="wrap"
          justifyContent="center"
          py={6}
          sx={{
            "& > *": {
              width: { xs: "100%", md: "calc(50% - 24px)", lg: "calc(33.333% - 32px)" },
            },
          }}
        >
          {featuredConcerts.map((concert) => (
            <Card
              key={concert.id}
              sx={{
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box position="relative">
                <img
                  src={concert.image || "/placeholder.svg"}
                  alt={concert.title}
                  width={300}
                  height={200}
                  style={{ width: "100%", objectFit: "cover", aspectRatio: "16/9" }}
                />
                {concert.almostSoldOut && (
                  <Chip
                    label="Almost Sold Out"
                    color="error"
                    size="small"
                    sx={{ position: "absolute", top: 8, right: 8 }}
                  />
                )}
              </Box>
              <CardHeader
                title={<Typography variant="h6">{concert.title}</Typography>}
                sx={{ pb: 0 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <CalendarMonthIcon fontSize="small" color="action" />
                    <Typography variant="body2">{concert.date}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <AccessTimeIcon fontSize="small" color="action" />
                    <Typography variant="body2">{concert.time}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <PlaceIcon fontSize="small" color="action" />
                    <Typography variant="body2">{concert.location}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" component="span" fontWeight="bold">
                      {concert.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="span" ml={1}>
                      per ticket
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
              <CardActions sx={{ mt: "auto", px: 2, pb: 2 }}>
                <Link href={`/concerts/${concert.id}`} passHref legacyBehavior>
                  <Button variant="contained" color="primary" fullWidth>
                    Buy Tickets
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </Stack>
        <Box display="flex" justifyContent="center" mt={4}>
          <Link href="/concerts" passHref legacyBehavior>
            <Button variant="outlined" size="large">
              View All Concerts
            </Button>
          </Link>
        </Box>
      </Box>
    </section>
  )
}
