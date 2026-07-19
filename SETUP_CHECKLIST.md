# ✅ Naija Study Hub - Setup Checklist

**Complete step-by-step checklist to deploy all 4 features in 2-3 hours.**

---

## 📋 Pre-Launch Checklist (Do This First)

### Technical Requirements
- [ ] GitHub account (for hosting) or web server
- [ ] Text editor (VS Code, Sublime, Notepad++)
- [ ] Web browser (Chrome, Firefox, Safari)
- [ ] 30 MB free space for files
- [ ] (Optional) Paystack or Flutterwave account for payments

### Knowledge Requirements
- [ ] Basic HTML understanding (can copy/paste)
- [ ] Know how to upload files to GitHub/server
- [ ] Can use your domain/GitHub Pages URL
- [ ] (Optional) Understand how payment gateways work

---

## 🎯 Phase 1: Prepare Files (15 minutes)

### Step 1.1: Rename Files
```
❌ quiz-system.html           →  ✅ quizzes.html
❌ student-dashboard.html     →  ✅ dashboard.html
❌ premium-store.html         →  ✅ premium.html
```

**Why?** Shorter URLs are easier to remember and share.

**Instruction:**
- Right-click on quiz-system.html
- Select "Rename"
- Type: `quizzes.html`
- Repeat for other 2 files

### Step 1.2: Check File Content
- [ ] quizzes.html contains `<html>` and quiz code
- [ ] dashboard.html contains login form
- [ ] premium.html contains product cards

**Quick Test:**
- Open each file in browser (File → Open)
- Should display styled pages immediately

---

## 🚀 Phase 2: Upload to Your Site (15 minutes)

### Option A: GitHub Pages (Free Hosting)

**If your site is on GitHub Pages:**

1. **Create folder in repo:**
   ```
   your-repo/
   ├── index.html (existing)
   ├── quizzes.html (← new)
   ├── dashboard.html (← new)
   ├── premium.html (← new)
   └── README.md
   ```

2. **Upload files:**
   ```bash
   # Command line option
   git add quizzes.html dashboard.html premium.html
   git commit -m "Add interactive quizzes, dashboard, and premium store"
   git push
   ```

   OR drag-and-drop in GitHub web interface

3. **Wait 5 minutes** for GitHub to deploy

4. **Test URLs:**
   - `https://your-username.github.io/your-repo/quizzes.html`
   - `https://your-username.github.io/your-repo/dashboard.html`
   - `https://your-username.github.io/your-repo/premium.html`

### Option B: Regular Web Server (Hosting Provider)

1. **Access your file manager** (cPanel, File Manager, FTP)
2. **Navigate to public_html folder**
3. **Upload these 3 files:**
   - quizzes.html
   - dashboard.html
   - premium.html

4. **Test URLs:**
   - `https://your-domain.com/quizzes.html`
   - `https://your-domain.com/dashboard.html`
   - `https://your-domain.com/premium.html`

### Option C: Using FTP (FileZilla)

1. **Open FileZilla**
2. **Connect to your server** (Host, Username, Password)
3. **Navigate to public_html**
4. **Drag files from left panel** → Right panel
5. **Wait for upload to complete**

---

## 🔗 Phase 3: Update Navigation (20 minutes)

### Step 3.1: Find Your Navigation Menu

Open your `index.html` and find the navigation section:

```html
<!-- Look for something like this -->
<nav>
    <a href="#home">Home</a>
    <a href="#subjects">Lesson Materials</a>
    <!-- Add new links here ↓ -->
</nav>
```

### Step 3.2: Add New Links

**Add these links to your navigation:**

```html
<!-- Insert these 3 new links -->
<a href="quizzes.html">📚 Interactive Quizzes</a>
<a href="dashboard.html">👤 My Dashboard</a>
<a href="premium.html">⭐ Premium Study Packs</a>
```

**Where to add them:**
- In the `<nav>` section (main navigation)
- Or in a `<header>` or `<menu>` section
- Or in a "Tools" dropdown if you have one

### Step 3.3: Also Add Footer Links

If you have a footer, add same links there:

```html
<!-- In your <footer> section -->
<a href="quizzes.html">Quizzes</a>
<a href="dashboard.html">Dashboard</a>
<a href="premium.html">Premium</a>
```

### Step 3.4: Save & Upload

- [ ] Save your index.html changes
- [ ] Upload the updated index.html to your server
- [ ] Wait 5 minutes for changes to appear

---

## 📱 Phase 4: Test Everything (20 minutes)

### Testing Checklist

#### Desktop Browser Test:
- [ ] Open `your-site.com/quizzes.html`
  - [ ] Page loads in < 3 seconds
  - [ ] "Interactive Quizzes" header visible
  - [ ] Quiz cards display correctly
  - [ ] "Start Quiz" button is clickable
  
- [ ] Click "Start Quiz"
  - [ ] Quiz questions appear
  - [ ] Can click on answers
  - [ ] Feedback shows for correct/incorrect
  - [ ] Progress bar updates
  
- [ ] Complete quiz
  - [ ] Score displays at end
  - [ ] "Retake Quiz" button works
  
- [ ] Open `your-site.com/dashboard.html`
  - [ ] Login form appears
  - [ ] Can enter name and email
  - [ ] "Login" button works
  
- [ ] After login
  - [ ] See welcome message
  - [ ] Quiz score from step above shows
  - [ ] Progress bar shows percentage
  - [ ] Can see achievements
  
- [ ] Open `your-site.com/premium.html`
  - [ ] Product cards display
  - [ ] Prices show correctly
  - [ ] "Buy Now" button is clickable
  
- [ ] Click "Buy Now"
  - [ ] Payment modal appears
  - [ ] Can enter customer info
  - [ ] "Pay Securely" button present

#### Mobile Phone Test:
- [ ] Open site on real phone
- [ ] All pages load
- [ ] Text is readable (no horizontal scroll)
- [ ] Buttons are easy to tap
- [ ] Quiz questions fit on screen
- [ ] Dashboard looks good
- [ ] Premium products display well

#### Navigation Test:
- [ ] Home page → Click "Quizzes" → Goes to quiz page
- [ ] Quiz page → Click "Back to Home" → Returns
- [ ] Dashboard link works from all pages
- [ ] Premium link works from all pages
- [ ] All links are underlined or styled clearly

### Common Issues & Quick Fixes

| Issue | Solution |
|-------|----------|
| Page shows 404 error | Check filename spelling (case-sensitive) |
| Styled incorrectly | Files are corrupted, re-download |
| Buttons not clickable | JavaScript disabled, enable in browser |
| Scores not saving | localStorage disabled, use private mode test |
| Page takes > 5 seconds | Check internet speed, server load |

---

## 💳 Phase 5: Setup Payments (Optional, 30 minutes)

### Skip this if you want to accept manual bank transfers first

### Step 5.1: Choose Payment Provider

#### Option A: Paystack (Recommended)
- ✅ Easiest for Nigeria
- ✅ All payment methods supported
- ✅ Fast settlements
- ✅ Great support

**Setup time:** 15 minutes

1. **Go to:** https://dashboard.paystack.com/signup
2. **Sign up** with your email
3. **Verify email**
4. **Complete business verification**
5. **Get Public Key** from Settings → API Keys
6. **Copy your Public Key** (starts with 'pk_')

#### Option B: Flutterwave
- ✅ Also good for Nigeria
- ✅ Multiple payment options
- ✅ Good documentation
- ✅ Instant payouts

**Setup time:** 15 minutes

1. **Go to:** https://app.flutterwave.com/signup
2. **Sign up** with email
3. **Verify phone number**
4. **Complete KYC**
5. **Get Public Key** from Settings
6. **Copy your Public Key**

#### Option C: Bank Transfers (Free)
- ✅ No setup needed
- ✅ Can start immediately
- ⚠️ Manual process
- ⚠️ Higher transaction time

**Setup time:** 5 minutes
- Add your bank details to premium.html
- Tell customers to email receipt
- Send download link after verification

### Step 5.2: Integrate Payment Gateway

**For Paystack:**

1. **Open premium.html in text editor**
2. **Find this line** (around line 1100):
   ```javascript
   function integratePaystack(email, amount, metadata) {
   ```

3. **Replace YOUR_PAYSTACK_PUBLIC_KEY with your actual key:**
   ```javascript
   key: 'pk_live_YOUR_ACTUAL_KEY_HERE',
   ```

4. **Save and upload file**

**For Flutterwave:**

1. **Open premium.html in text editor**
2. **Find this line** (around line 1150):
   ```javascript
   function integrateFlutterwave(email, amount, phone) {
   ```

3. **Replace YOUR_FLUTTERWAVE_PUBLIC_KEY:**
   ```javascript
   public_key: "YOUR_ACTUAL_KEY_HERE",
   ```

4. **Save and upload file**

### Step 5.3: Test Payment Processing

1. **Go to premium.html**
2. **Click "Buy Now"** on any product
3. **Enter test customer info:**
   - Name: Test Student
   - Email: your@email.com
   - Phone: 0803xxxxxxx

4. **Select payment method**
5. **For testing:** Use test mode in Paystack/Flutterwave dashboard

---

## 🎯 Phase 6: Customize Content (30 minutes)

### Add Your Own Quizzes

**File:** Open quizzes.html in text editor

**Find this section:**
```javascript
const quizzes = [
    {
        id: 1,
        title: "Basic Science: Living Things",
```

**To add a new quiz, add this template:**

```javascript
{
    id: 4,
    title: "Your Quiz Title Here",
    subject: "Subject Name",
    level: "JSS 1",  // or SSS, Primary
    questions: 5,
    difficulty: "Beginner",
    questions_data: [
        {
            question: "Question text here?",
            options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
            correct: 0,  // 0 = first answer, 1 = second, etc
            explanation: "Why this answer is correct..."
        },
        {
            question: "Question 2?",
            options: ["A", "B", "C", "D"],
            correct: 1,
            explanation: "Explanation..."
        },
        // Add 3 more questions (5 total)
    ]
}
```

### Update Premium Products

**File:** Open premium.html in text editor

**Find this section:**
```javascript
const products = [
    {
        id: 1,
        title: "Complete WAEC Mathematics Bundle",
```

**To change a product:**
- **Title:** Edit the title text
- **Price:** Change `price: 2500` to your price
- **Description:** Edit description text
- **Includes:** Edit the array of included items

---

## 📊 Phase 7: Analytics Setup (10 minutes)

### Track Your Success

1. **Add Google Analytics** (optional but recommended)
   - Go to: https://analytics.google.com
   - Create property for your site
   - Get tracking ID (UA-XXXXX-X)
   - Add to all HTML files in `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXX-X');
</script>
```

2. **Track Key Metrics:**
   - Quiz completion rate (# people who finish ÷ # who start)
   - Premium conversion (# buyers ÷ # visitors)
   - Average order value (total sales ÷ # orders)
   - Daily active users (check dashboard)

---

## 🎉 Phase 8: Launch Announcement (15 minutes)

### Tell Your Students About New Features

**Email/WhatsApp Template:**

```
🎉 Exciting News! New Learning Features Available

Hi [Student Name],

We're thrilled to announce NEW interactive features on Naija Study Hub!

📚 **Interactive Quizzes**
Test your knowledge instantly with our new quiz system.
👉 https://your-site.com/quizzes.html

👤 **My Dashboard**
Track your progress, see achievements, and get personalized recommendations.
👉 https://your-site.com/dashboard.html

⭐ **Premium Study Packs**
Get comprehensive past papers, worked solutions, and study guides.
👉 https://your-site.com/premium.html

**Try it now and let us know what you think!**

Questions? WhatsApp us: 0814-843-8332
```

---

## 📝 Phase 9: Collect Feedback (Ongoing)

### Send Feedback Form

Add this quick form to gather initial feedback:

```
QuickForm: Naija Study Hub Feedback
Name: _______________
How satisfied are you? 1-5 ___
What feature did you like most? ___________
What can we improve? ___________
Your email: _______________
```

Share via:
- WhatsApp
- Google Form
- Email reply
- Website form

---

## 🔄 Post-Launch Routine (Weekly)

### Every Monday:
- [ ] Check quiz completion rates
- [ ] Review student feedback
- [ ] Check payment processing
- [ ] Verify all links work

### Every Friday:
- [ ] Analyze top-performing quizzes
- [ ] Check for bugs/errors
- [ ] Plan content for next week
- [ ] Check analytics

### Monthly:
- [ ] Calculate revenue
- [ ] Check student satisfaction
- [ ] Plan new features
- [ ] Update content

---

## 📞 Support Contacts

### If Something Goes Wrong

**GitHub Pages Error:**
- Check if files are in correct folder
- Wait 5 minutes for deploy
- Check file naming (case-sensitive)

**Payment Not Working:**
- Verify payment gateway API key
- Check browser console for errors (F12)
- Confirm payment method is enabled

**Quiz Scores Not Showing:**
- Try in private/incognito mode
- Clear browser cache
- Check if JavaScript enabled

**General Help:**
- Email: yunusazaharaddeen093@gmail.com
- WhatsApp: +234 814 843 8332

---

## ✅ Final Launch Verification

Before announcing to all students:

### Technical Checks:
- [ ] All 3 pages load without errors
- [ ] Quiz works on desktop and mobile
- [ ] Dashboard saves progress
- [ ] Premium page displays products
- [ ] Payment modal appears

### Content Checks:
- [ ] Quiz questions are correct
- [ ] Product prices are accurate
- [ ] Navigation links all work
- [ ] No typos in text
- [ ] Images load properly

### Performance Checks:
- [ ] Pages load in < 3 seconds
- [ ] No JavaScript errors (F12)
- [ ] Mobile layout is readable
- [ ] All buttons are clickable

### User Experience Checks:
- [ ] Student can take quiz
- [ ] Student can see score
- [ ] Student can login to dashboard
- [ ] Student can browse premium
- [ ] Student can start checkout

---

## 🎯 Success Metrics (First Week)

**Target:**
- 50+ quiz attempts
- 20+ dashboard logins
- 3+ premium pack views
- 1+ purchase

**If you hit these targets:** You're ready to scale! 🚀

---

## 📅 Timeline Summary

| Phase | Task | Time | Status |
|-------|------|------|--------|
| 1 | Prepare files | 15 min | ⏳ |
| 2 | Upload to server | 15 min | ⏳ |
| 3 | Update navigation | 20 min | ⏳ |
| 4 | Test everything | 20 min | ⏳ |
| 5 | Setup payments | 30 min | ⏳ (optional) |
| 6 | Customize content | 30 min | ⏳ |
| 7 | Analytics setup | 10 min | ⏳ (optional) |
| 8 | Launch announcement | 15 min | ⏳ |
| **TOTAL** | **All Complete** | **~2.5 hrs** | 🚀 |

---

**You're ready to launch! All the best with Naija Study Hub! 🎓**
