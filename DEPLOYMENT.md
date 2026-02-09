# Deployment Guide - Bridgerton Valentine's Dance Card

## Deploy on Vercel (Recommended)

### Option 1: Using Vercel GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Bridgerton dance card app"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select your GitHub repository
   - Click "Import"

3. **Configure Vercel Project**
   - Framework: Vite (should auto-detect)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Environment Variables: None required
   - Click "Deploy"

4. **Enable Auto-Deployments**
   - Your project will automatically redeploy when you push to `main` branch
   - Each new commits generates a new preview URL

### Option 2: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy Your Project**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Confirm project settings
   - Your app will be live!

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 3: Deploy Button

Click the deploy button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/bridgerton-dance-card)

## After Deployment

### Testing Your Live App

1. **Visit Your URL**
   - Vercel gives you a unique URL like: `bridgerton-dance-card.vercel.app`
   - Navigate to the home page

2. **Test All Screens**
   - Screen 0: Click "Get Started"
   - Screen 1: Click the card to open form
   - Screen 2: Fill in names and click "Next"
   - Screen 3: Review your card, click "Get Private Link"
   - Screen 4: Copy or share the link

3. **Test Shareable Links**
   - Copy the generated link
   - Open it in a new incognito/private window
   - Verify the card displays correctly (Screen 3 only)
   - Share the link with someone - they should see only the filled card

4. **Test on Mobile**
   - Open your Vercel URL on a phone
   - Ensure all buttons and text are readable
   - Test the form submission on mobile

### Custom Domain

To add a custom domain:

1. In Vercel Dashboard → Your Project Settings
2. Go to "Domains"
3. Add your custom domain (e.g., valentines-dance.com)
4. Follow DNS configuration instructions
5. Domain will be active within 24 hours

## Environment & Architecture

- **Hosting**: Vercel's Edge Network (Fast CDN globally)
- **Runtime**: Node.js (for build only)
- **Storage**: Browser localStorage (no server setup needed!)
- **Bandwidth**: Unlimited
- **Custom Domain**: Free
- **SSL Certificate**: Automatic

## How Shareable Links Work

1. When user generates a link:
   - Unique ID is created: `card_1234567890_abc123def456`
   - Card data stored in localStorage with that ID
   - Link format: `https://yoursite.com/?card=card_1234567890_abc123def456`

2. When recipient opens link:
   - JavaScript reads the `card` parameter
   - Retrieves data from localStorage
   - Displays the filled card (Screen 3)
   - Cannot edit or modify the card

3. Data Persistence:
   - Data stored locally on each browser
   - Each browser/device has separate storage
   - Data persists unless user clears browser data

## Performance Metrics

Expected performance on Vercel:
- **Load Time**: < 1 second
- **First Contentful Paint**: < 800ms
- **Lighthouse Score**: 95+
- **Bundle Size**: ~65KB gzipped

## Troubleshooting

### Deployment Issues

**Build fails with "Node version mismatch"**
- Solution: Add to `package.json`:
  ```json
  "engines": {
    "node": "18.x"
  }
  ```

**404 on refresh (SPA routing issue)**
- Solution: vercel.json already configured to redirect all routes to index.html

**Shareable links not working**
- Check browser console for errors
- Verify localStorage is enabled
- Test in incognito mode (separate localStorage)

### Performance Issues

**Slow load time**
- Check network tab in DevTools
- Verify assets are cached (should be cached for 1 year)
- Consider enabling Vercel Analytics

## Monitoring & Analytics

### Enable Vercel Analytics
1. Dashboard → Settings → Analytics
2. Toggle "Web Analytics" ON
3. View real-time metrics

### Enable Vercel Speed Insights
1. Dashboard → Settings → Speed Insights
2. Toggle "Speed Insights" ON
3. Track Core Web Vitals

## Maintenance

### Regular Updates

When you update code:
```bash
git add .
git commit -m "Description of changes"
git push origin main  # Auto-deploys if connected to GH
```

### Environment Variables (if needed)
1. Dashboard → Settings → Environment Variables
2. Add variables (none needed for this app currently)
3. Redeploy after adding

## Security

✅ **What's Secure:**
- HTTPS by default
- No sensitive data on server
- Data stored only in user's browser
- No authentication needed

⚠️ **Important Notes:**
- Shareable links are predictable - anyone with the link can see the card
- No password protection on shared cards
- Use PRIVATE sharing links (not public social media)

## Rollback to Previous Version

If something goes wrong:
1. Dashboard → Deployments
2. Find the working deployment
3. Click "Promote to Production"

## Analytics to Monitor

- **Visitors**: Track popularity
- **Page Load Time**: Monitor performance
- **Error Rates**: Watch for bugs
- **Geographic Data**: See where visitors come from

## Next Steps

1. ✅ Deploy initial version
2. 📊 Monitor performance
3. 🎨 Consider adding custom images
4. 🚀 Add to your wedding website
5. 💬 Share with friends!

## Support

If you encounter issues:
- Check Vercel Status Page: [status.vercel.com](https://status.vercel.com)
- Review Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Check browser console for errors (F12)

## Success! 🎉

Your Bridgerton Dance Card app is now live and shareable!

Share the link with your Valentine and enjoy! 💕
