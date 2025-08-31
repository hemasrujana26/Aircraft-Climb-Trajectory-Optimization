# Aircraft Climb Trajectory Optimization Dashboard

A responsive React dashboard for optimizing aircraft climb trajectories to improve fuel efficiency, reduce emissions, and minimize climb time.

## Features

- **Interactive Input Panel**: Configure aircraft type, weather conditions, and flight parameters
- **Real-time Chart Visualization**: Compare standard vs optimized climb profiles using Chart.js
- **Key Performance Metrics**: Display fuel savings, emissions reduction, and time improvements
- **Performance Comparison Table**: Detailed comparison of standard vs optimized climb performance
- **Mobile-Responsive Design**: Clean, pilot-friendly interface that works on all devices
- **Modern UI**: Built with Tailwind CSS for a professional aviation aesthetic

## Screenshots

The dashboard includes:
- Header with aircraft emoji and descriptive subtitle
- Left sidebar with flight parameter inputs
- Main panel with climb trajectory chart
- Key metrics cards showing improvements
- Performance comparison table
- "Run Optimization" button with loading state

## Technology Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Chart.js** - Interactive chart library
- **React Chart.js 2** - React wrapper for Chart.js

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the dashboard in your browser

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── App.js              # Main application component
├── index.js            # React entry point
├── index.css           # Global styles with Tailwind imports
public/
├── index.html          # HTML template
package.json            # Dependencies and scripts
tailwind.config.js      # Tailwind CSS configuration
postcss.config.js       # PostCSS configuration
```

## Features in Detail

### Input Section
- Aircraft type selection (Boeing 737-800, Airbus A320, etc.)
- Weather conditions (wind speed, temperature)
- Flight data (target altitude, aircraft weight)

### Chart Visualization
- Line chart comparing standard vs optimized climb trajectories
- X-axis: Time (minutes)
- Y-axis: Altitude (feet)
- Interactive tooltips and legend

### Key Metrics
- Fuel Saved (kg)
- Emissions Reduced (%)
- Time to Climb (minutes)

### Performance Table
- Fuel Consumption comparison
- Time to Climb comparison
- CO2 Emissions comparison
- Noise Impact assessment

## Customization

### Adding New Aircraft Types
Edit the `aircraftType` select options in `src/App.js`

### Modifying Chart Data
Update the `chartData` object in `src/App.js` to change the climb trajectory visualization

### Styling Changes
Modify `tailwind.config.js` for custom colors and `src/index.css` for additional styles

## Future Enhancements

- Real-time weather data integration
- Multiple optimization algorithms
- Export functionality for flight plans
- 3D trajectory visualization
- Integration with flight planning systems

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
