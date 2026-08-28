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
    date: 'September 18, 2026',
    time: '2:00 PM',
    location: 'Design Lab, Block C',
    organizer: 'Design Club & IT Department',
    participants: 60,
    deadline: 'September 15, 2026',
    contact: 'designclub@campus.edu',
    gradient: 'linear-gradient(135deg, #BE185D 0%, #EC4899 100%)',
    description: 'A hands-on workshop exploring the fundamentals of UI/UX design. Learn how to create wireframes, prototypes, and user-centered designs using industry-standard tools like Figma. Perfect for beginners and intermediate designers alike.',
    schedule: [
      { time: '2:00 PM', event: 'Introduction to UI/UX' },
      { time: '3:00 PM', event: 'Figma Hands-On Session' },
      { time: '4:00 PM', event: 'Design Challenge' },
      { time: '5:00 PM', event: 'Showcase & Feedback' },
    ]
  },
  {
    id: 'evt3',
    emoji: '⚡',
    title: 'CodeSprint 2026',
    category: 'Competition',
    date: 'September 25, 2026',
    time: '9:00 AM',
    location: 'Computer Lab, Block A',
    organizer: 'Coding Club',
    participants: 120,
    deadline: 'September 20, 2026',
    contact: 'codingclub@campus.edu',
    gradient: 'linear-gradient(135deg, #065F46 0%, #10B981 100%)',
    description: 'A 6-hour competitive programming sprint. Solve algorithmic challenges, earn points, and compete for exciting prizes. Open to all students — from beginners to advanced coders. Teams of 2 allowed.',
    schedule: [
      { time: '9:00 AM', event: 'Registration & Setup' },
      { time: '9:30 AM', event: 'Problem Set Released' },
      { time: '12:30 PM', event: 'Midpoint Checkpoint' },
      { time: '3:30 PM', event: 'Contest Ends' },
      { time: '4:00 PM', event: 'Results & Prize Ceremony' },
    ]
  },
  {
    id: 'evt4',
    emoji: '💼',
    title: 'Placement Prep Session',
    category: 'Placement',
    date: 'October 2, 2026',
    time: '10:30 AM',
    location: 'Seminar Hall',
    organizer: 'Training & Placement Cell',
    participants: 300,
    deadline: 'September 28, 2026',
    contact: 'placements@campus.edu',
    gradient: 'linear-gradient(135deg, #92400E 0%, #F59E0B 100%)',
    description: 'Comprehensive placement preparation session covering aptitude, technical rounds, group discussions, and HR interviews. Industry professionals will share insights on cracking top-tier companies. Mandatory for final-year students.',
    schedule: [
      { time: '10:30 AM', event: 'Aptitude Training' },
      { time: '12:00 PM', event: 'Technical Interview Tips' },
      { time: '01:30 PM', event: 'Mock GD Session' },
      { time: '02:30 PM', event: 'HR Round Prep' },
      { time: '04:00 PM', event: 'Q&A with Recruiters' },
    ]
  }
];

const ANNOUNCEMENTS = [
  {
    id: 'ann1',
    title: 'Campus Placement Drive — TCS',
    category: 'Placement',
    desc: 'Registration is now open for the upcoming Tata Consultancy Services campus recruitment drive. Final year students from CSE, IT, and ECE are eligible.',
    date: 'Aug 25, 2026',
    important: true
  },
  {
    id: 'ann2',
    title: 'Mid-Semester Examination Schedule',
    category: 'Academics',
    desc: 'The mid-semester examination schedule for all departments has been released. Check the academic portal for your timetable.',
    date: 'Aug 22, 2026',
    important: false
  },
  {
    id: 'ann3',
    title: 'Annual Sports Day — Registrations Open',
    category: 'Events',
    desc: 'Register now for the Annual Sports Day 2026. Multiple disciplines available including Athletics, Cricket, Basketball, and Chess.',
    date: 'Aug 20, 2026',
    important: false
  },
  {
    id: 'ann4',
    title: 'New Club Registrations for 2026-27',
    category: 'Clubs',
    desc: 'Applications are open for joining all student clubs for the academic year 2026-27. Limited seats available. Apply by September 5.',
    date: 'Aug 18, 2026',
    important: true
  },
  {
    id: 'ann5',
    title: 'Library Timing Update',
    category: 'General',
    desc: 'The central library will now be open from 8:00 AM to 10:00 PM on all working days including Saturdays.',
    date: 'Aug 15, 2026',
    important: false
  },
  {
    id: 'ann6',
    title: 'WiFi Upgrade Scheduled — Downtime Alert',
    category: 'General',
    desc: 'Campus WiFi will undergo a major upgrade on September 1st from 12:00 AM to 6:00 AM. Expect temporary downtime.',
    date: 'Aug 14, 2026',
    important: false
  }
];

const CLUBS = [
  { id: 'cl1', emoji: '💻', name: 'Coding Club', desc: 'Learn, build and participate in coding competitions and hackathons.', members: 342, category: 'Technical', gradient: 'linear-gradient(135deg, #5B21B6, #8B5CF6)' },
  { id: 'cl2', emoji: '🎨', name: 'Design Guild', desc: 'Explore UI/UX, graphic design, and creative arts on campus.', members: 186, category: 'Creative', gradient: 'linear-gradient(135deg, #BE185D, #EC4899)' },
  { id: 'cl3', emoji: '📷', name: 'Photography Club', desc: 'Capture campus moments, learn photography techniques and editing.', members: 124, category: 'Arts', gradient: 'linear-gradient(135deg, #1D4ED8, #3B82F6)' },
  { id: 'cl4', emoji: '🎭', name: 'Drama Society', desc: 'Theater, acting workshops, annual cultural performances.', members: 98, category: 'Cultural', gradient: 'linear-gradient(135deg, #065F46, #10B981)' },
  { id: 'cl5', emoji: '🤖', name: 'Robotics Club', desc: 'Build robots, participate in national-level competitions.', members: 210, category: 'Technical', gradient: 'linear-gradient(135deg, #92400E, #F59E0B)' },
  { id: 'cl6', emoji: '🎵', name: 'Music Club', desc: 'Jam sessions, performances, and annual music festivals.', members: 156, category: 'Cultural', gradient: 'linear-gradient(135deg, #7C2D12, #F97316)' }
];

const NOTIFICATIONS = [
  { id: 'n1', emoji: '🔔', iconBg: '#EDE9FE', title: 'Event Reminder', text: 'Tech Symposium 2026 starts tomorrow at 10:00 AM. Don\'t forget your student ID!', time: '2 hours ago', unread: true },
  { id: 'n2', emoji: '✅', iconBg: '#D1FAE5', title: 'Registration Confirmed', text: 'Your registration for Tech Symposium 2026 is confirmed. ID: CC-2026-4821', time: 'Yesterday', unread: true },
  { id: 'n3', emoji: '📢', iconBg: '#DBEAFE', title: 'New Announcement', text: 'TCS Campus Placement Drive registration is now open. Check announcements.', time: '2 days ago', unread: false },
  { id: 'n4', emoji: '⏰', iconBg: '#FEF3C7', title: 'Registration Deadline', text: 'Registration for UI/UX Design Workshop closes in 3 days. Register now!', time: '3 days ago', unread: false },
  { id: 'n5', emoji: '🏆', iconBg: '#D1FAE5', title: 'CodeSprint Update', text: 'CodeSprint 2026 problem sets will be released 30 minutes before the event.', time: '4 days ago', unread: false },
  { id: 'n6', emoji: '👥', iconBg: '#EDE9FE', title: 'Club Update', text: 'Coding Club has opened registrations for 2026-27. Apply before September 5!', time: '5 days ago', unread: false }
];

// ---- STATE ----
let currentScreen = 'splash-screen';
let selectedEvent = EVENTS[0];
let registeredEvents = [EVENTS[0]]; // Pre-registered for demo
let currentTab = 'upcoming';
let screenHistory = [];

// ---- NAVIGATION ----
function showScreen(id, direction = 'forward') {
  const current = document.getElementById(currentScreen);
  const next = document.getElementById(id);
  if (!next || currentScreen === id) return;

  if (direction === 'forward') {
    screenHistory.push(currentScreen);
    next.classList.add('slide-enter');
    current.classList.add('slide-exit');
    setTimeout(() => {
      current.classList.remove('active', 'slide-exit');
      next.classList.remove('slide-enter');
      next.classList.add('active');
    }, 350);
  } else {
    next.classList.add('slide-back-enter');
    current.classList.add('slide-back-exit');
    setTimeout(() => {
      current.classList.remove('active', 'slide-back-exit');
      next.classList.remove('slide-back-enter');
      next.classList.add('active');
    }, 350);
  }

  currentScreen = id;
  updateBottomNav(id);
}

function goBack() {
  if (screenHistory.length === 0) return;
  const prev = screenHistory.pop();
  showScreen(prev, 'back');
}

function updateBottomNav(screenId) {
  const map = {
    'home-screen': 'nav-home',
    'announcements-screen': 'nav-explore',
    'clubs-screen': 'nav-explore',
    'my-events-screen': 'nav-myevents',
    'notifications-screen': 'nav-notifications',
    'profile-screen': 'nav-profile'
  };
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const target = map[screenId];
  if (target) document.getElementById(target)?.classList.add('active');
}

// ---- RENDER HELPERS ----
function renderEventCard(ev, isSmall = false) {
  const el = document.createElement('div');
  el.className = 'event-card';
  el.innerHTML = `
    <div class="event-card-image" style="background:${ev.gradient}">
      <span style="font-size:40px">${ev.emoji}</span>
      <span class="event-category-badge">${ev.category}</span>
    </div>
    <div class="event-card-body">
      <div class="event-card-title">${ev.title}</div>
      <div class="event-card-meta">
        <div class="event-meta-row"><span>📅</span> ${ev.date}</div>
        <div class="event-meta-row"><span>🕐</span> ${ev.time}</div>
        <div class="event-meta-row"><span>📍</span> ${ev.location}</div>
      </div>
      <button class="btn btn-primary btn-sm" style="width:100%" onclick="openEventDetail('${ev.id}')">View Details</button>
    </div>
  `;
  return el;
}

function renderAnnCard(ann) {
  const el = document.createElement('div');
  el.className = `announcement-card${ann.important ? ' important' : ''}`;
  el.innerHTML = `
    <div class="flex-between mb-4">
      <span class="badge ${ann.important ? 'badge-important' : 'badge-upcoming'}" style="font-size:11px">${ann.category}</span>
      ${ann.important ? '<span class="badge badge-important">⚡ Important</span>' : ''}
    </div>
    <div class="announcement-title">${ann.title}</div>
    <div class="announcement-desc">${ann.desc}</div>
    <div class="announcement-footer">
      <span style="font-size:12px;color:var(--text-tertiary)">📅 ${ann.date}</span>
      <button class="btn btn-secondary btn-sm" style="width:auto;height:34px;padding:0 12px;font-size:12px">Read More</button>
    </div>
  `;
  return el;
}

function renderClubCard(club) {
  const el = document.createElement('div');
  el.className = 'club-card';
  el.innerHTML = `
    <div class="club-card-header" style="background:${club.gradient}">
      <span>${club.emoji}</span>
    </div>
    <div class="club-card-body">
      <div class="club-name">${club.name}</div>
      <div class="club-desc">${club.desc}</div>
      <div class="club-meta">
        <span>👥 ${club.members} members</span>
        <button class="btn btn-primary btn-sm" style="width:auto;height:30px;padding:0 12px;font-size:12px">View</button>
      </div>
    </div>
  `;
  return el;
}

function renderNotificationItem(n) {
  const el = document.createElement('div');
  el.className = 'notification-item';
  el.innerHTML = `
    <div class="notification-icon" style="background:${n.iconBg}">${n.emoji}</div>
    <div class="notification-content">
      <div class="notification-title">${n.title}</div>
      <div class="notification-text">${n.text}</div>
      <div class="notification-time">${n.time}</div>
    </div>
    ${n.unread ? '<div class="notification-dot"></div>' : ''}
  `;
  return el;
}

// ---- SCREEN INIT FUNCTIONS ----
function initHomeScreen() {
  // Featured event
  const featured = EVENTS[0];
  const featuredEl = document.querySelector('.featured-event');
  if (featuredEl) {
    featuredEl.style.background = featured.gradient;
    featuredEl.querySelector('.featured-title').textContent = featured.title;
    featuredEl.querySelector('.featured-date').textContent = `📅 ${featured.date}`;
    featuredEl.querySelector('.featured-time').textContent = `🕐 ${featured.time}`;
    featuredEl.querySelector('.featured-loc').textContent = `📍 ${featured.location}`;
    featuredEl.onclick = () => openEventDetail(featured.id);
  }

  // Events list
  const eventsContainer = document.getElementById('events-list');
  if (eventsContainer) {
    eventsContainer.innerHTML = '';
    EVENTS.slice(1).forEach(ev => {
      eventsContainer.appendChild(renderEventCard(ev));
    });
  }

  // Category filter
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', function() {
      document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      const cat = this.dataset.cat;
      filterEvents(cat);
    });
  });
}

function filterEvents(cat) {
  const eventsContainer = document.getElementById('events-list');
  const filtered = cat === 'All' ? EVENTS : EVENTS.filter(e => e.category.toLowerCase() === cat.toLowerCase() || e.category === cat);
  eventsContainer.innerHTML = '';
  filtered.forEach(ev => eventsContainer.appendChild(renderEventCard(ev)));
}

function openEventDetail(id) {
  selectedEvent = EVENTS.find(e => e.id === id) || EVENTS[0];
  renderEventDetail();
  showScreen('event-detail-screen');
}

function renderEventDetail() {
  const ev = selectedEvent;
  document.getElementById('detail-banner-emoji').textContent = ev.emoji;
  document.getElementById('detail-banner').style.background = ev.gradient;
  document.getElementById('detail-title').textContent = ev.title;
  document.getElementById('detail-category').textContent = ev.category;
  document.getElementById('detail-date').textContent = ev.date;
  document.getElementById('detail-time').textContent = ev.time;
  document.getElementById('detail-location').textContent = ev.location;
  document.getElementById('detail-organizer').textContent = ev.organizer;
  document.getElementById('detail-deadline').textContent = ev.deadline;
  document.getElementById('detail-participants').textContent = `${ev.participants} registered`;
  document.getElementById('detail-contact').textContent = ev.contact;
  document.getElementById('detail-description').textContent = ev.description;

  const scheduleEl = document.getElementById('detail-schedule');
  scheduleEl.innerHTML = '';
  ev.schedule.forEach(s => {
    const row = document.createElement('div');
    row.className = 'schedule-item';
    row.innerHTML = `<div class="schedule-time">${s.time}</div><div class="schedule-event-title">${s.event}</div>`;
    scheduleEl.appendChild(row);
  });

  // Check if already registered
  const isReg = registeredEvents.some(e => e.id === ev.id);
  const regBtn = document.getElementById('detail-register-btn');
  if (isReg) {
    regBtn.textContent = '✅ Already Registered';
    regBtn.classList.add('btn-secondary');
    regBtn.classList.remove('btn-primary');
    regBtn.style.background = 'var(--success-light)';
    regBtn.style.color = 'var(--success)';
    regBtn.style.boxShadow = 'none';
    regBtn.onclick = () => showScreen('my-events-screen');
  } else {
    regBtn.textContent = 'Register Now';
    regBtn.className = 'btn btn-primary';
    regBtn.style.background = '';
    regBtn.style.color = '';
    regBtn.style.boxShadow = '';
    regBtn.onclick = () => showScreen('register-screen');
  }
}

function initRegisterScreen() {
  const ev = selectedEvent;
  document.getElementById('reg-event-name').textContent = ev.title;
  document.getElementById('reg-event-date').textContent = `${ev.date} · ${ev.time}`;
  document.getElementById('reg-event-emoji').textContent = ev.emoji;
}

function submitRegistration() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const dept = document.getElementById('reg-dept').value.trim();
  const year = document.getElementById('reg-year').value;
  const phone = document.getElementById('reg-phone').value.trim();
  const agree = document.getElementById('reg-agree').checked;

  let valid = true;

  function setErr(id, msg) {
    const el = document.getElementById(id);
    if (msg) { el.style.borderColor = 'var(--error)'; showError(id + '-err', msg); valid = false; }
    else { el.style.borderColor = ''; hideError(id + '-err'); }
  }

  setErr('reg-name', name ? '' : 'Please enter your name');
  setErr('reg-email', email ? '' : 'Please enter your email');
  setErr('reg-dept', dept ? '' : 'Please enter your department');
  setErr('reg-phone', phone ? '' : 'Please enter your phone number');

  const agreeErr = document.getElementById('agree-err');
  if (!agree) {
    agreeErr.style.display = 'block';
    valid = false;
  } else {
    agreeErr.style.display = 'none';
  }

  if (!valid) return;

  // Add to registered
  if (!registeredEvents.find(e => e.id === selectedEvent.id)) {
    registeredEvents.push(selectedEvent);
  }

  // Generate registration ID
  const regId = 'CC-2026-' + Math.floor(1000 + Math.random() * 9000);
  showSuccessScreen(regId);
}

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function hideError(id) {
  const el = document.getElementById(id);
  if (el) { el.style.display = 'none'; }
}

function showSuccessScreen(regId) {
  const ev = selectedEvent;
  document.getElementById('success-event-name').textContent = ev.title;
  document.getElementById('success-date').textContent = ev.date;
  document.getElementById('success-time').textContent = ev.time;
  document.getElementById('success-location').textContent = ev.location;
  document.getElementById('success-reg-id').textContent = regId;
  showScreen('success-screen');
}

function initMyEventsScreen() {
  renderMyEvents('upcoming');
}

function renderMyEvents(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab-item').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  const container = document.getElementById('my-events-list');
  container.innerHTML = '';

  const toShow = tab === 'upcoming'
    ? registeredEvents
    : [{ ...EVENTS[2], completed: true }]; // mock completed

  if (toShow.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:40px 20px;color:var(--text-tertiary)">
      <div style="font-size:48px;margin-bottom:12px">📭</div>
      <div style="font-size:15px;font-weight:600;color:var(--text-secondary)">No ${tab} events</div>
      <div style="font-size:13px;margin-top:4px">Explore and register for events!</div>
    </div>`;
    return;
  }

  toShow.forEach(ev => {
    const card = document.createElement('div');
    card.className = 'my-event-card';
    card.innerHTML = `
      <div class="my-event-card-bar" style="background:${ev.gradient}"></div>
      <div class="my-event-card-body">
        <div class="my-event-title">${ev.title}</div>
        <div class="my-event-meta">📅 ${ev.date} · 🕐 ${ev.time}<br>📍 ${ev.location}</div>
        <div class="my-event-footer">
          <span class="badge ${tab === 'completed' ? 'badge-completed' : 'badge-registered'}">${tab === 'completed' ? 'Completed' : '✅ Registered'}</span>
          <button class="btn btn-secondary btn-sm" style="width:auto;height:34px;padding:0 14px;font-size:13px" onclick="openEventDetail('${ev.id}')">View Event</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function initAnnouncementsScreen() {
  renderAnnouncements('All');

  document.querySelectorAll('.ann-cat-pill').forEach(pill => {
    pill.addEventListener('click', function() {
      document.querySelectorAll('.ann-cat-pill').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      renderAnnouncements(this.dataset.cat);
    });
  });
}

function renderAnnouncements(cat) {
  const container = document.getElementById('ann-list');
  container.innerHTML = '';
  const filtered = cat === 'All' ? ANNOUNCEMENTS : ANNOUNCEMENTS.filter(a => a.category === cat);
  filtered.forEach(ann => container.appendChild(renderAnnCard(ann)));
}

function initClubsScreen() {
  const grid = document.getElementById('clubs-grid');
  grid.innerHTML = '';
  CLUBS.forEach(club => grid.appendChild(renderClubCard(club)));
}

function initNotificationsScreen() {
  const list = document.getElementById('notifications-list');
  list.innerHTML = '';
  NOTIFICATIONS.forEach(n => list.appendChild(renderNotificationItem(n)));
}

// ---- SEARCH ----
function handleSearch(e) {
  const q = e.target.value.toLowerCase().trim();
  const eventsContainer = document.getElementById('events-list');
  if (!q) {
    filterEvents('All');
    return;
  }
  eventsContainer.innerHTML = '';
  EVENTS.filter(ev =>
    ev.title.toLowerCase().includes(q) ||
    ev.category.toLowerCase().includes(q) ||
    ev.location.toLowerCase().includes(q)
  ).forEach(ev => eventsContainer.appendChild(renderEventCard(ev)));
}

// ---- BOTTOM NAV ----
function setupBottomNav() {
  document.getElementById('nav-home').onclick = () => showScreen('home-screen');
  document.getElementById('nav-explore').onclick = () => {
    initAnnouncementsScreen();
    showScreen('announcements-screen');
  };
  document.getElementById('nav-myevents').onclick = () => {
    initMyEventsScreen();
    showScreen('my-events-screen');
  };
  document.getElementById('nav-notifications').onclick = () => {
    initNotificationsScreen();
    showScreen('notifications-screen');
  };
  document.getElementById('nav-profile').onclick = () => showScreen('profile-screen');
}

// ---- FORM VALIDATION (Login) ----
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const pw = document.getElementById('login-pw').value.trim();

  let valid = true;
  if (!email) {
    setFieldError('login-email', 'login-email-err', 'Please enter your email');
    valid = false;
  } else {
    clearFieldError('login-email', 'login-email-err');
  }
  if (!pw) {
    setFieldError('login-pw', 'login-pw-err', 'Please enter your password');
    valid = false;
  } else {
    clearFieldError('login-pw', 'login-pw-err');
  }
  if (!valid) return;

  const btn = document.getElementById('login-btn');
  btn.textContent = 'Signing in...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Login';
    btn.disabled = false;
    showScreen('home-screen');
    initHomeScreen();
  }, 1000);
}

function setFieldError(inputId, errId, msg) {
  const input = document.getElementById(inputId);
  const err = document.getElementById(errId);
  if (input) input.classList.add('error');
  if (err) { err.textContent = msg; err.style.display = 'block'; }
}

function clearFieldError(inputId, errId) {
  const input = document.getElementById(inputId);
  const err = document.getElementById(errId);
  if (input) input.classList.remove('error');
  if (err) err.style.display = 'none';
}

function handleSignup(e) {
  e.preventDefault();
  const btn = document.getElementById('signup-btn');
  btn.textContent = 'Creating Account...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Create Account';
    btn.disabled = false;
    showScreen('home-screen');
    initHomeScreen();
  }, 1200);
}

// ---- SPLASH SEQUENCE ----
function initSplash() {
  setTimeout(() => {
    showScreen('login-screen');
  }, 2800);
}

// ---- TOGGLE PASSWORD ----
function togglePassword(inputId, btnId) {
  const input = document.getElementById(inputId);
  const btn = document.getElementById(btnId);
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
  } else {
    input.type = 'password';
    btn.textContent = '👁️';
  }
}

// ---- DOMContentLoaded ----
document.addEventListener('DOMContentLoaded', () => {
  setupBottomNav();
  initSplash();
  initAnnouncementsScreen();
  initClubsScreen();
  initNotificationsScreen();
  initMyEventsScreen();

  // Search
  const searchInput = document.getElementById('home-search');
  if (searchInput) searchInput.addEventListener('input', handleSearch);

  // Login form
  const loginForm = document.getElementById('login-form');
  if (loginForm) loginForm.addEventListener('submit', handleLogin);

  // Signup form
  const signupForm = document.getElementById('signup-form');
  if (signupForm) signupForm.addEventListener('submit', handleSignup);

  // Tab switching
  document.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', function() {
      renderMyEvents(this.dataset.tab);
    });
  });
});
