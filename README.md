# ✨ Magical Storybook Creator

A delightful children's storybook webapp that uses Google's Gemini AI to create personalized stories with illustrations.

## 🌟 Features

- **Personalized Stories**: Create unique stories based on child's name, age, and preferences
- **AI-Generated Illustrations**: Beautiful artwork generated using Gemini's Imagen model
- **Interactive UI**: Child-friendly interface with animations and sparkles
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Multiple Themes**: Space adventures, underwater exploration, magical forests, and more

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- A Gemini API key from Google AI Studio

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your Gemini API key:**
   - Open `storybook.html`
   - Find the line: `const apiKey = "";`
   - Replace the empty string with your API key: `const apiKey = "YOUR_API_KEY_HERE";`

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Go to `http://localhost:3000`
   - Start creating magical stories!

### Production Deployment

#### Option 1: Deploy to Heroku

1. **Create a Heroku account** and install the Heroku CLI

2. **Login to Heroku:**
   ```bash
   heroku login
   ```

3. **Create a new Heroku app:**
   ```bash
   heroku create your-storybook-app-name
   ```

4. **Deploy:**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push heroku main
   ```

5. **Open your app:**
   ```bash
   heroku open
   ```

#### Option 2: Deploy to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your app will be live!

#### Option 3: Deploy to Netlify

1. **Create a `netlify.toml` file:**
   ```toml
   [build]
     publish = "."
     command = "npm start"
   ```

2. **Deploy via Netlify dashboard** or CLI

#### Option 4: Deploy to Railway

1. **Connect your GitHub repository** to Railway
2. **Railway will automatically detect** the Node.js app
3. **Add your environment variables** (API key)
4. **Deploy with one click**

## 🔧 Configuration

### Environment Variables (Recommended for Production)

Instead of hardcoding your API key, use environment variables:

1. **Create a `.env` file:**
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

2. **Update the JavaScript in `storybook.html`:**
   ```javascript
   const apiKey = process.env.GEMINI_API_KEY || 'your_fallback_key';
   ```

3. **Add environment variables to your hosting platform**

### Customization

- **Themes**: Add new adventure themes in the HTML select options
- **Styling**: Modify the CSS in the `<style>` section
- **Story Length**: Change the number of pages in the prompt
- **Age Range**: Adjust the age options in the form

## 📱 Usage

1. **Fill out the form** with the child's details:
   - Name
   - Age (3-10 years)
   - Adventure theme
   - Favorite animal
   - Upload a photo of the child

2. **Click "Create My Magical Story!"**

3. **Wait for generation** (this may take 30-60 seconds)

4. **Navigate through the story** using Previous/Next buttons

5. **Create another story** or start over

## 🛠️ Technical Details

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js with Express
- **AI**: Google Gemini API (text generation + image generation)
- **Styling**: Tailwind CSS
- **Animations**: CSS keyframes and transforms

## 🔒 Security Notes

- **Never commit API keys** to version control
- **Use environment variables** for production deployments
- **Consider rate limiting** for public deployments
- **Monitor API usage** to avoid unexpected costs

## 🐛 Troubleshooting

### Common Issues

1. **"Failed to generate story" error:**
   - Check your API key is correct
   - Verify you have sufficient API quota
   - Ensure the API key has access to Gemini models

2. **Images not generating:**
   - Check Imagen model access
   - Verify image prompts are appropriate
   - Monitor API response for errors

3. **Server won't start:**
   - Ensure Node.js is installed (version 14+)
   - Check port 3000 isn't in use
   - Verify all dependencies are installed

### Getting Help

- Check the browser console for detailed error messages
- Verify your Gemini API key is active and has proper permissions
- Ensure you're using the correct model names in the API calls

## 📄 License

MIT License - feel free to use this project for educational or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Made with ❤️ for children's education and creativity**
