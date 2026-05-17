/* eslint-disable */
// FortuneGate wireframes — sketchy lo-fi screens.
// Each function returns one screen's body. Mounted inside DCArtboard cards.

const _ = (cls, children, style) => <div className={cls} style={style}>{children}</div>;
const Box = ({c='',s={},children}) => <div className={'box ' + c} style={s}>{children}</div>;
const Bd  = ({c='',s={},children}) => <div className={'box-d ' + c} style={s}>{children}</div>;
const Img = ({h=80,s={}}) => <div className="img" style={{height:h, ...s}}/>;
const Lbl = ({children,s={}}) => <div className="lbl-up" style={s}>{children}</div>;
const Pill = ({c='', children}) => <span className={'pill ' + c}>{children}</span>;
const Btn = ({c='',children,s={}}) => <div className={'btn ' + c} style={s}>{children}</div>;
const Stat = ({n,l}) => (
  <Box c="pad-3" s={{flex:1}}>
    <div style={{fontFamily:'Caveat',fontWeight:700,fontSize:20,lineHeight:1}}>{n}</div>
    <div className="lbl-up" style={{marginTop:4}}>{l}</div>
  </Box>
);
const TopBar = ({title, back, right}) => (
  <div className="topbar">
    <div className="row">
      {back && <span style={{fontFamily:'Architects Daughter',fontSize:14}}>←</span>}
      <div className="h2">{title}</div>
    </div>
    <div className="row" style={{gap:8}}>{right}</div>
  </div>
);
const TabBar = ({active='home'}) => (
  <div className="nav">
    {['home','content','earn','giveaway','profile'].map(k => (
      <div key={k} className={'item ' + (active===k?'active':'')}>
        <div className="icn"/>
        <div>{k}</div>
      </div>
    ))}
  </div>
);

// Wrap every screen in a `.wf` shell
const Frame = ({children}) => <div className="wf">{children}</div>;

const WF = {

Splash: () => <Frame>
  <div className="grow center" style={{flexDirection:'column',gap:16}}>
    <div style={{width:80,height:80,border:'2px solid var(--ink)',borderRadius:18,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Caveat',fontWeight:700,fontSize:42}}>F</div>
    <div className="h1">FortuneGate</div>
    <div className="body" style={{textAlign:'center',padding:'0 32px'}}>Knowledge &amp; capital for African entrepreneurs</div>
  </div>
  <div className="pad-4 stack-2" style={{paddingTop:0}}>
    <Btn c="btn-fill">Get started</Btn>
    <Btn>I have an account</Btn>
    <div className="small center">Terms · Privacy</div>
  </div>
</Frame>,

Register: () => <Frame>
  <TopBar title="Create account" back/>
  <div className="pad-4 stack-3 grow">
    <div className="body">Enter your phone to begin. We'll send a code.</div>
    <div className="stack-2">
      <Lbl>Phone number</Lbl>
      <Box c="pad-3 row" s={{padding:'10px 12px'}}>
        <span style={{fontFamily:'Caveat',fontWeight:700,fontSize:16,marginRight:6}}>+234</span>
        <span style={{borderLeft:'1.5px solid #ccc',paddingLeft:10,color:'#aaa',fontFamily:'Architects Daughter',fontSize:13}}>803 ___ ____</span>
      </Box>
    </div>
    <div className="stack-2">
      <Lbl>Referral code · optional</Lbl>
      <Box c="pad-3" s={{padding:'10px 12px',color:'#aaa',fontFamily:'Architects Daughter',fontSize:13}}>FG-XXXX</Box>
    </div>
    <div className="row" style={{gap:8}}>
      <div style={{width:18,height:18,border:'1.5px solid var(--ink)',borderRadius:4}}/>
      <div className="small">I agree to terms &amp; privacy</div>
    </div>
  </div>
  <div className="pad-4">
    <Btn c="btn-fill">Send code</Btn>
  </div>
</Frame>,

OTP: () => <Frame>
  <TopBar title="Verify" back/>
  <div className="pad-4 stack-3 grow">
    <div className="body">Code sent to <b>+234 803 ••• 4421</b></div>
    <div className="row" style={{gap:6,justifyContent:'space-between'}}>
      {[2,8,4,'',' ',' '].map((d,i)=>(
        <Box key={i} s={{width:38,height:46,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Caveat',fontWeight:700,fontSize:22,borderColor:i===3?'var(--accent)':'var(--ink)',borderWidth:i===3?2:1.5}}>{d}</Box>
      ))}
    </div>
    <div className="small">Resend in 0:42</div>
    <Bd c="pad-3" s={{borderColor:'var(--accent)',background:'#e8f5e9'}}>
      <div className="lbl-up" style={{color:'var(--accent)'}}>Tip</div>
      <div className="body" style={{color:'var(--ink-2)'}}>Auto-fill should populate this from SMS.</div>
    </Bd>
  </div>
  <div className="pad-4">
    <Btn c="btn-fill">Verify</Btn>
  </div>
</Frame>,

Login: () => <Frame>
  <TopBar title="Welcome back" back/>
  <div className="pad-4 stack-3 grow">
    <div className="stack-2">
      <Lbl>Phone</Lbl>
      <Box c="pad-3" s={{padding:'10px 12px',fontFamily:'Architects Daughter',fontSize:13}}>+234 803 442 1199</Box>
    </div>
    <div className="stack-2">
      <Lbl>Password</Lbl>
      <Box c="pad-3" s={{padding:'10px 12px',color:'#aaa',fontFamily:'Architects Daughter',fontSize:13}}>••••••••</Box>
    </div>
    <div className="row" style={{justifyContent:'space-between'}}>
      <div className="small">Use OTP instead</div>
      <div className="small" style={{color:'var(--accent)'}}>Forgot?</div>
    </div>
  </div>
  <div className="pad-4 stack-2">
    <Btn c="btn-fill">Sign in</Btn>
    <div className="small center">New here? <b>Create account</b></div>
  </div>
</Frame>,

OnbTier: () => <Frame>
  <div className="pad-4 stack-3 grow">
    <Lbl>Step 1 of 2</Lbl>
    <div className="h1">Pick your tier.</div>
    <div className="body">You can upgrade anytime. Premium recommended for full library access.</div>
    <div className="stack-2" style={{marginTop:8}}>
      <Box c="pad-3 row" s={{justifyContent:'space-between'}}>
        <div><div className="h2">Basic</div><div className="small">Limited · free</div></div>
        <div style={{width:18,height:18,border:'1.5px solid var(--ink)',borderRadius:9}}/>
      </Box>
      <Box c="pad-3 row" s={{justifyContent:'space-between',borderColor:'var(--gold)',background:'#fff8e8',borderWidth:2}}>
        <div><div className="h2">Premium <Pill c="pill-gold">recommended</Pill></div><div className="small">₦5,000/mo · all content</div></div>
        <div style={{width:18,height:18,border:'1.5px solid var(--gold)',borderRadius:9,background:'var(--gold)'}}/>
      </Box>
      <Box c="pad-3 row" s={{justifyContent:'space-between'}}>
        <div><div className="h2">Elite</div><div className="small">₦25,000/mo · VIP perks</div></div>
        <div style={{width:18,height:18,border:'1.5px solid var(--ink)',borderRadius:9}}/>
      </Box>
    </div>
  </div>
  <div className="pad-4 stack-2">
    <Btn c="btn-gold">Continue with Premium</Btn>
    <div className="small center">Skip · use Basic</div>
  </div>
</Frame>,

OnbReferral: () => <Frame>
  <div className="pad-4 stack-3 grow">
    <Lbl>Step 2 of 2</Lbl>
    <div className="h1">Got a referral?</div>
    <div className="body">Enter the code from whoever invited you. They earn ₦100, you start with bonus entries.</div>
    <Box c="pad-3" s={{padding:'14px',borderStyle:'dashed'}}>
      <div className="lbl-up">Referral code</div>
      <div style={{fontFamily:'Caveat',fontWeight:700,fontSize:24,letterSpacing:2}}>FG-_ _ _ _</div>
    </Box>
    <Bd c="pad-3" s={{background:'#fff8e8',borderColor:'var(--gold)'}}>
      <div className="row" style={{gap:8}}>
        <span className="lock">★</span>
        <div className="body" style={{color:'var(--ink)'}}>5 bonus giveaway entries on signup</div>
      </div>
    </Bd>
  </div>
  <div className="pad-4 stack-2">
    <Btn c="btn-fill">Continue</Btn>
    <div className="small center">No code · skip</div>
  </div>
</Frame>,

Feed: () => <Frame>
  <div className="topbar">
    <div className="h2">Home</div>
    <div className="row" style={{gap:8}}>
      <div style={{width:24,height:24,border:'1.5px solid var(--ink)',borderRadius:6}}/>
      <div style={{width:24,height:24,border:'1.5px solid var(--ink)',borderRadius:12}}/>
    </div>
  </div>
  <div className="grow stack-3 pad-3" style={{overflow:'hidden'}}>
    <Bd c="pad-3" s={{background:'#fff8e8',borderColor:'var(--gold)'}}>
      <Lbl>Greeting</Lbl>
      <div className="h2">Hey, Tunde 👋</div>
      <div className="small">Premium · 12 days left</div>
    </Bd>
    <div className="row" style={{gap:6,overflow:'hidden'}}>
      <Pill c="pill-green">All</Pill><Pill>Business</Pill><Pill>Fitness</Pill><Pill>Hacks</Pill>
    </div>
    <div className="stack-2">
      <Box>
        <div style={{position:'relative'}}><Img h={90}/></div>
        <div className="pad-3">
          <Pill c="pill-gold">Premium</Pill>
          <div className="h2" style={{marginTop:6}}>How to scale a side hustle</div>
          <div className="small">12 min · ₦ business</div>
        </div>
      </Box>
      <Box>
        <div className="row pad-3" style={{gap:10}}>
          <div className="img" style={{width:60,height:60}}/>
          <div className="grow">
            <Pill c="pill-green">Standard</Pill>
            <div className="h2" style={{marginTop:4}}>Daily power routine</div>
            <div className="small">8 min · fitness</div>
          </div>
        </div>
      </Box>
    </div>
  </div>
  <TabBar active="home"/>
</Frame>,

FeedFilters: () => <Frame>
  <div className="topbar">
    <div className="h2">Filters</div>
    <div className="small">×</div>
  </div>
  <div className="grow pad-4 stack-3">
    <div>
      <Lbl>Category</Lbl>
      <div className="row" style={{gap:6,flexWrap:'wrap',marginTop:6}}>
        <Pill c="pill-green">Business</Pill><Pill>Fitness</Pill><Pill>Hacks</Pill><Pill>Wealth</Pill><Pill>Mindset</Pill>
      </div>
    </div>
    <div>
      <Lbl>Tier</Lbl>
      <div className="row" style={{gap:6,flexWrap:'wrap',marginTop:6}}>
        <Pill>Basic</Pill><Pill c="pill-green">Standard</Pill><Pill c="pill-gold">Premium</Pill><Pill>VIP</Pill><Pill>Elite</Pill>
      </div>
    </div>
    <div>
      <Lbl>Length</Lbl>
      <div className="row" style={{gap:6,marginTop:6}}>
        <Pill>&lt;5m</Pill><Pill c="pill-green">5–15m</Pill><Pill>15m+</Pill>
      </div>
    </div>
    <div>
      <Lbl>Sort</Lbl>
      <div className="row" style={{gap:6,marginTop:6}}>
        <Pill c="pill-green">Newest</Pill><Pill>Popular</Pill><Pill>Recommended</Pill>
      </div>
    </div>
  </div>
  <div className="pad-4 row" style={{gap:8}}>
    <Btn s={{flex:1}}>Reset</Btn>
    <Btn c="btn-fill" s={{flex:2}}>Apply · 24 results</Btn>
  </div>
</Frame>,

FeedLocked: () => <Frame>
  <TopBar title="Premium content" back/>
  <div className="grow pad-3 stack-3">
    <div className="body">You're on Basic. Upgrade to unlock.</div>
    <div className="stack-2">
      {[1,2,3].map(i => (
        <Box key={i} s={{position:'relative',overflow:'hidden'}}>
          <div style={{filter:'blur(2px)',opacity:.7}}>
            <Img h={80}/>
            <div className="pad-3">
              <Pill c="pill-gold">Premium</Pill>
              <div className="h2" style={{marginTop:6}}>Locked title here</div>
              <div className="small">— min · category</div>
            </div>
          </div>
          <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className="box pad-3 stack-2" style={{textAlign:'center',background:'#fff8e8',borderColor:'var(--gold)'}}>
              <div className="lock" style={{fontSize:18}}>🔒</div>
              <div className="h2">Upgrade to Premium</div>
            </div>
          </div>
        </Box>
      ))}
    </div>
  </div>
  <div className="pad-4">
    <Btn c="btn-gold">See plans</Btn>
  </div>
</Frame>,

Detail: () => <Frame>
  <div style={{position:'relative'}}>
    <Img h={140} s={{borderRadius:0,border:'none',borderBottom:'1.5px solid var(--ink)'}}/>
    <div style={{position:'absolute',top:10,left:10}} className="row">
      <div style={{width:28,height:28,border:'1.5px solid var(--ink)',borderRadius:14,background:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>←</div>
    </div>
    <div style={{position:'absolute',bottom:10,left:12}}>
      <Pill c="pill-gold">Premium</Pill>
    </div>
  </div>
  <div className="grow pad-4 stack-3" style={{overflow:'auto'}}>
    <div className="h1">How to scale a side hustle past ₦1M/mo</div>
    <div className="row small" style={{gap:8}}>
      <span>By Adaeze O.</span>·<span>12 min</span>·<span>3.4K read</span>
    </div>
    <div className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis facilisis lacus.</div>
    <div className="body">Curabitur lacinia neque vitae lectus elementum. Maecenas non ipsum non est consequat.</div>
    <Bd c="pad-3" s={{borderColor:'var(--accent)',background:'#e8f5e9'}}>
      <div className="lbl-up" style={{color:'var(--accent)'}}>Pull-quote</div>
      <div className="body">"Your first ₦100K is the hardest. Everything after is repetition."</div>
    </Bd>
  </div>
  <div className="pad-3 row bb" style={{gap:8,borderTop:'1.5px solid var(--ink)'}}>
    <Btn s={{flex:1}}>Save</Btn>
    <Btn s={{flex:1}}>Share</Btn>
    <Btn c="btn-fill" s={{flex:2}}>Next →</Btn>
  </div>
</Frame>,

DetailLocked: () => <Frame>
  <div style={{position:'relative'}}>
    <Img h={140} s={{borderRadius:0,border:'none',borderBottom:'1.5px solid var(--ink)'}}/>
    <div style={{position:'absolute',inset:0,background:'rgba(255,248,232,.5)'}}/>
  </div>
  <div className="grow pad-4 stack-3 center" style={{flexDirection:'column'}}>
    <div className="lock" style={{fontSize:32}}>🔒</div>
    <div className="h1" style={{textAlign:'center'}}>Premium only</div>
    <div className="body" style={{textAlign:'center'}}>This content is locked. Upgrade to Premium to read, save and share.</div>
    <Box c="pad-3" s={{borderColor:'var(--gold)',background:'#fff8e8',width:'100%'}}>
      <Lbl>What you get</Lbl>
      <ul style={{margin:'6px 0 0 16px',padding:0,fontSize:13,fontFamily:'Kalam'}}>
        <li>Full library, no ads</li>
        <li>5× giveaway entries</li>
        <li>Higher referral payout</li>
      </ul>
    </Box>
  </div>
  <div className="pad-4 stack-2">
    <Btn c="btn-gold">Upgrade · ₦5,000/mo</Btn>
    <div className="small center">View all plans</div>
  </div>
</Frame>,

Plans: () => <Frame>
  <TopBar title="Plans" back right={<Pill c="pill-green">Annual −20%</Pill>}/>
  <div className="grow pad-3 stack-3" style={{overflow:'auto'}}>
    <Box c="pad-3">
      <div className="row" style={{justifyContent:'space-between'}}>
        <div className="h2">Basic</div>
        <div className="h2">Free</div>
      </div>
      <div className="small">Limited library · ads</div>
      <div className="small" style={{marginTop:6}}>Current</div>
    </Box>
    <Box c="pad-3">
      <div className="row" style={{justifyContent:'space-between'}}>
        <div className="h2">Standard <Pill c="pill-green">L2</Pill></div>
        <div className="h2">₦2,000</div>
      </div>
      <div className="small">Most categories · 2× entries</div>
    </Box>
    <Box c="pad-3" s={{borderColor:'var(--gold)',borderWidth:2,background:'#fff8e8',transform:'translateY(-4px)'}}>
      <div className="row" style={{justifyContent:'space-between'}}>
        <div className="h2">Premium <Pill c="pill-gold">recommended</Pill></div>
        <div className="h2">₦5,000</div>
      </div>
      <div className="small">All content · 5× entries · higher payout</div>
    </Box>
    <Box c="pad-3">
      <div className="row" style={{justifyContent:'space-between'}}>
        <div className="h2">VIP</div>
        <div className="h2">₦12,000</div>
      </div>
      <div className="small">Live drops · monthly call</div>
    </Box>
    <Box c="pad-3" s={{borderColor:'var(--gold)'}}>
      <div className="row" style={{justifyContent:'space-between'}}>
        <div className="h2">Elite</div>
        <div className="h2">₦25,000</div>
      </div>
      <div className="small">Everything · 1:1 mentor</div>
    </Box>
  </div>
  <div className="pad-4">
    <Btn c="btn-gold">Choose Premium</Btn>
  </div>
</Frame>,

Checkout: () => <Frame>
  <TopBar title="Checkout" back/>
  <div className="grow pad-4 stack-3">
    <Box c="pad-3" s={{borderColor:'var(--gold)',background:'#fff8e8'}}>
      <Lbl>Order</Lbl>
      <div className="row" style={{justifyContent:'space-between',marginTop:6}}>
        <div className="h2">Premium · monthly</div>
        <div className="h2">₦5,000</div>
      </div>
      <div className="small" style={{marginTop:6}}>Renews 12 May. Cancel anytime.</div>
    </Box>
    <div>
      <Lbl>Pay with</Lbl>
      <div className="stack-2" style={{marginTop:6}}>
        <Box c="pad-3 row" s={{justifyContent:'space-between',borderColor:'var(--accent)',borderWidth:2}}>
          <div className="row" style={{gap:8}}>
            <div className="box" style={{width:32,height:22}}/>
            <div className="body" style={{color:'var(--ink)'}}>•••• 4421 · Visa</div>
          </div>
          <div style={{width:14,height:14,borderRadius:7,background:'var(--accent)'}}/>
        </Box>
        <Box c="pad-3 row" s={{gap:8}}>
          <div className="box" style={{width:32,height:22}}/>
          <div className="body" style={{color:'var(--ink)'}}>Bank transfer</div>
        </Box>
        <Box c="pad-3 row" s={{gap:8}}>
          <div className="box" style={{width:32,height:22}}/>
          <div className="body" style={{color:'var(--ink)'}}>USSD</div>
        </Box>
      </div>
    </div>
    <div className="row small" style={{justifyContent:'space-between'}}>
      <div>Subtotal</div><div>₦5,000.00</div>
    </div>
    <div className="row" style={{justifyContent:'space-between'}}>
      <div className="h2">Total</div><div className="h2">₦5,000.00</div>
    </div>
  </div>
  <div className="pad-4">
    <Btn c="btn-fill">Pay ₦5,000</Btn>
  </div>
</Frame>,

CheckoutSuccess: () => <Frame>
  <div className="grow center pad-5" style={{flexDirection:'column',gap:14}}>
    <div style={{width:64,height:64,borderRadius:32,border:'2px solid var(--accent)',background:'#e8f5e9',display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,color:'var(--accent)',fontFamily:'Caveat'}}>✓</div>
    <div className="h1">You're in.</div>
    <div className="body" style={{textAlign:'center'}}>Premium activated. Library unlocked. Receipt sent to +234 803 ••• 4421.</div>
    <Box c="pad-3" s={{width:'100%',borderColor:'var(--gold)'}}>
      <Lbl>Bonus unlocked</Lbl>
      <div className="h2" style={{marginTop:4}}>5× giveaway entries</div>
    </Box>
  </div>
  <div className="pad-4 stack-2">
    <Btn c="btn-fill">Start exploring</Btn>
    <div className="small center">View receipt</div>
  </div>
</Frame>,

PlansDesk: () => <div className="wf">
  <div className="topbar"><div className="h2">FortuneGate · Plans</div><div className="row" style={{gap:8}}><Pill>Sign in</Pill><Pill c="pill-gold">Get started</Pill></div></div>
  <div className="grow pad-5" style={{display:'flex',flexDirection:'column',gap:18}}>
    <div className="center" style={{flexDirection:'column',gap:8}}>
      <div className="h1" style={{fontSize:32}}>Pick your gate.</div>
      <div className="body">Upgrade anytime · NGN, monthly or annual</div>
      <div className="row" style={{gap:8}}><Pill c="pill-green">Annual −20%</Pill></div>
    </div>
    <div className="row" style={{gap:14,alignItems:'stretch'}}>
      {[
        {n:'Basic',p:'Free',d:'Limited library',c:''},
        {n:'Standard',p:'₦2,000',d:'Most content',c:'pill-green'},
        {n:'Premium',p:'₦5,000',d:'All content · 5× entries',c:'pill-gold',rec:true},
        {n:'VIP',p:'₦12,000',d:'Live drops',c:''},
        {n:'Elite',p:'₦25,000',d:'1:1 mentor',c:'pill-gold'},
      ].map(t => (
        <Box key={t.n} c="pad-4" s={{flex:1,...(t.rec?{borderColor:'var(--gold)',borderWidth:2,background:'#fff8e8',transform:'translateY(-8px)'}:{})}}>
          <div className="row" style={{justifyContent:'space-between'}}>
            <div className="h2">{t.n}</div>
            {t.rec && <Pill c="pill-gold">Pick this</Pill>}
          </div>
          <div className="h1" style={{marginTop:10}}>{t.p}</div>
          <div className="small" style={{marginBottom:14}}>{t.d}</div>
          <div className="stack-2" style={{flex:1}}>
            <div className="small">✓ Library access</div>
            <div className="small">✓ Giveaway entries</div>
            <div className="small">✓ Referral payouts</div>
          </div>
          <Btn c={t.rec?'btn-gold':''} s={{marginTop:14}}>Choose</Btn>
        </Box>
      ))}
    </div>
    <div className="small center">Compare features →</div>
  </div>
</div>,

Dashboard: () => <Frame>
  <div className="topbar"><div className="h2">Dashboard</div><div style={{width:24,height:24,borderRadius:12,border:'1.5px solid var(--ink)'}}/></div>
  <div className="grow pad-3 stack-3" style={{overflow:'auto'}}>
    <Bd c="pad-3" s={{background:'#fff8e8',borderColor:'var(--gold)'}}>
      <Lbl>Tier</Lbl>
      <div className="row" style={{justifyContent:'space-between',alignItems:'center'}}>
        <div><div className="h1">Premium</div><div className="small">12 days left</div></div>
        <Btn>Renew</Btn>
      </div>
    </Bd>
    <div className="row" style={{gap:8}}>
      <Stat n="₦8,400" l="Earned"/>
      <Stat n="42" l="Referrals"/>
    </div>
    <div className="row" style={{gap:8}}>
      <Stat n="18" l="Unlocked"/>
      <Stat n="35" l="Entries"/>
    </div>
    <Box c="pad-3">
      <Lbl>Recent activity</Lbl>
      <div className="stack-2" style={{marginTop:8}}>
        {['+₦100 · referral · Tunde A.','Read · Daily power routine','+₦50 · referral · Bola O.','Saved · 3 articles'].map((t,i)=>(
          <div key={i} className="row small bb" style={{paddingBottom:6,justifyContent:'space-between'}}>
            <span>{t}</span><span style={{color:'var(--ink-3)'}}>2h</span>
          </div>
        ))}
      </div>
    </Box>
  </div>
  <TabBar active="home"/>
</Frame>,

Earn: () => <Frame>
  <TopBar title="Earn"/>
  <div className="grow pad-3 stack-3">
    <Bd c="pad-4" s={{borderColor:'var(--gold)',background:'#fff8e8',textAlign:'center'}}>
      <Lbl>Your code</Lbl>
      <div style={{fontFamily:'Caveat',fontWeight:700,fontSize:30,letterSpacing:3,marginTop:4}}>FG-TUNDE</div>
      <div className="row" style={{gap:6,justifyContent:'center',marginTop:8}}>
        <Btn s={{padding:'4px 10px'}}>Copy link</Btn>
        <Btn s={{padding:'4px 10px'}}>Share</Btn>
      </div>
    </Bd>
    <div className="row" style={{gap:8}}>
      <Stat n="42" l="Total"/>
      <Stat n="8" l="This week"/>
      <Stat n="₦8,400" l="Earned"/>
    </div>
    <Box c="pad-3">
      <Lbl>Payout breakdown</Lbl>
      <div className="row small" style={{justifyContent:'space-between',marginTop:8}}><span>1st referral</span><span>₦100</span></div>
      <div className="row small" style={{justifyContent:'space-between'}}><span>Subsequent</span><span>₦50 each</span></div>
      <div className="row small" style={{justifyContent:'space-between'}}><span>Premium upgrade bonus</span><span>+₦200</span></div>
    </Box>
    <Box c="pad-3">
      <Lbl>Recent</Lbl>
      <div className="stack-2" style={{marginTop:6}}>
        {['Tunde A. · ₦100','Bola O. · ₦50','Chioma N. · ₦50'].map((t,i)=>(<div key={i} className="row body" style={{justifyContent:'space-between'}}><span>{t}</span><span className="small">2d</span></div>))}
      </div>
    </Box>
  </div>
  <TabBar active="earn"/>
</Frame>,

Payouts: () => <Frame>
  <TopBar title="Payouts" back/>
  <div className="grow pad-3 stack-3">
    <Bd c="pad-4" s={{borderColor:'var(--accent)',background:'#e8f5e9',textAlign:'center'}}>
      <Lbl>Available</Lbl>
      <div className="h1" style={{fontSize:30,marginTop:4}}>₦8,400.00</div>
      <Btn c="btn-fill" s={{marginTop:8}}>Withdraw</Btn>
    </Bd>
    <Box c="pad-3">
      <Lbl>Bank account</Lbl>
      <div className="row" style={{justifyContent:'space-between',marginTop:6}}>
        <div className="body">GTB · •••• 1199</div>
        <div className="small">change</div>
      </div>
    </Box>
    <Box c="pad-3">
      <Lbl>History</Lbl>
      <div className="stack-2" style={{marginTop:6}}>
        {['Apr 28 · ₦5,000 · paid','Mar 30 · ₦3,200 · paid','Feb 28 · ₦2,400 · paid'].map((t,i)=>(<div key={i} className="row body bb" style={{paddingBottom:6,justifyContent:'space-between'}}><span>{t}</span><span className="small">→</span></div>))}
      </div>
    </Box>
  </div>
  <TabBar active="earn"/>
</Frame>,

Giveaway: () => <Frame>
  <TopBar title="Giveaway"/>
  <div className="grow pad-3 stack-3" style={{overflow:'auto'}}>
    <Bd c="pad-4" s={{borderColor:'var(--gold)',background:'#fff8e8'}}>
      <Lbl>This month's draw</Lbl>
      <div className="h1" style={{fontSize:26,marginTop:4}}>iPhone 16 Pro</div>
      <div className="row small" style={{justifyContent:'space-between',marginTop:8}}>
        <span>Closes May 31</span><span>14d 6h</span>
      </div>
    </Bd>
    <Box c="pad-3">
      <Lbl>Your entries</Lbl>
      <div className="row" style={{justifyContent:'space-between',marginTop:6,alignItems:'baseline'}}>
        <div className="h1" style={{fontSize:30}}>35</div>
        <div className="small">+5 referrals · +5 premium · +25 daily</div>
      </div>
    </Box>
    <Box c="pad-3">
      <Lbl>Earn more entries</Lbl>
      <div className="stack-2" style={{marginTop:8}}>
        <div className="row" style={{justifyContent:'space-between'}}><span className="body">Refer a friend</span><span className="small">+5 each</span></div>
        <div className="row" style={{justifyContent:'space-between'}}><span className="body">Read daily</span><span className="small">+1/day</span></div>
        <div className="row" style={{justifyContent:'space-between'}}><span className="body">Upgrade to Premium</span><span className="small">+25</span></div>
      </div>
    </Box>
  </div>
  <TabBar active="giveaway"/>
</Frame>,

GiveawayEntered: () => <Frame>
  <TopBar title="Entered" back/>
  <div className="grow center pad-5" style={{flexDirection:'column',gap:12}}>
    <div style={{width:64,height:64,borderRadius:32,border:'2px solid var(--gold)',background:'#fff8e8',display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,color:'var(--gold)',fontFamily:'Caveat'}}>★</div>
    <div className="h1">+5 entries banked</div>
    <div className="body" style={{textAlign:'center'}}>You're now at 35 total entries for the May draw.</div>
    <Box c="pad-3" s={{width:'100%'}}>
      <div className="row" style={{justifyContent:'space-between'}}><span className="body">Total entries</span><span className="h2">35</span></div>
      <div className="row" style={{justifyContent:'space-between',marginTop:6}}><span className="body">Win odds</span><span className="small">~1 in 412</span></div>
    </Box>
  </div>
  <div className="pad-4 stack-2">
    <Btn c="btn-fill">Refer to earn more</Btn>
    <div className="small center">Back to giveaway</div>
  </div>
</Frame>,

Profile: () => <Frame>
  <TopBar title="Profile" right={<div className="small">Edit</div>}/>
  <div className="grow pad-4 stack-3">
    <div className="row" style={{gap:12,alignItems:'center'}}>
      <div className="img" style={{width:64,height:64,borderRadius:32}}/>
      <div>
        <div className="h1" style={{fontSize:22}}>Tunde Adeyemi</div>
        <div className="small">+234 803 ••• 4421</div>
        <div style={{marginTop:4}}><Pill c="pill-gold">Premium</Pill></div>
      </div>
    </div>
    <div className="row" style={{gap:8}}>
      <Stat n="42" l="Refs"/>
      <Stat n="₦8.4K" l="Earned"/>
      <Stat n="35" l="Entries"/>
    </div>
    <Box c="pad-3" s={{padding:0}}>
      {['Saved articles','Reading history','Payouts','Notifications','Help & support','Sign out'].map((t,i,arr)=>(
        <div key={i} className={'row pad-3 ' + (i<arr.length-1?'bb':'')} style={{justifyContent:'space-between'}}>
          <span className="body" style={{color:t==='Sign out'?'var(--danger)':'var(--ink)'}}>{t}</span>
          <span style={{color:'var(--ink-3)'}}>›</span>
        </div>
      ))}
    </Box>
  </div>
  <TabBar active="profile"/>
</Frame>,

Settings: () => <Frame>
  <TopBar title="Settings" back/>
  <div className="grow pad-3 stack-3" style={{overflow:'auto'}}>
    {[
      {h:'Account',rows:['Phone · +234 803 ••• 4421','Email · t.adeyemi@…','Password']},
      {h:'Preferences',rows:['Language · English','Currency · NGN','Reduced motion · off']},
      {h:'Notifications',rows:['Push · on','SMS · on','Email · weekly']},
      {h:'Danger',rows:['Delete account']},
    ].map(s => (
      <Box c="pad-3" key={s.h} s={{padding:0}}>
        <div className="lbl-up pad-3 bb" style={{paddingBottom:8}}>{s.h}</div>
        {s.rows.map((r,i,arr)=>(
          <div key={r} className={'row pad-3 ' + (i<arr.length-1?'bb':'')} style={{justifyContent:'space-between'}}>
            <span className="body" style={{color:s.h==='Danger'?'var(--danger)':'var(--ink)'}}>{r}</span>
            <span style={{color:'var(--ink-3)'}}>›</span>
          </div>
        ))}
      </Box>
    ))}
  </div>
</Frame>,

Notifications: () => <Frame>
  <TopBar title="Notifications" back right={<div className="small">Mark read</div>}/>
  <div className="grow pad-3 stack-2" style={{overflow:'auto'}}>
    {[
      {t:'+₦100 · Tunde joined via your link',d:'2m ago',unread:true,c:'pill-green'},
      {t:'New Premium drop · Scaling past ₦1M',d:'1h ago',unread:true,c:'pill-gold'},
      {t:'Giveaway draw closes in 14 days',d:'4h ago',c:''},
      {t:'+₦50 · Bola joined',d:'1d ago',c:'pill-green'},
      {t:'Your renewal · ₦5,000 in 12 days',d:'2d ago',c:''},
    ].map((n,i)=>(
      <Box key={i} c="pad-3" s={{borderLeft:n.unread?'4px solid var(--gold)':'1.5px solid var(--ink)'}}>
        <div className="row" style={{justifyContent:'space-between'}}>
          <div className="body" style={{color:'var(--ink)'}}>{n.t}</div>
          <span className="small">{n.d}</span>
        </div>
      </Box>
    ))}
  </div>
  <TabBar active="profile"/>
</Frame>,

// — Admin desktop —
AdminShell: ({title,active='dashboard',children}) => <div className="wf">
  <div className="row" style={{flex:1,minHeight:0}}>
    <div style={{width:200,borderRight:'1.5px solid var(--ink)',background:'#fafaf6'}} className="pad-3 stack-3">
      <div className="row" style={{gap:8}}>
        <div style={{width:24,height:24,border:'1.5px solid var(--ink)',borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Caveat',fontWeight:700}}>F</div>
        <div className="h2">Admin</div>
      </div>
      <div className="stack-2">
        {[
          ['dashboard','Dashboard'],['content','Content'],['users','Users'],
          ['plans','Plans'],['payouts','Payouts'],['giveaway','Giveaway'],['settings','Settings'],
        ].map(([k,l])=>(
          <div key={k} className={'row pad-3 ' + (active===k?'box':'')} style={{padding:'6px 10px',gap:8,borderRadius:6,...(active===k?{borderColor:'var(--accent)',background:'#e8f5e9'}:{})}}>
            <div style={{width:14,height:14,border:'1.5px solid var(--ink-3)',borderRadius:3}}/>
            <span className="body" style={{color:active===k?'var(--accent)':'var(--ink-2)',fontWeight:active===k?700:400}}>{l}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="grow col">
      <div className="topbar">
        <div>
          <div className="crumbs">Admin · {title}</div>
          <div className="h1" style={{fontSize:22,marginTop:2}}>{title}</div>
        </div>
        <div className="row" style={{gap:8}}>
          <Box c="pad-3" s={{padding:'4px 10px'}}><span className="small">search…</span></Box>
          <Btn c="btn-fill" s={{padding:'6px 12px'}}>+ New</Btn>
        </div>
      </div>
      {children}
    </div>
  </div>
</div>,

AdminDash: () => WF.AdminShell({title:'Dashboard', active:'dashboard', children: (
  <div className="grow pad-4 stack-3" style={{overflow:'auto'}}>
    <div className="row" style={{gap:12}}>
      {[['Subs · MTD','₦4.2M','+18%'],['Active users','12,402','+6%'],['Referral payouts','₦820K','+22%'],['Giveaway entries','48,210','+11%']].map(([l,n,d],i)=>(
        <Box key={i} c="pad-4" s={{flex:1}}>
          <div className="lbl-up">{l}</div>
          <div className="h1" style={{fontSize:24,marginTop:4}}>{n}</div>
          <div className="small" style={{color:'var(--accent)'}}>{d} vs last mo</div>
        </Box>
      ))}
    </div>
    <Box c="pad-4">
      <div className="row" style={{justifyContent:'space-between'}}>
        <div className="h2">Subscription growth</div>
        <Pill>30d</Pill>
      </div>
      <div className="img" style={{height:160,marginTop:10}}>chart placeholder</div>
    </Box>
    <div className="row" style={{gap:12}}>
      <Box c="pad-4" s={{flex:1}}>
        <div className="h2">Tier mix</div>
        <div className="img" style={{height:120,marginTop:10}}>donut placeholder</div>
      </Box>
      <Box c="pad-4" s={{flex:1}}>
        <div className="h2">Top referrers</div>
        <div className="stack-2" style={{marginTop:8}}>
          {['Tunde A. · 42','Bola O. · 28','Chioma N. · 21','Femi O. · 14'].map((t,i)=>(<div key={i} className="row bb" style={{paddingBottom:6,justifyContent:'space-between'}}><span className="body">{t}</span><span className="small">→</span></div>))}
        </div>
      </Box>
    </div>
  </div>
)}),

AdminContent: () => WF.AdminShell({title:'Content', active:'content', children: (
  <div className="grow pad-4 stack-3" style={{overflow:'auto'}}>
    <div className="row" style={{gap:8}}>
      <Pill c="pill-green">All</Pill><Pill>Published</Pill><Pill>Draft</Pill><Pill>Locked</Pill>
      <div style={{flex:1}}/>
      <Box c="pad-3" s={{padding:'4px 10px'}}><span className="small">filter ▾</span></Box>
    </div>
    <Box s={{padding:0}}>
      <div className="row pad-3 bb" style={{background:'#f4f2ec',gap:0,fontFamily:'Architects Daughter',fontSize:11,letterSpacing:1,textTransform:'uppercase',color:'var(--ink-3)'}}>
        <div style={{flex:3}}>Title</div>
        <div style={{flex:1}}>Tier</div>
        <div style={{flex:1}}>Category</div>
        <div style={{flex:1}}>Reads</div>
        <div style={{flex:1}}>Status</div>
        <div style={{width:60}}/>
      </div>
      {[
        ['How to scale a side hustle','Premium','Business','3.4K','Published'],
        ['Daily power routine','Standard','Fitness','1.8K','Published'],
        ['10 hacks for cheap data','Basic','Hacks','5.2K','Published'],
        ['Mindset of millionaires','VIP','Wealth','—','Draft'],
        ['Launch checklist 2026','Premium','Business','812','Published'],
        ['Sleep stack for founders','Elite','Health','—','Draft'],
        ['Money rules I broke','Premium','Wealth','2.1K','Published'],
      ].map((r,i)=>(
        <div key={i} className="row pad-3 bb" style={{gap:0}}>
          <div className="body" style={{flex:3,color:'var(--ink)'}}>{r[0]}</div>
          <div style={{flex:1}}><Pill c={r[1]==='Premium'||r[1]==='Elite'?'pill-gold':r[1]==='Standard'?'pill-green':''}>{r[1]}</Pill></div>
          <div className="small" style={{flex:1}}>{r[2]}</div>
          <div className="small" style={{flex:1}}>{r[3]}</div>
          <div className="small" style={{flex:1,color:r[4]==='Draft'?'var(--ink-3)':'var(--accent)'}}>● {r[4]}</div>
          <div style={{width:60}} className="small">edit · ⋯</div>
        </div>
      ))}
    </Box>
    <div className="row small" style={{justifyContent:'space-between'}}>
      <span>1–7 of 248</span>
      <div className="row" style={{gap:6}}><Pill>‹</Pill><Pill c="pill-green">1</Pill><Pill>2</Pill><Pill>3</Pill><Pill>›</Pill></div>
    </div>
  </div>
)}),

AdminUsers: () => WF.AdminShell({title:'Users', active:'users', children: (
  <div className="grow pad-4 stack-3" style={{overflow:'auto'}}>
    <div className="row" style={{gap:8}}>
      <Pill c="pill-green">All · 12,402</Pill><Pill>Active</Pill><Pill>Churned</Pill><Pill>VIP+</Pill>
    </div>
    <Box s={{padding:0}}>
      <div className="row pad-3 bb" style={{background:'#f4f2ec',gap:0,fontFamily:'Architects Daughter',fontSize:11,letterSpacing:1,textTransform:'uppercase',color:'var(--ink-3)'}}>
        <div style={{flex:2}}>Name</div>
        <div style={{flex:2}}>Phone</div>
        <div style={{flex:1}}>Tier</div>
        <div style={{flex:1}}>Refs</div>
        <div style={{flex:1}}>Earned</div>
        <div style={{flex:1}}>Joined</div>
        <div style={{width:60}}/>
      </div>
      {[
        ['Tunde Adeyemi','+234 803 ••• 4421','Premium','42','₦8,400','12 Mar'],
        ['Bola Okeke','+234 805 ••• 1820','Standard','12','₦1,200','24 Mar'],
        ['Chioma Nwosu','+234 802 ••• 9911','VIP','89','₦18,400','03 Feb'],
        ['Femi Olatunji','+234 808 ••• 6612','Basic','3','₦150','29 Apr'],
        ['Aisha Bello','+234 901 ••• 0042','Elite','142','₦42,800','11 Jan'],
        ['Kunle Bakare','+234 813 ••• 5571','Premium','22','₦4,200','18 Mar'],
      ].map((r,i)=>(
        <div key={i} className="row pad-3 bb" style={{gap:0}}>
          <div className="body" style={{flex:2,color:'var(--ink)'}}>{r[0]}</div>
          <div className="small" style={{flex:2}}>{r[1]}</div>
          <div style={{flex:1}}><Pill c={r[2]==='Premium'||r[2]==='Elite'||r[2]==='VIP'?'pill-gold':r[2]==='Standard'?'pill-green':''}>{r[2]}</Pill></div>
          <div className="small" style={{flex:1}}>{r[3]}</div>
          <div className="small" style={{flex:1}}>{r[4]}</div>
          <div className="small" style={{flex:1}}>{r[5]}</div>
          <div style={{width:60}} className="small">view · ⋯</div>
        </div>
      ))}
    </Box>
  </div>
)}),

};

window.WF = WF;
