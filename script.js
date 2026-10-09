// BibTeX copy interaction adapted from Academic Project Page Template.
const copyButton = document.getElementById('copy-citation');
const bibtex = document.getElementById('bibtex-code');

copyButton?.addEventListener('click', async () => {
  const label = copyButton.querySelector('.copy-text');
  const citation = bibtex?.textContent.trim();
  if (!citation) return;

  try {
    await navigator.clipboard.writeText(citation);
    copyButton.classList.add('copied');
    label.textContent = 'Copied!';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(bibtex);
    selection.removeAllRanges();
    selection.addRange(range);
    if (document.execCommand('copy')) {
      selection.removeAllRanges();
      copyButton.classList.add('copied');
      label.textContent = 'Copied!';
    } else {
      label.textContent = 'Select to copy';
      bibtex.focus();
    }
  }

  window.setTimeout(() => {
    copyButton.classList.remove('copied');
    label.textContent = 'Copy';
  }, 2200);
});
