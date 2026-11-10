import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router";
import { useEffect, useState } from "react";
import "./index.css";
import appIcon from "./assets/app_icon.png";
const DOWNLOAD_URL = import.meta.env.VITE_APK_URL || "";
const faqs = [
  [
    "What is Hisaab?",
    "Hisaab is an Android-first expense tracker that organizes supported bank transaction SMS and helps you understand your spending.",
  ],
  ["Is Hisaab free?", "Yes. The current app is free to use."],
  [
    "Does Hisaab need bank credentials?",
    "No bank login is required for SMS-based tracking.",
  ],
  [
    "Where is my transaction data stored?",
    "Hisaab is designed to store financial transaction records locally on your device using SQLite.",
  ],
  [
    "Why are some transactions missing?",
    "Some bank message formats may not yet be recognized. Check SMS permissions and the transaction import status.",
  ],
  [
    "Can I change my budget cadence?",
    "Yes. Hisaab supports daily and weekly budget views.",
  ],
  [
    "Is Hisaab available on iPhone?",
    "Not currently. Hisaab is Android-first because of its SMS-based tracking.",
  ],
  [
    "How do I install the APK?",
    "Go to the Download page, use the official APK link, and review the step-by-step installation instructions. Keep Google Play Protect enabled.",
  ],
  [
    "Why does Google Play Protect block Hisaab?",
    "Some Android phones block sideloaded apps requesting sensitive SMS access. Hisaab is investigating this warning. Do not disable Play Protect to install it. Report the warning using our feedback form.",
  ],
];
function Icon({ name, size = 20 }) {
  return (
    <span
      aria-hidden="true"
      className="material-symbols-outlined"
      style={{ fontSize: size }}
    >
      {name}
    </span>
  );
}
function DownloadButton({ children = "Download for Android", className = "" }) {
  const url = DOWNLOAD_URL || "/hisaab-release.apk";
  return (
    <a className={"btn primary " + className} href={url}>
      <Icon name="download" />
      {children}
    </a>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  return (
    <header className="header">
      <nav className="nav glass wrap">
        <Link to="/" className="brand">
          <img
            src={appIcon}
            alt="Hisaab"
            className="brand-app-icon"
            width="38"
            height="38"
          />
          <span>
            hisaab<span className="lime">.</span>
          </span>
        </Link>
        <div className={"navlinks " + (open ? "open" : "")}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/download">Download</NavLink>
          <NavLink to="/support">Support</NavLink>
        </div>
        <div className="nav-actions">
          <Link to="/download" className="btn small primary">
            Get the app <Icon name="arrow_outward" size={17} />
          </Link>
          <button
            className="menu"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer className="footer wrap">
      <div>
        <Link className="brand" to="/">
          <img
            src={appIcon}
            alt="Hisaab"
            className="brand-app-icon"
            width="38"
            height="38"
          />
          <span>
            hisaab<span className="lime">.</span>
          </span>
        </Link>
        <p>Know where it goes.</p>
      </div>
      <div className="footerlinks">
        {[
          ["Features", "/features"],
          ["Download", "/download"],
          ["Support", "/support"],
          ["Privacy", "/privacy"],
          ["Terms", "/terms"],
        ].map(([t, u]) => (
          <Link key={u} to={u}>
            {t}
          </Link>
        ))}
      </div>
      <small>
        © {new Date().getFullYear()} Zynapse. Hisaab is a Zynapse product.{" "}
        <a href="https://zynapse.in">Visit Zynapse ↗</a>
      </small>
    </footer>
  );
}
function Reveal({ children, className = "" }) {
  const [visible, setVisible] = useState(false);
  const [node, setNode] = useState(null);
  useEffect(() => {
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);
  return (
    <div
      ref={setNode}
      className={"reveal " + (visible ? "visible " : "") + className}
    >
      {children}
    </div>
  );
}
function Phone() {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-top">
          <span>9:41</span>
          <span>●●●</span>
        </div>
        <div className="phone-greeting">
          GOOD EVENING <span>✦</span>
        </div>
        <h3>
          Your money,
          <br />
          in focus.
        </h3>
        <div className="phone-budget">
          <small>THIS WEEK'S SPENDING</small>
          <strong>
            ₹8,420<span>.00</span>
          </strong>
          <div className="progress">
            <i />
          </div>
          <div className="between">
            <small>₹8,420 spent</small>
            <small>₹12,000 budget</small>
          </div>
        </div>
        <div className="between phone-sub">
          <b>Recent activity</b>
          <span>See all →</span>
        </div>
        {[
          ["local_cafe", "Blue Tokai", "Food & Drinks", "− ₹280"],
          ["shopping_bag", "Shopping", "Lifestyle", "− ₹1,299"],
          ["directions_car", "Uber", "Transport", "− ₹240"],
        ].map(([icon, n, c, v]) => (
          <div className="transaction" key={n}>
            <span className="transaction-icon">
              <Icon name={icon} size={19} />
            </span>
            <div>
              <b>{n}</b>
              <small>{c}</small>
            </div>
            <strong>{v}</strong>
          </div>
        ))}
        <div className="phone-bottom">⌂　▥　◉　▦　☻</div>
      </div>
    </div>
  );
}
function SectionTitle({ eyebrow, title, description }) {
  return (
    <>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p className="muted section-desc">{description}</p>}
    </>
  );
}
function Home() {
  const [cadence, setCadence] = useState("daily"),
    [tone, setTone] = useState("honest"),
    [activeBubble, setActiveBubble] = useState("Food");
  const data = {
    daily: { budget: 1500, spent: 820 },
    weekly: { budget: 12000, spent: 8420 },
  };
  const budget = data[cadence];
  const verdict = {
    gentle: "A little extra spending today. Tomorrow is a fresh start.",
    honest: "Food delivery is starting to look like a monthly subscription.",
    savage: "Your wallet filed a missing-person report.",
  };
  return (
    <>
      <section className="hero wrap">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="live-dot" /> THE FUTURE OF MONEY AWARENESS
          </span>
          <h1>
            Your money
            <br />
            has a <em>story.</em>
            <br />
            <span className="lime">
              Know where
              <br />
              it goes.
            </span>
          </h1>
          <p>
            Your spending, decoded. Automatic bank SMS tracking, smarter
            budgets, and a little personality for your money habits.
          </p>
          <div className="button-row">
            <DownloadButton />
            <a className="btn secondary" href="#how-it-works">
              Explore Hisaab <Icon name="arrow_downward" size={18} />
            </a>
          </div>
          <span className="subtle">
            ANDROID FIRST · FREE TO USE · LOCAL-FIRST
          </span>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="floating-chip chip-one glass">
            <span className="lime">
              <Icon name="trending_up" />
            </span>
            <div>
              <small>Remaining budget</small>
              <b>₹3,580</b>
            </div>
          </div>
          <Phone />
          <div className="floating-chip chip-two glass">
            <span className="mint">
              <Icon name="check_circle" />
            </span>
            <div>
              <small>Transaction detected</small>
              <b>− ₹280 · Coffee</b>
            </div>
          </div>
        </div>
        <a className="scroll-hint" href="#how-it-works">
          SCROLL TO EXPLORE <Icon name="south" size={17} />
        </a>
      </section>
      <section className="section wrap" id="how-it-works">
        <Reveal>
          <SectionTitle
            eyebrow="01 / THE REALITY"
            title={
              <>
                You spend. You forget.
                <br />
                <span className="lime">We remember.</span>
              </>
            }
            description="Those small purchases add up. Hisaab turns the noise into clarity."
          />
        </Reveal>
        <div className="spend-grid">
          {[
            ["coffee", "Specialty coffee", 180],
            ["lunch_dining", "Food delivery", 349],
            ["local_taxi", "Cab ride", 240],
            ["shopping_bag", "Sneaker restock", 1299],
          ].map(([icon, n, v], i) => (
            <Reveal key={n} className="glass spend-card">
              <Icon name={icon} size={29} />
              <span>{n}</span>
              <b>− ₹{v.toLocaleString("en-IN")}</b>
              <small>JUST ANOTHER PURCHASE</small>
            </Reveal>
          ))}
        </div>
        <Reveal className="total-card">
          <span>BEFORE YOU EVEN NOTICE</span>
          <strong>₹2,068</strong>
          <p>Spent. And it's not even evening.</p>
        </Reveal>
      </section>
      <section className="section wrap">
        <Reveal>
          <SectionTitle
            eyebrow="02 / ZERO MANUAL ENTRY"
            title={
              <>
                No typing. No spreadsheets.
                <br />
                <span className="lime">Just Hisaab.</span>
              </>
            }
            description="Supported bank SMS transactions become organized expenses, with your permission."
          />
        </Reveal>
        <div className="sms-flow">
          <div className="glass flow-card">
            <small>01 · BANK SMS</small>
            <Icon name="sms" size={34} />
            <p>
              Acct XX110 debited by <b>₹450.00</b> on 09-Nov-26.
            </p>
          </div>
          <div className="flow-arrow">
            <Icon name="arrow_forward" size={35} />
            <span>RECOGNIZE</span>
          </div>
          <div className="glass flow-card">
            <small>02 · HISAAB</small>
            <Icon name="auto_awesome" size={34} />
            <p>
              ₹450.00
              <br />
              <b>Food & Drinks</b>
            </p>
          </div>
          <div className="flow-arrow">
            <Icon name="arrow_forward" size={35} />
            <span>ORGANIZE</span>
          </div>
          <div className="glass flow-card">
            <small>03 · YOUR LEDGER</small>
            <Icon name="check_circle" size={34} />
            <p>
              <b>Transaction saved</b>
              <br />
              Ready to explore
            </p>
          </div>
        </div>
      </section>
      <section className="section wrap">
        <Reveal>
          <SectionTitle
            eyebrow="03 / YOUR RHYTHM"
            title={
              <>
                Your budget.
                <br />
                <span className="lime">Your rhythm.</span>
              </>
            }
            description="Daily focus or weekly freedom. Switch the perspective, not your habits."
          />
        </Reveal>
        <div className="budget-layout">
          <div className="glass budget-panel">
            <div className="between">
              <span className="eyebrow">BUDGET CADENCE</span>
              <div
                className="segmented"
                role="group"
                aria-label="Budget cadence"
              >
                {["daily", "weekly"].map((v) => (
                  <button
                    className={cadence === v ? "selected" : ""}
                    key={v}
                    onClick={() => setCadence(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div className="budget-chart">
              <div
                className="ring"
                style={{ "--pct": (budget.spent / budget.budget) * 100 + "%" }}
              >
                <div>
                  <small>REMAINING</small>
                  <strong>
                    ₹{(budget.budget - budget.spent).toLocaleString("en-IN")}
                  </strong>
                </div>
              </div>
            </div>
            <div className="between">
              <div>
                <small>BUDGET</small>
                <h3>₹{budget.budget.toLocaleString("en-IN")}</h3>
              </div>
              <div className="align-right">
                <small>SPENT</small>
                <h3>₹{budget.spent.toLocaleString("en-IN")}</h3>
              </div>
            </div>
          </div>
          <div className="budget-copy">
            <Icon name="tune" size={40} />
            <h3>Control without the complexity.</h3>
            <p>
              Understand how much you can spend, at the cadence that works for
              you.
            </p>
            <Link to="/features" className="text-link">
              Explore budget features <Icon name="arrow_outward" size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section wrap">
        <Reveal>
          <SectionTitle
            eyebrow="04 / MONEY MAP"
            title={
              <>
                See where your money <span className="lime">disappears.</span>
              </>
            }
            description="Explore your spending by category. Tap a bubble to see where the rupees went."
          />
        </Reveal>
        <div className="glass money-map">
          <div className="bubble-field">
            {[
              ["Food", 34],
              ["Shopping", 26],
              ["Transport", 18],
              ["Bills", 14],
              ["Leisure", 8],
            ].map(([name, size]) => (
              <button
                key={name}
                onClick={() => setActiveBubble(name)}
                className={
                  "bubble bubble-" +
                  name.toLowerCase() +
                  (activeBubble === name ? " active" : "")
                }
                style={{ "--bubble": `${Math.round(size * 4.2 + 80)}px` }}
              >
                <span>{name}</span>
                <b>{size}%</b>
              </button>
            ))}
          </div>
          <div className="map-detail">
            <span className="eyebrow">SELECTED CATEGORY</span>
            <h3>{activeBubble}</h3>
            <p>Explore your category breakdown in the Hisaab app.</p>
          </div>
        </div>
      </section>
      <section className="section wrap">
        <Reveal>
          <SectionTitle
            eyebrow="05 / THE NIGHT VERDICT"
            title={
              <>
                Your spending has
                <br />
                been <span className="lime">judged.</span>
              </>
            }
            description="The end-of-day review with a personality. Choose how brutally honest Hisaab should be."
          />
        </Reveal>
        <div className="verdict-layout">
          <div className="glass verdict-card">
            <div className="between">
              <span className="eyebrow">THE NIGHT VERDICT</span>
              <Icon name="dark_mode" />
            </div>
            <div className="verdict-emoji">✦</div>
            <h3>Today's verdict</h3>
            <p key={tone} className="verdict-text">
              “{verdict[tone]}”
            </p>
            <div className="verdict-foot">
              <span>DEMO PREVIEW</span>
              <Icon name="auto_awesome" />
            </div>
          </div>
          <div className="verdict-controls">
            <h3>How honest can you handle?</h3>
            <div className="tone-options">
              {["gentle", "honest", "savage"].map((v) => (
                <button
                  key={v}
                  className={"glass " + (tone === v ? "active" : "")}
                  onClick={() => setTone(v)}
                >
                  <span>
                    {v === "gentle" ? "🌿" : v === "honest" ? "⚡" : "🔥"}
                  </span>
                  <b>{v}</b>
                  <Icon name="arrow_forward" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section wrap">
        <Reveal>
          <SectionTitle
            eyebrow="06 / PRIVACY BY DESIGN"
            title={
              <>
                Your money. Your device.
                <br />
                <span className="lime">Your business.</span>
              </>
            }
            description="Local-first transaction storage, user-controlled SMS permissions, and no bank credentials required for SMS tracking."
          />
        </Reveal>
        <div className="feature-grid">
          {[
            [
              "database",
              "Local-first records",
              "Financial transaction records are stored on your device using SQLite.",
            ],
            [
              "shield_lock",
              "No bank login",
              "SMS-based tracking does not require your bank username or password.",
            ],
            [
              "tune",
              "You stay in control",
              "Manage permissions and spending categories on your terms.",
            ],
          ].map(([icon, title, copy]) => (
            <div className="glass feature-tile" key={title}>
              <Icon name={icon} size={33} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section wrap">
        <Reveal>
          <SectionTitle
            eyebrow="07 / MORE TO EXPLORE"
            title={
              <>
                Crafted for everyday
                <br />
                <span className="lime">financial reflex.</span>
              </>
            }
          />
        </Reveal>
        <div className="bento">
          {[
            [
              "calendar_month",
              "Spending calendar",
              "See your high-spend days at a glance.",
            ],
            [
              "account_tree",
              "Payee rules",
              "Keep recurring merchants categorized consistently.",
            ],
            [
              "payments",
              "UPI tracker",
              "Understand supported UPI transaction messages.",
            ],
            [
              "donut_large",
              "Money Map",
              "Discover which categories dominate your spending.",
            ],
          ].map(([icon, title, copy]) => (
            <Link className="glass bento-card" to="/features" key={title}>
              <Icon name={icon} size={38} />
              <h3>{title}</h3>
              <p>{copy}</p>
              <Icon name="arrow_outward" />
            </Link>
          ))}
        </div>
      </section>
      <section className="section final-cta wrap">
        <div className="cta-glow" />
        <Reveal>
          <span className="eyebrow">TIME TO TAKE CONTROL</span>
          <h2>
            Your money isn't going
            <br />
            to track <em>itself.</em>
          </h2>
          <p>Start understanding your spending with Hisaab.</p>
          <DownloadButton>Get Hisaab for Android</DownloadButton>
          <small>FREE TO USE · ANDROID FIRST</small>
        </Reveal>
      </section>
    </>
  );
}
const features = [
  [
    "sms",
    "Automatic SMS tracking",
    "Recognize supported bank transaction alerts without manually logging each expense.",
  ],
  [
    "rule",
    "Payee categorization rules",
    "Keep merchant and payee classifications consistent across transactions.",
  ],
  [
    "calendar_view_week",
    "Daily & weekly budgeting",
    "Choose the cadence that works for your spending habits.",
  ],
  [
    "bubble_chart",
    "Money Map",
    "Understand category-level spending with visual breakdowns.",
  ],
  [
    "payments",
    "UPI tracking",
    "Review supported UPI transaction SMS alongside other expenses.",
  ],
  [
    "calendar_month",
    "Calendar heatmap",
    "Spot patterns in how much you spend each day.",
  ],
  [
    "nights_stay",
    "Night Verdict",
    "End your day with a witty spending review.",
  ],
  [
    "mood",
    "Personality modes",
    "Gentle, Honest, or Savage — choose your feedback style.",
  ],
];
function Features() {
  return (
    <div className="wrap inner-page">
      <Reveal>
        <span className="eyebrow">THE HISAAB EXPERIENCE</span>
        <h1>
          A smarter way to
          <br />
          <span className="lime">understand every rupee.</span>
        </h1>
        <p className="lead">
          More clarity, less manual effort. Explore the tools behind your
          everyday money awareness.
        </p>
      </Reveal>
      <div className="feature-grid feature-page-grid">
        {features.map(([icon, title, desc], i) => (
          <Reveal className="glass feature-tile" key={title}>
            <span className="eyebrow">0{i + 1} / FEATURE</span>
            <Icon name={icon} size={42} />
            <h3>{title}</h3>
            <p>{desc}</p>
          </Reveal>
        ))}
      </div>
      <div className="page-cta">
        <h2>Ready to see the full picture?</h2>
        <DownloadButton />
      </div>
    </div>
  );
}


function InstallationHelp() {
  const steps = [
    {
      number: "01",
      title: "Download the official APK",
      description: (
        <>
          Download Hisaab only from{" "}
          <strong>hisaab.zynapse.in</strong>. Avoid APK files shared
          through unknown websites, messages, or forwarded links.
        </>
      ),
    },
    {
      number: "02",
      title: "Open the downloaded APK",
      description: (
        <>
          Open your phone's <strong>Files</strong> app and navigate to{" "}
          <strong>Downloads</strong>. Find the Hisaab APK and tap it.
          You can also open the file directly from your browser's
          Downloads section.
        </>
      ),
    },
    {
      number: "03",
      title: "Allow installation from this source",
      description: (
        <>
          If Android blocks installation from your browser or file
          manager, open:
          <br />
          <br />
          <strong>
            Settings → Apps → Special app access → Install unknown apps
          </strong>
          <br />
          <br />
          Select the app you used to open the APK, such as Chrome or
          Files, and enable <strong>Allow from this source</strong>.
          Only enable this for a source you trust.
        </>
      ),
    },
    {
      number: "04",
      title: "Install Hisaab",
      description: (
        <>
          Return to your downloaded APK, tap it again, review the
          installation prompt, and select <strong>Install</strong>.
          Once installation finishes, select <strong>Open</strong>.
          You can turn off "Allow from this source" afterward.
        </>
      ),
    },
    {
      number: "05",
      title: "Complete the initial setup",
      description: (
        <>
          Open Hisaab and follow the onboarding instructions. Enter
          your profile information, configure your income and bank
          accounts, and select your preferred budget cadence.
        </>
      ),
    },
    {
      number: "06",
      title: "Review SMS permissions",
      description: (
        <>
          Hisaab requests SMS access to recognize supported bank
          transaction alerts. Review Android's permission prompt
          before granting access. Hisaab does not require your bank
          password or banking login credentials.
        </>
      ),
    },
  ];

  return (
    <>
      <section className="install-section" id="install">
        <span className="eyebrow">INSTALLATION GUIDE</span>

        <h2>
          Install Hisaab.
          <br />
          <span className="lime">Step by step.</span>
        </h2>

        <p className="lead">
          Hisaab is currently distributed as a signed Android APK
          outside the Google Play Store. Follow these instructions
          to install it from the official website. Settings names
          may differ depending on your Android version and phone
          manufacturer.
        </p>

        <div className="install-steps">
          {steps.map(({ number, title, description }) => (
            <article
              key={number}
              className="glass install-step"
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="install-alert"
        aria-labelledby="play-protect-title"
      >
        <div className="install-alert-icon">
          <Icon name="verified_user" size={27} />
        </div>

        <div>
          <span className="eyebrow">
            GOOGLE PLAY PROTECT
          </span>

          <h2 id="play-protect-title">
            Understanding Android security warnings
          </h2>

          <p>
            Google Play Protect scans Android apps for potentially
            harmful behavior, including apps installed outside
            Google Play.
          </p>

          <p>
            Some Android devices currently display an{" "}
            <strong>
              "App blocked to protect your device"
            </strong>{" "}
            warning when installing Hisaab. The app requests
            sensitive SMS permissions for its transaction tracking
            functionality.
          </p>

          <p>
            <strong>
              A signed APK does not mean that Google has approved
              or verified the application.
            </strong>
          </p>

          <p>
            If Play Protect blocks the installation, stop rather
            than disabling Play Protect or bypassing the warning.
            You can report the exact warning so we can investigate
            it and improve the installation experience.
          </p>

          <p>
            <a
              href="https://forms.gle/nW7GMcETG2za99519"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report an installation problem
            </a>
            {" · "}
            <a
              href="https://developers.google.com/android/play-protect/warning-dev-guidance"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google's official guidance
            </a>
          </p>
        </div>
      </section>

      <section className="install-section">
        <span className="eyebrow">
          TROUBLESHOOTING
        </span>

        <h2>
          Installation issues?
          <br />
          <span className="lime">Here's what to check.</span>
        </h2>

        <div className="install-steps">
          <article className="glass install-step">
            <span>
              <Icon name="folder_open" size={27} />
            </span>

            <h3>Can't install from Files or Chrome?</h3>

            <p>
              Open <strong>Settings → Apps → Special app access
              → Install unknown apps</strong>.
              Select the browser or file manager used to open
              the APK, and enable{" "}
              <strong>Allow from this source</strong>.
            </p>

            <p>
              Try opening the downloaded APK again. This setting
              authorizes installation from that source; it does
              not disable Google Play Protect.
            </p>
          </article>

          <article className="glass install-step">
            <span>
              <Icon name="admin_panel_settings" size={27} />
            </span>

            <h3>Android says "Restricted setting"?</h3>

            <p>
              Some Android versions restrict sensitive features
              such as Accessibility or Notification Access for
              apps installed outside an app store.
            </p>

            <p>
              Hisaab's SMS transaction tracking does not
              normally require Accessibility or Notification
              Access. Do not enable restricted settings unless
              a verified Hisaab feature specifically requires
              them and you understand the access being requested.
            </p>

            <p>
              If you encounter this warning while granting
              normal SMS permissions, report the issue with
              your Android version and phone model.
            </p>
          </article>

          <article className="glass install-step">
            <span>
              <Icon name="sms" size={27} />
            </span>

            <h3>SMS transactions aren't appearing?</h3>

            <p>
              Open Android Settings, find Hisaab under Apps,
              and check whether the requested SMS permission
              has been granted.
            </p>

            <p>
              Hisaab recognizes supported bank SMS formats.
              Some messages may not yet be parsed correctly.
              If transactions are missing, please report
              the problem through our feedback form.
            </p>
          </article>
        </div>
      </section>

      <section className="install-section install-security">
        <span className="eyebrow">
          BEFORE YOU INSTALL
        </span>

        <h2>
          Know exactly{" "}
          <span className="lime">
            what you're getting.
          </span>
        </h2>

        <div className="install-facts">
          <article className="glass">
            <Icon name="sms" size={29} />

            <h3>Why SMS access?</h3>

            <p>
              Hisaab uses READ_SMS to import supported historical
              bank alerts and RECEIVE_SMS to detect incoming
              transaction messages. These permissions support
              automatic expense tracking.
            </p>
          </article>

          <article className="glass">
            <Icon name="database" size={29} />

            <h3>Local-first storage</h3>

            <p>
              Hisaab is designed to store financial transaction
              records locally on your Android device using SQLite.
              Bank login credentials are not required for
              SMS-based transaction tracking.
            </p>
          </article>

          <article className="glass">
            <Icon name="shield" size={29} />

            <h3>Verify the release</h3>

            <p>
              Download only from the official Hisaab website.
              Check the signing certificate fingerprint against
              the published release information. Each new APK
              release should be independently verified.
            </p>
          </article>
        </div>

        <div className="install-verification glass">
          <div>
            <span>
              RELEASE SIGNING CERTIFICATE · SHA-256
            </span>

            <code>
              15d0fc5f173f429eaa0827abf3c9db6bdfd3b6d8b37f96111cf34a6e92cea5da
            </code>
          </div>

          <p>
            This is the previously published signing certificate
            fingerprint, not the APK file checksum. Confirm it
            against your actual release certificate before
            publishing. A valid signature alone does not
            guarantee that an app is safe.
          </p>
        </div>

        <p className="install-links">
          Read our <a href="/privacy">privacy policy</a>{" "}
          or review the{" "}
          <a
            href="https://github.com/Faiz-fs/hisaab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hisaab application repository
          </a>
          .
        </p>
      </section>
    </>
  );
}



function Download() {
  return (
    <div className="wrap inner-page download-page">
      <span className="eyebrow">OFFICIAL ANDROID DOWNLOAD</span>

      <h1>
        Before you download.
        <br />
        <span className="lime">Know what to expect.</span>
      </h1>

      <p className="lead">
        Hisaab is a free, Android-first expense tracker. Review the installation
        steps, SMS permissions, and Google Play Protect information before
        downloading.
      </p>

      {/* Installation and security information comes first. */}
      <InstallationHelp />

      {/* Download card comes after all installation guidance. */}
      <section
        id="download-apk"
        className="glass download-panel"
        aria-labelledby="download-apk-title"
      >
        <span className="eyebrow">READY TO GET STARTED?</span>

        <div className="app-icon">
          <img
            src={appIcon}
            alt="Hisaab official app icon"
            className="download-app-icon"
            width="96"
            height="96"
          />
        </div>

        <h2 id="download-apk-title">
          hisaab<span className="lime">.</span>
        </h2>

        <p>Automatic SMS-based expense tracking for Android</p>

        <div className="download-metadata">
          <span>
            PLATFORM
            <br />
            <b>Android</b>
          </span>
          <span>
            PRICE
            <br />
            <b>Free</b>
          </span>
          <span>
            FORMAT
            <br />
            <b>APK</b>
          </span>
        </div>

        <DownloadButton>Download official APK</DownloadButton>

        <p className="fine-print">
          Official source: hisaab.zynapse.in
          <br />
          Outside Google Play · Play Protect may block installation
        </p>
      </section>
    </div>
  );
}

function Support() {
  const [search, setSearch] = useState(""),
    [opened, setOpened] = useState(null);
  const filtered = faqs.filter(([q, a]) =>
    (q + a).toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="wrap inner-page">
      <span className="eyebrow">HELP CENTER</span>
      <h1>
        Questions? <span className="lime">We've got Hisaab.</span>
      </h1>
      <p className="lead">Answers to the things that matter.</p>
      <div className="searchbox glass">
        <Icon name="search" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search frequently asked questions"
          aria-label="Search FAQs"
        />
      </div>
      <div className="faq-list">
        {filtered.map(([q, a]) => (
          <div className="glass faq" key={q}>
            <button
              aria-expanded={opened === q}
              onClick={() => setOpened(opened === q ? null : q)}
            >
              {q}
              <Icon name={opened === q ? "remove" : "add"} />
            </button>
            {opened === q && <p>{a}</p>}
          </div>
        ))}
        {!filtered.length && <p>No matching questions found.</p>}
      </div>
      <div className="page-cta">
        <h2>Still need help?</h2>
        <p>Support contact details will be added before launch.</p>
      </div>
    </div>
  );
}
const privacy = [
  [
    "Overview",
    "Hisaab is designed as an Android-first, local-first expense tracking application. This page is a pre-launch summary, not the final legal privacy policy.",
  ],
  [
    "SMS permission",
    "With your permission, Hisaab reads supported bank transaction SMS to identify financial transactions. Recognition accuracy can vary by bank and message format.",
  ],
  [
    "Local storage",
    "Transaction records are designed to be stored locally in SQLite on your device.",
  ],
  [
    "Bank credentials",
    "SMS-based expense tracking does not require bank login credentials.",
  ],
  [
    "Data control",
    "Device permissions can be managed through Android settings. Data deletion and retention details must be verified against the final app release.",
  ],
  [
    "Third-party services",
    "Any analytics, crash reporting, hosting logs, or other third-party services must be disclosed after verifying the final implementation.",
  ],
  [
    "Contact and updates",
    "The official support contact and effective date will be added before public launch.",
  ],
];
const terms = [
  [
    "About Hisaab",
    "Hisaab is a personal spending awareness application, not a bank or financial adviser.",
  ],
  [
    "Using the application",
    "Users are responsible for the permissions they grant and for checking the accuracy of transaction information.",
  ],
  [
    "Transaction accuracy",
    "SMS parsing can miss, duplicate, or misclassify some messages. Always refer to your bank records for authoritative balances and transactions.",
  ],
  [
    "Availability",
    "Features, compatibility and availability may change as the product evolves.",
  ],
  [
    "Legal review required",
    "These are pre-launch informational placeholders, not complete legally reviewed terms. Final legal text must be supplied before launch.",
  ],
];
function Legal({ kind }) {
  const isPrivacy = kind === "privacy";
  const items = isPrivacy ? privacy : terms;
  return (
    <div className="wrap inner-page legal">
      <span className="eyebrow">
        {isPrivacy ? "PRIVACY BY DESIGN" : "THE FINE PRINT"}
      </span>
      <h1>
        {isPrivacy ? (
          <>
            Your money. <span className="lime">Your business.</span>
          </>
        ) : (
          <>
            The details behind <span className="lime">the experience.</span>
          </>
        )}
      </h1>
      <p className="lead">
        {isPrivacy
          ? "How Hisaab approaches your data and permissions."
          : "Important information about using Hisaab."}
      </p>
      <div className="legal-layout">
        <aside className="glass">
          <b>ON THIS PAGE</b>
          {items.map(([t], i) => (
            <a key={t} href={"#section-" + i}>
              {t}
            </a>
          ))}
        </aside>
        <article className="glass">
          {items.map(([t, c], i) => (
            <section id={"section-" + i} key={t}>
              <h2>{t}</h2>
              <p>{c}</p>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
function NotFound() {
  return (
    <div className="wrap inner-page not-found">
      <span className="eyebrow">LOST IN THE LEDGER</span>
      <h1>
        404. This page
        <br />
        <span className="lime">went over budget.</span>
      </h1>
      <p>Looks like this page disappeared faster than your weekend budget.</p>
      <Link to="/" className="btn primary">
        Back to Hisaab <Icon name="arrow_forward" />
      </Link>
    </div>
  );
}
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/download" element={<Download />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
