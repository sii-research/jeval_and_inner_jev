const copyButton = document.getElementById('copy-citation');
const citation = document.getElementById('bibtex');

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(citation.textContent.trim());
    copyButton.textContent = 'Copied!';
    window.setTimeout(() => { copyButton.textContent = 'Copy citation'; }, 2000);
  } catch {
    copyButton.textContent = 'Select text to copy';
    citation.focus();
    window.setTimeout(() => { copyButton.textContent = 'Copy citation'; }, 2500);
  }
});
