// Example API Configuration
// Copy this file to config.js and replace with your actual API keys
// For production, these should be loaded from environment variables

const config = {
    GEMINI_API_KEY: "your_gemini_api_key_here",
    OPENAI_API_KEY: "your_openai_api_key_here"
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
} else {
    // For browser environment
    window.API_CONFIG = config;
}
