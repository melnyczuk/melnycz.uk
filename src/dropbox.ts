import { Dropbox as DropboxSdk, files } from 'dropbox';

class Dropbox {
  private client = new DropboxSdk({ accessToken: process.env.DBX_TOKEN });

  listDir = async (
    path: string
  ): Promise<
    (
      | files.FileMetadataReference
      | files.FolderMetadataReference
      | files.DeletedMetadataReference
    )[]
  > => {
    const response = await this.client.filesListFolder({
      path,
      recursive: true,
      include_deleted: false,
      include_non_downloadable_files: false,
    });

    return response.result.entries;
  };

  getFileMetadata = async (
    path: string
  ): Promise<files.FileMetadataReference | null> => {
    const entry = await this.client.filesGetMetadata({
      path,
      include_deleted: false,
    });

    const [file = null] = this.filterFiles([entry.result]);

    return file;
  };

  getLink = async (path: string): Promise<string> => {
    const response = await this.client.sharingCreateSharedLinkWithSettings({
      path,
    });

    return response.result.url
      .replaceAll('/www.', '/dl.')
      .replaceAll('?dl=0', '');
  };

  fetch = async (path: string): Promise<string> => {
    const url = await this.getLink(path);
    const resp = await fetch(url);
    return await resp.text();
  };

  filterFiles = (
    entries: (
      | files.FileMetadataReference
      | files.FolderMetadataReference
      | files.DeletedMetadataReference
    )[],
    ext = ''
  ): files.FileMetadataReference[] => {
    return entries.filter(
      (entry): entry is files.FileMetadataReference =>
        entry['.tag'] === 'file' && entry.name.includes(ext)
    );
  };

  static load = (): Dropbox => new Dropbox();
}

export default Dropbox;
