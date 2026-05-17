/* eslint-disable */
// FortuneGate hi-fi prototype screens — iPhone-sized.

const ICN = {
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8v10a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2V11z" /></svg>,
  content: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z" /><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" /></svg>,
  earn: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  give: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2" /></svg>,
  prof: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>,
  back: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M15 18l-6-6 6-6" /></svg>,
  bell: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10 21a2 2 0 0 0 4 0" /></svg>,
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>,
  filter: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M3 5h18M6 12h12M10 19h4" /></svg>,
  lock: <svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" fill="none" /></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>,
  star: <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2" /></svg>,
  copy: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>,
  share: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M16 6l-4-4-4 4" /><path d="M12 2v14" /></svg>,
  chev: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M9 6l6 6-6 6" /></svg>
};

const Tab = ({ on, onClick, ico, label }) =>
<button className={'it ' + (on ? 'on' : '')} onClick={onClick}>{ICN[ico]}<span>{label}</span></button>;

const TabBar = ({ active, go }) =>
<div className="tabbar">
    <Tab on={active === 'home'} onClick={() => go('dash')} ico="home" label="Home" />
    <Tab on={active === 'content'} onClick={() => go('feed')} ico="content" label="Content" />
    <Tab on={active === 'earn'} onClick={() => go('earn')} ico="earn" label="Earn" />
    <Tab on={active === 'give'} onClick={() => go('giveaway')} ico="give" label="Giveaway" />
    <Tab on={active === 'prof'} onClick={() => go('profile')} ico="prof" label="Profile" />
  </div>;

const TopBar = ({ title, back, right }) =>
<div className="topbar">
    <div className="row">
      {back && <button className="icon-btn" onClick={back}>{ICN.back}</button>}
      <h1 style={{ marginLeft: back ? 6 : 0 }}>{title}</h1>
    </div>
    <div className="row">{right}</div>
  </div>;


// ─── Auth ───
const Splash = ({ go }) =>
<div className="px" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '48px 22px 28px' }}>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <div style={{ width: 88, height: 88, borderRadius: 24, background: 'linear-gradient(135deg,var(--fg-gold-500),var(--fg-green-700))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#0A0E0B', fontSize: 42, boxShadow: '0 0 64px rgba(212,160,23,.45)' }}>F</div>
      <div className="display" style={{ fontSize: 34, marginTop: 6 }}>FortuneGate</div>
      <div className="mid" style={{ textAlign: 'center', fontSize: 15, padding: '0 24px', lineHeight: 1.5 }}>Premium content, real referrals, monthly giveaways. Built for ambitious Nigerians.</div>
    </div>
    <div className="stack" style={{ gap: 10 }}>
      <button className="btn btn-gold" onClick={() => go('register')}>Get started</button>
      <button className="btn btn-ghost" onClick={() => go('login')}>I have an account</button>
      <div className="lo" style={{ textAlign: 'center', fontSize: 11, marginTop: 8 }}>By continuing you accept the Terms &amp; Privacy</div>
    </div>
  </div>;

const Register = ({ go, back }) =>
<>
    <TopBar title="Create account" back={back} />
    <div className="pad" style={{ flex: 1, padding: '0 22px 22px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="mid" style={{ fontSize: 13, lineHeight: 1.5 }}>Step 1 of 2 · Your details. We'll verify your phone next.</div>
      <div className="row" style={{ gap: 10 }}>
        <div className="stack grow" style={{ gap: 6 }}>
          <div className="overline">First name</div>
          <input className="input" placeholder="Tunde" required />
        </div>
        <div className="stack grow" style={{ gap: 6 }}>
          <div className="overline">Surname</div>
          <input className="input" placeholder="Adesina" required />
        </div>
      </div>
      <div className="stack" style={{ gap: 6 }}>
        <div className="overline">Email</div>
        <input className="input" type="email" placeholder="you@example.com" required />
      </div>
      <div className="stack" style={{ gap: 6 }}>
        <div className="overline">Password</div>
        <input className="input" type="password" placeholder="At least 8 characters" required />
      </div>
      <div className="stack" style={{ gap: 6 }}>
        <div className="overline">Confirm password</div>
        <input className="input" type="password" placeholder="Re-enter password" required />
      </div>
      <div className="stack" style={{ gap: 6 }}>
        <div className="overline">Referral code · optional</div>
        <input className="input" placeholder="FG-XXXX" />
      </div>
      <label className="row" style={{ gap: 10, fontSize: 13, color: 'var(--fg-text-mid)', cursor: 'pointer' }}>
        <span style={{ width: 18, height: 18, borderRadius: 5, border: '1px solid var(--fg-border-hi)', background: 'rgba(212,160,23,.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-gold-500)' }}>{ICN.check}</span>
        I confirm I am 18 years or older &amp; agree to Terms
      </label>
      <div style={{ flex: 1 }} />
      <button className="btn btn-primary" onClick={() => go('phone-verify')}>Continue →</button>
    </div>
  </>;

const PhoneVerify = ({ go, back }) =>
<>
    <TopBar title="Verify phone" back={back} />
    <div className="pad" style={{ flex: 1, padding: '0 22px 22px', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div className="mid" style={{ fontSize: 13, lineHeight: 1.5 }}>Step 2 of 2 · We'll text you a one-time code to confirm this phone.</div>
      <div className="stack" style={{ gap: 6 }}>
        <div className="overline">Phone number</div>
        <div className="input row" style={{ gap: 0, padding: 0 }}>
          <span style={{ padding: '14px 0 14px 16px', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--fg-text-hi)' }}>+234</span>
          <input className="input" placeholder="803 442 1199" style={{ border: 'none', background: 'transparent', padding: '14px 16px', flex: 1 }} required />
        </div>
        <div className="lo" style={{ fontSize: 11, marginTop: 4 }}>Standard SMS rates may apply. This becomes your login &amp; payout phone.</div>
      </div>
      <div className="glass" style={{ padding: 14, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <span style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(212,160,23,.12)', border: '1px solid var(--fg-border-hi)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none', color: 'var(--fg-gold-300)' }}>{ICN.check}</span>
        <div style={{ fontSize: 13, color: 'var(--fg-text-mid)', lineHeight: 1.5 }}>Your phone is also where giveaway winnings and referral payouts will be sent. Make sure it's reachable.</div>
      </div>
      <div style={{ flex: 1 }} />
      <button className="btn btn-primary" onClick={() => go('otp')}>Send code →</button>
    </div>
  </>;

const OTP = ({ go, back }) =>
<>
    <TopBar title="Verify" back={back} />
    <div className="pad" style={{ flex: 1, padding: '0 22px 22px', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div className="mid" style={{ fontSize: 14 }}>Code sent to <b style={{ color: 'var(--fg-text-hi)' }}>+234 803 ••• 4421</b></div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between' }}>
        {['2', '8', '4', '1', '', ''].map((d, i) =>
      <div key={i} className="num" style={{ flex: 1, aspectRatio: '1', background: 'rgba(10,14,11,.6)', border: '1px solid ' + (i === 4 ? 'var(--fg-gold-500)' : 'var(--fg-border)'), boxShadow: i === 4 ? '0 0 0 3px rgba(212,160,23,.15)' : 'none', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: 'var(--fg-text-hi)' }}>{d || (i === 4 ? <span style={{ width: 2, height: 24, background: 'var(--fg-gold-500)', animation: 'blink 1s infinite' }} /> : '')}</div>
      )}
      </div>
      <div className="row" style={{ justifyContent: 'space-between', fontSize: 13 }}>
        <span className="lo">Resend in <span className="num" style={{ color: 'var(--fg-text-mid)' }}>0:42</span></span>
        <span style={{ color: 'var(--fg-gold-500)', fontWeight: 600 }}>Try another method</span>
      </div>
      <div style={{ flex: 1 }} />
      <button className="btn btn-primary" onClick={() => go('onb-tier')}>Verify</button>
    </div>
  </>;

const Login = ({ go, back }) =>
<>
    <TopBar title="Welcome back" back={back} />
    <div className="pad" style={{ flex: 1, padding: '0 22px 22px', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div className="stack" style={{ gap: 8 }}>
        <div className="overline">Phone number</div>
        <input className="input" defaultValue="+234 803 442 1199" />
      </div>
      <div className="stack" style={{ gap: 8 }}>
        <div className="overline">Password</div>
        <input className="input" type="password" defaultValue="••••••••" />
      </div>
      <div className="row" style={{ justifyContent: 'space-between', fontSize: 13 }}>
        <span style={{ color: 'var(--fg-text-mid)' }}>Use OTP instead</span>
        <span style={{ color: 'var(--fg-gold-500)', fontWeight: 600 }}>Forgot?</span>
      </div>
      <div style={{ flex: 1 }} />
      <button className="btn btn-primary" onClick={() => go('dash')}>Sign in</button>
      <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--fg-text-mid)' }}>New here? <span style={{ color: 'var(--fg-gold-500)', fontWeight: 600, cursor: 'pointer' }} onClick={() => go('register')}>Create account</span></div>
    </div>
  </>;

const OnbTier = ({ go }) => {
  const [pick, setPick] = React.useState('prem');
  const tiers = [
  { id: 'basic', n: 'Basic', p: 'Free', d: 'Limited library · ads', cls: 'tier-basic' },
  { id: 'std', n: 'Standard', p: '₦2,000/mo', d: 'Most categories · 2× entries', cls: 'tier-std' },
  { id: 'prem', n: 'Premium', p: '₦5,000/mo', d: 'All content · 5× entries', cls: 'tier-prem', rec: true },
  { id: 'vip', n: 'VIP', p: '₦12,000/mo', d: 'Live drops · monthly call', cls: 'tier-vip' }];

  return (
    <>
      <div style={{ padding: '10px 22px 0' }}>
        <div className="overline">Step 1 of 2</div>
        <h1 className="display" style={{ fontSize: 30, margin: '8px 0 6px' }}>Pick your gate.</h1>
        <div className="mid" style={{ fontSize: 14, lineHeight: 1.5 }}>Upgrade or downgrade anytime. Premium recommended for full library access.</div>
      </div>
      <div style={{ flex: 1, padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'auto' }}>
        {tiers.map((t) =>
        <button key={t.id} onClick={() => setPick(t.id)}
        className={pick === t.id ? 'glass-gold' : 'glass'}
        style={{ textAlign: 'left', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', color: 'inherit', font: 'inherit' }}>
            <div style={{ flex: 1 }}>
              <div className="row" style={{ gap: 8, marginBottom: 4 }}>
                <span className="display" style={{ fontSize: 18 }}>{t.n}</span>
                {t.rec && <span className="tier tier-prem">Recommended</span>}
              </div>
              <div className="mid" style={{ fontSize: 12 }}>{t.d}</div>
            </div>
            <div className="stack" style={{ alignItems: 'flex-end', gap: 6 }}>
              <span className="num" style={{ fontSize: 15, color: 'var(--fg-text-hi)' }}>{t.p}</span>
              <span style={{ width: 20, height: 20, borderRadius: 10, border: '1.5px solid ' + (pick === t.id ? 'var(--fg-gold-500)' : 'var(--fg-text-lo)'), background: pick === t.id ? 'var(--fg-gold-500)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {pick === t.id && <span style={{ width: 8, height: 8, borderRadius: 4, background: '#0A0E0B' }} />}
              </span>
            </div>
          </button>
        )}
      </div>
      <div className="px" style={{ padding: '0 22px 22px' }}>
        <button className="btn btn-gold" onClick={() => go('onb-ref')}>Continue</button>
      </div>
    </>);

};
const OnbReferral = ({ go }) =>
<>
    <div style={{ padding: '10px 22px 0' }}>
      <div className="overline">Step 2 of 2</div>
      <h1 className="display" style={{ fontSize: 30, margin: '8px 0 6px' }}>Got a referral?</h1>
      <div className="mid" style={{ fontSize: 14, lineHeight: 1.5 }}>Enter the code from whoever invited you. They earn ₦100 — you start with bonus entries.</div>
    </div>
    <div style={{ flex: 1, padding: '22px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="glass" style={{ padding: 18, textAlign: 'center' }}>
        <div className="overline">Referral code</div>
        <div className="num" style={{ fontSize: 30, letterSpacing: 6, marginTop: 10, color: 'var(--fg-gold-300)' }}>FG-____</div>
      </div>
      <div className="glass-gold" style={{ padding: 14, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <div style={{ width: 28, height: 28, borderRadius: 14, background: 'rgba(212,160,23,.15)', color: 'var(--fg-gold-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{React.cloneElement(ICN.star, { width: 16, height: 16 })}</div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14 }}>5 bonus giveaway entries</div>
          <div className="mid" style={{ fontSize: 12, marginTop: 2 }}>Banked the moment you sign up</div>
        </div>
      </div>
    </div>
    <div className="px" style={{ padding: '0 22px 22px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <button className="btn btn-primary" onClick={() => go('dash')}>Continue</button>
      <button className="btn btn-ghost" onClick={() => go('dash')}>No code · skip</button>
    </div>
  </>;


// ─── Dashboard ───
const Dashboard = ({ go }) =>
<>
    <div className="topbar" style={{ padding: '10px 18px 8px' }}>
      <div>
        <div className="lo" style={{ fontSize: 12, fontWeight: 500 }}>Tuesday, May 9</div>
        <h1 className="display" style={{ fontSize: 24, marginTop: 2 }}>Hey, Tunde 👋</h1>
      </div>
      <div className="row">
        <button className="icon-btn" onClick={() => go('notif')}>{ICN.bell}</button>
      </div>
    </div>
    <div style={{ flex: 1, padding: '4px 18px 18px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'auto' }}>
      <div className="glass-gold" style={{ padding: 18 }}>
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 8 }}>
          <span className="tier tier-prem">Premium</span>
          <span className="lo" style={{ fontSize: 12 }}>12 days left</span>
        </div>
        <div className="num" style={{ fontSize: 30 }}>₦8,400<span style={{ color: 'var(--fg-text-mid)', fontSize: 16, marginLeft: 6 }}>.00</span></div>
        <div className="mid" style={{ fontSize: 12 }}>Available to withdraw</div>
        <div className="row" style={{ gap: 8, marginTop: 14 }}>
          <button className="btn btn-gold" style={{ padding: '10px 14px', fontSize: 13 }} onClick={() => go('payouts')}>Withdraw</button>
          <button className="btn btn-ghost" style={{ padding: '10px 14px', fontSize: 13 }} onClick={() => go('plans')}>Renew Premium</button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {[['42', 'Referrals'], ['18', 'Unlocked'], ['35', 'Entries'], ['+₦820', 'This week']].map(([n, l]) =>
      <div key={l} className="glass" style={{ padding: 14 }}>
            <div className="num" style={{ fontSize: 22, color: 'var(--fg-text-hi)' }}>{n}</div>
            <div className="overline" style={{ marginTop: 4 }}>{l}</div>
          </div>
      )}
      </div>
      <div className="glass" style={{ padding: 16 }}>
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 10 }}>
          <div className="display" style={{ fontSize: 15 }}>Recent activity</div>
          <span className="lo" style={{ fontSize: 12 }}>See all</span>
        </div>
        <div className="stack" style={{ gap: 10 }}>
          {[
        ['+₦100', 'Tunde A. joined via your link', '2m'],
        ['Read', 'Daily power routine', '1h'],
        ['+₦50', 'Bola O. joined', '3h'],
        ['Saved', '3 articles', '1d']].
        map((r, i) =>
        <div key={i} className="row" style={{ justifyContent: 'space-between', paddingBottom: i < 3 ? 10 : 0, borderBottom: i < 3 ? '1px solid var(--fg-border)' : 'none' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="num" style={{ fontSize: 13, color: r[0].startsWith('+') ? 'var(--fg-green-500)' : 'var(--fg-text-hi)' }}>{r[0]}</div>
                <div className="mid" style={{ fontSize: 12, marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r[1]}</div>
              </div>
              <span className="lo" style={{ fontSize: 11 }}>{r[2]}</span>
            </div>
        )}
        </div>
      </div>
    </div>
    <TabBar active="home" go={go} />
  </>;


// ─── Feed ───
const Feed = ({ go, openSheet }) => {
  const [chip, setChip] = React.useState('All');
  const items = [
  { t: 'How to scale a side hustle past ₦1M/mo', cat: 'Business', tier: 'Premium', tCls: 'tier-prem', mins: '12 min', a: 'Adaeze O.' },
  { t: 'Daily power routine for founders', cat: 'Fitness', tier: 'Standard', tCls: 'tier-std', mins: '8 min', a: 'Tobi A.' },
  { t: '10 hacks to cut your data spend', cat: 'Hacks', tier: 'Basic', tCls: 'tier-basic', mins: '5 min', a: 'Femi O.' },
  { t: 'Mindset stack of money-makers', cat: 'Wealth', tier: 'VIP', tCls: 'tier-vip', mins: '18 min', a: 'Aisha B.', locked: true }];

  return (
    <>
      <TopBar title="Discover" right={<><button className="icon-btn">{ICN.search}</button><button className="icon-btn" onClick={() => openSheet('filters-sheet')}>{ICN.filter}</button></>} />
      <div className="row" style={{ gap: 8, padding: '0 18px 14px', overflow: 'auto' }}>
        {['All', 'Business', 'Fitness', 'Hacks', 'Wealth', 'Mindset'].map((c) =>
        <span key={c} className={'chip ' + (chip === c ? 'on' : '')} onClick={() => setChip(c)}>{c}</span>
        )}
      </div>
      <div style={{ flex: 1, padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: 12, overflow: 'auto' }}>
        <div className="glass" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }} onClick={() => go('detail')}>
          <div className="img-ph" style={{ height: 160, borderRadius: '20px 20px 0 0' }} data-label="hero · 16:9 image" />
          <div style={{ padding: 14 }}>
            <div className="row" style={{ gap: 6, marginBottom: 8 }}>
              <span className="tier tier-prem">Premium</span>
              <span className="lo" style={{ fontSize: 11 }}>· {items[0].cat}</span>
            </div>
            <div className="display" style={{ fontSize: 18, lineHeight: 1.25, marginBottom: 6 }}>{items[0].t}</div>
            <div className="lo" style={{ fontSize: 12 }}>{items[0].a} · {items[0].mins}</div>
          </div>
        </div>
        {items.slice(1).map((it, i) =>
        <div key={i} className="glass" style={{ padding: 12, display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer' }} onClick={() => it.locked ? go('detail-locked') : go('detail')}>
            <div className="img-ph" style={{ width: 78, height: 78, flex: 'none', borderRadius: 14 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="row" style={{ gap: 6, marginBottom: 6 }}>
                <span className={'tier ' + it.tCls}>{it.tier}</span>
                {it.locked && <span style={{ color: 'var(--fg-gold-500)', display: 'inline-flex' }}>{React.cloneElement(ICN.lock, { width: 12, height: 12 })}</span>}
              </div>
              <div className="display" style={{ fontSize: 15, lineHeight: 1.3, marginBottom: 4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{it.t}</div>
              <div className="lo" style={{ fontSize: 11 }}>{it.a} · {it.mins} · {it.cat}</div>
            </div>
          </div>
        )}
      </div>
      <TabBar active="content" go={go} />
    </>);

};
const FiltersSheet = ({ closeSheet }) =>
<>
    <div className="row" style={{ justifyContent: 'space-between', marginBottom: 14 }}>
      <div className="display" style={{ fontSize: 18 }}>Filters</div>
      <span className="lo" style={{ fontSize: 13, cursor: 'pointer' }}>Reset</span>
    </div>
    {[['Tier', ['Basic', 'Standard', 'Premium', 'VIP', 'Elite'], 'Premium'], ['Length', ['<5m', '5–15m', '15m+'], '5–15m'], ['Sort', ['Newest', 'Popular', 'Recommended'], 'Recommended']].map(([h, opts, sel]) =>
  <div key={h} style={{ marginBottom: 14 }}>
        <div className="overline" style={{ marginBottom: 8 }}>{h}</div>
        <div className="row" style={{ gap: 8, flexWrap: 'wrap' }}>
          {opts.map((o) => <span key={o} className={'chip ' + (o === sel ? 'on' : '')}>{o}</span>)}
        </div>
      </div>
  )}
    <button className="btn btn-gold" style={{ marginTop: 6 }} onClick={closeSheet}>Apply · 24 results</button>
  </>;


// ─── Content detail ───
const Detail = ({ back }) =>
<>
    <div style={{ position: 'relative', flex: 'none' }}>
      <div className="img-ph" style={{ height: 240, borderRadius: 0 }} data-label="hero photo · 16:9" />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 0%,var(--fg-bg-base) 95%)' }} />
      <button className="icon-btn" onClick={back} style={{ position: 'absolute', top: 54, left: 18, zIndex: 2 }}>{ICN.back}</button>
      <div style={{ position: 'absolute', bottom: 14, left: 18 }}>
        <span className="tier tier-prem">Premium · Business</span>
      </div>
    </div>
    <div style={{ flex: 1, padding: '4px 22px 110px', overflow: 'auto' }}>
      <h1 className="display" style={{ fontSize: 26, lineHeight: 1.15, margin: '4px 0 10px' }}>How to scale a side hustle past ₦1M/mo</h1>
      <div className="row" style={{ gap: 8, fontSize: 12, color: 'var(--fg-text-mid)', marginBottom: 18 }}>
        <span>Adaeze O.</span><span className="lo">·</span><span>12 min read</span><span className="lo">·</span><span>3.4K reads</span>
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--fg-text-mid)', margin: '0 0 14px' }}>The first ₦100,000 is the hardest. Everything that comes after is repetition — but only if you build the right systems first. Here's the playbook I used to grow from ₦40K/mo to ₦2M/mo in 18 months.</p>
      <div className="glass-gold" style={{ padding: 18, margin: '18px 0' }}>
        <div className="overline" style={{ color: 'var(--fg-gold-500)', marginBottom: 6 }}>Pull-quote</div>
        <div className="display" style={{ fontSize: 18, lineHeight: 1.4 }}>"Your first ₦100K is the hardest. Everything after is repetition."</div>
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--fg-text-mid)', margin: '0 0 14px' }}>Step one is unbundling your time from your income. If every naira you earn requires you in the room, you've built a job — not a business.</p>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--fg-text-mid)', margin: '0 0 14px' }}>Step two: charge in NGN, price in dollars. Your costs are local; your ceiling shouldn't be.</p>
    </div>
    <div className="glass" style={{ position: 'absolute', left: 14, right: 14, bottom: 14, padding: 8, display: 'flex', gap: 8, borderRadius: 18, zIndex: 5 }}>
      <button className="btn btn-ghost" style={{ padding: '10px 14px', fontSize: 13, flex: 1 }}>Save</button>
      <button className="btn btn-ghost" style={{ padding: '10px 14px', fontSize: 13, flex: 1 }}>Share</button>
      <button className="btn btn-primary" style={{ padding: '10px 14px', fontSize: 13, flex: 2 }}>Next →</button>
    </div>
  </>;

const DetailLocked = ({ back, go }) =>
<>
    <div style={{ position: 'relative', flex: 'none' }}>
      <div className="img-ph" style={{ height: 200, borderRadius: 0, filter: 'blur(6px) brightness(.5)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(10,14,11,.4) 0%,var(--fg-bg-base) 90%)' }} />
      <button className="icon-btn" onClick={back} style={{ position: 'absolute', top: 54, left: 18, zIndex: 2 }}>{ICN.back}</button>
    </div>
    <div style={{ flex: 1, padding: '10px 22px 22px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, textAlign: 'center', marginTop: -40 }}>
      <div style={{ width: 64, height: 64, borderRadius: 32, background: 'linear-gradient(135deg,rgba(212,160,23,.2),rgba(184,134,11,.4))', color: 'var(--fg-gold-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px rgba(212,160,23,.3)' }}>
        {React.cloneElement(ICN.lock, { width: 28, height: 28 })}
      </div>
      <span className="tier tier-vip">VIP only</span>
      <h1 className="display" style={{ fontSize: 24, margin: 0 }}>Mindset stack of money-makers</h1>
      <div className="mid" style={{ fontSize: 14, lineHeight: 1.5, maxWidth: 280 }}>This is a VIP-tier read. Upgrade to unlock the full library, plus 5× giveaway entries and higher referral payouts.</div>
      <div className="glass" style={{ padding: 14, width: '100%', marginTop: 6 }}>
        <div className="overline" style={{ textAlign: 'left', marginBottom: 8 }}>What you get</div>
        <div className="stack" style={{ gap: 8, fontSize: 13, color: 'var(--fg-text-hi)', textAlign: 'left' }}>
          {['Full library, no ads', '5× giveaway entries', 'Higher referral payout', 'Live drops + monthly call'].map((t) =>
        <div key={t} className="row" style={{ gap: 8 }}><span style={{ color: 'var(--fg-green-500)', display: 'inline-flex' }}>{React.cloneElement(ICN.check, { width: 16, height: 16 })}</span><span>{t}</span></div>
        )}
        </div>
      </div>
      <div style={{ flex: 1 }} />
      <button className="btn btn-gold" style={{ width: '100%' }} onClick={() => go('plans')}>See plans</button>
    </div>
  </>;


// ─── Plans / Checkout ───
const Plans = ({ go, back }) => {
  const [annual, setAnnual] = React.useState(false);
  const tiers = [
  { n: 'Basic', p: 0, d: 'Limited library', cls: 'tier-basic' },
  { n: 'Standard', p: 2000, d: 'Most categories · 2× entries', cls: 'tier-std' },
  { n: 'Premium', p: 5000, d: 'Full library · 5× entries', cls: 'tier-prem', rec: true },
  { n: 'VIP', p: 12000, d: 'Live drops · monthly call', cls: 'tier-vip' },
  { n: 'Elite', p: 25000, d: 'Everything · 1:1 mentor', cls: 'tier-elite' }];

  return (
    <>
      <TopBar title="Plans" back={back} />
      <div className="px" style={{ padding: '0 18px 12px' }}>
        <div className="glass" style={{ padding: 4, display: 'flex', gap: 4 }}>
          <button onClick={() => setAnnual(false)} className="btn" style={{ padding: '8px 12px', fontSize: 13, flex: 1, background: !annual ? 'rgba(212,160,23,.12)' : 'transparent', color: !annual ? 'var(--fg-gold-300)' : 'var(--fg-text-mid)', border: 'none' }}>Monthly</button>
          <button onClick={() => setAnnual(true)} className="btn" style={{ padding: '8px 12px', fontSize: 13, flex: 1, background: annual ? 'rgba(212,160,23,.12)' : 'transparent', color: annual ? 'var(--fg-gold-300)' : 'var(--fg-text-mid)', border: 'none' }}>Annual <span style={{ color: 'var(--fg-green-500)', marginLeft: 4, fontSize: 11 }}>−20%</span></button>
        </div>
      </div>
      <div style={{ flex: 1, padding: '4px 18px 18px', display: 'flex', flexDirection: 'column', gap: 12, overflow: 'auto' }}>
        {tiers.map((t) =>
        <div key={t.n} className={t.rec ? 'glass-gold' : 'glass'} style={{ padding: 18, ...(t.rec ? { transform: 'translateY(-2px)' } : {}) }}>
            <div className="row" style={{ justifyContent: 'space-between', marginBottom: 10 }}>
              <div className="row" style={{ gap: 8 }}>
                <span className={'tier ' + t.cls}>{t.n}</span>
                {t.rec && <span style={{ fontSize: 11, color: 'var(--fg-gold-300)' }}>★ Pick this</span>}
              </div>
              <div className="num" style={{ fontSize: 22 }}>{t.p === 0 ? 'Free' : `₦${(annual ? t.p * 9.6 : t.p).toLocaleString()}`}</div>
            </div>
            <div className="mid" style={{ fontSize: 13, marginBottom: 12 }}>{t.d}{annual && t.p > 0 && <span className="lo"> · billed yearly</span>}</div>
            <button className={'btn ' + (t.rec ? 'btn-gold' : 'btn-ghost')} style={{ padding: '10px 14px', fontSize: 13 }} onClick={() => go('checkout')}>{t.n === 'Basic' ? 'Stay on Basic' : 'Choose ' + t.n}</button>
          </div>
        )}
      </div>
    </>);

};
const Checkout = ({ go, back }) =>
<>
    <TopBar title="Checkout" back={back} />
    <div style={{ flex: 1, padding: '0 22px 22px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'auto' }}>
      <div className="glass-gold" style={{ padding: 18 }}>
        <div className="overline" style={{ marginBottom: 6 }}>Order</div>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <div className="display" style={{ fontSize: 18 }}>Premium · monthly</div>
          <div className="num" style={{ fontSize: 18 }}>₦5,000</div>
        </div>
        <div className="lo" style={{ fontSize: 12, marginTop: 6 }}>Renews 12 May. Cancel anytime.</div>
      </div>
      <div>
        <div className="overline" style={{ marginBottom: 8 }}>Pay with</div>
        <div className="stack" style={{ gap: 8 }}>
          {[
        { n: 'Visa · •••• 4421', sel: true },
        { n: 'Bank transfer' },
        { n: 'Paystack' },
        { n: 'Monnify' }].
        map((m, i) =>
        <div key={i} className={m.sel ? 'glass-gold' : 'glass'} style={{ padding: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
              <div className="row" style={{ gap: 10 }}>
                <div style={{ width: 36, height: 24, borderRadius: 5, background: 'rgba(255,255,255,.06)', border: '1px solid var(--fg-border)' }} />
                <span style={{ fontSize: 14 }}>{m.n}</span>
              </div>
              <span style={{ width: 18, height: 18, borderRadius: 9, border: '1.5px solid ' + (m.sel ? 'var(--fg-gold-500)' : 'var(--fg-text-lo)'), background: m.sel ? 'var(--fg-gold-500)' : 'transparent' }} />
            </div>
        )}
        </div>
      </div>
      <div className="glass" style={{ padding: 14 }}>
        <div className="row" style={{ justifyContent: 'space-between', fontSize: 13, color: 'var(--fg-text-mid)' }}>
          <span>Subtotal</span><span className="num">₦5,000.00</span>
        </div>
        <div className="row" style={{ justifyContent: 'space-between', fontSize: 13, color: 'var(--fg-text-mid)', marginTop: 6 }}>
          <span>VAT</span><span className="num">₦0.00</span>
        </div>
        <div className="row" style={{ justifyContent: 'space-between', marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--fg-border)' }}>
          <span className="display" style={{ fontSize: 16 }}>Total</span>
          <span className="num" style={{ fontSize: 20, color: 'var(--fg-gold-300)' }}>₦5,000.00</span>
        </div>
      </div>
    </div>
    <div className="px" style={{ padding: '0 22px 22px' }}>
      <button className="btn btn-gold" onClick={() => go('checkout-success')}>Pay ₦5,000</button>
    </div>
  </>;

const CheckoutSuccess = ({ go }) =>
<div style={{ flex: 1, padding: '48px 24px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, textAlign: 'center' }}>
    <div style={{ width: 88, height: 88, borderRadius: 44, background: 'linear-gradient(135deg,rgba(67,160,71,.18),rgba(46,125,50,.4))', color: 'var(--fg-green-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 64px rgba(46,125,50,.4)' }}>
      {React.cloneElement(ICN.check, { width: 44, height: 44 })}
    </div>
    <h1 className="display" style={{ fontSize: 30, margin: '10px 0 4px' }}>You're in.</h1>
    <div className="mid" style={{ fontSize: 14, lineHeight: 1.5, maxWidth: 280 }}>Premium activated. Library unlocked. Receipt sent to +234 803 ••• 4421.</div>
    <div className="glass-gold" style={{ padding: 14, width: '100%', marginTop: 6 }}>
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <span className="overline" style={{ color: 'var(--fg-gold-500)' }}>Bonus unlocked</span>
        <span className="num" style={{ color: 'var(--fg-gold-300)' }}>+25 entries</span>
      </div>
      <div className="display" style={{ fontSize: 16, marginTop: 6, textAlign: 'left' }}>You're now at 35 entries for the May draw.</div>
    </div>
    <div style={{ flex: 1 }} />
    <div className="stack" style={{ gap: 8, width: '100%' }}>
      <button className="btn btn-primary" onClick={() => go('feed')}>Start exploring</button>
      <button className="btn btn-ghost" onClick={() => go('dash')}>Go to dashboard</button>
    </div>
  </div>;


// ─── Earn / Payouts / Giveaway ───
const Earn = ({ go, back }) =>
<>
    <TopBar title="Earn" />
    <div style={{ flex: 1, padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'auto' }}>
      <div className="glass-gold" style={{ padding: 20, textAlign: 'center' }}>
        <div className="overline" style={{ color: 'var(--fg-gold-500)' }}>Your code</div>
        <div className="num" style={{ fontSize: 32, letterSpacing: 4, marginTop: 6, color: 'var(--fg-gold-300)' }}>FG-TUNDE</div>
        <div className="row" style={{ gap: 8, justifyContent: 'center', marginTop: 14 }}>
          <button className="btn btn-ghost" style={{ padding: '10px 14px', fontSize: 13, width: 'auto' }}>{ICN.copy}<span style={{ marginLeft: 6 }}>Copy link</span></button>
          <button className="btn btn-gold" style={{ padding: '10px 14px', fontSize: 13, width: 'auto' }}>{ICN.share}<span style={{ marginLeft: 6 }}>Share</span></button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {[['42', 'Total'], ['8', 'This week'], ['₦8.4K', 'Earned']].map(([n, l]) =>
      <div key={l} className="glass" style={{ padding: 12, textAlign: 'center' }}>
            <div className="num" style={{ fontSize: 18 }}>{n}</div>
            <div className="overline" style={{ marginTop: 2, fontSize: 9 }}>{l}</div>
          </div>
      )}
      </div>
      <div className="glass" style={{ padding: 16 }}>
        <div className="overline" style={{ marginBottom: 10 }}>Payout breakdown</div>
        {[['First referral', '₦100'], ['Subsequent referrals', '₦50 each'], ['Premium upgrade bonus', '+₦200']].map(([l, v], i, a) =>
      <div key={l} className="row" style={{ justifyContent: 'space-between', padding: '8px 0', borderBottom: i < a.length - 1 ? '1px solid var(--fg-border)' : 'none' }}>
            <span style={{ fontSize: 13, color: 'var(--fg-text-mid)' }}>{l}</span>
            <span className="num" style={{ fontSize: 14, color: 'var(--fg-green-300)' }}>{v}</span>
          </div>
      )}
      </div>
      <div className="glass" style={{ padding: 16 }}>
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 10 }}>
          <div className="display" style={{ fontSize: 15 }}>Recent referrals</div>
          <span className="lo" style={{ fontSize: 12, cursor: 'pointer' }} onClick={() => go('payouts')}>Payouts →</span>
        </div>
        <div className="stack" style={{ gap: 10 }}>
          {[['Tunde A.', '₦100', '2d', 'Premium'], ['Bola O.', '₦50', '3d', 'Standard'], ['Chioma N.', '₦50', '5d', 'Standard']].map((r, i, a) =>
        <div key={i} className="row" style={{ justifyContent: 'space-between', paddingBottom: i < a.length - 1 ? 10 : 0, borderBottom: i < a.length - 1 ? '1px solid var(--fg-border)' : 'none' }}>
              <div>
                <div style={{ fontSize: 13, color: 'var(--fg-text-hi)' }}>{r[0]}</div>
                <div className="lo" style={{ fontSize: 11, marginTop: 2 }}>{r[3]} · {r[2]}</div>
              </div>
              <span className="num" style={{ color: 'var(--fg-green-300)' }}>+{r[1]}</span>
            </div>
        )}
        </div>
      </div>
    </div>
    <TabBar active="earn" go={go} />
  </>;

const Payouts = ({ go, back }) =>
<>
    <TopBar title="Payouts" back={back} />
    <div style={{ flex: 1, padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'auto' }}>
      <div className="glass-gold" style={{ padding: 22, textAlign: 'center' }}>
        <div className="overline" style={{ color: 'var(--fg-gold-500)' }}>Available</div>
        <div className="num" style={{ fontSize: 38, marginTop: 6, color: 'var(--fg-text-hi)' }}>₦8,400<span style={{ color: 'var(--fg-text-mid)', fontSize: 20, marginLeft: 4 }}>.00</span></div>
        <button className="btn btn-gold" style={{ marginTop: 14 }}>Withdraw to bank</button>
      </div>
      <div className="glass" style={{ padding: 16 }}>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <div>
            <div className="overline">Bank account</div>
            <div style={{ fontSize: 14, marginTop: 4 }}>GTB · Tunde Adeyemi</div>
            <div className="num lo" style={{ fontSize: 12 }}>•••• 1199</div>
          </div>
          <span className="lo" style={{ fontSize: 12 }}>Change</span>
        </div>
      </div>
      <div className="glass" style={{ padding: 16 }}>
        <div className="display" style={{ fontSize: 15, marginBottom: 10 }}>History</div>
        {[['Apr 28', '₦5,000.00', 'Paid'], ['Mar 30', '₦3,200.00', 'Paid'], ['Feb 28', '₦2,400.00', 'Paid']].map((r, i, a) =>
      <div key={i} className="row" style={{ justifyContent: 'space-between', padding: '10px 0', borderBottom: i < a.length - 1 ? '1px solid var(--fg-border)' : 'none' }}>
            <div>
              <div className="num" style={{ fontSize: 14 }}>{r[1]}</div>
              <div className="lo" style={{ fontSize: 11, marginTop: 2 }}>{r[0]}</div>
            </div>
            <span className="tier tier-std" style={{ fontSize: 9 }}>{r[2]}</span>
          </div>
      )}
      </div>
    </div>
  </>;

const Giveaway = ({ go, back }) =>
<>
    <TopBar title="Giveaway" />
    <div style={{ flex: 1, padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'auto' }}>
      <div className="glass-gold" style={{ padding: 18, position: 'relative', overflow: 'hidden' }}>
        <div className="overline" style={{ color: 'var(--fg-gold-500)' }}>This month's draw</div>
        <h1 className="display" style={{ fontSize: 26, margin: '8px 0 6px' }}>iPhone 16 Pro</h1>
        <div className="mid" style={{ fontSize: 13 }}>1 winner · drawn 31 May at 8 PM WAT</div>
        <div className="row" style={{ gap: 8, marginTop: 14, justifyContent: 'space-between' }}>
          {[['14', 'days'], ['06', 'hrs'], ['42', 'min']].map(([n, l], i) =>
        <div key={i} style={{ flex: 1, padding: '10px 8px', background: 'rgba(10,14,11,.5)', border: '1px solid var(--fg-border)', borderRadius: 12, textAlign: 'center' }}>
              <div className="num" style={{ fontSize: 20, color: 'var(--fg-gold-300)' }}>{n}</div>
              <div className="overline" style={{ fontSize: 9, marginTop: 2 }}>{l}</div>
            </div>
        )}
        </div>
      </div>
      <div className="glass" style={{ padding: 16 }}>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div className="overline">Your entries</div>
          <div className="num" style={{ fontSize: 34, color: 'var(--fg-text-hi)' }}>35</div>
        </div>
        <div className="lo" style={{ fontSize: 11, marginTop: 4 }}>+5 referrals · +25 premium · +5 daily</div>
        <div style={{ marginTop: 10, height: 6, borderRadius: 3, background: 'rgba(255,255,255,.06)', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: '24%', background: 'linear-gradient(90deg,var(--fg-gold-500),var(--fg-green-500))' }} />
        </div>
        <div className="row" style={{ justifyContent: 'space-between', fontSize: 11, color: 'var(--fg-text-lo)', marginTop: 6 }}>
          <span>~1 in 412 odds</span><span>top 24%</span>
        </div>
      </div>
      <div className="glass" style={{ padding: 16 }}>
        <div className="display" style={{ fontSize: 15, marginBottom: 10 }}>Earn more entries</div>
        <div className="stack" style={{ gap: 10 }}>
          {[['Refer a friend', '+5 each', () => go('earn')], ['Read daily', '+1 per day', () => go('feed')], ['Upgrade to Premium', '+25', () => go('plans')]].map(([l, v, fn], i, a) =>
        <div key={i} className="row" style={{ justifyContent: 'space-between', padding: '8px 0', borderBottom: i < a.length - 1 ? '1px solid var(--fg-border)' : 'none', cursor: 'pointer' }} onClick={fn}>
              <span style={{ fontSize: 14 }}>{l}</span>
              <div className="row" style={{ gap: 8 }}>
                <span className="num" style={{ fontSize: 13, color: 'var(--fg-gold-300)' }}>{v}</span>
                <span style={{ color: 'var(--fg-text-lo)' }}>{ICN.chev}</span>
              </div>
            </div>
        )}
        </div>
      </div>
    </div>
    <TabBar active="give" go={go} />
  </>;


// ─── Profile / Notifications ───
const Profile = ({ go, back }) =>
<>
    <TopBar title="Profile" right={<span className="lo" style={{ fontSize: 13, padding: '8px 12px' }}>Edit</span>} />
    <div style={{ flex: 1, padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'auto' }}>
      <div className="glass" style={{ padding: 18, display: 'flex', gap: 14, alignItems: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: 32, background: 'linear-gradient(135deg,var(--fg-gold-500),var(--fg-green-700))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: '#0A0E0B' }}>T</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="display" style={{ fontSize: 18 }}>Tunde Adeyemi</div>
          <div className="num lo" style={{ fontSize: 12, marginTop: 2 }}>+234 803 ••• 4421</div>
          <div style={{ marginTop: 6 }}><span className="tier tier-prem">Premium · 12 days left</span></div>
        </div>
      </div>
      <div className="glass" style={{ padding: 0, overflow: 'hidden' }}>
        {[['Saved articles', '18'], ['Reading history', '42'], ['Payouts', '₦8,400'], ['Notifications', '3 new', () => go('notif')], ['Help & support'], ['Sign out']].map((r, i, a) =>
      <div key={i} className="row" style={{ justifyContent: 'space-between', padding: '14px 18px', borderBottom: i < a.length - 1 ? '1px solid var(--fg-border)' : 'none', cursor: 'pointer', color: r[0] === 'Sign out' ? 'var(--fg-danger)' : 'var(--fg-text-hi)' }} onClick={r[2]}>
            <span style={{ fontSize: 14 }}>{r[0]}</span>
            <span className="row" style={{ gap: 8 }}>
              {r[1] && <span className="lo" style={{ fontSize: 12 }}>{r[1]}</span>}
              {r[0] !== 'Sign out' && <span style={{ color: 'var(--fg-text-lo)' }}>{ICN.chev}</span>}
            </span>
          </div>
      )}
      </div>
    </div>
    <TabBar active="prof" go={go} />
  </>;

const Notifications = ({ back, go }) =>
<>
    <TopBar title="Notifications" back={back} right={<span className="lo" style={{ fontSize: 13, padding: '8px 12px' }}>Mark read</span>} />
    <div style={{ flex: 1, padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: 10, overflow: 'auto' }}>
      {[
    { t: '+₦100 · Tunde joined via your link', d: '2m ago', unread: true, c: 'var(--fg-green-500)' },
    { t: 'New Premium drop · Scaling past ₦1M', d: '1h ago', unread: true, c: 'var(--fg-gold-500)' },
    { t: 'Giveaway draw closes in 14 days', d: '4h ago' },
    { t: '+₦50 · Bola joined', d: '1d ago', c: 'var(--fg-green-500)' },
    { t: 'Your renewal · ₦5,000 in 12 days', d: '2d ago' }].
    map((n, i) =>
    <div key={i} className={n.unread ? 'glass-gold' : 'glass'} style={{ padding: 14, borderLeft: n.c ? '3px solid ' + n.c : undefined }}>
          <div className="row" style={{ justifyContent: 'space-between', gap: 10 }}>
            <div style={{ fontSize: 13, color: 'var(--fg-text-hi)', lineHeight: 1.4 }}>{n.t}</div>
            <span className="lo" style={{ fontSize: 11, whiteSpace: 'nowrap' }}>{n.d}</span>
          </div>
        </div>
    )}
    </div>
  </>;


const Screens = {
  splash: Splash, register: Register, 'phone-verify': PhoneVerify, otp: OTP, login: Login,
  'onb-tier': OnbTier, 'onb-ref': OnbReferral,
  dash: Dashboard,
  feed: Feed, detail: Detail, 'detail-locked': DetailLocked,
  plans: Plans, checkout: Checkout, 'checkout-success': CheckoutSuccess,
  earn: Earn, payouts: Payouts, giveaway: Giveaway,
  profile: Profile, notif: Notifications,
  'filters-sheet': FiltersSheet
};

const FLOW = {
  Auth: [['splash', 'Splash'], ['register', 'Register · Step 1'], ['phone-verify', 'Phone · Step 2'], ['otp', 'OTP code'], ['login', 'Sign in'], ['onb-tier', 'Pick tier'], ['onb-ref', 'Referral']],
  Content: [['feed', 'Feed'], ['detail', 'Article'], ['detail-locked', 'Locked article']],
  Plans: [['plans', 'Plans'], ['checkout', 'Checkout'], ['checkout-success', 'Success']],
  Money: [['dash', 'Dashboard'], ['earn', 'Earn'], ['payouts', 'Payouts']],
  Engage: [['giveaway', 'Giveaway'], ['notif', 'Notifications']],
  Account: [['profile', 'Profile']]
};

window.Screens = Screens;
window.FLOW = FLOW;