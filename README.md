# B.Sc. Psychology Study Portal

A modern, colorful, and interactive web application for B.Sc. Psychology students to access course materials, lecture recordings, and study notes organized by semester, subject, and chapter.

## 🌟 Features

- **8 Semester Structure** - Navigate through all semesters easily
- **Subject-wise Organization** - Browse subjects within each semester
- **Chapter & Topic Navigation** - Detailed chapter-wise content with topics
- **Study Materials** - Download PDFs, view images, and access lecture recordings
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Colorful & Interactive UI** - Modern gradient designs with smooth animations
- **Easy to Update** - Simple JSON-based content management

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Project-IMS201125
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deploying to GitHub Pages

### Setup Instructions:

1. **Create a GitHub repository** named `<username>.github.io` (replace `<username>` with your GitHub username)

2. **Push your code** to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```

3. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages (in the left sidebar)
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
   
4. **Update vite.config.ts** (if using a custom domain or different repo name):
   - For `<username>.github.io`: Keep `base: '/'`
   - For custom repo: Change to `base: '/repo-name/'`

5. **Deploy**: The GitHub Action will automatically deploy when you push to main branch

Your site will be available at: `https://<username>.github.io`

## 📝 Updating Content

All course content is stored in `src/data/courseData.json`. To add or update content:

1. Open `src/data/courseData.json`
2. Add new subjects, chapters, topics, notes, or recordings
3. Commit and push changes
4. GitHub Actions will automatically rebuild and deploy

### Structure:
```json
{
  "semesters": [
    {
      "id": 1,
      "subjects": [
        {
          "id": "SUBJECT-CODE",
          "name": "Subject Name",
          "chapters": [
            {
              "name": "Chapter Name",
              "topics": [
                {
                  "title": "Topic Title",
                  "notes": [...],
                  "recordings": [...]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## 🎨 Customization

### Colors
Edit CSS custom properties in `src/index.css`:
```css
:root {
  --primary-color: #6366F1;
  --secondary-color: #EC4899;
  --accent-color: #10B981;
  /* ... */
}
```

### College Information
Update in `src/data/courseData.json`:
```json
{
  "collegeName": "Your College Name",
  "collegeTagline": "Your Tagline",
  "courseName": "Your Course Name"
}
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Navigation
- **CSS3** - Styling with gradients and animations

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Laptops (1024px and up)
- 🖥️ Desktops (1440px and up)

## 📄 License

This project is free to use for educational purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

---

Built with ❤️ for Psychology Students
