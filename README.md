* { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, sans-serif; }

body {
  background: #111;
  color: #eee;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.app {
  width: 100%;
  max-width: 1000px;
  background: #181818;
  border-radius: 10px;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.main {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

.circle {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: #111;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 3px solid #333;
  transition: 0.1s;
}

.circle:active {
  transform: scale(0.95);
}

.menu button {
  padding: 10px;
  border: none;
  background: #2a2a2a;
  color: #eee;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 10px;
}

.panel {
  display: none;
  background: #202020;
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
}

.panel.active {
  display: block;
}

.btn {
  padding: 8px 12px;
  background: #2f6fed;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

.btn.secondary {
  background: #444;
}
