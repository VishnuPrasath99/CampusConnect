// =============================================
// CampusConnect - App Navigation & Logic
// =============================================
// ---- DATA ----
const EVENTS = [
  {
    id: 'evt1',
    emoji: '💻',
    title: 'Tech Symposium 2026',
    category: 'Symposium',
    date: 'September 12, 2026',
    time: '10:00 AM',
    location: 'Main Auditorium',
    organizer: 'Department of Computer Science',
    participants: 248,
    deadline: 'September 8, 2026',
    contact: 'techsymposium@campus.edu',
    gradient: 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 60%, #8B5CF6 100%)',
    description: 'Join students from different departments for a day of technology talks, project demonstrations, competitions, and networking. This annual symposium brings together the brightest minds on campus to showcase innovative projects and learn from industry experts.',
    schedule: [
      { time: '10:00 AM', event: 'Opening Ceremony' },
      { time: '10:30 AM', event: 'Keynote: Future of AI' },
      { time: '12:00 PM', event: 'Project Demonstrations' },
      { time: '01:00 PM', event: 'Lunch Break' },
      { time: '02:00 PM', event: 'Panel Discussion' },
      { time: '03:30 PM', event: 'Awards Ceremony' },
    ]
  },
  {
    id: 'evt2',
    emoji: '🎨',
    title: 'UI/UX Design Workshop',
    category: 'Workshop',