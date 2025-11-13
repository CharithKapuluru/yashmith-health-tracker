# HealthCheck - Symptom Tracker & Early Diagnosis

A modern, responsive web application that helps users identify potential health conditions based on their symptoms and find nearby healthcare providers.

![HealthCheck Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Features

### Comprehensive Symptom Database
- **40+ Symptoms** across 6 major categories:
  - General (Fever, Fatigue, Weakness)
  - Respiratory (Cough, Shortness of Breath, Sore Throat)
  - Digestive (Nausea, Vomiting, Diarrhea)
  - Neurological (Headache, Dizziness, Memory Problems)
  - Skin (Rash, Itching, Swelling)
  - Pain (Muscle Pain, Joint Pain, Back Pain)

### Intelligent Diagnosis System
- **15 Common Conditions** with detailed information
- Smart matching algorithm that calculates symptom overlap
- Match percentage scoring for accuracy
- Severity indicators (Low, Medium, High)
- Detailed condition descriptions

### Treatment Recommendations
- Specific self-care instructions for each condition
- When to seek emergency care guidelines
- Recommended specialist types
- Step-by-step treatment actions

### Healthcare Provider Locator
- Geolocation-based provider search
- Distance calculations
- Contact information and map integration
- Support for hospitals, doctors, and urgent care centers

### User Experience
- Clean, modern interface with gradient design
- Real-time search and filtering
- Responsive design for all devices
- Smooth animations and transitions
- Accessibility-focused design

## Demo

🌐 **Live Demo:** [Visit HealthCheck](https://your-username.github.io/yashmith)

## Screenshots

### Symptom Selection
![Symptom Selection Interface](screenshot-symptoms.png)

### Diagnosis Results
![Diagnosis Results](screenshot-results.png)

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for external resources (fonts, icons)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/yashmith.git
   cd yashmith
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000

     # Python 2
     python -m SimpleHTTPServer 8000

     # Node.js
     npx serve
     ```

3. **Visit:** `http://localhost:8000`

## Usage

1. **Select Symptoms:**
   - Browse symptoms by category or use the search bar
   - Click on symptoms you're experiencing
   - Selected symptoms appear as tags below

2. **Analyze Symptoms:**
   - Click the "Analyze Symptoms" button
   - View matched conditions with percentage scores
   - Read detailed descriptions and matched symptoms

3. **Review Recommendations:**
   - See specific treatment recommendations
   - Check which specialist to consult
   - Read emergency care guidelines

4. **Find Healthcare Providers:**
   - Click "Find Doctors & Hospitals Near Me"
   - Allow location access when prompted
   - View nearby healthcare facilities
   - Get directions and contact information

## Technology Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks, pure JS
- **Geolocation API** - Browser-based location services
- **Google Fonts** - Inter font family

## API Integration (Optional)

The application works fully without external APIs, but you can enhance it with:

### Google Maps Places API
For real healthcare provider data, see [API_SETUP.md](API_SETUP.md) for detailed integration instructions.

**Features with API:**
- Real-time provider search
- Accurate distance calculations
- Ratings and reviews
- Operating hours
- Phone numbers and websites

## Project Structure

```
yashmith/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── app.js             # Application logic and functionality
├── API_SETUP.md       # API integration guide
└── README.md          # Project documentation
```

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

## Medical Disclaimer

**IMPORTANT:** This application provides general health information only and is NOT a substitute for professional medical advice, diagnosis, or treatment.

- Always consult a qualified healthcare provider for medical concerns
- In case of emergency, call your local emergency services immediately
- This tool is for educational and informational purposes only
- Do not use this application for self-diagnosis or treatment decisions

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions
- Add more symptoms and conditions
- Improve diagnosis algorithm
- Add multi-language support
- Implement symptom history tracking
- Add medication interactions database
- Create mobile app version

## Roadmap

- [ ] Multi-language support (Spanish, French, etc.)
- [ ] Symptom history tracking
- [ ] User accounts and profiles
- [ ] Export diagnosis as PDF
- [ ] Medication interaction checker
- [ ] Telemedicine integration
- [ ] Voice input for symptoms
- [ ] Dark mode toggle

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Symptom and condition data compiled from reputable medical sources
- Icons and emoji from system fonts
- Gradient designs inspired by modern health tech applications
- Medical information verified against trusted healthcare resources

## Contact

For questions, suggestions, or feedback:
- **GitHub:** [@your-username](https://github.com/your-username)
- **Email:** your.email@example.com

## Support

If you find this project helpful, please:
- ⭐ Star this repository
- 🐛 Report bugs via GitHub Issues
- 💡 Suggest features via GitHub Discussions
- 🔄 Share with others who might benefit

---

**Built with ❤️ for better health awareness and early diagnosis**

*Remember: This tool complements, but does not replace, professional medical care.*
