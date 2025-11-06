<script>
  export let data;
  let { aboutText } = data;
</script>

<style>
  :global(body) {
    margin: 0;
    background-color: #000;
    font-family: 'Fira Code', monospace;
    color: #838383;
    height: 100vh;
    overflow: hidden;
  }

  main {
    height: 100vh;
    width: 100vw;
    padding: 2rem;
    box-sizing: border-box;
  }

  .terminal {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 2rem;
    box-shadow: 0 0 15px #16161633;
    opacity: 0;
    animation: fadeIn 1s ease forwards;
  }

  pre {
    white-space: pre-wrap;
  }

  .cursor {
    display: inline-block;
    width: 10px;
    height: 1em;
    background-color: #929292;
    animation: blink 1s infinite;
    vertical-align: bottom;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  /* Scrollbar custom */
  .terminal::-webkit-scrollbar {
    width: 8px;
  }
  .terminal::-webkit-scrollbar-thumb {
    background: #4b4b4b55;
    border-radius: 4px;
  }
  .terminal::-webkit-scrollbar-thumb:hover {
    background: #5a5a5a88;
  }
</style>

<main>
  <div class="terminal">
    <pre>{aboutText}<span class="cursor"></span></pre>
  </div>
</main>

<footer>
  <p>© 2025 <span>EXCECUTEAGI</span> — Crafted by <a href="https://x.com/korosane_" target="_blank" rel="noopener">@korosane_</a></p>
</footer>
