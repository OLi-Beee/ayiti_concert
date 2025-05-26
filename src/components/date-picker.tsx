"use client"

import * as React from "react"
import Button from "@mui/material/Button"
import Popover from "@mui/material/Popover"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"

export function DatePicker() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [date, setDate] = React.useState<Date | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "date-picker-popover" : undefined

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Button
        aria-describedby={id}
        variant="outlined"
        startIcon={<CalendarMonthIcon />}
        onClick={handleClick}
        fullWidth
        sx={{ justifyContent: "flex-start", textTransform: "none", fontWeight: "normal" }}
      >
        {date ? date.toLocaleDateString() : "Pick a date"}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MuiDatePicker
          value={date}
          onChange={(newValue) => {
            setDate(newValue)
            handleClose()
          }}
          slotProps={{
            textField: { variant: "standard", sx: { display: "none" } }
          }}
        />
      </Popover>
    </LocalizationProvider>
  )
}
