// Click event
document.getElementById('magicButton').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  // Double-click event
  document.getElementById('magicButton').addEventListener('dblclick', () => {
    const msg = document.getElementById('secretMessage');
    msg.style.display = 'block';
    msg.textContent = '🎉 Secret DOUBLE CLICK Action Triggered!';
  });
  
  // Long press event
  let pressTimer;
  const button = document.getElementById('magicButton');
  
  button.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
      const msg = document.getElementById('secretMessage');
      msg.style.display = 'block';
      msg.textContent = '🔥 Long Press Activated!';
    }, 1000); // Trigger after 1 second
  });
  
  button.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
  });
  
  // Key press detection
  document.addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Form validation
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('formFeedback');
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      feedback.textContent = 'Invalid email format!';
      return;
    }
  
    if (password.length < 8) {
      feedback.textContent = 'Password must be at least 8 characters!';
      return;
    }
  
    feedback.textContent = '✅ Form submitted successfully!';
  });
  