/**
 * Hisaab website: safer install instructions and mobile layout improvements.
 * Run from the hisaab-web repository root: node hisaab-web-mobile-install.mjs
 * Intentionally does NOT alter Android APK, install protections, or the privacy policy.
 */
import fs from "node:fs";
import path from "node:path";

const entry = path.resolve("src/main.jsx");
const cssFile = path.resolve("src/index.css");
if (!fs.existsSync(entry) || !fs.existsSync(cssFile)) {
  throw new Error(
    "Run this script from the hisaab-web repository root (src/main.jsx and src/index.css required).",
  );
}
const original = fs.readFileSync(entry, "utf8");
let source = original;
let css = fs.readFileSync(cssFile, "utf8");
const marker = "/* HISAAB_MOBILE_INSTALL_V1 */";
if (css.includes(marker) || source.includes("function InstallationHelp()")) {
  throw new Error(
    "These changes appear to be present already. No files were changed.",
  );
}

const replacementDownloadButton = `function DownloadButton({children='Download for Android',className=''}){const url=DOWNLOAD_URL || '/hisaab-release.apk';return <a className={'btn primary '+className} href={url}><Icon name="download"/>{children}</a>}`;
const downloadButtonPattern = /^function DownloadButton\([^\n]*$/m;
if (!downloadButtonPattern.test(source))
  throw new Error(
    "Cannot locate DownloadButton; repository structure has changed.",
  );
source = source.replace(downloadButtonPattern, replacementDownloadButton);

const installMarkup = String.raw`
function InstallationHelp(){
  const steps=[
    ['01','Download the official APK',<>Use the download button on <strong>hisaab.zynapse.in</strong>. Avoid forwarded APKs or links from strangers.</>],
    ['02','Open your download',<>Open the APK from your browser's Downloads list or Android's Files app.</>],
    ['03','Review Android prompts',<>If Android asks to allow installs from your browser, review the source and enable it only if you trust this download. Keep Play Protect enabled.</>],
    ['04','Grant only needed access',<>After successful installation, read Hisaab's permission explanation before allowing SMS access for transaction tracking.</>]
  ];
  return <>
    <section className="install-section" id="install">
      <span className="eyebrow">INSTALLATION GUIDE</span>
      <h2>Four clear steps.<br/><span className="lime">No shortcuts to security.</span></h2>
      <p className="lead">Android's installation screens vary by phone. Hisaab is distributed as a signed Android APK, outside the Google Play Store.</p>
      <div className="install-steps">
        {steps.map(([number,title,description])=><article key={number} className="glass install-step"><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
      </div>
    </section>
    <section className="install-alert" aria-labelledby="play-protect-title">
      <div className="install-alert-icon"><Icon name="verified_user" size={27}/></div>
      <div>
        <span className="eyebrow">TRANSPARENT INSTALLATION STATUS</span>
        <h2 id="play-protect-title">A note about Google Play Protect</h2>
        <p>Some Android devices currently block Hisaab with an “App blocked to protect your device” warning because the app requests sensitive SMS access. We are investigating the warning. A valid signature does not mean Google has approved the app.</p>
        <p><strong>If Play Protect blocks installation, stop there.</strong> We do not recommend disabling Play Protect or following bypass instructions. You can <a href="https://forms.gle/nW7GMcETG2za99519" target="_blank" rel="noopener noreferrer">report the warning</a> and read <a href="https://developers.google.com/android/play-protect/warning-dev-guidance" target="_blank" rel="noopener noreferrer">Google's official guidance</a>.</p>
      </div>
    </section>
    <section className="install-section install-security">
      <span className="eyebrow">BEFORE YOU INSTALL</span>
      <h2>Know exactly <span className="lime">what you're getting.</span></h2>
      <div className="install-facts">
        <article className="glass"><Icon name="sms" size={29}/><h3>Why SMS access?</h3><p>Hisaab uses READ_SMS to import supported past bank alerts and RECEIVE_SMS to detect incoming transaction messages. This is its core automation feature.</p></article>
        <article className="glass"><Icon name="database" size={29}/><h3>Local-first storage</h3><p>Transaction records are designed to be stored on your device using SQLite. SMS tracking does not require your bank password or banking login.</p></article>
        <article className="glass"><Icon name="shield" size={29}/><h3>Verify the release</h3><p>Package: <code>com.zynapse.hisaab</code>. The current release APK was checked against the download hosted on this domain. Later releases require fresh verification.</p></article>
      </div>
      <div className="install-verification glass"><div><span>RELEASE SIGNING CERTIFICATE · SHA-256</span><code>15d0fc5f173f429eaa0827abf3c9db6bdfd3b6d8b37f96111cf34a6e92cea5da</code></div><p>Certificate fingerprint, not a guarantee of malware-free behavior. The file's SHA-256 checksum changes with each release.</p></div>
      <p className="install-links">Read our <a href="/privacy">privacy policy</a> or review the <a href="https://github.com/Faiz-fs/hisaab" target="_blank" rel="noopener noreferrer">Hisaab application repository</a>.</p>
    </section>
  </>;
}
function Download(){return <div className="wrap inner-page download-page"><span className="eyebrow">OFFICIAL ANDROID DOWNLOAD</span><h1>Take control.<br/><span className="lime">On your terms.</span></h1><p className="lead">Free, Android-first expense tracking. Please read the installation and Play Protect information before installing.</p><div className="glass download-panel"><div className="app-icon">◈</div><h2>hisaab.</h2><p>Automatic SMS-based expense tracking for Android</p><div className="download-metadata"><span>PLATFORM<br/><b>Android</b></span><span>PRICE<br/><b>Free</b></span><span>FORMAT<br/><b>APK</b></span></div><DownloadButton>Download official APK</DownloadButton><p className="fine-print">Official source: hisaab.zynapse.in · Outside Google Play · Play Protect may block installation</p></div><InstallationHelp/></div>}
`;
const downloadPattern = /function Download\(\)[\s\S]*?(?=function Support\(\))/;
if (!downloadPattern.test(source))
  throw new Error(
    "Cannot locate Download page; repository structure has changed.",
  );
source = source.replace(downloadPattern, installMarkup + "\n");
const faqNeedle =
  "['How do I install the APK?','Download from the official release link, open the APK, and follow Android’s installation prompts.']";
if (!source.includes(faqNeedle))
  throw new Error(
    "Cannot locate install FAQ; repository structure has changed.",
  );
source = source.replace(
  faqNeedle,
  "['How do I install the APK?','Go to the Download page, use the official APK link, and review the step-by-step installation instructions. Keep Google Play Protect enabled.'],['Why does Google Play Protect block Hisaab?','Some Android phones block sideloaded apps requesting sensitive SMS access. Hisaab is investigating this warning. Do not disable Play Protect to install it. Report the warning using our feedback form.']",
);

const mobileCSS = String.raw`

/* HISAAB_MOBILE_INSTALL_V1 */
/* Keep the existing desktop design; strengthen mobile layout and install clarity. */
html,body,#root{max-width:100%;min-width:0}
img,svg{max-width:100%}
.header{padding-top:env(safe-area-inset-top,0px)}
.nav{position:relative;gap:12px}
.install-section,.install-alert{margin:clamp(52px,8vw,90px) auto}
.install-section{text-align:left}
.install-section>h2{font-size:clamp(31px,5vw,56px);line-height:1.12;margin:16px 0 18px}
.install-section>.lead{max-width:720px;margin:0 0 30px}
.install-steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:15px}
.install-step{padding:25px 20px;border-radius:24px;min-width:0}
.install-step>span{font:700 29px 'Space Grotesk',sans-serif;color:#c5f331}
.install-step h3,.install-facts h3{font-size:20px;line-height:1.2;margin:16px 0 10px}
.install-step p,.install-facts p{font-size:14px;line-height:1.7;color:#b8b8be;margin:0}
.install-alert{display:flex;text-align:left;gap:24px;padding:32px;border-radius:26px;background:linear-gradient(125deg,#252519,#17181c);border:1px solid #c5f33150}
.install-alert-icon{display:grid;place-items:center;align-self:flex-start;flex:none;width:50px;height:50px;border-radius:15px;background:#c5f3311c;color:#c5f331}
.install-alert h2{font-size:clamp(26px,3.6vw,40px);margin:12px 0}
.install-alert p{font-size:15px;line-height:1.8;color:#d0d0ce}
.install-alert p:last-child{margin-bottom:0}
.install-alert a,.install-links a{color:#c5f331;text-decoration:underline;text-underline-offset:4px}
.install-facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px;margin-top:27px}
.install-facts article{padding:24px;border-radius:22px;min-width:0}
.install-facts .material-symbols-outlined{color:#c5f331}
.install-facts code{overflow-wrap:anywhere}
.install-verification{margin-top:18px;border-radius:22px;padding:22px;text-align:left;min-width:0}
.install-verification span{display:block;font-size:10px;font-weight:700;letter-spacing:1.3px;color:#b0b0b3}
.install-verification code{display:block;margin-top:12px;font:500 12px/1.7 ui-monospace,monospace;color:#c5f331;overflow-wrap:anywhere}
.install-verification p,.install-links{color:#b0b0b3;line-height:1.7;font-size:13px}
.download-page>.lead{max-width:650px}
.download-panel .btn{white-space:normal;text-align:center;max-width:100%}
.download-panel .fine-print{line-height:1.6}
#install{scroll-margin-top:120px}
@media(max-width:900px){.install-steps{grid-template-columns:repeat(2,minmax(0,1fr))}.install-facts{grid-template-columns:1fr}}
@media(max-width:760px){
 .header{top:8px}
 .nav{max-width:calc(100% - 20px);margin-inline:10px;padding:0 13px;min-height:60px}
 .brand{font-size:clamp(20px,6vw,25px);letter-spacing:-1px}
 .nav-actions{gap:8px;flex-shrink:0}
 .nav-actions .btn{font-size:11px;padding:10px 12px;gap:5px}
 .nav-actions .btn .material-symbols-outlined{font-size:15px!important}
 .menu{display:flex;align-items:center;justify-content:center;min-width:36px;min-height:42px;padding:5px}
 .navlinks{top:calc(100% + 9px);left:0;right:0;max-height:calc(100dvh - 100px);overflow-y:auto;box-shadow:0 20px 50px #000b}
 .hero{padding-top:132px;padding-bottom:32px;min-height:0;height:auto;max-height:none;overflow:hidden}
 .hero-copy{padding-top:0}
 .hero h1{font-size:clamp(44px,10.5vw,70px);line-height:1.04;margin:20px 0}
 .hero-copy>p{font-size:15px;line-height:1.65;margin-bottom:22px}
 .hero .eyebrow{letter-spacing:1.3px;font-size:10px}
 .button-row{align-items:stretch;flex-wrap:wrap;gap:10px}
 .button-row .btn{min-height:49px;white-space:normal;flex:1 1 160px;padding:12px 14px;font-size:12px;text-align:center}
 .subtle{line-height:1.6;letter-spacing:1px;margin-top:20px}
 .hero-art{height:420px;margin-top:5px;overflow:hidden}
 .hero-art .phone{transform:scale(.65);animation:none;flex:none}
 .hero-art .floating-chip{display:none}
 .hero-art .orbit{display:none}
 .scroll-hint{display:none}
 .section{padding-top:58px;padding-bottom:42px}
 .section h2{line-height:1.15;font-size:clamp(34px,8vw,54px)}
 .total-card strong{font-size:clamp(65px,13vw,110px)}
 .download-page{padding-top:132px}
 .inner-page h1{font-size:clamp(39px,9vw,59px)}
 .download-panel{margin:24px auto 50px;padding:28px 18px}
 .download-metadata{gap:8px;padding:18px 0}
 .download-metadata b{font-size:13px}
 .install-steps{gap:12px}
 .install-step{padding:20px 17px}
 .install-alert{gap:12px;padding:23px 18px;flex-direction:column}
 .install-alert-icon{width:43px;height:43px}
 .install-alert p{font-size:14px}
 .install-verification{padding:18px}
 .install-verification code{font-size:11px}
 .footer{overflow-wrap:anywhere}
}
@media(max-width:410px){
 .nav-actions .btn{padding:10px 9px;font-size:10px}
 .nav-actions .btn .material-symbols-outlined{display:none}
 .hero h1{font-size:clamp(41px,10vw,51px)}
 .hero-art{height:390px}
 .hero-art .phone{transform:scale(.59)}
 .install-steps{grid-template-columns:1fr}
 .install-step{min-height:0}
 .budget-panel .between{flex-wrap:wrap;gap:12px}
 .segmented button{padding:8px 10px}
 .money-map .bubble-field{gap:2px}
}
@media(prefers-reduced-motion:reduce){.hero-art .phone{animation:none}}
`;

// Validate every replacement before touching disk.
if (
  !source.includes("function InstallationHelp()") ||
  !source.includes("Why does Google Play Protect block Hisaab?")
) {
  throw new Error(
    "Install guidance transformation failed. No files were changed.",
  );
}
fs.writeFileSync(entry, source);
fs.writeFileSync(cssFile, css + mobileCSS);
console.log(
  "Updated: src/main.jsx (installation guide, Play Protect notice, FAQ, download link)",
);
console.log(
  "Updated: src/index.css (responsive header, hero, buttons, install sections)",
);
console.log("Review: git diff -- src/main.jsx src/index.css");
console.log("Test: npm run lint && npm run build");
