const emails = [
  {
    id: 1,
    senderName: "Delivery Notice",
    senderEmail: "updates@shipfast-alerts.com",
    subject: "Action needed: schedule your package drop-off",
    timestamp: "Mon 9:12 AM",
    bodyHtml: `
      <p>Hi there,</p>
      <p>We attempted delivery but could not reach your address. To avoid return, confirm the drop-off window.</p>
      <p>Use the internal scheduler here: <span class="blocked-link" data-message="Links in training emails are blocked. Look for mismatched domains like shipfast-alerts.com that do not match your usual courier.">schedule-dropoff</span></p>
      <p>If no action is taken within 24 hours, the parcel may be returned.</p>
      <p>Thanks,<br>ShipFast Team</p>
    `,
    labelCorrect: "phishing",
    indicators: [
      "Urgency with 24-hour deadline",
      "Sender domain imitates a courier but is unfamiliar",
      "No tracking number provided",
      "Link is obscured and non-standard"
    ],
    riskLevel: "high"
  },
  {
    id: 2,
    senderName: "HR Announcements",
    senderEmail: "hr@company-notices.com",
    subject: "Updated remote work policy   acknowledgement required",
    timestamp: "Mon 10:30 AM",
    bodyHtml: `
      <p>Hello,</p>
      <p>We updated the remote work guidelines. Please review the PDF attached in the HR portal.</p>
      <p>This is routine policy maintenance; no personal data requested.</p>
      <p>Regards,<br>People Operations</p>
    `,
    labelCorrect: "safe",
    indicators: [
      "Uses normal company tone and scope",
      "No request for credentials or payment",
      "Directs to known internal HR portal without links here"
    ],
    riskLevel: "low"
  },
  {
    id: 3,
    senderName: "IT Support",
    senderEmail: "it-support@intra-itdesk.net",
    subject: "Password reset notice for your mailbox",
    timestamp: "Tue 8:05 AM",
    bodyHtml: `
      <p>Hi,</p>
      <p>Your mailbox password is expiring today. Continue access by validating immediately.</p>
      <p>Validation link: <span class="blocked-link" data-message="Never click urgent password links from unexpected domains. Use official IT portals only.">secure-verify</span></p>
      <p>Failure to act will disable your account.</p>
    `,
    labelCorrect: "phishing",
    indicators: [
      "Unexpected password expiry notice",
      "Threat of immediate disablement",
      "Sender domain differs from official IT domain",
      "Link text is vague and blocked"
    ],
    riskLevel: "high"
  },
  {
    id: 4,
    senderName: "Facilities",
    senderEmail: "facilities@company.com",
    subject: "Building maintenance schedule this Friday",
    timestamp: "Tue 2:18 PM",
    bodyHtml: `
      <p>Team,</p>
      <p>Facilities will test fire alarms this Friday at 4 PM. No action needed; expect brief noise.</p>
      <p>Let us know if you have schedule conflicts.</p>
      <p>Thanks,<br>Facilities</p>
    `,
    labelCorrect: "safe",
    indicators: [
      "Routine operations update",
      "No links or data requests",
      "Matches known internal facilities contact"
    ],
    riskLevel: "low"
  },
  {
    id: 5,
    senderName: "Accounts Payable",
    senderEmail: "billing@vendr-invoice.com",
    subject: "Invoice #8841 pending confirmation",
    timestamp: "Wed 9:47 AM",
    bodyHtml: `
      <p>Hello Finance Team,</p>
      <p>Invoice #8841 is awaiting confirmation. Please review the attached statement and confirm payment method.</p>
      <p>Reference link: <span class="blocked-link" data-message="Invoice references with unknown vendor domains should be verified through official procurement systems.">vendr-invoice.com</span></p>
    `,
    labelCorrect: "phishing",
    indicators: [
      "Unknown vendor domain not in approved list",
      "Payment confirmation requested outside system",
      "Attachment mention without secure channel"
    ],
    riskLevel: "medium"
  },
  {
    id: 6,
    senderName: "Wellness Committee",
    senderEmail: "wellness@company.com",
    subject: "Charity walk sign-up and matching donation",
    timestamp: "Wed 1:22 PM",
    bodyHtml: `
      <p>Hi all,</p>
      <p>Join our annual charity walk this month. Company will match donations up to $100 per employee.</p>
      <p>Sign-up is on the internal events page. Reply with questions.</p>
      <p>Thank you!</p>
    `,
    labelCorrect: "safe",
    indicators: [
      "Positive tone and internal initiative",
      "No external links or payment requests",
      "Aligns with recurring company event"
    ],
    riskLevel: "low"
  },
  {
    id: 7,
    senderName: "Conference Team",
    senderEmail: "events@pro-meetings.net",
    subject: "Last-minute panel slot available",
    timestamp: "Thu 8:10 AM",
    bodyHtml: `
      <p>Hello speaker,</p>
      <p>A panelist canceled, and we can feature you. Please register in the next hour to keep the spot.</p>
      <p>Quick registration: <span class="blocked-link" data-message="High urgency and unknown domain for registration. Verify via official conference site.">pro-meetings.net/register</span></p>
    `,
    labelCorrect: "phishing",
    indicators: [
      "Unusual urgency with one-hour deadline",
      "Unrecognized events domain",
      "Pressure to register immediately"
    ],
    riskLevel: "medium"
  },
  {
    id: 8,
    senderName: "Team Lead",
    senderEmail: "alex@company.com",
    subject: "Sprint demo recap and next steps",
    timestamp: "Thu 4:45 PM",
    bodyHtml: `
      <p>Thanks for the demo today. Please add your notes to the sprint doc and update ticket owners by tomorrow.</p>
      <p>No external links here; use our usual project board.</p>
    `,
    labelCorrect: "safe",
    indicators: [
      "Contextual to recent sprint work",
      "No sensitive info requested",
      "No external links or attachments"
    ],
    riskLevel: "low"
  },
  {
    id: 9,
    senderName: "IT Security",
    senderEmail: "security@company.com",
    subject: "Phishing drill results and tips",
    timestamp: "Fri 9:05 AM",
    bodyHtml: `
      <p>Great job on last month's drill. Attached is the results summary. Review the do/don't list in the security portal.</p>
      <p>This is informational; no action needed beyond review.</p>
    `,
    labelCorrect: "safe",
    indicators: [
      "Transparent context about prior drill",
      "No credential prompts",
      "Uses official security mailbox"
    ],
    riskLevel: "low"
  },
  {
    id: 10,
    senderName: "External Vendor",
    senderEmail: "support@quicksign-docs.net",
    subject: "Doc signature needed: updated NDA",
    timestamp: "Fri 11:18 AM",
    bodyHtml: `
      <p>Hello,</p>
      <p>Please sign the updated NDA to keep service active. Use the expedited signing link below.</p>
      <p>Link: <span class="blocked-link" data-message="Unsigned external NDA requests should be confirmed via your vendor manager. Avoid unknown signature platforms.">quicksign-docs.net</span></p>
    `,
    labelCorrect: "phishing",
    indicators: [
      "Unexpected NDA request",
      "External domain not pre-approved",
      "Pressure about service disruption"
    ],
    riskLevel: "medium"
  },
  {
    id: 11,
    senderName: "Calendar",
    senderEmail: "calendar@company.com",
    subject: "Meeting invite: Q3 roadmap sync",
    timestamp: "Fri 2:00 PM",
    bodyHtml: `
      <p>You are invited to the Q3 roadmap sync on Tuesday at 2 PM. Agenda is in the shared drive. Let us know conflicts.</p>
    `,
    labelCorrect: "safe",
    indicators: [
      "Standard internal invite",
      "No links or data collection",
      "Matches normal calendar sender"
    ],
    riskLevel: "low"
  },
  {
    id: 12,
    senderName: "Relief Fund",
    senderEmail: "aid@urgent-help.org",
    subject: "Immediate assistance needed for relief supplies",
    timestamp: "Sat 8:40 AM",
    bodyHtml: `
      <p>We are short on supplies for disaster response. Wire funds today to keep operations running.</p>
      <p>Payment instructions: <span class="blocked-link" data-message="Payment instructions in unsolicited emails are a common phishing tactic. Verify through trusted channels.">view instructions</span></p>
    `,
    labelCorrect: "phishing",
    indicators: [
      "Emotional pressure and urgency",
      "Unverified charity domain",
      "Requests wire transfer via email"
    ],
    riskLevel: "high"
  }
];

const emailListEl = document.getElementById("emailList");
const emailFromEl = document.getElementById("emailFrom");
const emailSubjectEl = document.getElementById("emailSubject");
const emailDateEl = document.getElementById("emailDate");
const emailBodyEl = document.getElementById("emailBody");
const riskLevelEl = document.getElementById("riskLevel");
const feedbackEl = document.getElementById("feedback");
const feedbackResultEl = document.getElementById("feedbackResult");
const feedbackDetailEl = document.getElementById("feedbackDetail");
const indicatorListEl = document.getElementById("indicatorList");
const reportBtn = document.getElementById("reportBtn");
const safeBtn = document.getElementById("safeBtn");
const retryMissedBtn = document.getElementById("retryMissed");
const scoreDisplay = document.getElementById("scoreDisplay");
const correctCount = document.getElementById("correctCount");
const streakCount = document.getElementById("streakCount");
const progressCount = document.getElementById("progressCount");
const modalBackdrop = document.getElementById("modalBackdrop");
const confirmReport = document.getElementById("confirmReport");
const cancelReport = document.getElementById("cancelReport");
const toastEl = document.getElementById("toast");

let selectedId = emails[0].id;
let score = 0;
let streak = 0;
let completed = new Map();
let filterIds = null;

function formatRisk(risk) {
  const map = { low: "#a6ff85", med: "#f5a524", high: "#ff6b6b" };
  const label = risk === "med" ? "Medium" : risk.charAt(0).toUpperCase() + risk.slice(1);
  riskLevelEl.style.background = "#1f263a";
  riskLevelEl.style.border = `1px solid ${map[risk] || "#5ad8ff"}`;
  riskLevelEl.style.color = map[risk] || "#5ad8ff";
  riskLevelEl.textContent = `Risk: ${label}`;
}

function renderList() {
  emailListEl.innerHTML = "";
  const list = filterIds ? emails.filter(e => filterIds.includes(e.id)) : emails;
  list.forEach((email, idx) => {
    const li = document.createElement("li");
    li.className = `email-item${email.id === selectedId ? " active" : ""}`;
    li.id = `email-${email.id}`;
    li.setAttribute("role", "option");
    li.setAttribute("tabindex", "-1");
    li.dataset.id = email.id;
    const preview = email.bodyHtml.replace(/<[^>]+>/g, " ").trim().slice(0, 60) + "...";
    li.innerHTML = `
      <div class="subject">${email.subject}</div>
      <div class="meta">${email.senderName}   ${email.timestamp}</div>
      <div class="meta">${preview}</div>
    `;
    li.addEventListener("click", () => selectEmail(email.id));
    emailListEl.appendChild(li);

    if (idx === 0 && !filterIds) {
      emailListEl.setAttribute("aria-activedescendant", `email-${selectedId}`);
    }
  });
}

function selectEmail(id) {
  selectedId = id;
  renderList();
  const email = emails.find(e => e.id === id);
  emailFromEl.textContent = `${email.senderName} <${email.senderEmail}>`;
  emailSubjectEl.textContent = email.subject;
  emailDateEl.textContent = email.timestamp;
  emailBodyEl.innerHTML = email.bodyHtml;
  formatRisk(email.riskLevel);
  feedbackEl.classList.add("hidden");
  document.querySelectorAll(".blocked-link").forEach(el => {
    el.addEventListener("click", () => showToast(el.dataset.message));
    el.setAttribute("tabindex", "0");
    el.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter" || evt.key === " ") {
        evt.preventDefault();
        showToast(el.dataset.message);
      }
    });
  });
}

function showFeedback(isCorrect, email) {
  feedbackEl.classList.remove("hidden");
  feedbackResultEl.textContent = isCorrect ? "Correct" : "Not quite";
  feedbackResultEl.style.color = isCorrect ? "#a6ff85" : "#ff6b6b";
  feedbackDetailEl.textContent = `This email is marked as ${email.labelCorrect.toUpperCase()}.`;
  indicatorListEl.innerHTML = "";
  email.indicators.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    indicatorListEl.appendChild(li);
  });
}

function updateScoreboard() {
  const total = filterIds ? filterIds.length : emails.length;
  const correctAnswers = Array.from(completed.values()).filter(r => r.correct).length;
  scoreDisplay.textContent = score;
  correctCount.textContent = correctAnswers;
  streakCount.textContent = streak;
  progressCount.textContent = `${completed.size}/${total}`;
  retryMissedBtn.disabled = completed.size === total && getMissedIds().length === 0;
}

function handleAnswer(answerLabel) {
  const email = emails.find(e => e.id === selectedId);
  const isCorrect = answerLabel === email.labelCorrect;
  if (!completed.has(email.id)) {
    score += isCorrect ? 10 : -2;
    streak = isCorrect ? streak + 1 : 0;
    completed.set(email.id, { correct: isCorrect, answer: answerLabel });
  } else {
    streak = isCorrect ? streak + 1 : 0;
  }
  showFeedback(isCorrect, email);
  updateScoreboard();
  autoAdvance();
}

function autoAdvance() {
  const list = filterIds ? emails.filter(e => filterIds.includes(e.id)) : emails;
  const currentIndex = list.findIndex(e => e.id === selectedId);
  const next = list[currentIndex + 1];
  if (next) {
    setTimeout(() => selectEmail(next.id), 450);
  } else if (getMissedIds().length > 0) {
    showToast("Session complete. Use Retry missed to practice incorrect items.");
    retryMissedBtn.disabled = false;
  } else {
    showToast("All items complete. Great job!");
    retryMissedBtn.disabled = true;
  }
}

function getMissedIds() {
  return emails.filter(e => {
    const res = completed.get(e.id);
    return res && !res.correct;
  }).map(e => e.id);
}

function retryMissed() {
  const missed = getMissedIds();
  if (missed.length === 0) return;
  filterIds = missed;
  completed.clear();
  score = 0;
  streak = 0;
  selectEmail(filterIds[0]);
  renderList();
  updateScoreboard();
  showToast("Retrying missed items. Score reset for this round.");
}

function toggleModal(show) {
  modalBackdrop.classList.toggle("hidden", !show);
  if (show) confirmReport.focus();
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.remove("hidden");
  setTimeout(() => toastEl.classList.add("hidden"), 2200);
}

emailListEl.addEventListener("keydown", (evt) => {
  const list = filterIds ? emails.filter(e => filterIds.includes(e.id)) : emails;
  const idx = list.findIndex(e => e.id === selectedId);
  if (evt.key === "ArrowDown") {
    evt.preventDefault();
    const next = list[Math.min(idx + 1, list.length - 1)];
    selectEmail(next.id);
  } else if (evt.key === "ArrowUp") {
    evt.preventDefault();
    const prev = list[Math.max(idx - 1, 0)];
    selectEmail(prev.id);
  }
});

reportBtn.addEventListener("click", () => toggleModal(true));
safeBtn.addEventListener("click", () => handleAnswer("safe"));
confirmReport.addEventListener("click", () => {
  toggleModal(false);
  handleAnswer("phishing");
});
cancelReport.addEventListener("click", () => toggleModal(false));
retryMissedBtn.addEventListener("click", retryMissed);

modalBackdrop.addEventListener("click", (evt) => {
  if (evt.target === modalBackdrop) toggleModal(false);
});

selectEmail(selectedId);
renderList();
updateScoreboard();
