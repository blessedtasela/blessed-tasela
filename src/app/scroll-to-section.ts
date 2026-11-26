/** Smooth-scroll to a section on the one-page portfolio without a page reload. */
export function scrollToSection(id: string, event?: Event): void {
  event?.preventDefault();
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', '#' + id);
}

export const CV_PATH = 'assets/Blessed-Tasela-CV.pdf';
