// Classes shared by the feed list and feed entry pages

export const entry =
  'grid flex-col border-t border-blue md:grid-cols-[50%_50%]';

export const info =
  'flex h-fit flex-col gap-xs p-s leading-[normal] md:col-1 md:border-r md:border-r-blue';

export const infoTime = 'paragraph self-start';

export const infoHeading = 'heading-xl w-full';

export const infoImage = 'max-h-[500px] w-full object-cover';

// Markdown content
export const feedBody = [
  'paragraph justify-end p-s md:col-2 md:pt-s',
  '[&_p]:m-0 [&_p]:p-0 [&_p:not(:last-child)>img]:pb-xs',
  '[&>blockquote]:m-0 [&>blockquote]:flex [&>blockquote]:flex-col [&>blockquote]:gap-xs [&>blockquote]:p-xs',
  '[&_img]:max-h-[500px] [&_img]:w-full [&_img]:object-cover',
].join(' ');
