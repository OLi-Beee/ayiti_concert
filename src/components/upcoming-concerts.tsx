import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Stack from "@mui/material/Stack"
import Chip from "@mui/material/Chip"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

export default function UpcomingConcerts() {
  // This would typically come from an API or database
  const upcomingConcerts = [
    {
      id: 4,
      title: "Mizik Rasin Festival",
      date: "September 12, 2025",
      time: "6:00 PM",
      location: "Champ de Mars, Port-au-Prince",
      price: "$30",
      new: true,
    },
    {
      id: 5,
      title: "Klass Live in Concert",
      date: "October 8, 2025",
      time: "9:00 PM",
      location: "Marriott Hotel, Port-au-Prince",
      price: "$55",
      new: false,
    },
    {
      id: 6,
      title: "T-Vice Summer Party",
      date: "July 25, 2025",
      time: "10:00 PM",
      location: "Decameron Resort, Montrouis",
      price: "$40",
      new: true,
    },
    {
      id: 7,
      title: "RAM Thursday Night",
      date: "Every Thursday",
      time: "9:00 PM",
      location: "Hotel Oloffson, Port-au-Prince",
      price: "$25",
      new: false,
    },
  ]

  return (
    <Box component="section" py={{ xs: 6, md: 12 }}>
      <Container>
        <Stack alignItems="center" textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Upcoming Events
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" maxWidth={900}>
            Plan ahead with these upcoming Haitian concerts and cultural events.
          </Typography>
        </Stack>
        <Box maxWidth="lg" mx="auto" py={6}>
          <Stack spacing={4}>
            {upcomingConcerts.map((concert) => (
              <Card key={concert.id} variant="outlined">
                <CardContent>
                  <Stack 
                    direction={{ xs: "column", md: "row" }}
                    spacing={2}
                    alignItems={{ xs: "center", md: "flex-start" }}
                  >
                    <Box 
                      width={{ xs: "100%", md: "25%" }}
                      textAlign={{ xs: "center", md: "left" }}
                    >
                      <Typography variant="h5" fontWeight="bold">
                        {concert.date.split(",")[0]}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {concert.date.includes(",") ? concert.date.split(",")[1] : ""}
                      </Typography>
                    </Box>
                    <Box width={{ xs: "100%", md: "75%" }}>
                      <Stack spacing={2}>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Typography variant="h6">
                            {concert.title}
                          </Typography>
                          {concert.new && (
                            <Chip
                              label="New"
                              color="success"
                              size="small"
                            />
                          )}
                        </Box>
                        <Stack direction="row" spacing={2}>
                          <Box display="flex" alignItems="center" gap={0.5}>
                            <AccessTimeIcon fontSize="small" color="action" />
                            <Typography variant="body2" color="text.secondary">
                              {concert.time}
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center" gap={0.5}>
                            <LocationOnIcon fontSize="small" color="action" />
                            <Typography variant="body2" color="text.secondary">
                              {concert.location}
                            </Typography>
                          </Box>
                        </Stack>
                        <Typography variant="h6">
                          {concert.price}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
