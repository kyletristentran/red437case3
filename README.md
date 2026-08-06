# Cardinal & Gold Core+ Fund — Industrial Investment Analysis

An institutional-format investment memo and supporting models for two Southern
California industrial acquisitions, Torrance and Redlands, underwritten for a
core-plus fund mandate.

USC RED 437 coursework. The fund is fictional; the market analysis is real.

## The work

Two South Bay and Inland Empire industrial assets underwritten side by side:
rent-roll and lease abstraction, market rent and comp selection, hold-period cash
flows to unlevered and levered returns, sensitivity on exit cap and market rent
growth, and a recommendation with the case against it stated.

## What's in it

| Path | |
|---|---|
| `memo.html` | The memo — investment thesis, market analysis, underwriting summary, and recommendation, with charts |
| `public/your-portfolio/assets/models/Torrance-Model.xlsx` | Torrance acquisition model |
| `public/your-portfolio/assets/models/Redlands-Model.xlsx` | Redlands acquisition model |
| `public/your-portfolio/assets/models/Market-Comps.xlsx` | Sale and lease comparables |
| `public/your-portfolio/assets/documents/Market-Analysis.pdf` | Submarket analysis |
| `public/your-portfolio/assets/documents/Investment-Memo.docx` | Memo, document form |
| `src/` | React shell that presents the memo |
| `current_website/` | Earlier static version of the presentation |

The React app is a thin shell that presents the memo and links the underlying
models — the analysis is the deliverable, not the code.

## Running it

```bash
npm install
npm start
```

Or open `memo.html` directly.

## License

MIT
