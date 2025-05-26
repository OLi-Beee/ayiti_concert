import React from "react"
import Link from "next/link"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import TextField from "@mui/material/TextField"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import ShareIcon from "@mui/icons-material/Share"
import FavoriteIcon from "@mui/icons-material/Favorite"
import LocalActivityIcon from "@mui/icons-material/LocalActivity"
import { useMediaQuery } from "@mui/material"

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </Box>
  );
}

export default function ConcertPage({ params }: { params: { id: string } }) {
  const [tabValue, setTabValue] = React.useState(0);
  const [ticketType, setTicketType] = React.useState('');
  const [quantity, setQuantity] = React.useState('1');
  const isMobile  = useMediaQuery('(max-width:600px)');

  // This would typically come from an API or database based on the ID
  const concert = {
    id: Number.parseInt(params.id),
    title: "Kompa Night with Harmonik",
    date: "June 15, 2025",
    
    time: "8:00 PM - 1:00 AM",
    location: "Little Haiti Cultural Center",
    address: "212 NE 59th Terrace, Miami, FL 33137",
    image: "/placeholder.svg?height=400&width=800",
    price: "$45",
    vipPrice: "$85",
    description:
      "Join us for an unforgettable night of Kompa music featuring the internationally acclaimed band Harmonik. Experience the vibrant rhythms and melodies that have made Haitian Kompa famous worldwide. This event will showcase Harmonik's greatest hits along with some of their newest releases.",
    aboutArtist:
      "Harmonik is one of Haiti's premier Kompa bands, known for their energetic performances and innovative sound. Formed in 2000, the band has released multiple hit albums and has toured extensively throughout the Caribbean, North America, and Europe. Their unique blend of traditional Kompa with modern influences has earned them a dedicated following both in Haiti and among the Haitian diaspora.",
    ticketTypes: [
      { type: "General Admission", price: "$45", available: true },
      { type: "VIP", price: "$85", available: true },
      { type: "Group (5+ tickets)", price: "$40 each", available: true },
    ],
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Box component="header" sx={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 50, 
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper' 
      }}>
        <Container>
          <Stack 
            direction="row" 
            justifyContent="space-between" 
            alignItems="center" 
            sx={{ height: 64 }}
          >
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" color="primary.main">Ayiti</Box>
                Concerts
              </Typography>
            </Link>

            <Stack 
              direction="row" 
              spacing={3} 
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              {['All Concerts', 'News', 'Book an Artist', 'About'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography sx={{ '&:hover': { textDecoration: 'underline' } }}>
                    {item}
                  </Typography>
                </Link>
              ))}
            </Stack>

            <Stack direction="row" spacing={2}>
              <Link href="/account/login" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" size="small">Log in</Button>
              </Link>
              <Link 
                href="/account/register" 
                style={{ 
                  textDecoration: 'none',
                  display: isMobile ? 'none' : 'block'
                }}
              >
                <Button variant="contained" size="small">Sign up</Button>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        <Box sx={{ 
          position: 'relative',
          height: { xs: 300, md: 400 },
          width: '100%',
          overflow: 'hidden'
        }}>
          <Box
            component="img"
            src={concert.image}
            alt={concert.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <Box sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)'
          }} />
        </Box>

        <Container sx={{ py: 8 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
            <Box sx={{ flex: 2 }}>
              <Stack spacing={4}>
                <Stack spacing={2}>
                  <Typography variant="h3" fontWeight="bold">
                    {concert.title}
                  </Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    <Chip
                      icon={<CalendarTodayIcon />}
                      label={concert.date}
                      variant="outlined"
                    />
                    <Chip
                      icon={<AccessTimeIcon />}
                      label={concert.time}
                      variant="outlined"
                    />
                    <Chip
                      icon={<LocationOnIcon />}
                      label={concert.location}
                      variant="outlined"
                    />
                  </Stack>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <Button startIcon={<ShareIcon />} variant="outlined">
                    Share
                  </Button>
                  <Button startIcon={<FavoriteIcon />} variant="outlined">
                    Save
                  </Button>
                </Stack>

                <Box>
                  <Tabs 
                    value={tabValue} 
                    onChange={(e, newValue) => setTabValue(newValue)}
                  >
                    <Tab label="Details" />
                    <Tab label="Artist" />
                    <Tab label="Venue" />
                  </Tabs>

                  <TabPanel value={tabValue} index={0}>
                    <div>
                      <h2 className="text-xl font-bold">About This Event</h2>
                      <p className="mt-2 text-muted-foreground">{concert.description}</p>
                    </div>
                    <div>
                      <h3 className="font-bold">Ticket Information</h3>
                      <ul className="mt-2 space-y-2">
                        {concert.ticketTypes.map((ticket, index) => (
                          <li key={index} className="flex items-center justify-between">
                            <span>{ticket.type}</span>
                            <span className="font-medium">{ticket.price}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t">
                        <h3 className="font-bold">Interested in booking this artist?</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Contact the artist's management team to book them for your own event.
                        </p>
                        <Link href="/book-artist" className="mt-2 inline-block">
                          <Button variant="outline" size="sm">
                            Contact Artist Management
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value={tabValue} index={1}>
                    <div>
                      <h2 className="text-xl font-bold">About the Artist</h2>
                      <p className="mt-2 text-muted-foreground">{concert.aboutArtist}</p>
                    </div>
                  </TabPanel>
                  <TabPanel value={tabValue} index={2}>
                    <div>
                      <h2 className="text-xl font-bold">Venue Information</h2>
                      <p className="mt-2 text-muted-foreground">
                        {concert.location}
                        <br />
                        {concert.address}
                      </p>
                    </div>
                    <div className="aspect-video overflow-hidden rounded-lg border">
                      <img
                        src="/placeholder.svg?height=300&width=600"
                        alt="Venue map"
                        className="h-full w-full object-cover"
                        width={600}
                        height={300}
                      />
                    </div>
                  </TabPanel>
                </Box>
              </Stack>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Card>
                <CardContent>
                  <Stack spacing={3}>
                    <Stack spacing={1}>
                      <Typography variant="h6">Get Tickets</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Secure your spot at this amazing event.
                      </Typography>
                    </Stack>

                    <FormControl fullWidth>
                      <InputLabel>Ticket Type</InputLabel>
                      <Select
                        value={ticketType}
                        label="Ticket Type"
                        onChange={(e) => setTicketType(e.target.value)}
                      >
                        <MenuItem value="general">General Admission - $45</MenuItem>
                        <MenuItem value="vip">VIP - $85</MenuItem>
                        <MenuItem value="group">Group (5+ tickets) - $40 each</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl fullWidth>
                      <InputLabel>Quantity</InputLabel>
                      <Select
                        value={quantity}
                        label="Quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                      >
                        {[...Array(10)].map((_, i) => (
                          <MenuItem key={i + 1} value={String(i + 1)}>
                            {i + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <TextField
                      label="Promo Code"
                      placeholder="Enter promo code"
                      fullWidth
                    />

                    <Stack spacing={1}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography>Ticket Price</Typography>
                        <Typography>$45.00</Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography>Service Fee</Typography>
                        <Typography>$5.00</Typography>
                      </Stack>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography fontWeight="bold">Total</Typography>
                        <Typography fontWeight="bold">$50.00</Typography>
                      </Stack>
                    </Stack>

                    <Button 
                      variant="contained" 
                      fullWidth
                      startIcon={<LocalActivityIcon />}
                    >
                      Buy Tickets
                    </Button>

                    <Typography variant="caption" align="center" color="text.secondary">
                      By purchasing tickets, you agree to our terms of service.
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box 
        component="footer" 
        sx={{ 
          py: { xs: 3, md: 4 }, 
          borderTop: 1, 
          borderColor: 'divider'
        }}
      >
        <Container>
          <Stack 
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            spacing={2}
          >
            <Stack alignItems={{ xs: 'center', md: 'flex-start' }} spacing={1}>
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box component="span" color="primary.main">Ayiti</Box>
                  Concerts
                </Typography>
              </Link>
              <Typography variant="body2" color="text.secondary">
                Connecting Haitian culture with music lovers since 2023.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              {['Terms', 'Privacy', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
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
