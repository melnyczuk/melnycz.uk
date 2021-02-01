import { useEffect, useState } from 'react';

const useTextFile = (url: string): string | undefined => {
  const [markdown, setMarkdown] = useState<string>(undefined);

  useEffect(() => {
    const fetchMarkdownFile = async () => {
      // eslint-disable-next-line no-undef
      const response = await fetch(url);
      setMarkdown(await response.text());
    };
    fetchMarkdownFile();
  }, [url]);

  return markdown;
};

export default useTextFile;
