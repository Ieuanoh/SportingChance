# Google Drive Password Protection Setup

## How to Set Up Password Protection for Your Policy Documents

### Step 1: Upload Your Documents to Google Drive
1. Go to [Google Drive](https://drive.google.com)
2. Upload your policy documents (PDF, Word, etc.)
3. Right-click on each document and select "Share"

### Step 2: Configure Password Protection
1. In the sharing dialog, click "Change to anyone with the link"
2. Set permissions to "Viewer"
3. **Important**: Click "Copy link" to get the sharing URL

### Step 3: Get the Embed URL
1. Open the document in Google Drive
2. Click "File" → "Share" → "Publish to web"
3. Click "Publish"
4. Copy the provided URL

### Step 4: Update Your Policy Files
In each policy file (`content/policies/your-policy.md`), update the `iframe_url`:

```yaml
---
title: "Your Policy Title"
summary: "Brief description"
date: 2024-01-15
iframe_url: "https://docs.google.com/document/d/YOUR_DOCUMENT_ID/pub?embedded=true"
password_required: true
tags: ["category"]
---
```

### Step 5: Set Google Drive Password Protection
1. In Google Drive, right-click your document
2. Select "Share"
3. Click "Settings" (gear icon)
4. Enable "Password protection"
5. Set your desired password
6. Share the password with authorized users

## Security Benefits
- **Server-side protection**: Passwords are managed by Google, not your website
- **Audit trail**: Google tracks who accesses documents
- **No client-side code**: More secure than JavaScript password protection
- **Easy management**: Change passwords without updating website code

## Example URLs
- **Google Docs**: `https://docs.google.com/document/d/DOCUMENT_ID/pub?embedded=true`
- **Google Sheets**: `https://docs.google.com/spreadsheets/d/DOCUMENT_ID/pubhtml?widget=true&chrome=false`
- **PDFs**: Upload to Google Drive and use the embed URL

## Troubleshooting
- If documents don't load, check that sharing permissions are set correctly
- Ensure the document is published to web (for Google Docs/Sheets)
- Test the embed URL in a private browser window to verify password protection 