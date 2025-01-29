<div align="center">

# Ham Radio Frequency Logbook

A simple, responsive web application for ham radio operators to log and manage their frequently used radio frequencies. Built with vanilla JavaScript and featuring a clean, dark-themed interface, this application runs entirely in the browser and uses local storage for data persistence.

![Ham-Radio-Logbook](https://github.com/user-attachments/assets/35bee59b-420b-4cd6-acbb-917b90936a6a)

</div>

## Features

- **Frequency Management**
  - Add new frequency entries with name, frequency, mode, tone, and notes
  - Edit existing entries
  - Delete unwanted entries
  - All data persists in browser local storage

- **Backup System**
  - Export your frequency database to CSV file for offline backup
  - Import previously saved CSV backups to restore your data
  - Compatible with spreadsheet applications for easy viewing and editing

- **User Interface**
  - Clean, modern dark theme design
  - Fully responsive layout that works on desktop and mobile devices
  - Sortable table view of all entries
  - Smooth scrolling with custom-styled scrollbars
  - Intuitive form interface for data entry

<div align="center">

## ☕ [Support my work on Ko-Fi](https://ko-fi.com/thatsinewave)

</div>

## Technical Details

The application is built using:
- HTML5
- CSS3 with modern features like Flexbox and CSS Grid
- Vanilla JavaScript (ES6+)
- Local Storage API for data persistence
- File API for CSV import/export functionality

## Setup

1. Clone this repository or download the files
2. No build process or dependencies required
3. Open `index.html` in a modern web browser
4. Start adding your frequencies!

## Browser Support

This application works best in modern browsers that support:
- Local Storage
- File API
- CSS Grid/Flexbox
- ES6+ JavaScript features

<div align="center">

## [Join my discord server](https://discord.gg/2nHHHBWNDw)

</div>

## Data Structure

Frequencies are stored as JSON objects with the following structure:
```javascript
{
    name: "Station Name",
    frequency: "146.520",
    mode: "FM",
    tone: "103.5",
    notes: "Local repeater"
}
```

## Offline Backup Format

The CSV backup file includes the following columns:
- Name
- Frequency
- Mode
- Tone
- Notes

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

