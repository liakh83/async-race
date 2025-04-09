import '@/app/components/pagination/section-pagination.scss';
import { createElement } from '@/app/utils/create-element';
import { createButton } from '@/app/components/button/button';
import {
  getCurrentGarageState,
  getCurrentWinnerPage,
  setCurrentGarageState,
  setCurrentWinnerPage,
} from '@/app/utils/global-state';

export const createPagination = (
  totalPage: number,
  onPageCount: (newPage: number) => void,
  isWinnerPage: boolean = false,
): HTMLElement => {
  let currentPage = isWinnerPage ? getCurrentWinnerPage() : getCurrentGarageState();

  const pageIndicator = createElement('span', {
    className: ['number-page'],
    textContent: `${currentPage} / ${totalPage}`,
  });

  const previousBtn = createButton({
    textContent: 'Prev',
    onclick: () => {
      console.log('privies');
      if (currentPage > 1) {
        const newPage = (currentPage -= 1);
        if (isWinnerPage) {
          setCurrentWinnerPage(newPage);
        } else {
          setCurrentGarageState(newPage);
        }
        updateUI(newPage);
        onPageCount(newPage);
      }
    },
  });

  const nextBtn = createButton({
    textContent: 'Next',
    onclick: () => {
      console.log('next');
      if (totalPage > currentPage) {
        const newPage = (currentPage += 1);
        if (isWinnerPage) {
          setCurrentWinnerPage(newPage);
        } else {
          setCurrentGarageState(newPage);
        }
        updateUI(newPage);
        onPageCount(newPage);
      }
    },
  });

  const updateUI = (newPage: number): void => {
    pageIndicator.textContent = `${newPage} / ${totalPage}`;
    previousBtn.disabled = newPage === 1;
    nextBtn.disabled = newPage === totalPage;
  };
  updateUI(currentPage);

  return createElement('div', {
    className: ['section-pagination'],
    children: [previousBtn, pageIndicator, nextBtn],
  });
};
