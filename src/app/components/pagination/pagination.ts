import '@/app/components/pagination/section-pagination.scss';
import { createElement } from '@/app/utils/create-element';
import { createButton } from '@/app/components/button/button';
import { getCurrentGarageState, setCurrentGarageState } from '@/app/utils/global-state';

export const createPagination = (totalPage: number, onPageCount: (newPage: number) => void): HTMLElement => {
  let currentPage = getCurrentGarageState();

  const pageIndicator = createElement('span', {
    className: ['number-page'],
    textContent: `${currentPage} / ${totalPage}`,
  });

  const previousBtn = createButton({
    textContent: 'Prev',
    onclick: () => {
      console.log('privies');
      if (currentPage > 1) {
        currentPage -= 1;
        setCurrentGarageState(currentPage);
        updateUI();
        onPageCount(currentPage);
      }
    },
  });

  const nextBtn = createButton({
    textContent: 'Next',
    onclick: () => {
      console.log('next');
      if (totalPage > currentPage) {
        currentPage += 1;
        setCurrentGarageState(currentPage);
        updateUI();
        onPageCount(currentPage);
      }
    },
  });

  const updateUI = (): void => {
    pageIndicator.textContent = `${currentPage} / ${totalPage}`;
    previousBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPage;
  };
  updateUI();

  return createElement('div', {
    className: ['section-pagination'],
    children: [previousBtn, pageIndicator, nextBtn],
  });
};
