import '@/app/components/pagination/section-pagination.scss';
import { createElement } from '@/app/utils/create-element';
import { createButton } from '@/app/components/button/button';

export const createPagination = (
  totalPage: number,
  onPageCount: (newPage: number) => void,
  startPage: number = 1,
): HTMLElement => {
  let currantPage = startPage;

  const pageIndicator = createElement('span', {
    className: ['number-page'],
    textContent: `${currantPage} / ${totalPage}`,
  });

  const previousBtn = createButton({
    textContent: 'Prev',
    onclick: () => {
      console.log('privies');
      if (currantPage > 1) {
        currantPage -= 1;
        updateUI();
        onPageCount(currantPage);
      }
    },
  });

  const nextBtn = createButton({
    textContent: 'Next',
    onclick: () => {
      console.log('next');
      if (totalPage > currantPage) {
        currantPage += 1;
        updateUI();
        onPageCount(currantPage);
      }
    },
  });

  const updateUI = (): void => {
    pageIndicator.textContent = `${currantPage} / ${totalPage}`;
    previousBtn.disabled = currantPage === 1;
    nextBtn.disabled = currantPage === totalPage;
  };
  updateUI();

  return createElement('div', {
    className: ['section-pagination'],
    children: [previousBtn, pageIndicator, nextBtn],
  });
};
