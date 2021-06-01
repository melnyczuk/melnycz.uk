import { useEffect, useState } from 'react';

const useTextFile = (url: string): string | undefined => {
  const [fileContent, setFileContent] = useState<string>(undefined);

  useEffect(() => {
    const fetchFile = async () => {
      // eslint-disable-next-line no-undef
      const response = await fetch(url);
      setFileContent(await response.text());
    };
    fetchFile();
  }, [url]);

  return fileContent;
};

export default useTextFile;
