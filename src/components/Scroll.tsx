let isScrolling = false;

export const scrollPage = (id: string): void => {
  if (isScrolling) return;

  const section: HTMLElement | null = document.getElementById(id);
  if (section) {
    isScrolling = true;
    section.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      isScrolling = false;
    }, 400);
  }
};
