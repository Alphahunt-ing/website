# COPY.md: every claim on alphahunt.ing, and what backs it

AlphaHunt is in Phase 1 (build and backtest) and has no public product or
records yet, so the source for almost every claim is the design brief: the
Claude Design file `alphahunt-site.dc.html`, checked on 2026-10-04. "Brief"
below means that file. When the circle runs, replace "Brief" with the record
that backs each line, and change the page wherever reality differs.

**Legal** marks a line that **needs legal review before launch**. AlphaHunt
describes a crypto trading circle with profit sharing; in many jurisdictions
that can touch investment advice, collective investment or promotion rules.
None of the flagged lines should be changed in substance, or taken live on the
custom domain, without that review.

## Needs legal review before launch

| Claim | Where | Source | Flag |
| :--- | :--- | :--- | :--- |
| Contributors receive **20%** of the profit members make on their calls ("YOUR SHARE · 20% OF PROFIT ON YOUR CALLS", "20% to you", example $5,000 → $1,000) | Hero spec; Rewards tile 04; Rewards example card; `llms.txt` | **20%, per the user on 2026-10-04 (the design said 30%).** The design's example ($5,000 → $1,500) was recomputed to $5,000 → $1,000 | **Legal** |
| "Profit shares are worked out on-chain, so there's no argument about them." | Vision, principle 04 | Brief | **Legal** |
| "Real money on every signal, results public." | Rules, "Skin in the game" | Brief. No results are published yet; the roadmap puts real money after a paper run | **Legal** |
| "Alert or auto-sell, from the trading wallet only, with a spending limit." (the auto-sell description) | Strategy, sell-signals panel; `llms.txt` | Brief | **Legal** |
| "Every cycle, a few people who spot the opportunity early and act on it every day make life-changing money." | Hero lede | Brief | **Legal** |

## The circle

| Claim | Status | Source |
| :--- | :--- | :--- |
| A private crypto intel circle; members only; invites come from members | Brief | Hero kicker; nav chip; footer |
| Starts as a two-person partnership; grows into a small invite-only circle after 18 months of proven results | Brief (a plan, not a result) | Vision lede; roadmap |
| Phase 1 now: build + backtest; then paper run, small real money, 18 months → invite-only circle | Brief | Rules + Roadmap |
| Not financial advice | Brief | Footer; repeated in `llms.txt` and on the OG card |
| You still sign every trade | Brief | System outcomes; footer |

## System and app

| Claim | Status | Source |
| :--- | :--- | :--- |
| Verdicts: act, watch, skip | Brief | Hero spec; Vision 01 |
| Coverage: 14 chains, 5 wallet families | Brief | Hero spec; Chains + Data |
| Links come in via a Telegram channel; DefiLlama and free news feeds scanned every few hours | Brief | System tile 01 |
| Claude finds token and chain, pulls live stats, scores a checklist out of 6, flags paid posts and referral links | Brief | System tile 02 |
| Grok agents validate on X: real attention or paid shill, sentiment, who else is talking, bot-like hype | Brief | System tile 03 |
| Both agree → watchlist / airdrop; disagree → flagged for a human | Brief | System outcomes |
| One private web page, five tabs (link inbox, rotation watchlist, airdrop hunter, wallets, positions + split) | Brief | The App |
| Memory via Honcho: every idea and outcome, hit rate, what comes before a dump | Brief | The App |
| Every idea, trade, airdrop and payout is logged; each member keeps their own keys; all major chains on one screen | Brief | Vision 02, 03, 05 |
| Sources: DexScreener, GeckoTerminal, DefiLlama, Etherscan, Helius, Birdeye, Decrypt, Cointelegraph, airdrops.io | Brief | Chains + Data |

## Strategy, safety and rules

| Claim | Status | Source |
| :--- | :--- | :--- |
| Community coins core/rotate; launchpad ($PUMP) small/long; new launches small size; meta plays rarely; news/celeb coins never | Brief | The Strategy |
| Rotation rule on a 30-day range: sell above 80% after a 2x+ run, buy a similar coin below 30%, log every rotation | Brief | The Strategy |
| Nobody pools money; a scam contract can only empty the wallet that touched it, never the vault | Brief | Wallet Safety |
| Simulate every transaction, revoke approvals weekly; seed phrases offline, public addresses only; claim only via official X accounts or docs | Brief | Wallet Safety |
| Vault (cold, hardware card), trading (hot), burners (disposable); sweep weekly / within a day | Brief | Wallet Safety |
| Backtest 6–12 months, rotation must beat holding; −30% = stop; log every link, 60 days; max 20% of the wallets in one coin; tax first | Brief | Rules |

## Data

| Claim | Status | Source |
| :--- | :--- | :--- |
| DeFi TVL: Ethereum $53.2B, Solana $6.4B, Base $6.2B, BNB Chain $5.7B, Tron $5.6B, Bitcoin $4.4B; + Arbitrum, Hyperliquid, Monad, Sui, +4 more | Third-party data, dated | Brief, which labels it "DEFI TVL · SEP 2026" and lists DefiLlama as the chain-TVL source. Shown as **DefiLlama, Sep 2026**. Not re-checked against DefiLlama; update figures and date together |

## Illustrations (labelled as such on the page)

| What | Where it says so |
| :--- | :--- |
| The $EXMPL inbox card: 5/6, COMMUNITY, PAID POST, GROK: ORGANIC, and its checklist | `EXAMPLE · LINK INBOX · FROM TELEGRAM · SOLANA`; `llms.txt` says it is not a recommendation or a current assessment. $EXMPL is a real token: the tags and checklist are statements about it, so review them with the flagged lines or swap in a fictional ticker |
| The 09:12 → "days later" timeline | `[ EXAMPLE · ONE IDEA, START TO FINISH ]` (the design's own label) |
| $5,000 → $1,000 | `[ EXAMPLE ]` (the design's own label; the payout recomputed at 20%) |

## Changed from the design

| What | Change | Why |
| :--- | :--- | :--- |
| Profit share 30% (hero, rewards tile) and the example payout $1,500 | 20% and $1,000 | Per the user on 2026-10-04 |
| $EXMPL card label "LINK INBOX · FROM TELEGRAM · SOLANA" | Prefixed `EXAMPLE ·` | It is an example of the inbox; examples say so. The design used $SPX, a real token: replaced with the made-up ticker $EXMPL (per the user, 2026-10-05) so the tags and score are not claims about a real coin |
| TVL panel | Added a caption "SOURCE: DEFILLAMA, SEP 2026" under the bars; the design's header "DEFI TVL · SEP 2026" is unchanged | Data carries its source and date |
| Footer bottom row | Added `contact@alphahunt.ing` and `llms.txt` links | House pattern: a contact and the machine-readable summary. No sign-up, no waitlist |
| Nav on screens under 1080px | Seven items fold into a MENU (`<details>`) | The design's wrapping nav takes several lines on a phone |
| Rewards steps grid, rules grid | Minimum column 180px → 240px and 280px → 340px | At 1440px the design's values leave a lone tile (3 + 1, 4 + 2); now 2 × 2 and 3 × 2 |
| Small screens (≤ 480px) | Smaller hero, headings, range-bar labels and footer wordmark | So nothing overflows at 390px |
| Unused `tick` keyframes and `input::placeholder` style | Dropped | Nothing on the page uses them (there is no input) |

Nothing else was removed. The design has no sign-up form, prices, ratings or
photos, and none were added.
