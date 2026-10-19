// Classes shared by the project list and project detail pages

export const blur =
  'blur-[9px] transition-[filter] duration-100 ease-[ease-out]';

export const project =
  'paragraph flex w-full flex-col gap-s border-t border-blue bg-inherit p-s text-inherit md:grid md:grid-cols-[50%_50%] md:gap-0 md:p-0';

export const projectInfo =
  'h-fit w-full bg-grey leading-[normal] md:sticky md:-top-px md:z-1 md:col-1 md:row-1 md:border-r md:border-r-blue md:p-s';

// Needs a grid row: `md:row-2`, or `md:row-[2/3]` when sticky
export const projectText =
  'md:z-0 md:col-1 md:self-end md:border-r md:border-r-blue md:p-s';
