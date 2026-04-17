# 🧩 Todo Card – Stage 1 Enhancement

## 📌 Overview

This project is an evolution of the Stage 0 Todo Card into a more **interactive, stateful, and accessible component**.

Rather than a static UI, this version behaves more like a **mini productivity module**, supporting editing, dynamic state changes, and improved user interaction patterns.

---

## 🚀 Live Demo

👉 [Add your deployed URL here]

## 📂 Repository

👉 [Add your GitHub repo link here]

---

# 🔄 What Changed from Stage 0

### ✅ From Static → Interactive

* Stage 0 focused on UI structure and testability.
* Stage 1 introduces **state management and user interactions**.

### ✏️ Editing Capability

* Users can now edit:

  * Title
  * Description
  * Priority
  * Due date
* Includes:

  * Save (updates state)
  * Cancel (reverts changes)

---

### 🔁 Status System Upgrade

* Added **status control (dropdown)**:

  * Pending
  * In Progress
  * Done
* Fully synced with:

  * Checkbox
  * Status display
* Logic rules:

  * Checkbox → Done
  * Done → checkbox checked
  * Uncheck → resets to Pending

---

### ⏱️ Time Intelligence

* Dynamic time updates every 60 seconds
* Displays:

  * "Due in X days/hours/minutes"
  * "Overdue by X hours"
* Stops updating when task is marked **Done**

---

### 📖 Expand / Collapse Feature

* Long descriptions are collapsible
* Includes:

  * Expand/Collapse toggle
  * Accessible state (`aria-expanded`)
* Prevents UI overflow

---

### 🎯 Visual Enhancements

* Priority indicator (color-based accent)
* Overdue state (red highlight)
* Completed state (muted + strike-through)
* "In Progress" visually distinct

---

# 🎨 New Design Decisions

### 🧠 Component-First Thinking

Instead of building a full app, the focus was:

> “Build one component as if it belongs in a real product”

---

### 🎯 Clear Visual Hierarchy

* Priority → immediate visual signal (color + border)
* Status → clearly labeled and interactive
* Time → positioned for quick scanning

---

### ⚙️ State Synchronization

All related states are tightly connected:

* Checkbox ↔ Status dropdown ↔ UI display

This prevents inconsistent UI behavior.

---

### 📱 Responsive Simplicity

* Mobile-first stacking layout
* Flexible wrapping for:

  * Tags
  * Long titles
  * Long descriptions

---

# ⚠️ Known Limitations

### ❌ Single Card Only

* Not a full Todo app (no list or persistence across multiple cards)

---

### ❌ No Backend / API

* State is stored in memory only
* Refresh resets data

---

### ❌ Limited Keyboard Enhancements

* Basic keyboard navigation works
* Advanced focus trapping (edit mode) is not fully implemented

---

### ❌ Minimal Animations

* Expand/collapse is functional but not animated

---

# ♿ Accessibility Notes

### ✅ Semantic HTML

* Proper use of:

  * `<article>`
  * `<button>`
  * `<input>`
  * `<time>`

---

### ✅ ARIA Support

* `aria-expanded` for collapse toggle
* `aria-controls` for linked content
* `aria-live="polite"` for time updates

---

### ✅ Form Accessibility

* All edit inputs include `<label>` elements
* Improves screen reader usability

---

### ✅ Keyboard Flow

Tab order follows logical interaction:

1. Checkbox
2. Status control
3. Expand toggle
4. Edit
5. Delete
6. Save / Cancel (edit mode)

---

### ⚠️ Areas for Improvement

* Focus trap inside edit mode (planned)
* Better screen reader announcements for status changes

---

# 🧪 Testing Readiness

All required `data-testid` attributes are implemented for:

* Core card elements
* Edit form
* Status controls
* Expand/collapse
* Time indicators

This ensures compatibility with automated testing tools.

---

# 🧠 Key Takeaway

This stage demonstrates the transition from:

> **Static UI → Interactive, state-driven component**

It reflects real-world frontend skills:

* State management
* UI synchronization
* Accessibility awareness
* Component design thinking

---

# 🚀 Next Steps (Future Improvements)

* Convert to **React component**
* Add **multiple cards (full Todo app)**
* Integrate **localStorage or backend API**
* Add **animations & micro-interactions**
* Implement **unit tests**

---

## 👨‍💻 Author

Your Name Here
