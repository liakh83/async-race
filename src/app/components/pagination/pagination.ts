import '@/app/components/pagination/section-pagination.scss';
import { createElement } from '@/app/utils/create-element';
import { createButton } from '@/app/components/button/button';

export const createPagination = (totalPage: number, onPageCount: (newPage: number) => void): HTMLElement => {
  let currantPage = 1;

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
        pageIndicator.textContent = `${currantPage} / ${totalPage}`;
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
        pageIndicator.textContent = `${currantPage} / ${totalPage}`;
        onPageCount(currantPage);
      }
    },
  });

  return createElement('section', {
    className: ['section-pagination'],
    children: [previousBtn, pageIndicator, nextBtn],
  });
};

export const sectionPagination = createPagination(1, (newPage) => {
  console.log('текущая страница ', newPage);
});
