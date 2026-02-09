# Bridgerton Valentine's Dance Card 💌

A beautiful, romantic React application inspired by Bridgerton for creating and sharing personalized Valentine's dance cards.

## Features

✨ **Four-Screen Experience:**
- **Screen 0**: Landing page with elegant introduction
- **Screen 1**: Blank dance card with glowing animation
- **Screen 2**: Interactive modal form to fill in recipient and sender names
- **Screen 3**: Preview of the filled dance card
- **Screen 4**: Shareable link generation with copy & social share options

🎨 **Design Highlights:**
- Elegant Bridgerton-inspired aesthetic with parchment/aged paper styling
- Responsive mobile-friendly design
- Smooth animations and transitions
- Glowing border effects on interactive elements
- Beautiful serif fonts (Playfair Display & Crimson Text)

🔗 **Shareable Links:**
- Generate unique URLs for each dance card
- Share via email, WhatsApp, or direct link copy
- Recipients view only the completed card
- Works on any device without login

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation & Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# The app will be available at http://localhost:5173/
```

### Building for Production

```bash
npm run build

# Preview the production build
npm run preview
```

## Deployment on Vercel

### One-Click Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/bridgerton)

### Manual Deployment

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Import your project
4. Vercel will automatically detect the Vite configuration
5. Deploy!

The application uses `localStorage` to store dance card data, which works seamlessly with Vercel's static hosting.

## How It Works

1. **Create**: Users enter recipient and sender names in an elegant modal form
2. **View**: The completed dance card is displayed with names integrated
3. **Share**: A unique shareable link is generated for each card
4. **Receive**: Recipients view the beautiful card when they open the link

## Technical Stack

- **Framework**: React 19 with hooks
- **Build Tool**: Vite
- **Styling**: Inline styles + CSS animations
- **Storage**: Browser localStorage for card data
- **Fonts**: Google Fonts (Playfair Display, Crimson Text)
- **Hosting**: Vercel

## Project Structure

```
src/
├── App.jsx              # Main app component with routing logic
├── App.css             # Global styles and animations
├── index.css           # Base styles
├── main.jsx            # React entry point
└── screens/
    ├── Screen0.jsx     # Landing page
    ├── Screen1.jsx     # Blank dance card
    ├── Screen2.jsx     # Form modal
    ├── Screen3.jsx     # Filled card preview
    └── Screen4.jsx     # Shareable link
```

## Color Palette

- **Primary**: #C19A6B (Champagne)
- **Dark**: #8B4513 (Saddle Brown)
- **Light**: #F5F5DC (Floral White)
- **Accent**: #4A3728 (Darkened Brown)

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Created for romantic occasions. Share freely with loved ones! 💕

## Future Enhancement Ideas

- Custom background images
- Multiple card designs
- PDF export functionality
- Guest list management
- Real-time collaboration features

