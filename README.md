# 📅 Personal Calendar and Event Tracker

A modern web application for tracking and managing personal events. Easily add, edit, and delete events with a clean interface built using Next.js and TypeScript. All event data is stored locally, making it ideal for personal use or as a starter project for learning full-stack development with React.

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [📁 Folder Structure](#-folder-structure)
- [🔗 Event Data & API](#-event-data--api)
- [⚡ Installation](#-installation)
- [🚀 Usage](#-usage)
- [🎨 Customization](#-customization)
- [🧩 Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [👤 Author](#-author)
- [📄 License](#-license)

---

## 📝 Overview

Personal Calendar and Event Tracker is a single-page application that allows users to manage their events. You can add, edit, and delete events, each with a title, date, time, and description. The app uses modal dialogs for a smooth user experience and stores all event data locally in a JSON file.

---

## ✨ Features

- ➕ Add, edit, and delete events
- 🖱️ User-friendly interface with modal dialogs
- 🗓️ Event fields: title, date, time, description
- 💾 Data stored locally in a JSON file (`data/events.json`)
- ⚠️ Error and loading notifications
- 📱 Responsive design for desktop and mobile
- 🗄️ No external database required

---

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) (React framework)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (or similar utility-first CSS framework)
- [React Icons](https://react-icons.github.io/react-icons/)
- [uuid](https://www.npmjs.com/package/uuid) (for unique event IDs)
- Local JSON data management

---

## 📁 Folder Structure

```
personal-calendar-and-event-tracker/
│
├── app/
│   ├── components/
│   │   ├── AddEvent.tsx
│   │   ├── Event.tsx
│   │   ├── EventList.tsx
│   │   └── Modal.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── data/
│   └── events.json
│
├── public/
│
├── types/
│   └── events.ts
│
├── api.ts
├── package.json
├── README.md
├── tsconfig.json
└── ...
```

---

## 🔗 Event Data & API

- All events are stored in `data/events.json` as an array of objects.
- Each event object contains:
  - `id` (string, unique)
  - `title` (string)
  - `date` (string, format: YYYY-MM-DD)
  - `time` (string, format: HH:mm)
  - `description` (string)
- API functions for adding, editing, and deleting events are defined in `api.ts`.

---

## ⚡ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vlicvn/personal-calendar-n-event-tracker
   cd personal-calendar-and-event-tracker
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open the app:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Usage

- **View Events:** All events are listed on the main page.
- **Add Event:** Click the "Add Event" button and fill out the form in the modal.
- **Edit Event:** Click the edit icon next to an event to update its details.
- **Delete Event:** Click the trash icon to remove an event.
- **All actions** are handled via modal dialogs for a smooth experience.

---

## 🎨 Customization

- **Styling:** Modify `app/globals.css` or use Tailwind CSS classes in components.
- **Event Model:** Update `types/events.ts` to change event fields.
- **Data Storage:** By default, events are stored in `data/events.json`. For production, consider integrating a database.

---

## 🧩 Troubleshooting

- **Events not saving:** Ensure you have write permissions for `data/events.json`.
- **Port conflicts:** Change the default port in `package.json` or use environment variables.
- **Dependency issues:** Run `npm install` to resolve missing packages.

---

## 🤝 Contributing

Contributions are welcome! Fork the repository, create a new branch, and submit a pull request.

---

## 👤 Author

- **Alican** - [GitHub](https://github.com/Vlicvn)

---

## 📄 License

MIT