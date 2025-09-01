# OO Studio Website - Claude Development Notes

## Environment Setup
```bash
export GEMINI_API_KEY="AIzaSyDpTckFXFt2_sZ9ChHIwUxd9SF-QGrTZ10"
```

## Development Commands
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Run linting
```

## Project Structure
- Next.js 15.5.2 with App Router and Turbopack
- TypeScript for type safety
- Tailwind CSS 4.0 for styling
- Three.js for 3D animations
- Component-based architecture

## Key Features
1. **Loading Animation**: Multi-stage logo animation with "OO Studio" text
2. **3D Glass Rings**: CSS-based rotating rings animation
3. **Scroll Effects**: Background color transition (black → white)
4. **Hero Text**: "伝える以上に響かせる" with scroll-linked fade effects
5. **Card System**: Cartazero-inspired genre cards for services and projects

## Recent Updates
- Implemented Cartazero-style card design system
- Added scroll-linked text effects for hero section
- Updated projects section with actual images and videos
- Removed unnecessary action buttons from project cards