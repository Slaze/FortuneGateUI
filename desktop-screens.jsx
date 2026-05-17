/* eslint-disable */
const ICN = {
  dash:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>,
  content: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z"/></svg>,
  users:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M3 21a6 6 0 0 1 12 0"/><path d="M16 4a3.5 3.5 0 0 1 0 7"/><path d="M21 21a6 6 0 0 0-3-5"/></svg>,
  plans:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>,
  give:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2"/></svg>,
  pay:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg>,
  refer:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M7.5 7.5l3 9M16.5 7.5l-3 9"/></svg>,
  cog:     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.2a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h.2a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.2a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>,
  bell:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>,
  search:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>,
  plus:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16"><path d="M12 5v14M5 12h14"/></svg>,
  filter:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M3 5h18M6 12h12M10 19h4"/></svg>,
  check:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M5 12l5 5L20 7"/></svg>,
  more:    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/></svg>,
  arrow:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="14" height="14"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
};

function NavItem({ico,label,on,onClick,badge}){
  return <button className={'nav-item ' + (on?'on':'')} onClick={onClick}>{ICN[ico]}<span>{label}</span>{badge && <span className="badge">{badge}</span>}</button>;
}

function AdminShell({page, setPage, children}){
  const titles = {dash:'Dashboard', content:'Content library', users:'Users'};
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="l">F</div>
          <div className="stack">
            <div className="brand-name">FortuneGate</div>
            <div className="brand-sub">Admin</div>
          </div>
        </div>
        <a className="back-link" href="studio.html" style={{padding:'4px 8px'}}>← All artifacts</a>
        <div className="nav-group">Operate</div>
        <NavItem ico="dash" label="Dashboard" on={page==='dash'} onClick={()=>setPage('admin-dash')}/>
        <NavItem ico="content" label="Content" on={page==='content'} onClick={()=>setPage('admin-content')} badge="3"/>
        <NavItem ico="users" label="Users" on={page==='users'} onClick={()=>setPage('admin-users')}/>
        <NavItem ico="pay" label="Payments"/>
        <div className="nav-group">Engage</div>
        <NavItem ico="plans" label="Plans & tiers" onClick={()=>setPage('plans')}/>
        <NavItem ico="give" label="Giveaways"/>
        <NavItem ico="refer" label="Referrals"/>
        <div className="nav-group">System</div>
        <NavItem ico="cog" label="Settings"/>
        <div style={{flex:1}}/>
        <div className="glass" style={{padding:14,marginTop:14}}>
          <div className="overline" style={{marginBottom:6}}>System</div>
          <div style={{fontSize:12,color:'var(--fg-text-mid)'}}><span className="status-dot sd-ok"/>All services up</div>
          <div style={{fontSize:11,color:'var(--fg-text-lo)',marginTop:4}}>Build v3.1.4 · 12m ago</div>
        </div>
      </aside>
      <main className="main">
        <div className="topbar">
          <div className="crumbs">Admin <span style={{margin:'0 6px'}}>/</span> <b>{titles[page]||'—'}</b></div>
          <div className="top-search">
            {ICN.search}
            <input className="input" placeholder="Search content, users, payouts…"/>
          </div>
          <button className="icon-btn">{ICN.bell}</button>
          <div className="avatar">A</div>
        </div>
        {children}
      </main>
    </div>
  );
}

function AdminDashboard(){
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <div className="overline">Tuesday · 9 May 2026</div>
          <h1>Good morning, Adaeze</h1>
        </div>
        <div className="row gap-8">
          <button className="btn btn-ghost">Export report</button>
          <button className="btn btn-gold">{ICN.plus}<span style={{marginLeft:6}}>New content</span></button>
        </div>
      </div>

      <div className="kpi-grid">
        {[
          {l:'MRR',v:'₦12.4M', d:'+18.2% vs Apr', ok:true},
          {l:'Active subscribers',v:'82,144', d:'+2,840 this week', ok:true},
          {l:'Churn',v:'3.4%', d:'+0.4% — watch', ok:false},
          {l:'Referral payouts',v:'₦1.8M', d:'+₦220K · weekly'},
        ].map((k,i)=>(
          <div key={i} className={i===0?'glass-gold kpi':'glass kpi'}>
            <div className="label">{k.l}</div>
            <div className="v" style={{color:i===0?'var(--fg-gold-300)':'var(--fg-text-hi)'}}>{k.v}</div>
            <div className={'delta ' + (k.ok===false?'bad':'')}>{k.d}</div>
          </div>
        ))}
      </div>

      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:18}}>
        <div className="glass" style={{padding:22}}>
          <div className="row" style={{justifyContent:'space-between',marginBottom:16}}>
            <div>
              <div className="overline">Revenue</div>
              <div style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:18,marginTop:4}}>Last 30 days</div>
            </div>
            <div className="toggle">
              {['7D','30D','90D','1Y'].map((p,i)=>(
                <button key={p} className={i===1?'on':''}>{p}</button>
              ))}
            </div>
          </div>
          {/* Mini chart */}
          <svg viewBox="0 0 600 200" style={{width:'100%',height:200,display:'block'}}>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4A017" stopOpacity=".4"/>
                <stop offset="100%" stopColor="#D4A017" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {[40,80,120,160].map(y=><line key={y} x1="0" x2="600" y1={y} y2={y} stroke="rgba(212,160,23,.06)"/>)}
            <path d="M0,140 C40,130 60,110 100,100 C140,90 180,120 220,90 C260,60 300,80 340,55 C380,30 420,70 460,40 C500,15 540,30 600,20 L600,200 L0,200 Z" fill="url(#g1)"/>
            <path d="M0,140 C40,130 60,110 100,100 C140,90 180,120 220,90 C260,60 300,80 340,55 C380,30 420,70 460,40 C500,15 540,30 600,20" fill="none" stroke="#D4A017" strokeWidth="2.5"/>
            {[0,100,220,340,460,600].map((x,i)=>{
              const ys=[140,100,90,55,40,20]; return <circle key={i} cx={x} cy={ys[i]} r="3.5" fill="#0A0E0B" stroke="#D4A017" strokeWidth="2"/>;
            })}
          </svg>
          <div className="row" style={{justifyContent:'space-between',color:'var(--fg-text-lo)',fontSize:11,marginTop:6}}>
            {['Apr 10','Apr 17','Apr 24','May 1','May 8'].map(d=><span key={d}>{d}</span>)}
          </div>
        </div>

        <div className="stack gap-16">
          <div className="glass-gold" style={{padding:20}}>
            <div className="overline" style={{color:'var(--fg-gold-500)'}}>This month's draw</div>
            <div className="display" style={{fontSize:20,marginTop:6}}>iPhone 16 Pro</div>
            <div className="num" style={{fontSize:28,marginTop:10,color:'var(--fg-gold-300)'}}>284,910</div>
            <div className="lo" style={{fontSize:11}}>Total entries · drawn 31 May</div>
            <button className="btn btn-ghost" style={{marginTop:14,fontSize:12,padding:'8px 14px'}}>Manage draw →</button>
          </div>
          <div className="glass" style={{padding:18}}>
            <div className="overline" style={{marginBottom:10}}>Tier mix</div>
            {[['Basic',18,'#9aa39d'],['Standard',42,'#43A047'],['Premium',28,'#D4A017'],['VIP',9,'#B8860B'],['Elite',3,'#E8C547']].map(([n,p,c])=>(
              <div key={n} style={{marginBottom:10}}>
                <div className="row" style={{justifyContent:'space-between',marginBottom:4}}>
                  <span style={{fontSize:12}}>{n}</span>
                  <span className="num" style={{fontSize:12,color:'var(--fg-text-mid)'}}>{p}%</span>
                </div>
                <div style={{height:5,borderRadius:3,background:'rgba(255,255,255,.04)',overflow:'hidden'}}>
                  <div style={{height:'100%',width:p+'%',background:c,opacity:.85}}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass" style={{padding:22,marginTop:18}}>
        <div className="row" style={{justifyContent:'space-between',marginBottom:14}}>
          <div className="display" style={{fontSize:18}}>Recent activity</div>
          <span className="lo" style={{fontSize:13,cursor:'pointer'}}>See all →</span>
        </div>
        <table className="table">
          <thead>
            <tr><th>Type</th><th>Detail</th><th>Amount</th><th>User</th><th>Time</th></tr>
          </thead>
          <tbody>
            {[
              ['New subscription','Premium · monthly','₦5,000','Tunde A.','2m'],
              ['Payout','Bank transfer · GTB','₦8,400','Adaeze O.','9m'],
              ['Referral bonus','First referral','+₦100','Bola O.','14m'],
              ['New subscription','VIP · annual','₦115,200','Femi O.','22m'],
              ['Refund','Plan change','−₦2,000','Chioma N.','41m'],
            ].map((r,i)=>(
              <tr key={i}>
                <td><span style={{fontSize:13}}>{r[0]}</span></td>
                <td style={{color:'var(--fg-text-mid)',fontSize:13}}>{r[1]}</td>
                <td className="num" style={{color: r[2].startsWith('+')?'var(--fg-green-300)': r[2].startsWith('−')?'var(--fg-danger)':'var(--fg-text-hi)'}}>{r[2]}</td>
                <td><div className="row gap-8"><span className="ava-sm">{r[3][0]}</span><span style={{fontSize:13}}>{r[3]}</span></div></td>
                <td className="lo" style={{fontSize:12}}>{r[4]} ago</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdminContent(){
  const items = [
    {t:'How to scale a side hustle past ₦1M/mo', tier:'Premium', tCls:'tier-prem', cat:'Business', a:'Adaeze O.', s:'Published', sd:'sd-ok', v:'12.4K', d:'May 9'},
    {t:'Daily power routine for founders', tier:'Standard', tCls:'tier-std', cat:'Fitness', a:'Tobi A.', s:'Published', sd:'sd-ok', v:'8.2K', d:'May 8'},
    {t:'10 hacks to cut your data spend', tier:'Basic', tCls:'tier-basic', cat:'Hacks', a:'Femi O.', s:'Published', sd:'sd-ok', v:'5.1K', d:'May 7'},
    {t:'Mindset stack of money-makers', tier:'VIP', tCls:'tier-vip', cat:'Wealth', a:'Aisha B.', s:'Scheduled', sd:'sd-warn', v:'—', d:'May 12'},
    {t:'Inside Lagos\' best kitchens · part 2', tier:'Premium', tCls:'tier-prem', cat:'Lifestyle', a:'Ngozi K.', s:'Draft', sd:'sd-warn', v:'—', d:'—'},
    {t:'5 prayer points for ambitious workers', tier:'Standard', tCls:'tier-std', cat:'Mindset', a:'Pastor T.', s:'Published', sd:'sd-ok', v:'21.3K', d:'May 6'},
    {t:'Why your savings should beat inflation', tier:'Elite', tCls:'tier-elite', cat:'Wealth', a:'Adaeze O.', s:'Review', sd:'sd-warn', v:'—', d:'May 10'},
    {t:'WhatsApp Business: 14 power features', tier:'Standard', tCls:'tier-std', cat:'Hacks', a:'Femi O.', s:'Archived', sd:'sd-bad', v:'2.4K', d:'Mar 12'},
  ];
  const [tab, setTab] = React.useState('All');
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <div className="overline">Library</div>
          <h1>Content</h1>
        </div>
        <div className="row gap-8">
          <button className="btn btn-ghost">Bulk import</button>
          <button className="btn btn-gold">{ICN.plus}<span style={{marginLeft:6}}>New article</span></button>
        </div>
      </div>

      <div className="tabs">
        {['All · 1,242','Published · 1,189','Scheduled · 14','Drafts · 28','In review · 7','Archived · 4'].map(t=>(
          <button key={t} className={'tab ' + (tab===t.split(' ')[0]?'on':'')} onClick={()=>setTab(t.split(' ')[0])}>{t}</button>
        ))}
      </div>

      <div className="filterbar glass">
        <div className="row gap-8" style={{flex:1,minWidth:240}}>
          {ICN.search}
          <input className="input" style={{maxWidth:280}} placeholder="Search by title, author…"/>
        </div>
        <span className="pill on">{ICN.filter}<span>Tier · All</span></span>
        <span className="pill">Category · All</span>
        <span className="pill">Author · All</span>
        <span className="pill">Date · 30D</span>
        <span style={{flex:1}}/>
        <span className="lo" style={{fontSize:12}}>1,242 results</span>
      </div>

      <div className="glass" style={{padding:0,overflow:'hidden'}}>
        <table className="table">
          <thead>
            <tr><th style={{width:34}}><input type="checkbox" style={{accentColor:'#D4A017'}}/></th><th>Title</th><th>Tier</th><th>Category</th><th>Author</th><th>Status</th><th style={{textAlign:'right'}}>Reads</th><th>Updated</th><th></th></tr>
          </thead>
          <tbody>
            {items.map((r,i)=>(
              <tr key={i}>
                <td><input type="checkbox" style={{accentColor:'#D4A017'}}/></td>
                <td>
                  <div className="row gap-12">
                    <div className="img-ph" style={{width:56,height:36,flex:'none'}}/>
                    <span style={{fontWeight:500}}>{r.t}</span>
                  </div>
                </td>
                <td><span className={'tier ' + r.tCls}>{r.tier}</span></td>
                <td className="mid" style={{fontSize:13}}>{r.cat}</td>
                <td><div className="row gap-8"><span className="ava-sm">{r.a[0]}</span><span style={{fontSize:13}}>{r.a}</span></div></td>
                <td><span style={{fontSize:12,color:'var(--fg-text-mid)'}}><span className={'status-dot ' + r.sd}/>{r.s}</span></td>
                <td className="num" style={{textAlign:'right'}}>{r.v}</td>
                <td className="lo" style={{fontSize:12}}>{r.d}</td>
                <td><button className="icon-btn" style={{width:30,height:30}}>{ICN.more}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pag">
          <button className="pn">←</button>
          {[1,2,3,4,5].map(n=><button key={n} className={'pn ' + (n===1?'on':'')}>{n}</button>)}
          <span className="lo" style={{margin:'0 8px'}}>… 156</span>
          <button className="pn">→</button>
        </div>
      </div>
    </div>
  );
}

function AdminUsers(){
  const users = [
    {n:'Tunde Adeyemi',ph:'+234 803 442 1199',tier:'Premium',tCls:'tier-prem',ref:42,sp:'₦25,000',j:'Mar 12',st:'Active',sd:'sd-ok'},
    {n:'Adaeze Okafor',ph:'+234 805 109 4422',tier:'Elite',tCls:'tier-elite',ref:128,sp:'₦240,000',j:'Jan 04',st:'Active',sd:'sd-ok'},
    {n:'Bola Ojo',ph:'+234 802 991 8801',tier:'Standard',tCls:'tier-std',ref:18,sp:'₦12,000',j:'Apr 28',st:'Active',sd:'sd-ok'},
    {n:'Femi Olatunji',ph:'+234 814 220 6612',tier:'VIP',tCls:'tier-vip',ref:64,sp:'₦115,200',j:'Feb 19',st:'Active',sd:'sd-ok'},
    {n:'Chioma Nwosu',ph:'+234 803 555 0044',tier:'Standard',tCls:'tier-std',ref:5,sp:'₦4,000',j:'May 2',st:'Trial',sd:'sd-warn'},
    {n:'Aisha Bello',ph:'+234 706 110 9988',tier:'Premium',tCls:'tier-prem',ref:9,sp:'₦15,000',j:'Mar 30',st:'Active',sd:'sd-ok'},
    {n:'Ngozi Kalu',ph:'+234 809 332 4411',tier:'Basic',tCls:'tier-basic',ref:0,sp:'₦0',j:'May 8',st:'Inactive',sd:'sd-bad'},
  ];
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <div className="overline">People</div>
          <h1>Users</h1>
        </div>
        <div className="row gap-8">
          <button className="btn btn-ghost">Export CSV</button>
          <button className="btn btn-gold">{ICN.plus}<span style={{marginLeft:6}}>Invite admin</span></button>
        </div>
      </div>

      <div className="kpi-grid">
        {[['Total users','82,144','+2,840'],['Active 30D','64,210','78%'],['New today','312','live'],['Avg ARPU','₦4,820','+5.2%']].map((k,i)=>(
          <div key={i} className="glass kpi">
            <div className="label">{k[0]}</div>
            <div className="v">{k[1]}</div>
            <div className="delta">{k[2]}</div>
          </div>
        ))}
      </div>

      <div className="filterbar glass">
        <div className="row gap-8" style={{flex:1}}>
          {ICN.search}
          <input className="input" style={{maxWidth:280}} placeholder="Search name, phone, email…"/>
        </div>
        <span className="pill on">All tiers</span>
        <span className="pill">Active</span>
        <span className="pill">Trial</span>
        <span className="pill">Inactive</span>
        <span style={{flex:1}}/>
        <span className="lo" style={{fontSize:12}}>82,144 users</span>
      </div>

      <div className="glass" style={{padding:0,overflow:'hidden'}}>
        <table className="table">
          <thead>
            <tr><th>User</th><th>Phone</th><th>Tier</th><th style={{textAlign:'right'}}>Referrals</th><th style={{textAlign:'right'}}>LTV</th><th>Joined</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            {users.map((u,i)=>(
              <tr key={i}>
                <td><div className="row gap-12"><span className="ava-sm" style={{width:34,height:34,fontSize:13}}>{u.n[0]}</span><div className="stack"><span style={{fontWeight:500}}>{u.n}</span><span className="lo" style={{fontSize:11}}>id #{(8472+i).toString()}</span></div></div></td>
                <td className="num mid" style={{fontSize:13}}>{u.ph}</td>
                <td><span className={'tier ' + u.tCls}>{u.tier}</span></td>
                <td className="num" style={{textAlign:'right'}}>{u.ref}</td>
                <td className="num" style={{textAlign:'right',color:'var(--fg-gold-300)'}}>{u.sp}</td>
                <td className="lo" style={{fontSize:12}}>{u.j}</td>
                <td><span style={{fontSize:12,color:'var(--fg-text-mid)'}}><span className={'status-dot ' + u.sd}/>{u.st}</span></td>
                <td><button className="icon-btn" style={{width:30,height:30}}>{ICN.more}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pag">
          <button className="pn">←</button>
          {[1,2,3,4,5].map(n=><button key={n} className={'pn ' + (n===1?'on':'')}>{n}</button>)}
          <span className="lo" style={{margin:'0 8px'}}>… 8,214</span>
          <button className="pn">→</button>
        </div>
      </div>
    </div>
  );
}

function PlansPage({setPage}){
  const [annual, setAnnual] = React.useState(false);
  const tiers = [
    {n:'Basic',     p:0,     tag:'Try the platform',     cls:'tier-basic',    cta:'Stay on Basic', cssBtn:'btn-ghost', feats:['Limited free library','In-app ads','1× giveaway entries','Standard support']},
    {n:'Standard',  p:2000,  tag:'For everyday readers', cls:'tier-std',      cta:'Choose Standard', cssBtn:'btn-ghost', feats:['Most categories unlocked','No ads','2× giveaway entries','Email support']},
    {n:'Premium',   p:5000,  tag:'Most subscribers',     cls:'tier-prem', rec:true, cta:'Get Premium', cssBtn:'btn-gold',  feats:['Full content library','5× giveaway entries','Higher referral payout','Priority chat support','Early-access drops']},
    {n:'VIP',       p:12000, tag:'For the serious',      cls:'tier-vip',      cta:'Go VIP', cssBtn:'btn-ghost', feats:['Everything in Premium','Live audio drops','Monthly group call','10× giveaway entries','Dedicated account manager']},
    {n:'Elite',     p:25000, tag:'Top 1%',               cls:'tier-elite',    cta:'Apply for Elite', cssBtn:'btn-ghost', feats:['Everything in VIP','1:1 mentor session','Concierge withdrawals','25× giveaway entries','Invite-only events']},
  ];
  return (
    <div className="shell">
      <main className="main">
        <div className="topbar">
          <a className="back-link" href="studio.html">← All artifacts</a>
          <div className="crumbs" style={{marginLeft:14}}>FortuneGate <span style={{margin:'0 6px'}}>/</span> <b>Pricing</b></div>
          <span style={{flex:1}}/>
          <button className="btn btn-ghost" onClick={()=>setPage('admin-dash')}>Admin →</button>
        </div>
        <div className="page" style={{padding:'48px 32px'}}>
          <div style={{textAlign:'center',maxWidth:680,margin:'0 auto 36px'}}>
            <div className="overline">Plans &amp; pricing</div>
            <h1 className="display" style={{fontSize:'clamp(34px,4.5vw,52px)',margin:'10px 0 14px',lineHeight:1.05}}>Pick the gate.<br/>Step through.</h1>
            <p className="mid" style={{fontSize:16,lineHeight:1.55}}>Five tiers from free to Elite. Upgrade or downgrade anytime. All paid plans include monthly giveaway entries.</p>
            <div className="row" style={{justifyContent:'center',marginTop:22,gap:10}}>
              <div className="toggle">
                <button className={!annual?'on':''} onClick={()=>setAnnual(false)}>Monthly</button>
                <button className={annual?'on':''} onClick={()=>setAnnual(true)}>Annual <span style={{color:'var(--fg-green-500)',marginLeft:6,fontSize:11}}>save 20%</span></button>
              </div>
            </div>
          </div>

          <div className="plans-grid">
            {tiers.map(t=>(
              <div key={t.n} className={t.rec?'glass-gold plan rec':'glass plan'}>
                {t.rec && <div className="ribbon">Recommended</div>}
                <div>
                  <span className={'tier ' + t.cls}>{t.n}</span>
                  <div className="name" style={{marginTop:10}}>{t.n}</div>
                  <div className="lo" style={{fontSize:12,marginTop:2}}>{t.tag}</div>
                </div>
                <div className="price">{t.p===0 ? 'Free' : <>₦{(annual?t.p*9.6:t.p).toLocaleString()}<small>{annual?'/yr':'/mo'}</small></>}</div>
                <ul>
                  {t.feats.map(f=>(<li key={f}>{ICN.check}<span>{f}</span></li>))}
                </ul>
                <button className={'btn ' + t.cssBtn}>{t.cta}</button>
              </div>
            ))}
          </div>

          {/* Compare table */}
          <div className="glass" style={{padding:24,marginTop:48}}>
            <div className="display" style={{fontSize:20,marginBottom:14}}>Compare features</div>
            <div style={{overflow:'auto'}}>
              <table className="table" style={{minWidth:760}}>
                <thead>
                  <tr><th></th>{tiers.map(t=>(<th key={t.n} style={{textAlign:'center'}}>{t.n}</th>))}</tr>
                </thead>
                <tbody>
                  {[
                    ['Library access','Limited','Most','Full','Full','Full'],
                    ['Ad-free','—','✓','✓','✓','✓'],
                    ['Giveaway entries','1×','2×','5×','10×','25×'],
                    ['Referral payout','₦50','₦75','₦100','₦150','₦200'],
                    ['Live drops','—','—','Early','✓','✓'],
                    ['1:1 mentor session','—','—','—','—','✓'],
                  ].map((r,i)=>(
                    <tr key={i}>
                      <td style={{fontWeight:500}}>{r[0]}</td>
                      {r.slice(1).map((v,j)=>(
                        <td key={j} style={{textAlign:'center',color: v==='—'?'var(--fg-text-lo)':'var(--fg-text-hi)', fontFamily: /^\d|×|✓/.test(v) ? 'var(--font-display)' : 'var(--font-body)'}}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{textAlign:'center',marginTop:48,color:'var(--fg-text-lo)',fontSize:13}}>All prices in NGN. Pay with card, bank transfer, USSD, or Paystack. Cancel anytime.</div>
        </div>
      </main>
    </div>
  );
}

window.AdminShell = AdminShell;
window.AdminDashboard = AdminDashboard;
window.AdminContent = AdminContent;
window.AdminUsers = AdminUsers;
window.PlansPage = PlansPage;
