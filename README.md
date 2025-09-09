# Udemy Video Rewind Fix

A simple browser extension that restores the broken left arrow key rewind functionality on Udemy.

## ⚡ Quick Install

1. **Download**: Click the green "Code" button → "Download ZIP"
2. **Extract** the ZIP file to a folder
3. **Install in Chrome/Edge**:
   - Go to `chrome://extensions/`
   - Enable "Developer mode" (top right)
   - Click "Load unpacked" 
   - Select the extracted folder
4. **That's it!** Left arrow key now rewinds 5 seconds on Udemy

## 🔧 What it fixes

- ✅ Left arrow key rewinds 5 seconds (works reliably)
- ✅ Fixes broken rewind buttons
- ✅ Works across all Udemy courses
- ✅ Auto-activates when switching lectures
- ✅ Doesn't interfere with typing in search/comment fields

## 🦊 Firefox Installation

1. Download the files
2. Go to `about:debugging`
3. Click "This Firefox" → "Load Temporary Add-on"
4. Select the `manifest.json` file

## 📝 Technical Details

This extension simply restores the proper keyboard event listeners that Udemy's video player sometimes loses. It's lightweight (< 2KB) and only runs on Udemy pages.

## 🤝 Contributing

Feel free to submit issues or pull requests if you find any bugs or want to add features!

---

**Tired of broken Udemy controls? This extension brings back the smooth learning experience you expect.**
